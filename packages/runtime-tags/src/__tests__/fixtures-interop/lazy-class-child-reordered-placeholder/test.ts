import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The entry runs after the reorder removed the placeholder, so a type
// registered late hydrates defs whose server-rendered DOM is gone.
export const config: TestConfig = {
  steps: [{}, wait],
  equivalent: false,
  skip_csr: true,
  entry_delay: 1,
  delay_load: ["child"],
};
