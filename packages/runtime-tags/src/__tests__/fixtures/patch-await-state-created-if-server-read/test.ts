import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// An `<await>` of client state in an `<if>` a patch creates, whose body reads a
// server value the patch changes.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    clickOpen,
    wait,
    { show: true, label: "b" },
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
