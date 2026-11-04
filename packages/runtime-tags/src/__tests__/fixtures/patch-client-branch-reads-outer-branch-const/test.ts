import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector("button")!.click();
}

// A branch its caller's client state selects reads a value of the branch
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
    { show: true, v: "d" },
    toggle,
  ],
};
