import type { TestConfig } from "../../main.test";

// An untracked call can change server-side (capture polarity), so it
// counts as server-fed and cannot mix with client state on one tag.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
