import type { TestConfig } from "../../main.test";

// Writing a member is not reactive: the effect re-runs for `count` and reads
// the written member, while the template keeps what it rendered.
export const config: TestConfig = {
  steps: [{}, open],
};

function open(document: Document) {
  document.querySelector("button")!.click();
}
