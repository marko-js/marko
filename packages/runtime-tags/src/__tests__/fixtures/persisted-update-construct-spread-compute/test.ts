import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const childText = (document: Document) =>
  document.querySelector("button.child")?.textContent;

// A `<define>` child spread from a server-only compute inside a constructed
// branch: the construct pass delivers the server-captured spread values as
// holes and never re-executes the compute client-side (it throws there),
// while the closure wire keeps the child's owner read reactive.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { show: false, $global: { persisted: true } },
    navigate({ show: true, $global: { persisted: true } }),
    (document: Document) => assert.equal(childText(document), "server 0"),
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.child")!.click(),
    (document: Document) => assert.equal(childText(document), "server 1"),
  ],
};
