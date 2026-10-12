import fs from 'node:fs';
import vm from 'node:vm';
const source = fs.readFileSync('node_modules/tech-stack-icons/dist/index.js', 'utf8');
const context = {};
vm.runInNewContext(source.slice(source.indexOf('var f='), source.indexOf(';var h=')), context);
const requested = process.argv.slice(2);
if (!requested.length) console.log(Object.keys(context.f).join(' '));
else {
  fs.mkdirSync('public/logos', { recursive: true });
  for (const name of requested) {
    if (!context.f[name]?.svg.light) throw new Error(`Missing logo: ${name}`);
    fs.writeFileSync(`public/logos/${name}.svg`, context.f[name].svg.light);
  }
  console.log(`Exported ${requested.length} local brand SVGs from tech-stack-icons 3.7.1 (MIT).`);
}
