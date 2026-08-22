import type { TestConfig } from "../../main.test";

// Group params carry LEAF property names: matching walks up to the input
// ROOT property, so a nested structural feed still gates its group.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
