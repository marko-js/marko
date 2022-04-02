import fs from "fs";
import path from "path";
import assert from "assert";
import snap from "mocha-snap";
import * as compiler from "@marko/compiler";
import register from "@marko/compiler/register";
import createBrowser from "./utils/create-browser";
import createMutationTracker from "./utils/track-mutations";
import glob from "tiny-glob";
import reorderRuntime from "@marko/runtime-fluurt/src/html/reorder-runtime";
import createTrackMutations from "./utils/track-mutations";
import type { Writable } from "stream";
import type { DOMWindow } from "jsdom";

const runtimeId = "M";
const reorderRuntimeString = String(reorderRuntime).replace(
  "RUNTIME_ID",
  runtimeId
);

type TestConfig = {
  steps?: unknown[];
  skip_dom?: boolean;
  skip_html?: boolean;
  skip_csr?: boolean;
  skip_ssr?: boolean;
};

const baseConfig: compiler.Config = {
  translator: require.resolve(".."),
  babelConfig: {
    babelrc: false,
    configFile: false,
  },
  writeVersionComment: false,
};

const htmlConfig: compiler.Config = { ...baseConfig, output: "html" };
const domConfig: compiler.Config = { ...baseConfig, output: "dom" };
register(htmlConfig);

describe("translator", () => {
  const fixturesDir = path.join(__dirname, "fixtures");
  for (const entry of fs.readdirSync(fixturesDir)) {
    if (entry.endsWith(".skip")) continue;

    describe(entry, () => {
      const resolve = (file: string) => path.join(fixturesDir, entry, file);
      const fixtureDir = resolve(".");
      const templateFile = resolve("template.marko");
      const snapMD = (fn: () => unknown) => snap(fn, ".md", fixtureDir);
      const snapAllTemplates = async (compilerConfig: compiler.Config) => {
        await snap(
          () => compileCode(templateFile, compilerConfig),
          ".js",
          fixtureDir
        );
        const additionalMarkoFiles = await glob(resolve("*/**/*.marko"));
        for (const file of additionalMarkoFiles) {
          const name = path.relative(fixtureDir, file).replace(".marko", ".js");
          await snap(() => compileCode(file, compilerConfig), name, fixtureDir);
        }
      };
      const config: TestConfig = (() => {
        try {
          return require(resolve("test.ts"));
          // eslint-disable-next-line no-empty
        } catch {
          return {};
        }
      })();

      let initialHTML: string;
      let hydratedHTML: string;

      (config.skip_html ? it.skip : it)("html", () =>
        snapAllTemplates(htmlConfig)
      );

      (config.skip_dom ? it.skip : it)("dom", () =>
        snapAllTemplates(domConfig)
      );

      (config.skip_ssr ? it.skip : it)("ssr", async () => {
        await snapMD(async () => {
          const serverTemplate = require(templateFile);

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
          const throwErrors = trackErrors(browser.window);
          const [input, ...steps] = config.steps || [];

          document.open();

          const tracker = createTrackMutations(browser.window, document);
          const { run, init } = browser.require(
            "@marko/runtime-fluurt/src/dom"
          ) as typeof import("@marko/runtime-fluurt/src/dom");

          browser.require(templateFile);
          await serverTemplate.render(input, {
            write(data: string) {
              buffer += data;
              tracker.log(
                `# Write\n${indent(
                  data.replace(reorderRuntimeString, "REORDER_RUNTIME")
                )}`
              );
            },
            flush() {
              // tracker.logUpdate("Flush");
              // document.write(buffer);
              // buffer = "";
            },
            end(data?: string) {
              document.write(buffer + (data || ""));
              document.close();
              tracker.logUpdate("End");
              init();
              throwErrors();
              // browser.require(hydrateFile);
              tracker.logUpdate("Hydrate");
            },
            emit(type: string, ...args: unknown[]) {
              // console.log(...args);
              tracker.log(
                `# Emit ${type}${args.map((arg) => `\n${indent(arg)}`)}`
              );
            },
          } as Writable & { flush(): void });

          hydratedHTML = getNormalizedHtml(document.body);

          for (const update of steps) {
            if (typeof update === "function") {
              await update(document.documentElement);
              run();
              tracker.logUpdate(update);
            } else {
              // if new input is detected, stop testing
              // this will be covered by the client tests
              break;
            }

            throwErrors();
          }

          return tracker.getLogs();
        });
      });

      (config.skip_csr ? it.skip : it)("csr", async () => {
        await snapMD(async () => {
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

          const [input, ...steps] = config.steps || [];
          const { run } = browser.require(
            "@marko/runtime-fluurt/src/dom"
          ) as typeof import("../../../runtime/src/dom");
          const render = browser.require(templateFile).default;
          const container = Object.assign(document.createElement("div"), {
            TEST_ROOT: true,
          });
          const tracker = createMutationTracker(browser.window, container);

          document.body.appendChild(container);

          const instance = render(input, container);
          initialHTML = getNormalizedHtml(container);
          throwErrors();
          tracker.logUpdate(input);

          for (const update of steps) {
            if (typeof update === "function") {
              await update(document.documentElement);
              run();
              tracker.logUpdate(update);
            } else {
              instance.update(update);
              tracker.logUpdate(update);
            }

            throwErrors();
          }

          return tracker.getLogs();
        });
      });

      (config.skip_ssr || config.skip_csr ? it.skip : it)("equivalent", () => {
        assert.strictEqual(hydratedHTML, initialHTML);
      });
    });
  }
});

async function compileCode(templateFile: string, config: compiler.Config) {
  return (await compiler.compileFile(templateFile, config)).code;
}

function indent(data: unknown) {
  return String(data)
    .split("\n")
    .map((line) => `  ${line}`)
    .join("\n");
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

function getNormalizedHtml(container: Element) {
  const clone = container.cloneNode(true) as Element;

  const treeWalker = container.ownerDocument!.createTreeWalker(clone);
  const nodesToRemove: ChildNode[] = [];

  while (treeWalker.nextNode()) {
    const node = treeWalker.currentNode;
    if (node.nodeType === 8 || isIgnoredTag(node as Element)) {
      nodesToRemove.push(node as ChildNode);
    } else if ((node as Element).tagName === "TEXTAREA") {
      node.textContent = (node as HTMLTextAreaElement).value;
    }
  }

  nodesToRemove.forEach((n) => n.remove());
  // clone.innerHTML = clone.innerHTML;
  clone.normalize();

  return clone.innerHTML.trim();
}

function isIgnoredTag(node: Element) {
  switch (node.tagName) {
    case "LINK":
    case "TITLE":
    case "STYLE":
    case "SCRIPT":
      return true;
    default:
      return false;
  }
}
