import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The child's `<if>` holds the await while the client's promise is pending.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: true, label: "a" },
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
