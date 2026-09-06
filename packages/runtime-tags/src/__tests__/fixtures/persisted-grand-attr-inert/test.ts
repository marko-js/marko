import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A grandchild fed an imported call beside a server fill: the fill keeps the
// server value current and the call evaluates client-side.
export const config: TestConfig = {
  persisted: true,
  steps: [{ value: "a" }, { value: "b" }, click, click],
};
