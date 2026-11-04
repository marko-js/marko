import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector("button")!.click();
}

// A `<define>` branch its call hands the client reads the template's input:
// a patch re-renders it there, where the call passes client state.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a" },
    { show: true, v: "b" },
    toggle,
    toggle,
    { show: true, v: "c" },
    toggle,
    { show: true, v: "d" },
    toggle,
  ],
};
