import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const bump = (document: Document) =>
  (document.defaultView as unknown as { widgetBump(): void }).widgetBump();
const widgetText = (document: Document) =>
  document.querySelector("b.widget")!.textContent;

// A child template whose nucleus causes (a `<let>` and a `<script>`) only
// resolve at finalize must stay live despite its stateless custom tag; its
// state survives a patch navigation through the parent.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true } },
    bump,
    (document: Document) => assert.equal(widgetText(document), "count 1"),
    navigate({ $global: { persisted: true } }),
    (document: Document) => assert.equal(widgetText(document), "count 1"),
    bump,
    (document: Document) => assert.equal(widgetText(document), "count 2"),
  ],
};
