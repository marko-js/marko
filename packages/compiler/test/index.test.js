import fs from "fs";
import path from "path";
import autotest from "mocha-autotest";
import stripAnsi from "strip-ansi";
import escapeRegExp from "escape-string-regexp";
import { compileFileSync } from "../src";

const cwdRegExp = new RegExp(escapeRegExp(process.cwd() + "/"), "g");

fs.readdirSync(path.join(__dirname, "../../"))
  .map(dir => /^translator-(.*)|/.exec(dir)[1])
  .filter(Boolean)
  .forEach(translator => {
    autotest(path.normalize(`../../translator-${translator}/test/fixtures`), {
      cjs: runTest({ output: "html", modules: "cjs" }),
      html: runTest({ output: "html" }),
      htmlProduction: runTest({
        output: "html",
        optimize: true
      }),
      vdom: runTest({ output: "dom" }),
      vdomProduction: runTest({
        output: "dom",
        optimize: true
      }),
      generated: runTest({ output: "migrate" }),
      hydrate: runTest({
        output: "hydrate",
        resolveVirtualDependency(from, { virtualPath }) {
          return virtualPath;
        }
      })
    });

    function runTest(config) {
      return ({ mode, test, resolve, snapshot }) => {
        const testConfigFile = resolve("test.js");
        const testConfig = fs.existsSync(testConfigFile)
          ? require(testConfigFile)
          : {};
        const templateFile = resolve(
          testConfig.templateFile || "template.marko"
        );

        const compilerConfig = {
          ...config,
          babelConfig: {
            ...config.babelConfig,
            babelrc: false,
            configFile: false
          },
          writeVersionComment: false
        };

        const snapshotsDir = resolve("snapshots");
        const name = `snapshots${path.sep + mode}`;

        if (!fs.existsSync(snapshotsDir)) {
          fs.mkdirSync(snapshotsDir);
        }

        test(() => {
          let output;
          try {
            output = compileFileSync(templateFile, compilerConfig).code;
          } catch (err) {
            try {
              snapshot(stripCwd(stripModuleStackTrace(stripAnsi(err.stack))), {
                name: `${name}-error`,
                ext: ".txt"
              });
              return;
            } catch {
              throw err;
            }
          }

          snapshot(output, {
            name,
            ext: mode === "generated" ? ".marko" : ".js"
          });
        });
      };
    }
  });

function stripCwd(message) {
  return message.replace(cwdRegExp, "");
}

function stripModuleStackTrace(message) {
  return message.replace(/\r?\n +at (?!packages[/\\])[^\n]+$/gm, "");
}
