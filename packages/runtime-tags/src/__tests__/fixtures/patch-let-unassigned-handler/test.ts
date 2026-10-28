import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A never-assigned root `<let>` keeps its initial value through a navigation,
// as a client render does: the handler still reads the first input's.
export const config: TestConfig = {
  patches: true,
  steps: [{ foo: "ab" }, click, { foo: "abcd" }, click],
};
