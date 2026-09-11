import type { TestConfig } from "../../main.test";

// An inline script in server-selected structure: it runs when a flush
// reveals the branch, not when a later flush leaves the branch as is, and
// again on a re-reveal.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  // The script leaves state on the page a fresh render lacks.
  skip_fresh_render: true,
  steps: [
    { show: false, note: "a", nonce: "n1" },
    { show: true, note: "a", nonce: "n1" },
    { show: true, note: "b", nonce: "n1" },
    { show: false, note: "b", nonce: "n1" },
    { show: true, note: "b", nonce: "n2" },
  ],
};
