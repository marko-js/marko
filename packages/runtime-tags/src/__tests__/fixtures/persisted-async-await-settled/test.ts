import type { TestConfig } from "../../main.test";

// A settled `<await>` on the page with patched values inside and around it: async boundaries fail closed at compile even when the promise would settle before the frame flushes.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
