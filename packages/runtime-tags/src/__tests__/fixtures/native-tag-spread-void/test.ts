import type { TestConfig } from "../../main.test";

// Void element pure spread: the whole input is dropped from serialization and
// re-applied from the parent on update. Toggling a reactive attr must still
// update the element after resume.
function toggle(container: Element) {
  container.querySelector<HTMLButtonElement>("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, toggle, toggle],
};
