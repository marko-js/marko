import type { TestConfig } from "../../main.test";

// A `@catch` a patch creates renders params beside its error: its renderer's
// setup renders what reads no error, so the patch fills only the error's holes.
export const config: TestConfig = {
  patches: true,
  steps: [{ msg: "a" }, { fail: true, msg: "b" }],
};
