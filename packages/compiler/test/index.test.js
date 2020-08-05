import fs from "fs";
import path from "path";
import autotest from "mocha-autotest";
import stripAnsi from "strip-ansi";
import { compileFileSync } from "../src";

fs.readdirSync(path.join(__dirname, "../../"))
  .map(dir => /^translator-(.*)|/.exec(dir)[1])
  .filter(Boolean)
  .forEach(translator => {
    autotest(path.normalize(`../../translator-${translator}/test/fixtures`), {
      html: runTest({ output: "html" }),
      htmlProduction: runTest({
        output: "html",
        babelConfig: { envName: "production" }
      }),
      vdom: runTest({ output: "dom" }),
      vdomProduction: runTest({
        output: "dom",
        babelConfig: { envName: "production" }
      }),
      generated: runTest({ _parseOnly: true })
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
            configFile: false,
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-private-methods"
            ]
          },
          writeVersionComment: false
        };

        test(() => {
          let output;
          try {
            output = compileFileSync(templateFile, compilerConfig).code;
          } catch (err) {
            try {
              snapshot(stripCwd(stripAnsi(err.message)), {
                name: `${mode}-error`,
                ext: ".txt"
              });
              return;
            } catch {
              throw err;
            }
          }

          snapshot(output, {
            name: mode,
            ext: mode === "generated" ? ".marko" : ".js"
          });
        });
      };
    }
  });

function stripCwd(message) {
  return message.replace(process.cwd() + "/", "");
}
