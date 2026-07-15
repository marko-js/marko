import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// The search-page shape whose slim main module must tree-shake its render
// graph: a request-derived conditional over a server-only compute, a keyed
// results loop, and a pagination loop whose branches mix a loop param with
// promoted `$global` reads -- both as a conditional (`page === search.page`)
// and as an owner-chain href closure. The optimize dom bundle snapshot IS
// the assertion artifact: main should retain only the interactive pieces.
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
