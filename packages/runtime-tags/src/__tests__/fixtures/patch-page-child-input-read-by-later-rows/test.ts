import type { TestConfig } from "../../main.test";

const pickLast = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button:last-of-type")!.click();
};

const items = [
  { id: "s", note: "SECRET_s" },
  { id: "m", note: "SECRET_m" },
];

// A child's input only rows a later patch builds read, its caller passing server values:
// the document ships none of it, though it holds the child's `<let>` those rows read.
export const config: TestConfig = {
  patches: true,
  steps: [
    { b: false, items },
    { b: true, items },
    pickLast,
    { b: true, items },
  ],
};
