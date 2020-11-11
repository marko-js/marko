import fs from "fs";
import path from "path";
import snapshot from "../utils/snapshot";
import renderAndTrackMutations from "./utils/render-and-track-mutations";

const FIXTURES_DIR = path.join(__dirname, "./fixtures");

process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
});

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
          await renderAndTrackMutations(entry, testFile)
        );
      });
    });
});
