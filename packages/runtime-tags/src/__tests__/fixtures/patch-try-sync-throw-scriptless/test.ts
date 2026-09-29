import type { TestConfig } from "../../main.test";

// The scriptless form: the catch has no client renderer, so the flush
// carries its html rendered on the server.
export const config: TestConfig = {
  patches: true,
  steps: [{ message: "ok" }, { message: "x", boom: true }, { message: "back" }],
};
