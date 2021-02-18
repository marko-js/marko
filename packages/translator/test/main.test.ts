import fs from "fs";
import path from "path";
import { Writable } from "stream";
import autotest from "mocha-autotest";
import stripAnsi from "strip-ansi";
import { compileFile } from "@marko/compiler";
import { install } from "marko/node-require";
import * as translator from "../src";
import snapshot from "./utils/snapshot";
import renderAndTrackMutations from "./utils/render-and-track-mutations";

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
    "html-compiled": runTestWithConfig(runCompileTest({ output: "html" })),
    "html-rendered": runTestWithConfig(runHTMLRenderTest),
    "dom-compiled": runTestWithConfig(runCompileTest({ output: "dom" })),
    "dom-rendered": runTestWithConfig(runDOMRenderTest)
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
        // .replace(/"\.\//g, '"../')
      } catch (compileSnapshotErr) {
        try {
          snapshot(stripCwd(stripAnsi(compileSnapshotErr.message)), {
            name: `${name}-error`,
            ext: ".txt"
          });

          return;
        } catch (errorSnapshotErr) {
          if (errorSnapshotErr.message.startsWith("SnapshotError")) {
            throw compileSnapshotErr;
          }

          throw errorSnapshotErr;
        }
      }

      snapshot(output, {
        name,
        ext: ".js"
      });
    });
  };
}

function runHTMLRenderTest({ mode, test, resolve, snapshot }, { inputHTML }) {
  // const templateFile = resolve("./snapshots/html-compiled-expected.js");
  const templateFile = resolve("template.marko");
  const snapshotsDir = resolve("snapshots");
  const name = `snapshots${path.sep + mode}`;

  test(async () => {
    await ensureDir(snapshotsDir);

    const { render } = await import(templateFile);
    let html = "";

    try {
      await render(
        inputHTML || {},
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
      name,
      ext: ".html"
    });
  });
}

function runDOMRenderTest({ mode, test, resolve }, { inputDOM }) {
  const templateFile = resolve("snapshots/dom-compiled-expected.js");
  const snapshotsDir = resolve("snapshots");

  test(async () => {
    await ensureDir(snapshotsDir);

    snapshot(
      snapshotsDir,
      `${mode}.md`,
      await renderAndTrackMutations(templateFile, inputDOM)
    );
  });
}

function runTestWithConfig(fn) {
  return opts => {
    let config;
    try {
      config = require(opts.resolve("config.ts"));
    } catch {
      config = {};
    }

    if (config.skip && config.skip.includes(opts.mode)) {
      opts.skip("Not Implemented");
      return;
    }

    return fn(opts, config);
  };
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
