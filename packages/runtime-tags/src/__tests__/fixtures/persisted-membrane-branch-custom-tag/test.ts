import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const detailText = (document: Document) =>
  document.querySelector("p.detail")!.textContent;

// A stateless custom tag beside a state closure (no native handler in the
// branch) must not flip the branch to scaffold: the client count survives a
// matched patch navigation.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { detail: true, $global: { persisted: true } },
    clickCount,
    (document: Document) => assert.equal(detailText(document), "detail 1"),
    navigate({ detail: true, $global: { persisted: true } }),
    (document: Document) => assert.equal(detailText(document), "detail 1"),
    clickCount,
    (document: Document) => assert.equal(detailText(document), "detail 2"),
  ],
};
