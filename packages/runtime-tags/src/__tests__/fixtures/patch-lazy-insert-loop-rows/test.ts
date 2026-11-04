import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Loop rows the client adds insert a lazy child a flush already loaded; each
// row's input waits for its insert.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false },
    { show: true },
    clickOpen,
    wait,
    wait,
    clickChild,
    wait,
  ],
};

function clickOpen(document: Document) {
  document.querySelector<HTMLElement>("button.open")!.click();
}

function clickChild(document: Document) {
  for (const el of document.querySelectorAll<HTMLElement>("button.child"))
    el.click();
}
