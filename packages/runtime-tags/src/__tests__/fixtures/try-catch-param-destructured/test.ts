import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// A `<@catch>`'s param destructures the error it renders with.
export const config: TestConfig = {
  // A resumed page caught on the server; a client render catches after it starts.
  equivalent: false,
  steps: [{}, wait, flush],
};
