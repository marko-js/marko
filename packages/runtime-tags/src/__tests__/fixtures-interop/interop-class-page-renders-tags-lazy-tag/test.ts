import type { TestConfig } from "../../main.test";

// A Class page entry never sets up the Tags asset writing, so the Tags lazy tag
// in its content resolves its assets through what its importer passes.
export const config: TestConfig = {
  equivalent: false,
  skip_csr: true,
};
