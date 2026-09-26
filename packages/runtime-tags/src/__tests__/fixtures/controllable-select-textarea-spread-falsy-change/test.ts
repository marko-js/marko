import type { TestConfig } from "../../main.test";

// A spread claims `valueChange` by key, as the client does, so a falsy handler
// renders no `valuechange` attribute on the server.
export const config: TestConfig = {
  steps: [{ rest: { valueChange: 0 } }],
};
