import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Lazy children loaded on idle: a flush loads the module, and a tag the client
// inserts afterwards takes its input once inserted.
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
