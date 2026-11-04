import type { TestConfig } from "../../main.test";

// The scriptless form: the page still loads the module registering the
// `@catch`, so the flush sends only the error for the client to render; the
// next patch rendering the body reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: [{ message: "ok" }, { message: "x", boom: true }, { message: "back" }],
};
