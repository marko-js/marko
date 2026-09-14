import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Attribute tag content rendered inside the child's own stateful branch
// delivers as a fill like a body does.
export const config: TestConfig = {
  persisted: true,
  steps: [{ note: "x" }, { note: "y" }, click, { note: "z" }, click],
};
