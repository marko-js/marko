import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// A persisted navigation that freshly creates a branch containing a
// `<try>`/`<await>` over a server-only async computation: the promise
// compute is skipped client-side (it cannot run there), the await branch
// stays detached, and the awaited body's own frame attaches and fills it.
export const config: TestConfig = {
  persisted: true,
  // The computes genuinely cannot run in the browser, so a plain client
  // render of this template is impossible by design.
  skip_csr: true,
  equivalent: false,
  steps: [
    { productId: 0, $global: { persisted: true } },
    clickCount,
    navigate({ productId: 7, $global: { persisted: true } }),
    clickCount,
    navigate({ productId: 0, $global: { persisted: true } }),
    navigate({ productId: 3, $global: { persisted: true } }),
  ],
};
