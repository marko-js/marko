import {
  AccessorProp,
  PatchKey,
  ReadyPatchProp,
  type Scope,
} from "../common/types";
import { installLoadReady } from "./load";
import { applyReadyPatch, frameBinds, installPatchReady } from "./patch";
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

// A channel's guards: its entries met in a frame's tree, each with the live
// scope they apply to.
type Guards = [entries: Scope, scope: Scope][];
// A render's patch awaiting its channels.
interface ReadyPatch {
  [ReadyPatchProp.Channels]: Map<string, Guards>;
  // Every `applyPatch` promise awaiting this render's channels.
  [ReadyPatchProp.Resolvers]: ((applied: boolean) => void)[];
  [ReadyPatchProp.Binds]: Record<string, unknown>;
  [ReadyPatchProp.Run]: number;
}
const readyPatches = new Map<RenderData, ReadyPatch>();
// Sites still cloning their child, by channel: the channel is unready
// (its data blocks like a still-loading module's) until the last lands.
const loading: Record<string, number> = {};

// Module evaluation is the enablement: the compiler injects this side-effect
// import once per program with a lazy load import in a persisted build.
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

// The frame's run may construct a site of the channel (a returning lazy
// tag), so a guard applies at commit, after the run, channels settled.
let pendingGuards: Record<string, Guards> = {};
patchers[PatchKey.Ready] = (scope, key, entries) => {
  const readyId = key.slice(PatchKey.Ready.length);
  // A site whose module died at page load stays inert: a frame targeting
  // it could never apply, so it rejects (the caller navigates).
  if (failed.has(readyId)) throw 0;
  (pendingGuards[readyId] ||= []).push([entries as Scope, scope]);
};

function commitReady() {
  const guards = pendingGuards;
  let applied = false;
  pendingGuards = {};
  for (const readyId in guards) {
    const channel = guards[readyId];
    if (isReady(readyId)) {
      for (const guard of channel) patchScope(...guard);
      applied = true;
    } else {
      const channels = (readyPatches.get(patchRender) ||
        readyPatches
          .set(patchRender, {
            [ReadyPatchProp.Channels]: new Map(),
            [ReadyPatchProp.Resolvers]: [],
            [ReadyPatchProp.Binds]: frameBinds,
            [ReadyPatchProp.Run]: patchRun,
          })
          .get(patchRender)!)[ReadyPatchProp.Channels];
      // A later frame's guards append: they re-ship full state, so in-order
      // application leaves the newest frame's values live.
      channels.get(readyId)?.push(...channel) || channels.set(readyId, channel);
      loads[readyId]?.();
    }
  }
  if (applied) run();
}

function pendingReady() {
  const patch = readyPatches.get(patchRender);
  if (patch) {
    return new Promise<boolean>((resolve) =>
      patch[ReadyPatchProp.Resolvers].push(resolve),
    );
  }
}

function markReady(readyId: string) {
  for (const [render, patch] of readyPatches) {
    const channels = patch[ReadyPatchProp.Channels];
    if (channels.has(readyId) && [...channels.keys()].every(isReady)) {
      resolvePatch(
        render,
        patch,
        applyReadyPatch(
          render,
          patch[ReadyPatchProp.Binds],
          patch[ReadyPatchProp.Run],
          () =>
            channels.forEach((channel) => {
              for (const guard of channel) patchScope(...guard);
            }),
        ),
      );
    }
  }
}

// A dead channel can never make its server content whole: pending appliers
// resolve rejected (their caller navigates) and later frames naming it reject.
const failed = new Set<string>();
function failReady(readyId: string) {
  failed.add(readyId);
  for (const [render, patch] of readyPatches) {
    if (patch[ReadyPatchProp.Channels].has(readyId)) {
      resolvePatch(render, patch, false);
    }
  }
}

function discardReady() {
  pendingGuards = {};
  const patch = readyPatches.get(patchRender);
  if (patch) resolvePatch(patchRender, patch, false);
}

function resolvePatch(render: RenderData, patch: ReadyPatch, applied: boolean) {
  readyPatches.delete(render);
  for (const resolve of patch[ReadyPatchProp.Resolvers]) resolve(applied);
}
