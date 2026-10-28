import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A function a created child returns reads the child's param when a handler
// calls it, as the render shows.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false, label: "a" }, { show: true, label: "b" }, click],
};
