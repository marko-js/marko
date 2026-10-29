import type { TestConfig } from "../../main.test";

// A resumed child renders page content its `<let>` holds, which no client code sets:
// the page keeps the instance, so no patch ships its shell.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }],
};
