import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A server loop's row holds the await while the client's promise is pending.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { items: ["r"], label: "a" },
    clickOpen,
    wait,
    { items: ["r"], label: "b" },
    wait,
    clickSettle,
    wait,
    { items: ["r"], label: "c" },
    wait,
  ],
};

function clickOpen(document: Document) {
  document.querySelector<HTMLButtonElement>("button.open")!.click();
}

function clickSettle(document: Document) {
  document.querySelector<HTMLButtonElement>("button.settle")!.click();
}
