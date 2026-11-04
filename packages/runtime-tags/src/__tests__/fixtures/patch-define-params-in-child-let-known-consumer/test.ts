import type { TestConfig } from "../../main.test";

const clear = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The child holding the `<define>` in its `<let>` passes it to a known tag, whose
// dynamic tag renders it with a param.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, clear, { label: "c" }],
};
