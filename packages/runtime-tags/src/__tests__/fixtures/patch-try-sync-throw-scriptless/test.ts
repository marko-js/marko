import type { TestConfig } from "../../main.test";

// The scriptless form: the page still loads the module registering the
// `@catch`, so the flush sends only the error for the client to render.
export const config: TestConfig = {
  patches: true,
  // A patch re-renders a caught `<try>` from the server, which recovers;
  // a client render keeps its `@catch`.
  skip_csr: true,
  steps: [{ message: "ok" }, { message: "x", boom: true }, { message: "back" }],
};
