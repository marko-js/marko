import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// patch-created-row-join-fill without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { tally: [1, 2], type: "a", settled: 10 },
    { tally: [1, 2, 3], type: "a", settled: 20 },
    click,
    { tally: [1, 2, 3], type: "a", settled: 30 },
  ],
};
