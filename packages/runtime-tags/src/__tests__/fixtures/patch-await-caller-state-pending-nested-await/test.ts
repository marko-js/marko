import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The client's promise is pending while two patches settle a server `<await>` in its body.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a" },
    clickOpen,
    wait,
    { label: "b" },
    wait,
    { label: "c" },
    wait,
    clickSettle,
    wait,
  ],
};

function clickOpen(document: Document) {
  document.querySelector<HTMLButtonElement>("button.open")!.click();
}

function clickSettle(document: Document) {
  document.querySelector<HTMLButtonElement>("button.settle")!.click();
}
