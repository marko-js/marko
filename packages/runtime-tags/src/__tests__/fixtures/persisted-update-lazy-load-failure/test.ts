import type { TestConfig } from "../../main.test";
import { flushIdle, navigate, wait } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();
const tapGadget = (container: Element) =>
  container.querySelector<HTMLButtonElement>(".gadget__tap")!.click();
const breakChunk = (container: Element) => {
  (container.ownerDocument.defaultView as any).__MARKO_LAZY_CHUNK_GONE__ = true;
};

// A lazy module whose load() rejects mid-navigation must surface through the
// `patch(fail)` sink for document fallback while the page stays live.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home", title: "", label: "" } },
    clickCount,
    // The gadget arrives as fragment markup; its ready batch parks and the
    // idle-gated load is triggered.
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "detail",
        title: "Widget One",
        label: "alpha",
      },
    }),
    breakChunk,
    // Idle fires, the chunk import rejects, and the failure reaches the
    // transport sink instead of being swallowed.
    flushIdle,
    wait,
    // The stalled subtree never became interactive...
    tapGadget,
    // ...while the live page above it still is.
    clickCount,
  ],
};
