import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A row's body reads the root's value and the row's, each through its closure
// fill: both builds run the two in one order.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, note: "a", rows: [{ id: 1, label: "x" }] },
    {
      on: true,
      note: "b",
      rows: [
        { id: 1, label: "y" },
        { id: 2, label: "z" },
      ],
    },
    toggle,
    toggle,
    { on: true, note: "c", rows: [{ id: 1, label: "w" }] },
    toggle,
    toggle,
  ],
};
