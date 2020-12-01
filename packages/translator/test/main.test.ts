import fs from "fs";
import path from "path";
import autotest from "mocha-autotest";
import stripAnsi from "strip-ansi";
import { compileFileSync } from "@marko/compiler";
import * as translator from "../src";

describe("translator", () => {
  autotest("fixtures", {
    html: runTest({ output: "html" }),
    dom: () => {} // runTest({ output: "dom" })
  });
});

function runTest(config: { output: string }) {
  return ({ mode, test, resolve, snapshot }) => {
    const templateFile = resolve("template.marko");
    const compilerConfig = {
      ...config,
      translator,
      babelConfig: {
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
      let output: string;
      try {
        output = compileFileSync(templateFile, compilerConfig).code;
      } catch (err) {
        try {
          snapshot(stripCwd(stripAnsi(err.message)), {
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
        ext: ".js"
      });
    });
  };
}

function stripCwd(message: string) {
  return message.replace(process.cwd() + "/", "");
}
