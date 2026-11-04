import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The same with a stateful `<if>` reading the value: the effect re-runs when a
// later patch changes it.
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
    clickOpen,
    wait,
    { show: true, label: "c" },
    wait,
    wait,
    clickOpen,
    wait,
  ],
};

function clickOpen(document: Document) {
  document.querySelector<HTMLElement>("button.open")!.click();
}
