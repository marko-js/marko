import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// An `<await>` of client state in an `<if>` a patch creates: the client renders
// its body, a lazy child and an effect included.
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
  ],
};

function clickOpen(document: Document) {
  document.querySelector<HTMLElement>("button.open")!.click();
}

function clickChild(document: Document) {
  document.querySelector<HTMLElement>("button.child")?.click();
}
