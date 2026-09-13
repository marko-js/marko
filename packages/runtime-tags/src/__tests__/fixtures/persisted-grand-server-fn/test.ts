import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A server-bound arrow fed to an admitted child that CALLS it while
// rendering: the parent-side fill re-binds it per patch and the child
// re-renders with the live function.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, { title: "b" }, click, { title: "c" }, click],
};
