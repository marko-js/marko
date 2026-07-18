import type { TestConfig } from "../../main.test";
import { after } from "../../utils/resolve";

function click(container: Element) {
  container.querySelector("button")!.click();
}

// An action invoked inside another act is its own transaction: the inner
// guess releases when the inner act settles, while the outer act's post-await
// segment still runs inside the outer transaction (its guess holds to the
// end) and both `.pending` flags track their own act.
export const config: TestConfig = {
  steps: [{}, click, after(1), after(2)],
};
