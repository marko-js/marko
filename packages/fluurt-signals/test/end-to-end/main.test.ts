import fs from "fs";
import path from "path";
import createBrowser from "jsdom-context-require";
import { createRenderer } from "../../html/index";
import reorderRuntime from "../../html/reorder-runtime";
import { Writable } from "stream";
import assert from "assert";
import format from "pretty-format";
import createTrackMutations from "../dom/utils/track-mutations";
const { DOMElement, DOMCollection } = format.plugins;

const FIXTURES_DIR = path.join(__dirname, "./fixtures");
const runtimeId = "M";
const reorderRuntimeString = String(reorderRuntime).replace(
  "RUNTIME_ID",
  runtimeId
);

describe("E2E", () => {
  fs.readdirSync(FIXTURES_DIR)
    .filter(entry => !/\.skip$/.test(entry))
    .map(entry => {
      const testDir = path.join(FIXTURES_DIR, entry);
      const serverFile = path.join(testDir, "server.ts");
      const browserFile = path.join(testDir, "browser.ts");
      describe(entry, () => {
        it("server + hydrate", async () => {
          const serverTest = require(serverFile);
          const render = createRenderer(serverTest.default);
          const input = serverTest.input;

          let html = "";
          const output: string[] = [];

          await render(input, {
            write(data: string) {
              html += data;
              output.push(
                `# write\n${indent(
                  data.replace(reorderRuntimeString, "REORDER_RUNTIME")
                )}`
              );
            },
            flush() {
              output[output.length - 1] += `\n_flush_`;
            },
            end(data?: string) {
              output.push(`# end${data ? `\n${indent(data)}` : ""}`);
            },
            emit(type, ...args: unknown[]) {
              output.push(
                `# emit ${type}${args.map(arg => `\n${indent(arg)}`)}`
              );
            }
          } as Writable & { flush(): void });

          const browser = createBrowser({
            dir: __dirname,
            html
          });

          const document = browser.window.document;
          const tracker = createTrackMutations(browser.window, document);

          const serverOutput = document.cloneNode(true);
          serverOutput.normalize();

          output.push(
            `# server HTML\n${indent(
              Array.from(serverOutput.childNodes)
                .map(child =>
                  format(child, {
                    plugins: [DOMElement, DOMCollection]
                  })
                )
                .join("\n")
            )}`
          );

          const browserTest = browser.require(browserFile);
          const dom = browser.require("../../dom/index");
          dom.init();

          tracker.logUpdate("Hydrate");

          console.log(`${output.join("\n\n")}\n${tracker.getLogs()}`);
        });
        it("client only", async () => {});
      });
    });
});

function indent(data: unknown) {
  return String(data)
    .split("\n")
    .map(line => `  ${line}`)
    .join("\n");
}
