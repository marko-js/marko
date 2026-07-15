import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Async correctness audit, item 6 (designs/persisted-pages-roadmap.md
// "Correctness"; designs/persisted-pages-architecture.md "Fragment frames",
// v1 limits), PINNED: a catch-only `<try>` boundary (no `<@placeholder>`)
// around async content inside a fragment must abort the render rather than
// emit a corrupt frame -- the async catch machinery is reorder-based with
// no update/fragment story yet. See `html/writer.ts`'s `tryCatch`:
// `chunk.fragment` check.
export const config: TestConfig = {
  persisted: true,
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
        persistedCrossRoute: true,
        view: "reports",
        range: "day",
      },
    }),
  ],
};
