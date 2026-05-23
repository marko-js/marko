import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function click(container: Element) {
  (container.querySelector("#inc") as HTMLButtonElement).click();
}

// Two attr updates arrive before the lazy class child resolves. The class
// runtime stores a single component reference and calls forceUpdate() once
// after load — it does not buffer individual intermediate values. The
// component re-renders from its current state at load time (value=2).
export const config: TestConfig = {
  steps: [{}, click, click, wait, click],
  equivalent: false,
};
