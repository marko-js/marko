import type { TestConfig } from "../../main.test";

// A lazy route's child reads its state and a `$global`-fed input in a loop row.
export const config: TestConfig = {
  patches: true,
  steps: [
    { $global: { n: 5 } },
    (d: Document) => d.querySelector<HTMLElement>("button")!.click(),
  ],
};
