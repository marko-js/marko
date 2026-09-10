import { READY_FRAME_VAR } from "../common/meta";
import { AccessorProp } from "../common/types";
import { installLoadReady } from "./load";
import {
  applyReadyPatch,
  frameEpoch,
  frameVars,
  installPatchReady,
} from "./patch";
import { queueEffect, run, runEffects } from "./queue";
import {
  installReady,
  isReady,
  patchRender,
  ready,
  readyFailed,
  readyIds,
  type RenderData,
} from "./resume";

interface Pending {
  // Deferred frame entries by ready channel, in frame arrival order.
  c: Map<string, unknown[]>;
  // Every `applyPatch` promise awaiting this render's channels.
  r: ((applied: boolean) => void)[];
  epoch: object;
}
const pending = new Map<RenderData, Pending>();
// Sites still cloning their child, by channel: the channel is unready
// (its data blocks like a still-loading module's) until the last lands.
const loading: Record<string, number> = {};

// Module evaluation is the enablement: the compiler injects this side-effect
// import once per program with a lazy load import in a persisted build.
frameVars[READY_FRAME_VAR] = acceptReady;
installPatchReady(commitReady, pendingReady, discardReady);
installReady(markReady, failReady);
// Every lazy site of a persisted page stamps its channel as it starts cloning
// (`_load_ready`, `_load_ready_template`) and reports its insert or failure.
installLoadReady(
  (branch) => {
    if (!--loading[branch[AccessorProp.ReadyId]!]) {
      queueEffect(branch, () => ready(branch[AccessorProp.ReadyId]!));
    }
  },
  (branch) => {
    loading[branch[AccessorProp.ReadyId]!]--;
    readyFailed(branch[AccessorProp.ReadyId]!);
  },
  (branch, readyId) => {
    branch[AccessorProp.ReadyId] = readyId;
    loading[readyId] = (loading[readyId] || 0) + 1;
    // Absent until a first `ready`, when there is nothing to hold.
    readyIds?.delete(readyId);
  },
);

// Live-record pushes of the frame being applied (alternating batch, prior
// length), undone if it rejects.
const framePushes: (unknown[] | number)[] = [];

// The frame's run may construct a site of a channel (a returning lazy
// tag), so its record commits after the run, channels settled.
let record: Record<string, unknown[]> = {};
function acceptReady(frameRecord: Record<string, unknown[]>) {
  framePushes.length = 0;
  record = frameRecord;
}

function commitReady() {
  let pushed = false;
  for (const readyId in record) {
    const batch = record[readyId];
    // A dead channel can never make its data whole: the frame rejects.
    if (failed.has(readyId)) throw 0;
    if (isReady(readyId)) {
      pushBatch(batch, readyId);
      pushed = true;
    } else {
      const entry =
        pending.get(patchRender) ||
        pending
          .set(patchRender, { c: new Map(), r: [], epoch: frameEpoch })
          .get(patchRender)!;
      // A later frame's entries append: they re-ship full state, so
      // in-order application leaves the newest frame's values live.
      entry.c.get(readyId)?.push(...batch) || entry.c.set(readyId, batch);
    }
  }
  record = {};
  if (pushed) {
    runEffects(patchRender.m!([]), 1);
    run();
  }
}

// Appends a frame batch (a thunk the drain evaluates) to the live ready
// record without disturbing the page's still-pending resume data.
function pushBatch(batch: unknown[], readyId: string) {
  const target = ((patchRender.b ??= {})[readyId] ??= []);
  framePushes.push(target, target.length);
  for (const partial of batch) target.push(partial as (typeof target)[number]);
}

function pendingReady() {
  const entry = pending.get(patchRender);
  if (entry) {
    return new Promise<boolean>((resolve) => entry.r.push(resolve));
  }
}

function markReady(readyId: string) {
  for (const [render, entry] of pending) {
    if (entry.c.has(readyId) && [...entry.c.keys()].every(isReady)) {
      pending.delete(render);
      settle(
        entry,
        applyReadyPatch(render, entry.epoch, () => entry.c.forEach(pushBatch)),
      );
    }
  }
}

// A dead channel can never make its server content whole: pending appliers
// settle rejected (their caller navigates) and later frames naming it reject.
const failed = new Set<string>();
function failReady(readyId: string) {
  failed.add(readyId);
  for (const [render, entry] of pending) {
    if (entry.c.has(readyId)) {
      pending.delete(render);
      settle(entry, false);
    }
  }
}

function discardReady() {
  // A rejected frame's pushes must not survive to a later run; a partially
  // consumed batch is safe to drop since the caller is navigating anyway.
  while (framePushes.length) {
    const length = framePushes.pop() as number;
    const batch = framePushes.pop() as unknown[];
    if (batch.length > length) batch.length = length;
  }
  const entry = pending.get(patchRender);
  if (entry) {
    pending.delete(patchRender);
    settle(entry, false);
  }
}

function settle(entry: Pending, applied: boolean) {
  for (const resolve of entry.r) resolve(applied);
}
