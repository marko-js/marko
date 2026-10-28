import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A root param read inside a `<define>`'s branch its call site feeds from
// state: the client re-renders the branch, so the patch keeps the read fresh.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, click, { title: "c" }, click],
};
