import * as assert from "assert/strict";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

import { importWithContext } from "./utils/import-with-context";

// The test browser keeps modules as a browser does (whatwg/html#10327): a later
// import fetches again only a failed fetch, and any other failure stays.
describe("runtime-tags/import with context", () => {
  const dirs: string[] = [];
  after(() => {
    for (const dir of dirs) rmSync(dir, { recursive: true });
  });

  it("fetches again only the module whose fetch failed", async () => {
    const page = createPage(
      {
        "root.mjs": `import { v } from "./dep.mjs"; export const value = "first:" + v;`,
        "dep.mjs": "export const v = 1;",
      },
      "dep.mjs",
    );
    await assert.rejects(page.load(), /simulated chunk load failure/);
    page.write("root.mjs", 'export const value = "second";');
    assert.equal(await page.load(), "first:1");
    assert.equal(page.requests("dep.mjs"), 2);
  });

  it("keeps a missing export", async () => {
    await assertKeeps(
      {
        "root.mjs": `import { missing } from "./dep.mjs"; export const value = missing;`,
        "dep.mjs": "export const v = 1;",
      },
      /does not provide an export named 'missing'/,
    );
  });

  it("keeps an evaluation error", async () => {
    await assertKeeps(
      { "root.mjs": 'throw new Error("evaluation");' },
      /^Error: evaluation$/,
    );
  });

  it("keeps a dependency's evaluation error", async () => {
    await assertKeeps(
      {
        "root.mjs": `import "./dep.mjs"; export const value = "first";`,
        "dep.mjs": 'throw new Error("dependency evaluation");',
      },
      /^Error: dependency evaluation$/,
    );
  });

  // The failure stays though the page's files change, and nothing it
  // imports is requested again.
  async function assertKeeps(files: Record<string, string>, error: RegExp) {
    const page = createPage(files);
    await assert.rejects(page.load(), error);
    page.write("root.mjs", 'export const value = "second";');
    await assert.rejects(page.load(), error);
    assert.equal(page.requests("dep.mjs"), files["dep.mjs"] ? 1 : 0);
  }

  // A page whose `load` imports `root.mjs` (each time anew), counting the
  // requests for each file; `rejectOnce` fails its first request.
  function createPage(files: Record<string, string>, rejectOnce?: string) {
    const dir = mkdtempSync(path.join(tmpdir(), "import-with-context-"));
    const requests = new Map<string, number>();
    const context = {};
    dirs.push(dir);
    write(
      "entry.mjs",
      'export const load = () => import("./root.mjs").then((m) => m.value);',
    );
    for (const name in files) write(name, files[name]);
    return {
      write,
      requests: (name: string) => requests.get(name) || 0,
      load: async () =>
        (
          await importWithContext<{ load(): Promise<string> }>(
            path.join(dir, "entry.mjs"),
            {},
            context,
            request,
          )
        ).load(),
    };

    function write(name: string, source: string) {
      writeFileSync(path.join(dir, name), source);
    }

    function request(id: string) {
      const name = path.basename(id);
      const count = (requests.get(name) || 0) + 1;
      requests.set(name, count);
      return name === rejectOnce && count === 1 ? "reject" : undefined;
    }
  }
});
