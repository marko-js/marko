import type { TestConfig } from "../../main.test";

// A throw in a `<try>` with only a `@placeholder` passes on to the enclosing
// `@catch`, which the patch creates, as a throw in a document does.
export const config: TestConfig = {
  patches: true,
  steps: [{ err: "" }, { err: "e1" }],
};
