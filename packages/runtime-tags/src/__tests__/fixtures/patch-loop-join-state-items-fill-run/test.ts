import type { TestConfig } from "../../main.test";
const click = (document: Document) =>
  document.querySelector<HTMLElement>("button.l")!.click();
// An input a stateful branch reads joins each row's item, in rows real client
// state renders: its fill's run re-runs that join as its join fill would.
export const config: TestConfig = {
  patches: true,
  steps: [{ a: "x", b: "m" }, click, { a: "x", b: "n" }, { a: "y", b: "n" }],
};
