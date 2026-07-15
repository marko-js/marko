import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container.querySelector("button")!.click();

// The user imports are named `createPatch`/`have` -- the `?update` entry's
// own export names. The generated patch factory must declare a program-scope
// uid (a fixed `createPatch` declaration would be a duplicate binding), and
// export-specifier `exported` names must not count as usage in
// `pruneUnusedImports` (a pinned `have` import would revive the possibly
// server-only module inside the update entry). The `"./data"` sentinel
// catches the pinned import in the raw update entry, where tree-shaking
// can't mask it.
export const config: TestConfig = {
  persisted: true,
  dom_bundle_excludes: ["server createPatch", "server have", '"./data"'],
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
