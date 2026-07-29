import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const checked = (document: Document) => ({
  pro: document.querySelector<HTMLInputElement>("input.pro")?.checked,
  basic: document.querySelector<HTMLInputElement>("input.basic")?.checked,
});

// An environment-selected controllable default (`checkedValue` from a
// `typeof window` branch): a constructed branch must reproduce the server's
// document render (`.pro` checked) — never the browser-module value and
// never neither. Pins the capture polarity (env-divergent module consts
// are variant-until-proven-invariant) and the static paired `value` attr
// in the wire shell.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { show: false, $global: { persisted: true } },
    navigate({ show: true, $global: { persisted: true } }),
    (document: Document) =>
      assert.deepEqual(checked(document), { pro: true, basic: false }),
  ],
};
