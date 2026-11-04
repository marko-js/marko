import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector("button")!.click();
}

// A `<define>` branch its call hands the client reads a value of the branch
// around it: a patch writes that value for the client to render it again.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a" },
    { show: true, v: "b" },
    toggle,
    toggle,
    { show: true, v: "c" },
    toggle,
  ],
};
