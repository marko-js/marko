import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// patch-created-row-join-fill with its tag also rendered by the client, so the
// optimized build ships the declaration whose fill replaces the join's too.
export const config: TestConfig = {
  patches: true,
  steps: [
    { tally: [1, 2], type: "a", settled: 10 },
    { tally: [1, 2, 3], type: "a", settled: 20 },
    click,
    { tally: [1, 2, 3], type: "a", settled: 30 },
  ],
};
