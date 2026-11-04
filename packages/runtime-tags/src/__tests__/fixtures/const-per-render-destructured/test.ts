import type { TestConfig } from "../../main.test";

// A destructured `<const>` whose value differs per render, joined with input
// and read by a handler.
const click = (document: Document) => {
  document.querySelector("button")!.click();
};
export const config: TestConfig = {
  steps: [{ name: "a", label: "A", value: "1" }, click],
};
