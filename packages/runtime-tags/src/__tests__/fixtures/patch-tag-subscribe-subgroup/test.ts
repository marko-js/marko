import type { TestConfig } from "../../main.test";

// R137's sub-group crash through `buildSubscribe`: a tag reads a child's tag
// variable (with a valueChange), a loop item and an input member under an
// `<if>` in the loop (marko-idle activity-banner, at ab311ea2d41).
export const config: TestConfig = {
  patches: true,
  steps: [
    { tally: [1, 2], type: "a", settled: 10 },
    { tally: [1, 2, 3], type: "a", settled: 20 },
    click,
  ],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
