const path = require("path");
const register = require("@marko/compiler/register");
register({ translator: require.resolve("@marko/runtime-tags/translator") });

// Two templates: the first installs source-map-support, the second goes
// through the reassigned recorder.
const first = require(path.join(__dirname, "template.marko"));
const second = require(path.join(__dirname, "other.marko"));
const render = (m, input) => String((m.default || m).render(input));

if (process.env.REGISTER_MODE === "throw") {
  try {
    render(first, {
      name: {
        toString() {
          throw new Error("boom");
        },
      },
    });
  } catch (err) {
    // Reading the stack is what asks source-map-support for the map.
    process.stdout.write(/template\.marko/.test(err.stack) ? "mapped" : "raw");
    process.exit(0);
  }
}

process.stdout.write(render(first, { name: "world" }) + render(second, { n: 2 }));
