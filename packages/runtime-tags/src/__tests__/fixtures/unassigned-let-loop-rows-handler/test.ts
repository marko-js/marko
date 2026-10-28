import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelectorAll<HTMLButtonElement>("button")[1]?.click();

// patch-unassigned-let-loop-rows-handler without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ v: "a", items: [1, 2] }, click],
};
