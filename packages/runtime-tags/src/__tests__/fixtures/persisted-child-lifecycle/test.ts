import type { TestConfig } from "../../main.test";

// `<lifecycle>` compiles through the dynamic-tag rules and stays closed in
// any persisted compile, so an instance using it rejects at the child.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
