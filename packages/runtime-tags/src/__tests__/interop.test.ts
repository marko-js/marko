import * as compiler from "@marko/compiler";
import register from "@marko/compiler/register";
import fs from "fs";
import type { DOMWindow } from "jsdom";
import snap from "mocha-snap";
import path from "path";
import glob from "tiny-glob";

import type { Input, Template } from "../common/types";
import createBrowser from "./utils/create-browser";
import { isWait } from "./utils/resolve";
import { stripInlineRuntime } from "./utils/strip-inline-runtime";
import createMutationTracker from "./utils/track-mutations";

const baseConfig: compiler.Config = {
  translator: require.resolve("marko/translator"),
  babelConfig: {
    babelrc: false,
    configFile: false,
  },
  writeVersionComment: false,
};

const htmlConfig: compiler.Config = { ...baseConfig, output: "html" };
const domConfig: compiler.Config = { ...baseConfig, output: "dom" };

type TestConfig = {
  steps?: unknown[] | (() => Promise<unknown[]>);
  skip_dom?: boolean;
  skip_html?: boolean;
  skip_csr?: boolean;
  skip_ssr?: boolean;
  skip_resume?: boolean;
  manual_csr?: boolean;
  manual_ssr?: boolean;
  manual_resume?: boolean;
  error_compiler?: true | string[];
  error_runtime?: boolean;
};

