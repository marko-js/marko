"use strict";

const fs = require("fs");
const path = require("path");

const { compileFileSync } = require("@marko/compiler");
const autotest = require("mocha-autotest").default;

const ansiReg =
  // eslint-disable-next-line no-control-regex
  /([\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><])/g;
const regexpCharsReg = /[\\^$.*+?()[\]{}|]/g;
const cwdRegExp = new RegExp(
  process.cwd().replace(regexpCharsReg, "\\$&") + "/",
  "g",
);

describe("runtime-class/translator", () => {
  const dev = createModes({});
  const production = createModes({ optimize: true });
  autotest("fixtures", {
    cjs: createModes({ modules: "cjs" })("html"),
    html: dev("html"),
    htmlProduction: production("html"),
    vdom: dev("dom"),
    vdomProduction: production("dom"),
    generated: dev("migrate"),
    hydrate: createModes({
      resolveVirtualDependency(from, { virtualPath }) {
        return virtualPath;
      },
    })("hydrate"),
  });
});

// The modes made from one config differ only in `output`, as a bundler
// plugin's do, so they share a compile cache per fixture.
function createModes(config) {
  const caches = new Map();
  return (output) => runTest({ ...config, output }, caches);
}

function runTest(config, caches) {
  return ({ mode, test, resolve, snapshot }) => {
    const fixtureDir = resolve(".");
    let cache = caches.get(fixtureDir);
    if (!cache) caches.set(fixtureDir, (cache = new Map()));
    const relativeFixtureDir = path.relative(process.cwd(), fixtureDir);
    const testConfigFile = resolve("test.js");
    const testConfig = fs.existsSync(testConfigFile)
      ? require(testConfigFile)
      : {};
    const templateFile = resolve(testConfig.templateFile || "template.marko");

    const compilerConfig = {
      ...config,
      cache,
      babelConfig: {
        ...config.babelConfig,
        babelrc: false,
        configFile: false,
      },
      writeVersionComment: false,
    };

    const snapshotsDir = resolve("snapshots");
    const name = `snapshots${path.sep + mode}`;
    const stripFixtureDir = (str) =>
      str.replaceAll(relativeFixtureDir, "__tests__");

    if (!fs.existsSync(snapshotsDir)) {
      fs.mkdirSync(snapshotsDir);
    }

    test(() => {
      let output;
      let diags;
      try {
        const result = compileFileSync(templateFile, compilerConfig);
        output = stripFixtureDir(result.code);
        diags = result.meta.diagnostics;
      } catch (err) {
        try {
          snapshot(
            stripFixtureDir(
              stripCwd(
                stripModuleStackTrace(String(err.stack).replace(ansiReg, "")),
              ),
            ),
            {
              name: `${name}-error`,
              ext: ".txt",
            },
          );
          return;
        } catch {
          throw err;
        }
      }

      snapshot(output, {
        name,
        ext: mode === "generated" ? ".marko" : ".js",
      });

      if (mode === "generated") {
        snapshot(output, {
          name,
          ext: ".marko",
        });

        if (diags && diags.length) {
          snapshot(stripFixtureDir(printDiags(diags)), {
            name,
            ext: ".diagnostics.txt",
          });
        }
      } else {
        snapshot(output, {
          name,
          ext: ".js",
        });
      }
    });
  };
}

function stripCwd(message) {
  return message.replace(cwdRegExp, "");
}

function stripModuleStackTrace(message) {
  return message.replace(/\r?\n +at (?!packages[/\\])[^\n]+$/gm, "");
}

function printDiags(diags) {
  let result = "";

  for (const diag of diags) {
    result += `${diag.type}${diag.fix ? `[fixable]` : ""}${printLoc(
      diag.loc,
    )}: ${diag.label}\n`;
  }

  return result;
}

function printLoc(loc) {
  if (loc) {
    return `(${loc.start.line}:${loc.start.column + 1}-${loc.end.line}:${
      loc.end.column + 1
    })`;
  }

  return "";
}
