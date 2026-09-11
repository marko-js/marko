import type { TestConfig } from "../../main.test";

// Head content is document content: a frame patches a title's text and a
// meta's attribute like any element's.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { title: "Cart", description: "your cart", body: "a" },
    { title: "Search", description: "results", body: "b" },
  ],
};
