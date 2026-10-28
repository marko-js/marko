import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A `<define>` body with a lazy child that a flush creates and the client renders:
// the client's insert takes the child's input once its markup exists.
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
  ],
};

function clickOpen(document: Document) {
  document.querySelector<HTMLElement>("button.open")!.click();
}

function clickChild(document: Document) {
  document.querySelector<HTMLElement>("button.child")?.click();
}
