import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>("#toggle")!.click();
}

// A body a template names by its own state takes a later patch's value of
// what it reads, as the dynamic tag naming the template hands it on.
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
