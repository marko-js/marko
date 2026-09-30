import type { TestConfig } from "../../main.test";

// A title's static entities decode once: the document escapes the text on
// the way out and the flush carries the decoded text.
export const config: TestConfig = {
  patches: true,
  // Renders the whole document, which a client render cannot mount.
  skip_csr: true,
  equivalent: false,
  steps: [
    { title: "Cart", body: "a" },
    { title: "Search", body: "b" },
  ],
};
