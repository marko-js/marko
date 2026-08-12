import type { TestConfig } from "../../main.test";

// A catch-only `<try>` (no `<await>`): the body renders normally and
// patches pair its scope; the catch branch only materializes on client
// errors.
export const config: TestConfig = {
  persisted: true,
  steps: [{ message: "ok" }, { message: "still ok" }],
};
