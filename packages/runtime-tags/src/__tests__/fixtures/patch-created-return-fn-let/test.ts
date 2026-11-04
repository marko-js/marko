import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A function a created child returns reads the child's param when its caller
// calls it from a `<let>`: the child writes what the function captures.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false, label: "a" }, { show: true, label: "b" }, click],
};
