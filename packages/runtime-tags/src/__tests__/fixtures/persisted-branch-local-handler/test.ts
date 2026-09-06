import type { TestConfig } from "../../main.test";
// A handler in a branch captures a server-owned branch local: the frame writes it so the click sees the patched value.
export const config: TestConfig = {
  persisted: true,
  steps: [{ show: true, title: "a" }, { show: true, title: "b" }, click],
};
function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
