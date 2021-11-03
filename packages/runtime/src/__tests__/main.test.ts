import type { Writable } from "stream";
import fs from "fs";
import path from "path";
import assert from "assert";
import snap from "mocha-snap";
import { createRenderer } from "../html/index";
import reorderRuntime from "../html/reorder-runtime";
import createTrackMutations from "./utils/track-mutations";
import { isWait } from "./utils/resolve";
import createBrowser from "./utils/create-browser";

const runtimeId = "M";
const reorderRuntimeString = String(reorderRuntime).replace(
  "RUNTIME_ID",
  runtimeId
);

describe("runtime", () => {
  const fixturesDir = path.join(__dirname, "fixtures");
  for (const entry of fs.readdirSync(fixturesDir)) {
    if (entry.endsWith(".skip")) continue;
    describe(entry, () => {
      const resolve = (file: string) => path.join(fixturesDir, entry, file);
      const testFile = resolve("test.ts");
      const serverFile = resolve("server.ts");
      const hydrateFile = resolve("hydrate.ts");
      const browserFile = resolve("browser.ts");
      const skipSSR = !fs.existsSync(serverFile);
      const skipCSR = !fs.existsSync(browserFile);
      const skipHydrate = !fs.existsSync(hydrateFile);
      let initialHTML: string;
      let hydratedHTML: string;

      (skipSSR ? it.skip : it)(
        `ssr${skipHydrate ? "" : " + hydrate"}`,
        async () => {
          await snap(async () => {
            const serverTemplate = require(serverFile);
            const render = createRenderer(serverTemplate.default, true);

            let buffer = "";
            let flushCount = 0;

            const browser = createBrowser({ dir: __dirname });
            const document = browser.window.document;
            const test = browser.require(testFile);
            const hydrateIndex = test.hydrateFlush;
            const input = test.default[0];

            document.open();

            const tracker = createTrackMutations(browser.window, document);

            await render(input, {
              write(data: string) {
                buffer += data;
                tracker.log(
                  `# Write\n${indent(
                    data.replace(reorderRuntimeString, "REORDER_RUNTIME")
                  )}`
                );
              },
              flush() {
                if (!skipHydrate && hydrateIndex === flushCount++) {
                  browser.require(hydrateFile);
                  tracker.logUpdate("Hydrate");
                }
                // tracker.logUpdate("Flush");
                // document.write(buffer);
                // buffer = "";
              },
              end(data?: string) {
                document.write(buffer + (data || ""));
                document.close();
                tracker.logUpdate("End");
                if (!skipHydrate && hydrateIndex == null) {
                  browser.require(hydrateFile);
                  tracker.logUpdate("Hydrate");
                }
              },
              emit(type: string, ...args: unknown[]) {
                tracker.log(
                  `# Emit ${type}${args.map(arg => `\n${indent(arg)}`)}`
                );
              }
            } as Writable & { flush(): void });

            hydratedHTML = getNormalizedHtml(document.body);

            if (!skipHydrate) {
              const { run } = browser.require(
                "../dom/index"
              ) as typeof import("../dom/index");

              for (const update of test.default.slice(1)) {
                if (isWait(update)) {
                  await update();
                } else if (typeof update === "function") {
                  update(document.documentElement);
                  run();
                  tracker.logUpdate(update);
                } else {
                  // if new input is detected, stop testing
                  // this will be covered by the client tests
                  break;
                }
              }
            }

            return tracker.getLogs();
          }, ".md");
        }
      );
      (skipCSR ? it.skip : it)("csr", async () => {
        await snap(async () => {
          const browser = createBrowser({ dir: __dirname });
          const document = browser.window.document;
          const test = browser.require(testFile);
          const input = test.default[0];
          const { run } = browser.require(
            "../dom/index"
          ) as typeof import("../dom/index");
          const render = browser.require(browserFile).default;
          const container = Object.assign(document.createElement("div"), {
            TEST_ROOT: true
          });
          const tracker = createTrackMutations(browser.window, container);

          document.body.appendChild(container);

          const instance = render(input);
          container.appendChild(instance);

          initialHTML = getNormalizedHtml(container);
          tracker.logUpdate(input);

          for (const update of test.default.slice(1)) {
            if (isWait(update)) {
              await update();
            } else if (typeof update === "function") {
              update(document.documentElement);
              run();
              tracker.logUpdate(update);
            } else {
              instance.update(update);
              tracker.logUpdate(update);
            }
          }

          return tracker.getLogs();
        }, ".md");
      });
      (skipSSR || skipCSR ? it.skip : it)("equivalent", () => {
        assert.strictEqual(hydratedHTML, initialHTML);
      });
    });
  }
});

function indent(data: unknown) {
  return String(data)
    .split("\n")
    .map(line => `  ${line}`)
    .join("\n");
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

  nodesToRemove.forEach(n => n.remove());
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
