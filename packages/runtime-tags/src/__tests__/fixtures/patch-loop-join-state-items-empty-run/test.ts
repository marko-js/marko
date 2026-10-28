import type { TestConfig } from "../../main.test";
const click = (document: Document) =>
  document.querySelector<HTMLElement>("button.l")!.click();
// An input joins each row's item, in rows real client state renders, and has
// no other render: its fill's run is that join's, which its join fill replaces.
export const config: TestConfig = {
  patches: true,
  steps: [{ a: "x", b: "m" }, click, { a: "x", b: "n" }, { a: "y", b: "n" }],
};
