"""Check the built portfolio with the installed Python Playwright package."""
from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from threading import Thread
import re
from playwright.sync_api import sync_playwright, expect

root = Path(__file__).resolve().parents[1]
out = root / 'tmp' / 'motion'
out.mkdir(parents=True, exist_ok=True)

class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass

server = ThreadingHTTPServer(('127.0.0.1', 0), partial(QuietHandler, directory=str(root / 'dist')))
Thread(target=server.serve_forever, daemon=True).start()
try:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for width, reduced in [(1440, 'no-preference'), (390, 'no-preference'), (390, 'reduce')]:
            page = browser.new_page(viewport={'width': width, 'height': 900}, reduced_motion=reduced, has_touch=width < 500)
            errors = []
            page.on('pageerror', lambda error: errors.append(str(error)))
            page.goto(f'http://127.0.0.1:{server.server_port}', wait_until='domcontentloaded')
            expect(page.locator('.preloader-screen')).to_have_count(0, timeout=15000)
            expect(page.get_by_role('heading', name='Yash Bora', exact=True)).to_be_visible()
            if reduced == 'reduce':
                expect(page.locator('.hero-motion-toggle')).to_be_hidden()
                expect(page.locator('.name-language[lang="hi"]')).to_have_css('opacity', '1')
            else:
                expect(page.locator('.name-language[lang="gu"]')).to_have_css('opacity', '1', timeout=10000)
                page.get_by_role('button', name='Pause hero animation').click()
                before = page.locator('.tech-wave textPath').get_attribute('startOffset')
                page.wait_for_timeout(350)
                assert page.locator('.tech-wave textPath').get_attribute('startOffset') == before
                expect(page.get_by_role('button', name='Resume hero animation')).to_have_attribute('aria-pressed', 'true')
                if width > 500:
                    page.locator('.name-letter').first.hover()
                    expect(page.locator('.letter-orbit').first).to_have_css('opacity', '1')
                page.screenshot(path=str(out / f'hero-{width}.png'))
                page.get_by_role('button', name='Resume hero animation').click()
            page.locator('.section-nav a[href="#skills"]').click()
            expect(page.locator('.skill-tile')).to_have_count(36)
            for logo in page.locator('.skill-tile img').all():
                logo.scroll_into_view_if_needed()
                expect(logo).to_be_visible()
                page.wait_for_function('(src) => [...document.images].some(img => img.src === src && img.complete && img.naturalWidth > 0)', arg=logo.get_attribute('src') and logo.evaluate('img => img.src'))
            page.locator('#skills').scroll_into_view_if_needed()
            page.screenshot(path=str(out / f'skills-{width}-{reduced}.png'))
            expect(page.locator('.experience-timeline > .experience-card')).to_have_count(3)
            if width == 1440:
                tool = page.locator('.skill-tile').first
                tool.hover()
                expect(tool).to_have_class(re.compile('is-hovered'))
                expect(page.locator('#custom-cursor')).to_have_class(re.compile('tool-hovered'))
                page.mouse.move(0, 0)
                expect(page.locator('#custom-cursor')).not_to_have_class(re.compile('tool-hovered'))
            if reduced == 'reduce':
                assert page.locator('.skill-tile').first.evaluate("el => getComputedStyle(el).transform") == 'none'
            page.get_by_role('button', name='FastAPI: filter experience').click()
            expect(page.locator('.experience-card.is-matched')).to_have_count(2)
            expect(page.locator('.experience-card.is-dimmed')).to_have_count(1)
            expect(page.get_by_role('button', name='FastAPI: clear experience filter')).to_have_attribute('aria-pressed', 'true')
            page.get_by_role('button', name='Docker: filter experience').click()
            expect(page.locator('.experience-card.is-matched')).to_have_count(1)
            page.get_by_role('button', name='Clear filter').click()
            expect(page.locator('.experience-card.is-dimmed')).to_have_count(0)
            page.locator('.experience-card').first.scroll_into_view_if_needed()
            if width == 1440:
                page.locator('.experience-card').first.hover()
                expect(page.get_by_role('button', name='Python: filter experience')).to_have_class(re.compile('is-related'))
                page.mouse.move(0, 0)
            page.locator('.experience-card').first.get_by_role('button', name='View details').click()
            expect(page.locator('.experience-card').first.get_by_role('button', name='Hide details')).to_have_attribute('aria-expanded', 'true')
            page.screenshot(path=str(out / f'experience-{width}-{reduced}.png'))
            for logo in page.locator('.company-logo-wrap img').all():
                logo.scroll_into_view_if_needed()
                page.wait_for_function('(src) => [...document.images].some(img => img.src === src && img.complete && img.naturalWidth > 0)', arg=logo.evaluate('img => img.src'))
            page.locator('.section-nav a[href="#projects"]').click()
            expect(page.locator('.section-nav a[href="#projects"]')).to_have_attribute('aria-current', 'location')
            expect(page.locator('.project-card')).to_have_count(7)
            expect(page.locator('.project-screenshot')).to_have_count(3)
            expect(page.locator('.project-card').filter(has_text='E-commerce Analytics Agent').get_by_role('link', name='Live Demo', exact=True)).to_have_attribute('href', 'https://ecommerce-analytics-agent-system.onrender.com/')
            expect(page.locator('.project-card').first.get_by_role('link', name='Live Demo', exact=True)).to_have_attribute('href', 'https://muitimodal-agent.onrender.com/')
            expect(page.locator('.project-heading').first).to_have_css('opacity', '1')
            if reduced == 'reduce':
                expect(page.locator('.project-card').first).not_to_have_class(re.compile('slide-complete'))
            else:
                expect(page.locator('.project-card').first).to_have_class(re.compile('slide-complete'), timeout=6000)
            assert page.locator('.project-content').first.evaluate("el => getComputedStyle(el).justifyContent") == 'flex-start'
            assert page.locator('.project-content').first.evaluate("el => parseFloat(getComputedStyle(el).gap)") <= 24
            page.screenshot(path=str(out / f'projects-{width}-{reduced}.png'))
            signal = page.locator('.workflow > div').first
            signal.scroll_into_view_if_needed()
            if reduced == 'reduce':
                assert signal.evaluate("el => getComputedStyle(el, '::before').animationName") == 'none'
            else:
                expect(page.locator('.project-card').filter(has_text='Voice-Enabled SQL Analytics Agent')).to_have_class(re.compile('is-visible'))
                assert signal.evaluate("el => getComputedStyle(el, '::before').animationPlayState") == 'running'
            card = page.locator('.project-card').filter(has_text='E-commerce Analytics Agent')
            card.scroll_into_view_if_needed()
            if reduced != 'reduce':
                expect(card).to_have_class(re.compile('slide-complete'), timeout=6000)
            card.locator('.project-browser').focus()
            expect(card.locator('.project-browser')).to_be_focused()
            expect(card.locator('.project-heading')).to_have_css('opacity', '1')
            expect(card.locator('.project-badges')).to_have_css('opacity', '1')
            expect(card.locator('.project-description')).to_have_css('opacity', '1')
            assert card.locator('.project-screenshot').evaluate('img => img.complete && img.naturalWidth > 0')
            card.screenshot(path=str(out / f'preview-{width}-{reduced}.png'))
            assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), 'Horizontal overflow'
            assert not errors, errors
            page.close()
        browser.close()
finally:
    server.shutdown()
print('PASS: multilingual hero, pause/resume, hover, desktop, mobile, navigation, keyboard previews, reduced motion, and runtime errors')
