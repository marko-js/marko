import fs from "fs";
import path from "path";
import createBrowser from "jsdom-context-require";
import { createRenderer } from "../../html/index";
import reorderRuntime from "../../html/reorder-runtime";
import { Writable } from "stream";
import assert from "assert";
import createTrackMutations from "../dom/utils/track-mutations";
import snapshot from "../utils/snapshot";
import { resolveAfter } from "../utils/resolve";

const FIXTURES_DIR = path.join(__dirname, "./fixtures");
const runtimeId = "M";
const reorderRuntimeString = String(reorderRuntime).replace(
  "RUNTIME_ID",
  runtimeId
);

describe("E2E", function() {
  this.timeout(10000);
  fs.readdirSync(FIXTURES_DIR)
    .filter(entry => !/\.skip$/.test(entry))
    .map(entry => {
      const testDir = path.join(FIXTURES_DIR, entry);
      const snapshotDir = path.join(testDir, "snapshots");
      const serverFile = path.join(testDir, "server.ts");
      const browserFile = path.join(testDir, "browser.ts");
      describe(entry, () => {
        let initialHTML: string;
        let hydratedHTML: string;
        it("server + hydrate", async () => {
          const serverTest = require(serverFile);
          const hydrateIndex = serverTest.HYDRATE_ON_FLUSH;
          const render = createRenderer(serverTest.default);
          const input = serverTest.input;

          let buffer = "";
          let flushCount = 0;
          const browser = createBrowser({ dir: __dirname });
          const document = browser.window.document;

          document.open();

          const tracker = createTrackMutations(browser.window, document);
          const browserTest = browser.require(browserFile);
          const dom = browser.require("../../dom/index");

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
              if (hydrateIndex === flushCount++) {
                dom.init();
                tracker.logUpdate("Hydrate");
              }
              document.write(buffer);
              tracker.logUpdate("Flush");
              buffer = "";
            },
            end(data?: string) {
              document.write(buffer + (data || ""));
              document.close();
              tracker.logUpdate("End");
              if (hydrateIndex == null) {
                dom.init();
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

          for (const update of browserTest.updates) {
            if (browserTest.wait) {
              await resolveAfter(null, browserTest.wait);
            }
            update();

            tracker.logUpdate(update);
          }

          snapshot(snapshotDir, "server-hydrate.md", tracker.getLogs());
        });
        it("client only", async () => {
          const serverTest = require(serverFile);
          const browser = createBrowser({ dir: __dirname });
          const document = browser.window.document;
          const { createRenderer: createBrowserRenderer, createTemplate } = browser.require(
            "../../dom/index"
          ) as typeof import("../../dom/index");
          const browserTest = browser.require(browserFile);
          const render = createBrowserRenderer(browserTest.default, createTemplate(browserTest.html));
          const container = Object.assign(document.createElement("div"), {
            TEST_ROOT: true
          });
          const tracker = createTrackMutations(browser.window, container);
          const input = serverTest.input;
          document.body.appendChild(container);

          const instance = render(input);
          container.appendChild(instance);

          initialHTML = getNormalizedHtml(container);
          tracker.logUpdate(input);

          for (const update of browserTest.updates) {
            if (browserTest.wait) {
              await resolveAfter(null, browserTest.wait);
            }
            update(container);
            tracker.logUpdate(update);
          }

          snapshot(snapshotDir, "client-only.md", tracker.getLogs());
        });
        it("hydrate = client", () => {
          assert.equal(hydratedHTML, initialHTML);
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
  clone.innerHTML = clone.innerHTML;
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
