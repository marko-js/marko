import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-define-body-content-server-param without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ x: 1, y: "y" }, click, { x: 2, y: "y" }, { x: 1, y: "z" }],
};
