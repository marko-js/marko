import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A `<const>` of input in an `<if>` a patch creates, joined with state and read
// by an effect: the effect runs on creation and on each change.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    clickOpen,
    wait,
    { show: true, label: "b" },
    wait,
    clickOpen,
    wait,
    { show: true, label: "c" },
    wait,
  ],
};

function clickOpen(document: Document) {
  document.querySelector<HTMLElement>("button.open")!.click();
}
