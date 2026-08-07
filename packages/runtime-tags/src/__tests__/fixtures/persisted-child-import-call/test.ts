import type { TestConfig } from "../../main.test";

// Imported code can hide `$global` (or any server knowledge) no signal
// tracks: calling it inside a skipped region fails closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
