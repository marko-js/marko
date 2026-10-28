import type { TestConfig } from "../../main.test";

// As patch-child-let-caller-fn, but the caller has no client code: main never
// loads its module, so the function never reaches the client and the patch
// reloads the page.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  skip_fresh_render: true,
  steps: [{ label: "a" }, { label: "b" }],
};
