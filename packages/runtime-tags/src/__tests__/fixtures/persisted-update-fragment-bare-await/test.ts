import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Async correctness audit, item 6 (designs/persisted-pages-roadmap.md
// "Correctness"; designs/persisted-pages-architecture.md "Fragment frames",
// v1 limits), PINNED: a bare `<await>` inside a fragment's content -- no
// `<try>` placeholder boundary -- must abort the render (feeding the
// router's full-navigation fallback) rather than emit a corrupt frame. See
// `html/writer.ts`'s `_await`: `chunk.fragment && !chunk.fragmentAsync`.
export const config: TestConfig = {
  persisted: "fragments",
  // The compute is server-only by design, so a plain client render of this
  // template is impossible.
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
        range: "day",
      },
    }),
  ],
};
