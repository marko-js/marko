import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector("button")!.click();
}

// A branch value a patch writes where its caller's client state renders it: the
// page ships the value, not the input it derives from.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a" },
    { show: true, v: "b" },
    toggle,
    toggle,
    { show: true, v: "c" },
  ],
};
