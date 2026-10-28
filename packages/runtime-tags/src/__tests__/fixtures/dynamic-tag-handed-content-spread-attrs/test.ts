import type { TestConfig } from "../../main.test";

// A child renders the content it is handed with attributes spread from its
// caller: the content stays, so a patch pairs it.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ y: "y" }, { y: "y" }, { y: "z" }],
};
