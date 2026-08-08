import type { TestConfig } from "../../main.test";

// A prop the child renders receives a renderer: a server value there
// would cross the wire as a function, so the feed fails closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
