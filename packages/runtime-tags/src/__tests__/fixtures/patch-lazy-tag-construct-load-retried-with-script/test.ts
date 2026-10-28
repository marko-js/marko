import type { TestConfig } from "../../main.test";

// patch-lazy-tag-construct-load-retried where the page's own client code loads
// the input signal's chunk, which imports the chunk that fails.
export const config: TestConfig = {
  // Debug intentionally logs the load-failure diagnostic optimize cannot.
  skip_parity: true,
  patches: true,
  equivalent: false,
  expect_rejection: true,
  stay_on_rejection: true,
  reject_load_once: ["child.mjs"],
  steps: [
    { show: false, label: "a" },
    { show: true, label: "a" },
    { show: true, label: "b" },
    click,
  ],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
