import type { TestConfig } from "../../main.test";

// An inert call can change server-side, but a withheld capture has no
// delivery path, so it cannot mix into a client-fed input group.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
