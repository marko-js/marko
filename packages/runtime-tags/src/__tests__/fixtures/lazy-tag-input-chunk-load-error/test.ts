import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

// The client-created lazy child's setup chunk resolves but its input-signal
// chunk rejects (a network-level partial failure); <try> must catch it.
export const config: TestConfig = {
  steps: [{}, wait, click("#toggle"), wait],
  reject_load: ["input_value"],
  equivalent: false,
};
