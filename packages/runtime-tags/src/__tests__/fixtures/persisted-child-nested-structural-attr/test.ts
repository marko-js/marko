import type { TestConfig } from "../../main.test";

// A plain attribute feeding a NESTED structural param matches through the
// input root property, so a provenance-free feed still fails closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
