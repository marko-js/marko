import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();

// Pins that a search-page main module tree-shakes its render graph: the
// optimize dom bundle snapshot must retain only the interactive pieces.
export const config: TestConfig = {
  persisted: true,
  dom_bundle_excludes: [
    "getResults is server-only",
    "/search?page=",
    "No results",
    "alpha",
  ],
  // `getResults` is server-only by design.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, search: [{ page: 2, q: "a" }] } },
    clickCount,
    navigate({ $global: { persisted: true, search: [{ page: 3, q: "e" }] } }),
    clickCount,
  ],
};
