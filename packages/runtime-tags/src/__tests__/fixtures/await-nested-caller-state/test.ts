import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a" },
    clickOpen,
    wait,
    { label: "b" },
    wait,
    clickOpen,
    wait,
    { label: "c" },
    wait,
  ],
};

function clickOpen(document: Document) {
  document.querySelector<HTMLButtonElement>("button.open")!.click();
}
