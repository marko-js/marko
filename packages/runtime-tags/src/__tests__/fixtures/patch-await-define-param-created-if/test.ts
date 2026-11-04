import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// An `<await>` of a `<define>` param every call passes client state, in an
// `<if>` a patch creates: the client settles it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    clickOpen,
    wait,
    wait,
    { show: true, label: "b" },
    wait,
    wait,
    clickOpen,
    wait,
    wait,
    { show: true, label: "c" },
    wait,
    wait,
  ],
};

function clickOpen(document: Document) {
  document.querySelector<HTMLElement>("button.open")!.click();
}
