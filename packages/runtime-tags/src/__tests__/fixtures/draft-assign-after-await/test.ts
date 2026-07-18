import type { TestConfig } from "../../main.test";
import { after } from "../../utils/resolve";

function click(container: Element) {
  container.querySelector("button")!.click();
}

// Awaits in an action body compile to transaction re-entry, so a guess
// assigned after an `await` still joins the act: it holds until the act
// settles instead of being discarded on the next microtask.
export const config: TestConfig = {
  steps: [{}, click, after(1), after(2)],
};
