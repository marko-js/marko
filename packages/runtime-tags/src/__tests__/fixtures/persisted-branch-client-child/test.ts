import type { TestConfig } from "../../main.test";

// A custom tag inside client-owned structure: its server writes would
// ride the branch partial the frame no longer carries.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
