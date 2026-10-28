import type { TestConfig } from "../../main.test";

// The scriptless form: the page still loads the module registering the
// `@catch`, so the flush sends only the error for the client to render.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [{ message: "ok" }, { message: "x", boom: true }, { message: "back" }],
};
