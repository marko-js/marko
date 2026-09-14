import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Nested loops (for → for): the homogeneous chain scans row scopes then
// cell scopes, pairing both levels by key across reorders.
export const config: TestConfig = {
  persisted: true,
  steps: [
    {
      rows: [
        { id: "r1", cells: ["a", "b"] },
        { id: "r2", cells: ["c"] },
      ],
      suffix: "x",
    },
    click,
    {
      rows: [
        { id: "r2", cells: ["c"] },
        { id: "r1", cells: ["b", "a"] },
      ],
      suffix: "y",
    },
    click,
  ],
};
