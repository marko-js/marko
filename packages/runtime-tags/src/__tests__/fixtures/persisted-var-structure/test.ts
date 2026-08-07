import type { TestConfig } from "../../main.test";

// A client-fed return feeding a structural test: the branch selection
// would diverge between client recompute and server frames, so the
// call site must fail closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
