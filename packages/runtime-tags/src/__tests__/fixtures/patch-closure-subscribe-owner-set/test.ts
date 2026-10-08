import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

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

// A lazy page's rows read a `$global`-derived value alone (a child input): its
// owner ships no subscriber set, so no row resumes into one.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [globals(1), wait, click],
};
