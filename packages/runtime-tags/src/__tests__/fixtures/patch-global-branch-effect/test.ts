import type { TestConfig } from "../../main.test";

// `$global`-selected branches, each holding an effect that reads an input: a
// document's branch and a created one, which a patch re-runs by the effect's entry.
export const config: TestConfig = {
  patches: true,
  // Renders the whole document, which a client render cannot mount.
  skip_csr: true,
  steps: [
    { msg: "home", $global: { meta: {} } },
    { msg: "docs", $global: { meta: { headings: true } } },
    { msg: "bare", $global: { meta: { headings: true, hideFooter: true } } },
    { msg: "home", $global: { meta: {} } },
  ],
};
