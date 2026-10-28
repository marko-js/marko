import type { TestConfig } from "../../main.test";

// Branches selected by `$global` reads appear and vanish between patches;
// each needs a shell so the patch can construct the new branch.
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
