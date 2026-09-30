import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

// The setup chunk lands but an input chunk fails: the batch never sets up
// and the failure reaches the <try>, with no clone or setup on the branch.
export const config: TestConfig = {
  steps: [{}, click(".mount"), wait, wait],
  reject_load: ["input_label"],
  equivalent: false,
};
