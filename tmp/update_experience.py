from pathlib import Path
import re
p = Path('src/components/Experience.jsx')
s = p.read_text(encoding='utf-8')
s = s[:s.index('//')] + s[s.index('const experiences'):]
s = s.replace('import React, {', 'import {')
s = s.replace("import gsap from 'gsap';", "import gsap from 'gsap';\nimport TechLogo from './TechLogo';")
for component, file, name in [('ParallelMindsLogo','parallelminds.png','Parallel Minds'),('EduPlusNowLogo','eduplus.png','Edu Plus Now'),('EdunetLogo','edunet.svg','Edunet Foundation')]:
    s = s.replace(f'<{component} />', f'<img src="/logos/{file}" alt="{name}" />')
s = re.sub(r',\s*icon: <\w+ />', '', s)
s = s.replace('{tech.icon}', '<TechLogo name={tech.name} />')
s = s.replace('w-[96px] h-[96px] rounded-full bg-[#F7F8FA] border border-[#EBEBEB] flex items-center justify-center mb-7 mx-auto', 'company-logo-wrap')
s = s.replace('leading-relaxed whitespace-nowrap', 'leading-relaxed')
p.write_text(s, encoding='utf-8')
