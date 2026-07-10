import type { TestConfig } from "../../main.test";

// SSR/CSR should be equivalent here (no async). `equivalent: false` is set
// only to capture both snapshots: on resume, the `#text/1` marker's previous
// sibling is the `</span>` element (the empty dynamic text wrote no text
// node and no `<!>` separator was emitted), so the span is mistaken for the
// text node and the click's update is silently lost.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    {},
    (container) => {
      container.querySelector("button")!.click();
    },
  ],
};
