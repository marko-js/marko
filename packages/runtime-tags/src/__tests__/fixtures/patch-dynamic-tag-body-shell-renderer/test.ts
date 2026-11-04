import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>("#toggle")!.click();
}

// A body a template the patch creates from its shell shows under its own
// state takes a later patch's value of what it reads.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, note: "a" },
    { on: true, note: "b" },
    toggle,
    toggle,
    { on: true, note: "c" },
  ],
};
