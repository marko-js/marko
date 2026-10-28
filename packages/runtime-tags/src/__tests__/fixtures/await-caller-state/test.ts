import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a" },
    clickOpen,
    wait,
    wait,
    { label: "b" },
    wait,
    wait,
    clickOpen,
    wait,
    wait,
  ],
};

function clickOpen(document: Document) {
  document.querySelector<HTMLElement>("button.open")!.click();
}
