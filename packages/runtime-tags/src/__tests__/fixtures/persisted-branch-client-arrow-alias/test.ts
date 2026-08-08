import type { TestConfig } from "../../main.test";

// An alias of a root-declared derived arrow: only canonical grains
// refresh as fills, so the alias read fails closed (call `mk` directly).
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
