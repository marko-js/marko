import assert from "assert";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const item = (document: Document) =>
  document.querySelector<HTMLButtonElement>(
    'button[data-key="parent-beta-marker:shared-item"]',
  )!;
let watchedNode: HTMLButtonElement;
const clickWatch = (document: Document) => {
  watchedNode = item(document);
  watchedNode.click();
};
// Matched keys keep DOM identity and client state across navigations, even
// when a nested keyed item reappears under a re-filtered parent list.
const assertWatching = (document: Document) => {
  assert.strictEqual(item(document), watchedNode);
  assert.equal(item(document).textContent, "watching");
};

export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, filter: "All" } },
    clickWatch,
    navigate({ $global: { persisted: true, filter: "Beta" } }),
    assertWatching,
    navigate({ $global: { persisted: true, filter: "All" } }),
    assertWatching,
  ],
};
