import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A function its scope registers, passed on through a `<define>` body: its group
// differs between a page and a patch render, so a nested call composes it.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, click, { label: "b" }, click, { label: "c" }, click],
};
