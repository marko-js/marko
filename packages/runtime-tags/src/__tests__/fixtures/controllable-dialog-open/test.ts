import type { TestConfig } from "../../main.test";

function toggle(container: Element) {
  const dialog = container.querySelector<HTMLDialogElement>("dialog")!;
  dialog.open = !dialog.open;
}

export const config: TestConfig = {
  steps: [{}, toggle, toggle, toggle],
};
