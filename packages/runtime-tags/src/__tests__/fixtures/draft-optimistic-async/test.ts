import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function click(container: Element) {
  container.querySelector("button")!.click();
}

// The draft shows the +5 guess and `.pending` is true while the act is in
// flight; once the server confirms (+1) the draft re-derives to the truth and
// `.pending` resets.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click, wait],
};
