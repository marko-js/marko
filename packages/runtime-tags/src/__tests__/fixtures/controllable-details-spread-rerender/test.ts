import assert from "node:assert/strict";

import type { TestConfig } from "../../main";

// Tracks observers still attached, so replacing one reads the same as never
// attaching a second.
const trackObservers = (document: Document) => {
  const view = document.defaultView as any;
  const Observer = view.MutationObserver;
  view.__attached = 0;
  view.MutationObserver = class extends Observer {
    constructor(callback: MutationCallback) {
      super(callback);
      view.__attached++;
    }
    disconnect() {
      view.__attached--;
      super.disconnect();
    }
  };
};

const bump = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

const assertNoExtraObservers = (document: Document) => {
  const attached = (document.defaultView as any).__attached;
  assert.ok(
    attached <= 1,
    `two spread re-renders left ${attached} MutationObservers attached`,
  );
};

const toggle = (document: Document) => {
  const details = document.querySelector("details")!;
  details.open = !details.open;
  details.dispatchEvent(new details.ownerDocument.defaultView!.Event("toggle"));
};

// Reached through a spread, the controllable's setup script re-runs on every
// render; its observer has no disconnect of its own, so re-running must not
// accumulate them.
export const config: TestConfig = {
  steps: [
    {},
    trackObservers,
    bump,
    bump,
    assertNoExtraObservers,
    toggle,
    toggle,
  ],
};
