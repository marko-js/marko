import type { TestConfig } from "../../main.test";

// A try in a body the child renders both inside its stateful `<if>` and
// outside it; the second render throws into the catch.
export const config: TestConfig = {
  patches: true,
  steps: [
    { fail: false, x: "one" },
    { fail: true, x: "two" },
  ],
};
