import type { TestConfig } from "../../main.test";

// An input object carrying a method the child only calls while rendering
// on the server: no patch should try to serialize it.
export const config: TestConfig = {
  persisted: true,
  steps: [{ text: "axbx" }, { text: "xa" }],
};
