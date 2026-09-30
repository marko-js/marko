import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Class content settles after a tags `@catch` around it fired: the tags content
// it renders is cut with the body, so its effect never runs.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait],
};
