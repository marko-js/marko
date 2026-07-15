import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Async fragment matrix: an `<await>` that REJECTS during a patch render.
// Async catch delivery is reorder-based (placeholder marks, out-of-order
// swap scripts) with no patch/fragment story yet, so the render must abort
// loudly (`tryCatch`'s `state.patch` guard in html/writer.ts) instead of
// emitting a frame the applier cannot place -- the stream error reaches the
// run router mid-response and it falls back to a full document navigation,
// whose ordinary reorder stream renders this same catch branch. The
// successful navigation before it pins the supported half: with the same
// `@catch` present, a patch whose await RESOLVES updates the matched body
// through ordinary fills. Client state survives both.
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
