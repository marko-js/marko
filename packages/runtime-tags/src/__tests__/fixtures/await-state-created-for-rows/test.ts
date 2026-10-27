import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// An `<await>` of client state in rows a patch creates.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { items: ["a"] },
    clickOpen,
    wait,
    wait,
    { items: ["a", "b"] },
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
