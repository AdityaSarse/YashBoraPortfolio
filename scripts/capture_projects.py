"""Capture public demo interfaces for review before publishing screenshots."""
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

OUT = Path(__file__).resolve().parents[1] / 'tmp' / 'project-captures'
URLS = {
    'multimodal': 'https://muitimodal-agent.onrender.com/',
    'ecommerce': 'https://ecommerce-analytics-agent-system.onrender.com/',
    'sports': 'https://huggingface.co/spaces/yashbora12/sports-rag',
    'plant': 'https://plant-disease-detection-11ax.onrender.com/',
    'churn': 'https://predict-employee-retentionst.onrender.com/',
}

async def main():
    OUT.mkdir(parents=True, exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        async def capture(name, url):
            page = await browser.new_page(viewport={'width': 1440, 'height': 1000}, device_scale_factor=1)
            try:
                await page.goto(url, wait_until='domcontentloaded', timeout=60000)
                await page.wait_for_timeout(12000)
                if name in ('ecommerce', 'plant', 'churn'):
                    try:
                        await page.wait_for_function("!document.body.innerText.includes('SERVICE WAKING UP') && !document.body.innerText.includes('INCOMING HTTP REQUEST')", timeout=110000)
                        await page.wait_for_timeout(5000)
                    except Exception:
                        print(name, 'still waking up', flush=True)
                await page.screenshot(path=str(OUT / f'{name}.png'))
                text = await page.locator('body').inner_text()
                (OUT / f'{name}.txt').write_text(text, encoding='utf-8')
                print(name, page.url, text[:2400].encode('ascii', 'backslashreplace').decode(), flush=True)
            except Exception as error:
                print(name, str(error), flush=True)
            finally:
                await page.close()
        await asyncio.gather(*(capture(name, url) for name, url in URLS.items()))
        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
