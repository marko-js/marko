import type { TestConfig } from "../../main.test";

// One hole reading both params fuses them into one group: the server-fed
// label has no fill to deliver through, so the state mix rejects.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
