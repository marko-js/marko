import type { TestConfig } from "../../main.test";

// Head content is document content: a flush patches a title's text and a
// meta's attribute like any element's.
export const config: TestConfig = {
  patches: true,
  // Renders the whole document, which a client render cannot mount.
  skip_csr: true,
  equivalent: false,
  steps: [
    { title: "Cart", description: "your cart", body: "a" },
    { title: "Search", description: "results", body: "b" },
  ],
};
