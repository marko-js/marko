import type { TestConfig } from "../../main.test";

// A tag variable takes its `<define>`'s params from the call: `y`, from input
// alone, resumes nothing, while `x` follows the state it is passed.
export const config: TestConfig = { steps: [{ b: 1 }, click] };

function click(document: Document) {
  document.querySelector("button")!.click();
}
