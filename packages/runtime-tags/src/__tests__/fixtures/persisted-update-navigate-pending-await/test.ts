import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

// Navigation resolves a token-proven pending boundary while a stale document
// reorder remains buffered; only post-navigation content may reach the page.
export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  // This is an SSR document-stream race with no CSR equivalent.
  skip_csr: true,
  steps: [
    {
      title: "First",
      data: "pre-nav-data",
      tick: 5,
      $global: { persisted: true },
    },
    // Keep the placeholder live for the next navigation's token.
    navigate({
      title: "Second",
      data: "post-nav-data",
      tick: 6,
      $global: { persisted: true },
    }),
    // Only now let the original (pre-navigation) response's buffered
    // reorder chunk land -- after the navigation has already applied.
    flush,
  ],
};
