import type { TestConfig } from "../../main.test";
const click = (document: Document) =>
  document.querySelector<HTMLElement>("button.l")!.click();
// Rows real client state renders join two server inputs: their unpatched keys
// re-run the join in every row, so no paired row's hole is written too.
export const config: TestConfig = {
  patches: true,
  steps: [{ a: "x", b: "m" }, click, { a: "y", b: "m" }, { a: "y", b: "n" }],
};
