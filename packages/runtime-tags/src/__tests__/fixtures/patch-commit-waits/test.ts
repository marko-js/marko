import assert from "node:assert/strict";
import { setTimeout as nextTask } from "node:timers/promises";

import type { TestConfig } from "../../main.test";

async function flushesWait(document: Document) {
  assert.deepEqual(
    await patched(document, "(mark(1),{})\n(mark(2),{})\n", commitLater),
    ["commit", "committed", "1", "applied", "2", "applied", "end"],
  );
}

async function endWaits(document: Document) {
  assert.deepEqual(await patched(document, "", commitLater), [
    "commit",
    "committed",
    "end",
  ]);
}

// A flush that stops its response (a script navigating, say) leaves the
// flushes waiting behind it unapplied.
async function stoppedFlushesStay(document: Document) {
  assert.deepEqual(
    await patched(document, "(stop(),{})\n(mark(2),{})\n", commitLater),
    ["commit", "committed"],
  );
}

// A commit that stops its response (an app canceling the URL change, say)
// leaves all of it unapplied.
async function stoppedCommitAppliesNothing(document: Document) {
  assert.deepEqual(await patched(document, "(mark(1),{})\n", commitStopping), [
    "commit",
  ]);
}

// A commit the browser completes in a later task (a held navigation) returns a
// promise: the response's flushes and its end apply only once it settles.
function commitLater(calls: string[]) {
  return nextTask().then(() => void calls.push("committed"));
}

function commitStopping(_: string[], stop: () => void) {
  stop();
}

// Applies `body` as a patch whose commit is `commit`, and lists what happened.
async function patched(
  document: Document,
  body: string,
  commit: (calls: string[], stop: () => void) => void | Promise<void>,
) {
  const page = document.defaultView as unknown as {
    patch: typeof import("@marko/runtime-tags/dom/patch").patch;
    mark(n: number): void;
    stop(): void;
  };
  const navigation = new AbortController();
  const [, apply] = page.patch({ renderId: "_" }, navigation.signal);
  const calls: string[] = [];
  page.mark = (n) => calls.push(String(n));
  page.stop = () => navigation.abort();
  const reported = new Promise<void>((resolve) =>
    apply(
      new Response(body, { headers: { "x-marko-patch": "b" } }),
      () => (calls.push("commit"), commit(calls, page.stop)),
      () => calls.push("applied"),
      () => resolve(void calls.push("end")),
      () => resolve(void calls.push("fail")),
    ),
  );
  // The commit settles within the next task; what it lets apply, by the one after.
  await nextTask();
  await nextTask();
  // A stopped response reports nothing.
  if (!navigation.signal.aborted) await reported;
  return calls;
}

export const config: TestConfig = {
  patches: true,
  // The patched page's own responses; a client render has none.
  skip_csr: true,
  steps: [
    { label: "a" },
    flushesWait,
    endWaits,
    stoppedFlushesStay,
    stoppedCommitAppliesNothing,
    { label: "b" },
  ],
};
