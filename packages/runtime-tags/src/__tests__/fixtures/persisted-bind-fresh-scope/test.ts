import type { TestConfig } from "../../main.test";

// The handler's own scope is constructed by the same frame: the down link resolves after the construct lands.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a", show: false }, { title: "b", show: true }, click],
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
