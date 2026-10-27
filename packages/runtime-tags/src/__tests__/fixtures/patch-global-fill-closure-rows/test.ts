import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const player = {
  owned: ["b"],
  bank: { x: 0, y: 1 },
  rate: 1,
};
const globals = (rate: number) => ({
  $global: {
    data: { player: { ...player, rate } },
    serializedGlobals: ["data"],
  },
});

// A `$global` fill leaves the rows its patch renders alone: an unshaken
// (debug) build's fill re-ran their closures without the rows' resumed values.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [globals(1), wait, globals(3)],
};
