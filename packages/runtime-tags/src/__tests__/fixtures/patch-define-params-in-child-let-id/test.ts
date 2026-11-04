import type { TestConfig } from "../../main.test";

const clear = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The `<define>` a child's `<let>` holds renders an `<id>` beside a server value: the
// client's copy mints its own id, which the page keeps as patches write the value.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, clear, { label: "c" }],
};
