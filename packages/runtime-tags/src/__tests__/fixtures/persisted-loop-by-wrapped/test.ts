import type { TestConfig } from "../../main.test";

// A server keyer wrapped in a call/member shape must still reject: the
// check walks the whole keyer expression, not just its root read.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
