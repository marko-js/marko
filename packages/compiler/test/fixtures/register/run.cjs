const fs = require("fs");
const os = require("os");
const path = require("path");
const register = require("@marko/compiler/register");
register({ translator: require.resolve("@marko/runtime-tags/translator") });

// Two templates, so the hook handles more than its first require.
const first = require(path.join(__dirname, "template.marko"));
const second = require(path.join(__dirname, "other.marko"));
const render = (m, input) => String((m.default || m).render(input));

if (process.env.REGISTER_MODE === "rerun") {
  // Each run purges the modules and requires them again in a tick of its own;
  // a root transform notes each template analyzed.
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "marko-register-"));
  const modules = path.join(__dirname, "../../../../../node_modules");
  fs.symlinkSync(modules, path.join(dir, "node_modules"));
  const tick = () => {
    for (const now = Date.now(); Date.now() === now;);
  };
  const write = (files) => {
    // After every read so far, stamped with the clock, as file times may lag
    // it, which then moves on so a later read is after the change.
    tick();
    const now = new Date(Date.now());
    for (const rel in files) {
      const file = path.join(dir, rel);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, files[rel]);
      fs.utimesSync(file, now, now);
      fs.utimesSync(path.dirname(file), now, now);
    }
    tick();
  };
  const load = (rel) => render(require(path.join(dir, rel)));
  globalThis.analyzed = [];
  const run = (label, fn) => {
    for (const id in require.cache) {
      if (id.startsWith(dir)) delete require.cache[id];
    }
    globalThis.analyzed.length = 0;
    const html = fn();
    out.push(`${label}: ${globalThis.analyzed.sort()} ${html}`);
  };
  const out = [];
  write({
    // A package of its own, so nothing above the directory is read.
    "package.json": '{ "name": "app" }',
    "marko.json": '{ "transform": "./note.js" }',
    "note.js":
      "module.exports = { Program(program) { globalThis.analyzed.push(require('path').basename(program.hub.file.opts.filename)); } };",
    "a.marko": "<aside>a</aside>\n",
    "p.marko": "<tag-c/>\n",
    "tags/tag-c.marko": "<div>c</div>\n",
  });
  run("first", () => load("a.marko") + load("p.marko"));
  setImmediate(() => {
    run("same", () => load("a.marko") + load("p.marko"));
    setImmediate(() => {
      write({ "tags/tag-c.marko": "<div>c2</div>\n" });
      run("child", () => load("a.marko") + load("p.marko"));
      setImmediate(() => {
        // A tag added, and a template never compiled required first.
        write({
          "tags/aside.marko": "<span>custom</span>\n",
          "c.marko": "<aside>c</aside>\n",
        });
        run("tag", () => load("c.marko") + load("a.marko"));
        fs.rmSync(dir, { recursive: true });
        process.stdout.write(out.join("\n"));
      });
    });
  });
} else if (process.env.REGISTER_MODE === "throw") {
  try {
    render(require(path.join(__dirname, "throw.marko")));
  } catch (err) {
    // `boom()` sits at 4:8 in the template; the compiled code puts it elsewhere.
    process.stdout.write(/throw\.marko:4:8\b/.test(err.stack) ? "mapped" : "raw");
    process.exit(0);
  }
} else {
  process.stdout.write(render(first, { name: "world" }) + render(second, { n: 2 }));
}
