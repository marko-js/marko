import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const scriptRuns = (document: Document) =>
  (document.defaultView as unknown as { scriptRuns?: number }).scriptRuns;

// A `<script>` referencing no bindings is still an effect: its section must
// classify nucleus so the script runs when its branch arrives via patch (and
// again when the branch is rebuilt).
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { show: false, $global: { persisted: true } },
    navigate({ show: true, $global: { persisted: true } }),
    (document: Document) => assert.equal(scriptRuns(document), 1),
    navigate({ show: false, $global: { persisted: true } }),
    navigate({ show: true, $global: { persisted: true } }),
    (document: Document) => assert.equal(scriptRuns(document), 2),
  ],
};
