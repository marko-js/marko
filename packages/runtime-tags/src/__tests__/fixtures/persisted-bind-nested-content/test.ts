import type { TestConfig } from "../../main.test";

// Two nested content bodies between the site and the handler's owner: each owner hop skips its rendering child.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a", show: false }, { title: "b", show: true }, click],
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
