import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A `<define>` body called in a root `<await>` of client state, reading a
// server value the patch changes.
export const config: TestConfig = {
  patches: true,
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
