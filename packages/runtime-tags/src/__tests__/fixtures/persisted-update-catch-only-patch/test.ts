import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Async fragment matrix, the catch-only `<try>` (no `<@placeholder>`) on
// the MATCHED-PATCH path -- the counterpart to
// persisted-update-fragment-catch-only, which pins that the same shape
// inside a fragment capture aborts. Same-route it is a supported shape as
// long as the await RESOLVES: the live page already holds the resolved
// body (a matched branch), so the patch needs no placeholder machinery --
// the re-rendered body arrives as ordinary fills in a later frame and
// updates fine-grained. A REJECTION still has no patch delivery channel
// (async catch is reorder-based), so it aborts the render loudly
// (`tryCatch`'s `state.patch` guard in html/writer.ts) into the router's
// full document fallback. Client state survives both.
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
