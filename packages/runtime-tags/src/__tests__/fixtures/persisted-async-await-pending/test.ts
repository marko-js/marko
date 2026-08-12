import type { TestConfig } from "../../main.test";

// An `<await>` still pending when the patch frame flushes: the runtime
// poisons the frame so the client rejects and navigates (never a torn
// multi-frame patch).
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [{ title: "Store" }, { title: "Store!" }],
};
