import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}

// As `patch-fill-if-effect-hole`, the hole computing from the value in place:
// the same registration carries the branch's effect.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, label: "a" },
    click,
    { show: true, label: "b" },
    click,
    { show: true, label: "c" },
  ],
};
