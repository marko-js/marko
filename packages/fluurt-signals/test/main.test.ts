import fs from "fs";
import path from "path";
import logMutations from "./utils/log-mutations";
import snapshot from "./utils/snapshot";

const FIXTURES_DIR = path.join(__dirname, "./fixtures");
interface Test {
  inputs: unknown[];
  default: (input: { [x: string]: unknown }) => void;
  run?: () => Promise<void>;
}

fs.readdirSync(FIXTURES_DIR)
  .filter(entry => !/\.skip$/.test(entry))
  .map(entry => {
    const testDir = path.join(FIXTURES_DIR, entry);
    const testFile = path.join(testDir, "index.ts");
    it(entry, async () => {
      const { inputs, default: renderer }: Test = require(testFile);
      snapshot(testDir, "snapshot.md", await logMutations(renderer, inputs));
    });
  });
