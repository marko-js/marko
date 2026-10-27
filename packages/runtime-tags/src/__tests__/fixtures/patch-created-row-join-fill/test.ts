import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// A row a patch creates joins client state with a closure whose declaration
// fills it: the row subscribes, so a later patch of that value reaches it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { tally: [1, 2], type: "a", settled: 10 },
    { tally: [1, 2, 3], type: "a", settled: 20 },
    click,
    { tally: [1, 2, 3], type: "a", settled: 30 },
  ],
};
