import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function click(container: Element) {
  (container.querySelector("#inc") as HTMLButtonElement).click();
}

// Attr updates that arrive before the lazy child template resolves are
// preserved but not applied to the child — the child first renders from
// the current state on the next interaction after the template loads.
export const config: TestConfig = {
  steps: [{}, click, wait, click],
  equivalent: false,
};
