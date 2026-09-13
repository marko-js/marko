import type { TestConfig } from "../../main.test";

// As persisted-bind-through-child, with the child rendered by a dynamic tag.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a", show: false }, { title: "b", show: true }, click],
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
