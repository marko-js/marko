import fs from "fs";
import path from "path";
import { Writable } from "stream";
import autotest from "mocha-autotest";
import stripAnsi from "strip-ansi";
import { compileFile } from "@marko/compiler";
import { install } from "marko/node-require";
import * as translator from "../src";

const baseConfig = {
  translator,
  babelConfig: {
    babelrc: false,
    configFile: false
  },
  writeVersionComment: false
};

install({
  compilerOptions: {
    output: "html",
    ...baseConfig,
    babelConfig: {
      ...baseConfig.babelConfig,
      sourceMaps: "inline"
    }
  }
});

describe("translator", () => {
  autotest("fixtures", {
    "html-compiled": runCompileTest({ output: "html" }),
    "html-rendered": runHTMLRenderTest,
    "dom-compiled": () => {},
    "dom-rendered": () => {}
  });
});

function runCompileTest(config: { output: string }) {
  return ({ mode, test, resolve, snapshot }) => {
    const templateFile = resolve("template.marko");
    const compilerConfig = {
      ...config,
      ...baseConfig
    };

    const snapshotsDir = resolve("snapshots");
    const name = `snapshots${path.sep + mode}`;

    test(async () => {
      let output: string;
      await ensureDir(snapshotsDir);

      try {
        output = (await compileFile(templateFile, compilerConfig)).code;
      } catch (err) {
        snapshot(stripCwd(stripAnsi(err.message)), {
          name: `${name}-error`,
          ext: ".txt"
        });
        return;
      }

      snapshot(output, {
        name: name,
        ext: ".js"
      });
    });
  };
}

function runHTMLRenderTest({ mode, test, resolve, snapshot }) {
  const templateFile = resolve("template.marko");
  const inputFile = resolve("input.ts");
  const snapshotsDir = resolve("snapshots");
  const name = `snapshots${path.sep + mode}`;

  test(async () => {
    await ensureDir(snapshotsDir);

    const { render } = await import(templateFile);
    let input: Record<string, unknown>;
    let html = "";

    try {
      input = await import(inputFile);
    } catch {
      input = {};
    }

    try {
      await render(
        input,
        new Writable({
          write(chunk: string) {
            html += chunk;
          }
        })
      );
    } catch (err) {
      snapshot(stripCwd(err.message), {
        name: `${name}-error`,
        ext: ".txt"
      });
      return;
    }

    snapshot(html, {
      name: name,
      ext: ".html"
    });
  });
}

async function ensureDir(dir: string) {
  try {
    await fs.promises.access(dir);
  } catch {
    await fs.promises.mkdir(dir);
  }
}

function stripCwd(message: string) {
  return message.replace(process.cwd() + "/", "");
}
