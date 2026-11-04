import type { TestConfig } from "../../main.test";

// A destructured row a function passed to a child captures, declared by its
// own name where that function shadows the row.
export const config: TestConfig = {
  patches: true,
  steps: [
    { items: [{ v: "a" }] },
    { items: [{ v: "b" }] },
    { items: [{ v: "b" }] },
  ],
};
