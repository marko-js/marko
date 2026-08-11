import type { TestConfig } from "../../main.test";
import { after, flush } from "../../utils/resolve";

// The trigger script ships in the first chunk while `#footer` only arrives
// after a flush boundary, so the selector misses and the module loads eagerly.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ value: 1 }, after(1), flush, after(5)],
};
