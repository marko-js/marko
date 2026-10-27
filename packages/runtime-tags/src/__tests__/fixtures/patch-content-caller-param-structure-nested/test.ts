import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The same four structures through nested hosts and a `<define>` body called
// with the host's param: 8 cells.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, click, { label: "c" }, click],
};
