import assert from "node:assert";

import type { TestConfig } from "../../main.test";

// The only `other` read that outlives the effect run is the one inside the
// closure `onMount` hands to `addEventListener`, so the first lifecycle keeps no
// subscription to `other` and its `onUpdate` never re-runs. The second reads
// `other` in `onUpdate` itself, which is the dependency the docs promise, so it
// keeps re-running. The listener still reports the value `other` holds when the
// key is pressed, not the one it held when the listener was attached.
const bump = (document: Document) => {
  document.querySelector<HTMLButtonElement>("#bump")!.click();
};

const pressKey = (document: Document) => {
  const window = document.defaultView!;
  document.dispatchEvent(new window.Event("keydown"));
};

const checkRuns = (document: Document) => {
  const { n } = document.defaultView as unknown as { n?: number };
  const text = (id: string) => document.getElementById(id)!.textContent;
  assert.ok(
    n === undefined,
    `onUpdate ran ${n} times for a change only a listener created by onMount reads, expected it never to run`,
  );
  assert.strictEqual(
    text("own"),
    "own 3",
    `the lifecycle reading other in onUpdate itself showed ${JSON.stringify(text("own"))}, expected "own 3"`,
  );
  assert.strictEqual(
    text("listener"),
    "listener saw 3",
    `the listener created by onMount reported ${JSON.stringify(text("listener"))}, expected the live value 3`,
  );
};

export const config: TestConfig = {
  steps: [{}, bump, bump, bump, pressKey, checkRuns],
};
