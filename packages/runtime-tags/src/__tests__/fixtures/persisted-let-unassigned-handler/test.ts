import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A never-assigned root let over a param is refreshable like a `<const>`:
// the patch writes it, so a later handler read sees the current value.
export const config: TestConfig = {
  persisted: true,
  steps: [{ foo: "ab" }, click, { foo: "abcd" }, click],
};
