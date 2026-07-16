import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// An `<await>` that rejects during a patch render must abort loudly into the
// document fallback; a resolving await with the same `@catch` patches fine.
export const config: TestConfig = {
  persisted: true,
  // The compute is server-only by design, so a plain client render of this
  // template is impossible.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, mode: "ok" } },
    // Settle the initial await so the live page holds a resolved body.
    flush,
    clickCount,
    // Supported: the re-rendered await resolves; the body is a matched
    // branch and updates fine-grained.
    navigate({ $global: { persisted: true, mode: "ok2" } }),
    clickCount,
    // Unsupported shape, pinned loud: the re-rendered await rejects after
    // the response started streaming; the patch render aborts.
    navigate(
      { $global: { persisted: true, mode: "broken" } },
      { expectError: true },
    ),
    clickCount,
  ],
};
