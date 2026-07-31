import type { TestConfig } from "../../main.test";

export function click(document: Document) {
  document.querySelector("button")!.click();
}

// Exercises every patched render-effect helper with direct, unpatched writes.
// `render-effect-helpers-async` renders the same template behind a client
// `<await>`, so the queueing patches apply; its per-step rendered HTML must
// match this fixture's exactly -- only the mutation logs may differ.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click, click],
};
