import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A flush loads a lazy child; the client then inserts its own tag of that import,
// reopens it once the renderer is cached, and a patch rewrites the inserted input.
export const config: TestConfig = {
  patches: true,
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
