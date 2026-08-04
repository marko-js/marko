import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A handler capturing server input reads the filled value at call time, so
// it stays current across patches.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "Store" }, click, { title: "Store!" }, click],
};
