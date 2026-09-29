import type { TestConfig } from "../../main.test";

// The scriptless form: the page still loads the module registering the
// `@catch`, so the flush sends only the error for the client to render.
export const config: TestConfig = {
  patches: true,
  steps: [{ message: "ok" }, { message: "x", boom: true }, { message: "back" }],
};
