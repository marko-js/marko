import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container.querySelector("button")!.click();

// The user imports are named `patch`/`live` -- the same names the `?update`
// entry's compiled merge functions once used for their bare parameters.
// `pruneUnusedImports` keeps any import whose local name appears as an
// identifier, so before the merge params became uids the collision revived
// the (possibly server-only) module inside the update entry. The `"./data"`
// sentinel catches the pinned import in the raw update entry, where
// tree-shaking can't mask it.
export const config: TestConfig = {
  persisted: true,
  dom_bundle_excludes: ["server patch", "server live", '"./data"'],
  // The imported helpers stand in for server-only computation; a plain
  // client render of this template is impossible by design.
  skip_csr: true,
  equivalent: false,
  steps: [
    { id: 3, $global: { persisted: true } },
    clickButton,
    navigate({ id: 0, $global: { persisted: true } }),
    clickButton,
    navigate({ id: 5, $global: { persisted: true } }),
    clickButton,
  ],
};
