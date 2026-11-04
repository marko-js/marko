import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector("button")!.click();
}

// A scope a patch creates seeds a value a `<define>` body reads under the
// param its call passes only where that call's group is the client's.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, on: true, v: "a" },
    { show: true, on: true, v: "b" },
    toggle,
    toggle,
    { show: true, on: false, v: "b" },
    { show: true, on: true, v: "b" },
  ],
};
