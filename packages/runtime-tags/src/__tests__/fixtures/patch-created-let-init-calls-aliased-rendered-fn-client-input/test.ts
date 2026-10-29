import type { TestConfig } from "../../main.test";

// patch-created-let-init-calls-aliased-fn-client-input where the function also
// renders: its seed carries it, so the join's init writes nothing.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a", w: "1" },
    { show: true, v: "a", w: "2" },
    clickSet,
    { show: true, v: "a", w: "3" },
    { show: false, v: "b", w: "4" },
    clickSet,
    { show: true, v: "b", w: "5" },
  ],
};

function clickSet(document: Document) {
  document.querySelector<HTMLButtonElement>("button.set")!.click();
}
