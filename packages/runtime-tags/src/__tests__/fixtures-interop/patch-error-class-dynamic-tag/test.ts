import type { TestConfig } from "../../main.test";

// A class API template a tags API dynamic tag may render fails its own
// compile with `patches`, so no dynamic tag gets one.
export const config: TestConfig = {
  patches: true,
  error_compiler: ["components/class-layout.marko"],
};
