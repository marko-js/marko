import fs from "fs";
import path from "path";
import Module from "module";
import { Writable } from "stream";
import autotest, { TestRunnerOpts } from "mocha-autotest";
import stripAnsi from "strip-ansi";
import * as compiler from "@marko/compiler";
import snapshot from "./utils/snapshot";
import renderAndTrackMutations from "./utils/render-and-track-mutations";

type TestConfigFile = {
  inputDOM?: Parameters<typeof renderAndTrackMutations>[1];
  inputHTML?: unknown;
};

const baseConfig: compiler.Config = {
  translator: require.resolve("../src"),
  babelConfig: {
    babelrc: false,
    configFile: false
  },
  writeVersionComment: false
};

const htmlConfig: compiler.Config = { ...baseConfig, output: "html" };
const domConfig: compiler.Config = { ...baseConfig, output: "dom" };
const hookConfig: compiler.Config = {
  ...baseConfig,
  modules: "cjs",
  babelConfig: { ...baseConfig.babelConfig, sourceMaps: "inline" }
};

require.extensions[".marko"] = (mod, filename) => {
  // Detect if we are in a `jsdom-context-require` or not.
  let rootModule = mod;
  while (rootModule.parent) rootModule = rootModule.parent;
  hookConfig.output = rootModule.constructor === Module ? "html" : "dom";
  return (mod as typeof mod & {
    _compile(filename: string, code: string): unknown;
  })._compile(compiler.compileFileSync(filename, hookConfig).code, filename);
};

describe("translator", () => {
  autotest("fixtures", {
    htmlCompiled: runCompileTest(htmlConfig),
    htmlRendered: runHTMLRenderTest,
    domCompiled: runCompileTest(domConfig),
    domRendered: runDOMRenderTest
  });
});

function runCompileTest(config: compiler.Config) {
  return ({
    mode,
    test,
    resolve,
    snapshot
  }: TestRunnerOpts & { main: TestConfigFile }) => {
    const templateFile = resolve("template.marko");
    const snapshotsDir = resolve("snapshots");
    const name = `snapshots${path.sep + mode}`;

    test(async () => {
      let output: string;
      await ensureDir(snapshotsDir);

      try {
        output = (await compiler.compileFile(templateFile, config)).code;
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

function runHTMLRenderTest({
  main = {},
  mode,
  test,
  resolve,
  snapshot
}: TestRunnerOpts & { main: TestConfigFile }) {
  const templateFile = resolve("template.marko");
  const snapshotsDir = resolve("snapshots");
  const name = `snapshots${path.sep + mode}`;

  test(async () => {
    await ensureDir(snapshotsDir);
    const { render } = await import(templateFile);
    let html = "";

    try {
      await render(
        main.inputHTML || {},
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

function runDOMRenderTest({
  main = {},
  mode,
  test,
  resolve
}: TestRunnerOpts & { main: TestConfigFile }) {
  const templateFile = resolve("template.marko");
  const snapshotsDir = resolve("snapshots");

  test(async () => {
    await ensureDir(snapshotsDir);

    snapshot(
      snapshotsDir,
      `${mode}.md`,
      await renderAndTrackMutations(templateFile, main.inputDOM)
    );
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
  return message.replace(process.cwd() + path.sep, "");
}
