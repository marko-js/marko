import type { TestConfig } from "../../main.test";

// A row's function reads a row value under a branch only page input selects:
// a patch renders the call, so the page ships neither the value nor the function.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "A", items: [1, 2], x: true },
    { a: "B", items: [1, 2], x: true },
    { a: "B", items: [1, 2], x: false },
    { a: "C", items: [1, 2], x: true },
  ],
};
