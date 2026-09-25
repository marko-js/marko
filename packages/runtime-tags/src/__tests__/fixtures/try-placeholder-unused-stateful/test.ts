import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Nothing can go pending client side, so the placeholder's renderer is never
// registered, yet the streamed placeholder still resumes its effects.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait],
};
