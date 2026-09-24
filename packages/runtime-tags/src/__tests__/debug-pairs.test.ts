import * as assert from "assert/strict";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const srcDir = path.join(import.meta.dirname, "..");

describe("runtime-tags/.debug.ts pairs", () => {
  const debugFiles = findDebugFiles();

  it("gives every .debug.ts a .ts twin", () => {
    assert.deepEqual(
      debugFiles.filter(
        (file) => !fs.existsSync(path.join(srcDir, toTwin(file))),
      ),
      [],
    );
  });

  for (const debugFile of debugFiles) {
    describe(debugFile, () => {
      it("exports the same members from both halves", async () => {
        const { debug, twin } = await importPair(debugFile);
        assert.deepEqual(Object.keys(twin), Object.keys(debug));
      });

      it("keeps string values unique within each half", async () => {
        const { debug, twin } = await importPair(debugFile);
        assert.deepEqual(
          { debug: duplicateStrings(debug), twin: duplicateStrings(twin) },
          { debug: [], twin: [] },
        );
      });
    });
  }
});

function findDebugFiles() {
  // Pruned rather than filtered: workers sweep and rename under
  // `__tests__/dist` concurrently, and a walk into it can hit ENOENT.
  return fs
    .globSync("**/*.debug.ts", {
      cwd: srcDir,
      exclude: (name) => name === "__tests__",
    })
    .sort();
}

async function importPair(debugFile: string) {
  const [debug, twin]: Record<string, unknown>[] = await Promise.all(
    [debugFile, toTwin(debugFile)].map(
      (file) => import(pathToFileURL(path.join(srcDir, file)).href),
    ),
  );
  return { debug, twin };
}

function duplicateStrings(exports: Record<string, unknown>) {
  const firstNames = new Map<string, string>();
  const duplicates: string[] = [];
  for (const [name, value] of Object.entries(exports)) {
    if (typeof value !== "string") continue;
    const firstName = firstNames.get(value);
    if (firstName === undefined) {
      firstNames.set(value, name);
    } else {
      duplicates.push(`${firstName} and ${name} are ${JSON.stringify(value)}`);
    }
  }
  return duplicates;
}

function toTwin(debugFile: string) {
  return debugFile.slice(0, -".debug.ts".length) + ".ts";
}
