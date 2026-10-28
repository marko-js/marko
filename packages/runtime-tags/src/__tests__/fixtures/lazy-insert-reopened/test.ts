import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The same page without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    clickOpen,
    wait,
    wait,
    clickChild,
    wait,
    clickOpen,
    wait,
    clickOpen,
    wait,
    wait,
    { show: true, label: "c" },
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
