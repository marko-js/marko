import type { TestConfig } from "../../main.test";

// A page whose only client code installs the router (as an app template's
// script does) still patches.
export const config: TestConfig = {
  patches: true,
  steps: [{}, {}],
};
