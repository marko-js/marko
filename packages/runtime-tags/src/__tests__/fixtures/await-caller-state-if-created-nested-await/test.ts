import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A patch creates the `<if>` holding the await, whose body holds a server `<await>`.
export const config: TestConfig = {
  equivalent: false,
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
