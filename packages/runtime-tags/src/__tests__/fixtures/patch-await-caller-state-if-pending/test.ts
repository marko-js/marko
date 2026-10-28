import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A paired `<if>` holds the await while the client's own promise is pending.
export const config: TestConfig = {
  patches: true,
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
