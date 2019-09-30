import fs from "fs";
import path from "path";
import renderAndGetMutations from "./utils/log-mutations";
import snapshot from "./utils/snapshot";

const FIXTURES_DIR = path.join(__dirname, "./fixtures");

describe("DOM", () => {
  fs.readdirSync(FIXTURES_DIR)
    .filter(entry => !/\.skip$/.test(entry))
    .map(entry => {
      const testDir = path.join(FIXTURES_DIR, entry);
      const testFile = path.join(testDir, "index.ts");
      it(entry, async () => {
        snapshot(
          testDir,
          "snapshot.md",
          await renderAndGetMutations(entry, require(testFile))
        );
      });
    });
});
