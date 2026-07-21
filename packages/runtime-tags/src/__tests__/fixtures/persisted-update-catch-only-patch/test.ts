import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();

// A catch-only `<try>` on the matched-patch path: a resolving await updates
// the matched body as ordinary fills; a rejection aborts the render loudly.
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
    // Supported: resolves during the patch; the matched body updates
    // through ordinary fills in its own frame.
    navigate({ $global: { persisted: true, mode: "ok2" } }),
    clickCount,
    // Unsupported shape, pinned loud: the re-rendered await rejects; the
    // patch render aborts.
    navigate(
      { $global: { persisted: true, mode: "broken" } },
      { expectError: true },
    ),
    clickCount,
  ],
};
