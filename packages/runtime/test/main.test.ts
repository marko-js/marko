import fs from "fs";
import path from "path";
import createBrowser from "./utils/create-browser";
import { createRenderer } from "../src/html/index";
import reorderRuntime from "../src/html/reorder-runtime";
import { Writable } from "stream";
import assert from "assert";
import createTrackMutations from "./utils/track-mutations";
import snapshot from "./utils/snapshot";
import { isWait } from "./utils/resolve";

const FIXTURES_DIR = path.join(__dirname, "./fixtures");
const runtimeId = "M";
const reorderRuntimeString = String(reorderRuntime).replace(
  "RUNTIME_ID",
  runtimeId
);

describe("runtime", function () {
  this.timeout(10000);
  fs.readdirSync(FIXTURES_DIR)
    .filter(entry => !/\.skip$/.test(entry))
    .map(entry => {
      const testDir = path.join(FIXTURES_DIR, entry);
      const snapshotDir = path.join(testDir, "snapshots");
      const serverFile = path.join(testDir, "server.ts");
      const hydrateFile = path.join(testDir, "hydrate.ts");
      const browserFile = path.join(testDir, "browser.ts");
      const testFile = path.join(testDir, "test.ts");
      const skipSSR = !fs.existsSync(serverFile);
      const skipHydrate = !fs.existsSync(hydrateFile);
      const skipCSR = !fs.existsSync(browserFile);
      describe(entry, () => {
        let initialHTML: string;
        let hydratedHTML: string;
        (!skipSSR ? it : it.skip)(
          `ssr${skipHydrate ? "" : " + hydrate"}`,
          async () => {
            const serverTemplate = require(serverFile);
            const render = createRenderer(serverTemplate.default, true);

            let buffer = "";
            let flushCount = 0;

            const browser = createBrowser({ dir: __dirname });
            const test = browser.require(testFile);
            const hydrateIndex = test.hydrateFlush;
            const input = test.default[0];

            const document = browser.window.document;

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
              emit(type, ...args: unknown[]) {
                tracker.log(
                  `# Emit ${type}${args.map(arg => `\n${indent(arg)}`)}`
                );
              }
            } as Writable & { flush(): void });

            hydratedHTML = getNormalizedHtml(document.body);

            if (!skipHydrate) {
              const { run } = browser.require(
                "../src/dom/index"
              ) as typeof import("../src/dom/index");

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

            snapshot(snapshotDir, "server-hydrate.md", tracker.getLogs());
          }
        );
        (!skipCSR ? it : it.skip)("csr", async () => {
          const browser = createBrowser({ dir: __dirname });
          const document = browser.window.document;
          const test = browser.require(testFile);
          const input = test.default[0];
          const { run } = browser.require(
            "../src/dom/index"
          ) as typeof import("../src/dom/index");
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

          snapshot(snapshotDir, "client-only.md", tracker.getLogs());
        });
        (!skipSSR && !skipCSR ? it : it.skip)("equivalent", () => {
          assert.strictEqual(hydratedHTML, initialHTML);
        });
      });
    });
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
    if (node.nodeType === 8 || isIgnoredTag(node)) {
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

function isIgnoredTag(node) {
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
