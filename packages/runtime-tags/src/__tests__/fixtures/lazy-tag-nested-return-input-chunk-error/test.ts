import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The setup chunk lands but an input chunk fails: the batch never sets up
// and the failure reaches the <try>, with no clone or setup on the branch.
export const config: TestConfig = {
  steps: [{}, mount, wait, wait],
  reject_load: ["input_label"],
  equivalent: false,
};

function mount(document: Document) {
  document.querySelector<HTMLButtonElement>(".mount")!.click();
}
