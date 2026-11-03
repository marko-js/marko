import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A patch creates the `<if>` holding the await while the client's promise is pending.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    clickOpen,
    wait,
    { show: true, label: "b" },
    wait,
    clickSettle,
    wait,
    { show: true, label: "c" },
    wait,
  ],
};

function clickOpen(document: Document) {
  document.querySelector<HTMLButtonElement>("button.open")!.click();
}

function clickSettle(document: Document) {
  document.querySelector<HTMLButtonElement>("button.settle")!.click();
}
