import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A flush loads the lazy child for the page's tag; a child template's own tag of
// that import, which the client inserts, takes its input once inserted.
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
