import type { TestConfig } from "../../main.test";

// The plain twin of patch-assigned-let-join-seeds-branch: the client renders
// each input.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, a: "a", b: 1 },
    { show: true, a: "b", b: 2 },
    click,
    { show: true, a: "c", b: 3 },
  ],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