describe("translator-interop", () => {
  before(() => {
    register({ ...htmlConfig, modules: "cjs" });
  });

  after(() => {
    // Remove compat layer from v5/6 runtimes.
    delete require("marko/src/runtime/helpers/dynamic-tag").___runtimeCompat;
    require("@marko/runtime-tags/html").compat.patchDynamicTag(
      (tag: any) => tag,
    );
  });

  const fixturesDir = path.join(__dirname, "fixtures-interop");
  for (const entry of fs.readdirSync(fixturesDir)) {
    if (entry.endsWith(".skip")) continue;

    describe(entry, () => {
      const resolve = (file: string) => path.join(fixturesDir, entry, file);
      const fixtureDir = resolve(".");
      const relativeFixtureDir = path.relative(process.cwd(), fixtureDir);
      const templateFile = resolve("template.marko");

      const config: TestConfig = (() => {
        try {
          return require(resolve("test.ts"));
        } catch {
          return {};
        }
      })();
      const stripFixtureDir = async (str: string | Promise<string>) =>
        (await str).replaceAll(relativeFixtureDir, "__tests__");
      const snapMD = (fn: () => Promise<string>) =>
        (config.error_runtime ? snap.catch : snap)(
          () => stripFixtureDir(fn()),
          {
            ext: `.md`,
            dir: fixtureDir,
          },
        );
      const snapAllTemplates = async (compilerConfig: compiler.Config) => {
        const additionalMarkoFiles = await glob(resolve("**/*.marko"), {
          absolute: true,
          cwd: fixtureDir,
        });
        const finalConfig: compiler.Config = {
          ...compilerConfig,
          resolveVirtualDependency(_filename, { code, virtualPath }) {
            return `virtual:${virtualPath} ${code}`;
          },
        };
        const errors: Error[] = [];

        for (const file of additionalMarkoFiles) {
          const name = path.relative(fixtureDir, file);
          let snapName = name;
          let targetSnap: typeof snap.catch = snap;
          if (
            config.error_compiler === true ||
            config.error_compiler?.includes(snapName)
          ) {
            snapName = snapName.replace(".marko", ".error.txt");
            targetSnap = snap.catch;
          } else {
            snapName = snapName.replace(".marko", ".js");
          }
          await targetSnap(
            () => stripFixtureDir(compileCode(file, finalConfig)),
            {
              file: snapName,
              dir: fixtureDir,
            },
          );

          if (
            compilerConfig.output === "dom" &&
            file === templateFile &&
            !config.skip_resume &&
            !config.error_compiler
          ) {
            await targetSnap(
              () =>
                stripFixtureDir(
                  compileCode(file, {
                    ...finalConfig,
                    output: "hydrate",
                  }),
                ),
              {
                file: name.replace(".marko", ".hydrate.js"),
                dir: fixtureDir,
              },
            );
          }
        }

        if (errors.length === 1) {
          throw errors[0];
        } else if (errors.length > 1) {
          throw new AggregateError(
            errors,
            "\n" + errors.map((e) => e.toString()).join("\n"),
          );
        }
      };

      let ssr = () => {
        const cached = (async () => {
          const serverTemplate = require(templateFile).default as Template;

          let buffer = "";
          // let flushCount = 0;

          const browser = createBrowser({
            dir: __dirname,
            extensions: register({
              ...domConfig,
              extensions: {},
            }),
          });
          const document = browser.window.document;
          const [input] = (
            typeof config.steps === "function"
              ? await config.steps()
              : config.steps || []
          ) as [Input];

          document.open();

          const tracker = createMutationTracker(browser, document);

          for await (const chunk of serverTemplate.render(input)) {
            buffer += chunk;
            tracker.log(`# Write\n${indent(stripInlineRuntime(chunk))}`);
          }
          document.write(`<html><body>${buffer}</body></html>`);
          document.close();
          tracker.logUpdate("End");
          tracker.cleanup();

          return { browser, tracker };
        })();
        ssr = () => cached;
        return cached;
      };

      let csr = () => {
        const cached = (async () => {
          const browser = createBrowser({
            dir: __dirname,
            extensions: register({
              ...domConfig,
              extensions: {},
            }),
          });

          const { window } = browser;
          const { document } = window;
          const throwErrors = trackErrors(window);

          const [input = {}, ...steps] = (
            typeof config.steps === "function"
              ? await config.steps()
              : config.steps || []
          ) as [Input, ...unknown[]];
          const template = browser.require<{ default: Template }>(
            templateFile,
          ).default;
          const container = Object.assign(document.createElement("div"), {
            TEST_ROOT: true,
          });
          const tracker = createMutationTracker(browser, container);

          document.body.appendChild(container);

          const instance = template.mount(input, container, "beforeend");

          const { run } = browser.require<
            typeof import("@marko/runtime-tags/dom")
          >("@marko/runtime-tags/dom");
          const { ___componentLookup } = browser.require(
            "marko/src/node_modules/@internal/components-util",
          );

          function runUpdates() {
            run();
            Object.values(___componentLookup).forEach((c: any) => c.update());
          }

          throwErrors();
          tracker.logUpdate(input);

          for (const update of steps) {
            if (isWait(update)) {
              await update();
            } else if (typeof update === "function") {
              await update(document.documentElement);
              runUpdates();
              tracker.logUpdate(update);
            } else {
              instance.update(update);
              tracker.logUpdate(update);
            }

            throwErrors();
          }

          tracker.cleanup();

          return { browser, tracker };
        })();
        csr = () => cached;
        return cached;
      };

      let resume = () => {
        const cached = (async () => {
          const { browser } = await ssr();
          const { window } = browser;
          const { document } = window;
          const throwErrors = trackErrors(window);
          const tracker = createMutationTracker(browser, document);
          const [input, ...steps] =
            typeof config.steps === "function"
              ? await config.steps()
              : config.steps || [];

          const { run, init } = browser.require<
            typeof import("@marko/runtime-tags/dom")
          >("@marko/runtime-tags/dom");

          browser.require(templateFile);
          browser.require("marko/src/runtime/components");
          init();
          browser.window.$initComponents();
          throwErrors();
          tracker.logUpdate(input);

          const { ___componentLookup } = browser.require(
            "marko/src/node_modules/@internal/components-util",
          );

          function runUpdates() {
            run();
            Object.values(___componentLookup).forEach((c: any) => c.update());
          }

          for (const update of steps) {
            if (isWait(update)) {
              await update();
            } else if (typeof update === "function") {
              await update(document.documentElement);
              runUpdates();
              tracker.logUpdate(update);
            } else {
              // if new input is detected, stop testing
              // this will be covered by the client tests
              break;
            }

            throwErrors();
          }

          tracker.cleanup();

          return { browser, tracker };
        })();

        resume = () => cached;
        return cached;
      };

      describe("compile", () => {
        it("html", () => snapAllTemplates(htmlConfig));
        it("dom", () => snapAllTemplates(domConfig));
      });

      describe("render", () => {
        (config.skip_ssr ? it.skip : it)("ssr", async () => {
          await snapMD(async () => (await ssr()).tracker.getLogs());
        });

        (config.skip_resume ? it.skip : it)("resume", async () => {
          await snapMD(async () => (await resume()).tracker.getLogs());
        });

        (config.skip_csr ? it.skip : it)("csr", async () => {
          await snapMD(async () => (await csr()).tracker.getLogs());
        });
      });
    });
  }
});

async function compileCode(templateFile: string, config: compiler.Config) {
  return (await compiler.compileFile(templateFile, config)).code;
}

function trackErrors(window: DOMWindow) {
  const errors: Set<Error> = new Set();
  const throwErrors = () => {
    switch (errors.size) {
      case 0:
        return;
      case 1:
        throw [...errors][0];
      default:
        throw new AggregateError(errors);
    }
  };

  window.addEventListener("error", (ev) => {
    errors.add(ev.error.detail || ev.error);
    ev.preventDefault();
  });
  window.addEventListener("unhandledrejection", (ev) => {
    errors.add(ev.reason.detail || ev.reason);
    ev.preventDefault();
  });

  return throwErrors;
}

function indent(data: unknown) {
  return String(data)
    .split("\n")
    .map((line) => `  ${line}`)
    .join("\n");
}
