import fs from "fs";
import path from "path";
import createBrowser from "jsdom-context-require";
import { createRenderer } from "../../html/index";
import reorderRuntime from "../../html/reorder-runtime";
import { Writable } from "stream";

const FIXTURES_DIR = path.join(__dirname, "./fixtures");
const output: string[] = [];
const runtimeId = "M";
const reorderRuntimeString = String(reorderRuntime).replace(
  "RUNTIME_ID",
  runtimeId
);
const input: Record<string, unknown> = {};

describe("E2E", () => {
  fs.readdirSync(FIXTURES_DIR)
    .filter(entry => !/\.skip$/.test(entry))
    .map(entry => {
      const testDir = path.join(FIXTURES_DIR, entry);
      const testFile = path.join(testDir, "index.ts");
      it(entry, async () => {
        const test = require(testFile);
        const render = createRenderer(test.default);

        let html = "";

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
            output.push(`# emit ${type}${args.map(arg => `\n${indent(arg)}`)}`);
          }
        } as Writable & { flush(): void });

        const browser = createBrowser({
          dir: __dirname,
          html
        });

        // browser.require(testFile);
        const dom = browser.require("../../dom/hydrate");
        dom.init();
      });
    });
});

function indent(data: unknown) {
  return String(data)
    .split("\n")
    .map(line => `  ${line}`)
    .join("\n");
}
