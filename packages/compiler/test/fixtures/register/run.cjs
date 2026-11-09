const path = require("path");
const register = require("@marko/compiler/register");
register({ translator: require.resolve("@marko/runtime-tags/translator") });

// Two templates, so the hook handles more than its first require.
const first = require(path.join(__dirname, "template.marko"));
const second = require(path.join(__dirname, "other.marko"));
const render = (m, input) => String((m.default || m).render(input));

if (process.env.REGISTER_MODE === "throw") {
  try {
    render(require(path.join(__dirname, "throw.marko")));
  } catch (err) {
    // `boom()` sits at 4:8 in the template; the compiled code puts it elsewhere.
    process.stdout.write(/throw\.marko:4:8\b/.test(err.stack) ? "mapped" : "raw");
    process.exit(0);
  }
}

process.stdout.write(render(first, { name: "world" }) + render(second, { n: 2 }));
