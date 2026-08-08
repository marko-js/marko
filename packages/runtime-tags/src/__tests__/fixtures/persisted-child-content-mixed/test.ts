import type { TestConfig } from "../../main.test";

// An expression mixing server values needs per-hop branch builders the
// content boundary does not install: fail closed (split the holes).
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
