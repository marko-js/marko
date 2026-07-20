import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  const dialog = document.querySelector<HTMLDialogElement>("dialog")!;
  dialog.open = !dialog.open;
}

export const config: TestConfig = {
  steps: [{}, toggle, toggle, toggle],
};
