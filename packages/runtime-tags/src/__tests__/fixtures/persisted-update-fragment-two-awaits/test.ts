import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Async correctness audit, item 6 (designs/persisted-pages-roadmap.md
// "Correctness"; designs/persisted-pages-architecture.md "Fragment frames",
// v1 limits), PINNED: more than one pending await inside a single fragment
// placeholder boundary body must abort the render (feeding the router's
// full-navigation fallback) rather than emit a boundary-body entry the
// applier cannot place -- a second pending segment would need
// reorder-marker anchors in the entry's markup. See `html/writer.ts`'s
// `flushPlaceholder` (the `body.async && this.fragment` branch's
// `cur.next` scan).
export const config: TestConfig = {
  persisted: "fragments",
  // The computes are server-only by design, so a plain client render of
  // this template is impossible.
  skip_csr: true,
  equivalent: false,
  error_html: true,
  steps: [
    { $global: { persisted: true, view: "home" } },
    clickCount,
    navigate({
      $global: {
        persisted: true,
        persistedSeed: true,
        persistedFragment: true,
        view: "reports",
        topic: "sales",
      },
    }),
  ],
};
