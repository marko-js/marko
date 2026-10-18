import type { TestConfig } from "../../main.test";
const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};
// A paired row whose tag swaps to a renderer keeping its body fills the row's
// value once the row knows the body is handed on.
export const config: TestConfig = {
  patches: true,
  steps: [
    { wrap: false, rows: [{ id: 1, label: "a" }] },
    {
      wrap: true,
      rows: [
        { id: 1, label: "b" },
        { id: 2, label: "c" },
      ],
    },
    toggle,
    toggle,
    {
      wrap: true,
      rows: [
        { id: 1, label: "d" },
        { id: 2, label: "e" },
      ],
    },
  ],
};
