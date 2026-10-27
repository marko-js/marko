import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A server `<await>` in an `<if>` a patch creates: its body's effect runs once.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    clickOpen,
    wait,
    { show: true, label: "b" },
    wait,
    wait,
    clickOpen,
    wait,
    clickChild,
    wait,
  ],
};

function clickOpen(document: Document) {
  document.querySelector<HTMLElement>("button.open")!.click();
}

function clickChild(document: Document) {
  document.querySelector<HTMLElement>("button.child")?.click();
}
