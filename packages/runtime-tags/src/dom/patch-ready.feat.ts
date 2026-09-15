import { hasKeys } from "../common/helpers";
import {
  AccessorProp,
  PatchKey,
  ReadyPatchProp,
  type Scope,
} from "../common/types";
import { installLoadReady } from "./load";
import {
  type Applied,
  applyReadyPatch,
  deferApply,
  flushBinds,
  installPatchReady,
  patchResponse,
  type ReadyGuard,
} from "./patch";
import { loads } from "./patch-load";
import { queueEffect, run } from "./queue";
import {
  installReady,
  isReady,
  patchers,
  patchRender,
  patchRun,
  patchScope,
  ready,
  readyFailed,
  readyIds,
  type RenderData,
} from "./resume";

// A render's patch awaiting its channels: each channel's guards in flush
// order, and every `applyPatch` promise awaiting them.
interface ReadyPatch {
  [ReadyPatchProp.Channels]: Map<string, ReadyGuard[]>;
  [ReadyPatchProp.Resolvers]: ((applied: Applied) => void)[];
  [ReadyPatchProp.Response]: object;
}
const readyPatches = new Map<RenderData, ReadyPatch>();
// Lazy tags still cloning their child, by channel: the channel is unready
// (its data blocks like a still-loading module's) until the last lands.
const loading: Record<string, number> = {};

// Module evaluation is the enablement: the compiler injects this side-effect
// import once per program with a lazy load import in a patch build.
installPatchReady(commitReady, discardReady);
installReady(markReady, failReady);
// Every lazy tag of a patch page stamps its channel as it starts cloning
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

// The flush's run may create a tag of the channel (a returning lazy
// tag), so a guard applies at commit, after the run, channels settled.
let pendingGuards: Record<string, ReadyGuard[]> = {};
patchers[PatchKey.Ready] = (scope, key, entries) => {
  const readyId = key.slice(PatchKey.Ready.length);
  // A lazy tag whose module died at page load stays inert: a flush targeting
  // it could never apply, so it rejects (the caller navigates).
  if (failed.has(readyId)) {
    if (MARKO_DEBUG) {
      console.warn(`A patch rejected: channel "${readyId}" failed to load.`);
    }
    throw 0;
  }
  // A guard keeps its own flush's bind table and run: a later flush that
  // waits on the same channel resolves its binds against its own sources.
  (pendingGuards[readyId] ||= []).push([
    entries as Scope,
    scope,
    flushBinds,
    patchRun,
  ]);
};

function commitReady() {
  let applied = false;
  let guards = pendingGuards;
  const pending = readyPatches.get(patchRender);
  // A response re-ships full state: what an earlier one left waiting is
  // superseded, and its appliers settle as applied.
  if (pending && pending[ReadyPatchProp.Response] !== patchResponse) {
    resolvePatch(patchRender, pending, 1);
  }
  // An applied guard's content can register channels nested in it (a
  // cold page under a warm layout): each pass commits what the last met.
  while (hasKeys(guards)) {
    pendingGuards = {};
    for (const readyId in guards) {
      const channel = guards[readyId];
      if (isReady(readyId)) {
        for (const guard of channel) patchScope(guard[0], guard[1]);
        applied = true;
      } else {
        const patch =
          readyPatches.get(patchRender) ||
          readyPatches
            .set(patchRender, {
              [ReadyPatchProp.Channels]: new Map(),
              [ReadyPatchProp.Resolvers]: [],
              [ReadyPatchProp.Response]: patchResponse,
            })
            .get(patchRender)!;
        const channels = patch[ReadyPatchProp.Channels];
        // The flush's apply waits on the channel.
        deferApply(
          new Promise((resolve) =>
            patch[ReadyPatchProp.Resolvers].push(resolve),
          ),
        );
        // A later flush's guards append: they re-ship full state, so in-order
        // application leaves the newest flush's values live.
        channels.get(readyId)?.push(...channel) ||
          channels.set(readyId, channel);
        loads[readyId]?.();
      }
    }
    guards = pendingGuards;
  }
  if (applied) run();
}

// A channel's guards apply as it readies; channels they register (content
// nested in a lazy tag) join the map and hold the patch open.
function markReady(readyId: string) {
  for (const [render, patch] of readyPatches) {
    const channels = patch[ReadyPatchProp.Channels];
    const guards = channels.get(readyId);
    if (guards) {
      channels.delete(readyId);
      const applied = applyReadyPatch(render, guards);
      if (!applied || !channels.size) resolvePatch(render, patch, applied);
    }
  }
}

// A dead channel can never make its server content whole: pending appliers
// resolve rejected (their caller navigates) and later flushes naming it reject.
const failed = new Set<string>();
function failReady(readyId: string) {
  if (MARKO_DEBUG) {
    console.warn(`A patch rejected: channel "${readyId}" failed to load.`);
  }
  failed.add(readyId);
  for (const [render, patch] of readyPatches) {
    if (patch[ReadyPatchProp.Channels].has(readyId)) {
      resolvePatch(render, patch, 0);
    }
  }
}

function discardReady() {
  pendingGuards = {};
  const patch = readyPatches.get(patchRender);
  if (patch) resolvePatch(patchRender, patch, 0);
}

function resolvePatch(render: RenderData, patch: ReadyPatch, applied: Applied) {
  readyPatches.delete(render);
  for (const resolve of patch[ReadyPatchProp.Resolvers]) resolve(applied);
}
