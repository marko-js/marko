import type { TestConfig } from "../../main.test";

// Aliasing an import cannot smuggle it past the scan: any referenced
// module binding in the child fails closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
