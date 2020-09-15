import fs from "fs";
import path from "path";
import snapshot from "../utils/snapshot";
import renderAndTrackFlushes from "./utils/render-and-track-flushes";

const FIXTURES_DIR = path.join(__dirname, "./fixtures");

describe("HTML", () => {
  fs.readdirSync(FIXTURES_DIR)
    .filter(entry => !/\.skip$/.test(entry))
    .filter(entry => !/\.DS_STORE$/i.test(entry))
    .map(entry => {
      const testDir = path.join(FIXTURES_DIR, entry);
      const testFile = path.join(testDir, "index.ts");
      it(entry, async () => {
        snapshot(
          testDir,
          "snapshot.md",
          await renderAndTrackFlushes(require(testFile))
        );
      });
    });
});
