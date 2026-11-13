import type { TestConfig } from "../../main.test";

const pickLast = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button:last-of-type")!.click();
};

// A constant only a loop a later patch builds iterates: the patch writes each row's
// item, so the document ships the `<let>` the rows read and not the constant.
export const config: TestConfig = {
  patches: true,
  steps: [{ b: false }, { b: true }, pickLast, { b: true }],
};
