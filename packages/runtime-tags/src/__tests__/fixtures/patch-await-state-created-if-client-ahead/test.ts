import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The same, with the state changed before the patch creates the `<if>`: the body
// renders from the client's value.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    clickOpen,
    clickOpen,
    wait,
    { show: true, label: "b" },
    wait,
    wait,
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
  document.querySelector<HTMLElement>("button.child")?.click();
}
