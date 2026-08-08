import type {
  RenderedTemplate,
  Template,
  TemplateInput,
} from "../common/types";
import { AccessorPrefix, PatchKey } from "../common/types";
import { serverRenderers } from "./renderer-shells";
import { _template, type ServerRenderer, startRender } from "./template";
import {
  _patch_branch_writes,
  _patch_loop_writes,
  _peek_scope_id,
  getChunk,
  patchPartial,
  State,
  withBranchId,
  writePatch,
} from "./writer";

// Intrinsic render summary: what a template's render could depend on
// beyond its inputs, as ONE self-resolving value. `1` = must render
// (reads globals / opaque); `0` = whole subtree proven clean; a lazy
// child-renderer thunk = locally clean, resolved to 0/1 on first query
// (lazy: module cycles must not evaluate eagerly). An ABSENT summary
// means unknown (foreign renderer) — never clean.
type Intrinsics = 0 | 1 | (() => unknown[]);
const kIntrinsics = Symbol();
type WithIntrinsics = { [kIntrinsics]?: Intrinsics };

export function _template_persisted(
  templateId: string,
  renderer: ServerRenderer,
  page?: 0 | 1,
  intrinsics?: Intrinsics,
) {
  enablePatchWrites();
  const template = _template(templateId, renderer, page as 1) as Template &
    ServerRenderer &
    WithIntrinsics;
  template.renderPatch = renderPatch;
  if (intrinsics !== undefined) template[kIntrinsics] = intrinsics;
  return template;
}

// A patch must render a child unless its summary proves the whole subtree
// clean; steady state is one property read (the walk overwrites the thunk
// with its answer). `1` resolves always; `0` only when the walk closed
// without an unresolved cycle back-edge (a tainted answer may depend on
// an in-progress ancestor).
export function _must_render(child: unknown) {
  const intrinsics = (child as WithIntrinsics | undefined)?.[kIntrinsics];
  if (intrinsics === undefined) return true;
  if (typeof intrinsics !== "function") return !!intrinsics;
  return mustRenderWalk(child as WithIntrinsics, new Set(), { t: false });
}

const mustRenderWalk = (
  holder: WithIntrinsics,
  visiting: Set<() => unknown[]>,
  taint: { t: boolean },
): boolean => {
  const intrinsics = holder?.[kIntrinsics];
  if (intrinsics === undefined) return true;
  if (typeof intrinsics !== "function") return !!intrinsics;
  if (visiting.has(intrinsics)) {
    taint.t = true;
    return false;
  }
  visiting.add(intrinsics);
  const outerTaint = taint.t;
  taint.t = false;
  let result = false;
  for (const nested of intrinsics()) {
    if (mustRenderWalk(nested as WithIntrinsics, visiting, taint)) {
      result = true;
      break;
    }
  }
  visiting.delete(intrinsics);
  if (result || !taint.t) holder[kIntrinsics] = result ? 1 : 0;
  taint.t ||= outerTaint;
  return result;
};

export function renderPatch(
  this: Template & ServerRenderer,
  input: TemplateInput = {},
): RenderedTemplate {
  return startRender(this, input, PatchState);
}

// Serialize guards stay unset so the compiled resume payload drops at the
// source: a frame carries only patch fills.
class PatchState extends State {
  public sentShells?: Set<string>;
  public shellFrames = "";
  override writesPatches = true;

  constructor($global: State["$global"]) {
    super($global);
    this.hasMainRuntime = true;
    // The live page owns its serialized globals; a frame never re-ships them.
    this.hasGlobals = true;
  }

  override flushChunk(_html: string, scripts: string) {
    return scripts ? scripts + "\n" : "";
  }

  // `[...shells, tree]` — only a deferred run (its inner `_()` walks
  // mid-expression) hoists shells into a preceding `_()` call.
  override resumeScript(resumes: string) {
    if (MARKO_DEBUG) this.patchFlushed = 1;
    // A poisoned frame (a bound registration with no rebind entry) is
    // replaced by a bare poison tree: the client rejects and navigates.
    if (this.patchPoison) {
      this.shellFrames = "";
      this.patchDeferred = undefined;
      return '[{"' + PatchKey.Poison + '":1}]';
    }
    const shells = this.shellFrames && this.shellFrames.slice(1);
    this.shellFrames = "";
    if (this.patchDeferred) {
      this.patchDeferred = undefined;
      return shells ? "(_([" + shells + "])," + resumes + ")" : resumes;
    }
    return shells ? "[" + shells + "," + resumes + "]" : resumes;
  }

  override walkScript() {
    return "";
  }

  // A patch applies to an already resumed page, so nothing ever resumes its
  // output — and shipped shell markup must match the client template.
  override mark() {
    return "";
  }
}

// Registered on first persisted template load (not at module top level) so
// the whole patch writer drops from bundles without persisted pages.
let enabled: 1 | undefined;
function enablePatchWrites() {
  if (enabled) return;
  enabled = 1;
  // Ships the selection, branch partial, and (once per response) the shell
  // so the client can construct on divergence without bundling content.
  _patch_branch_writes((scopeId, accessor, cb, shellIds) => {
    const state = getChunk()!.boundary.state as PatchState;
    if (!state.writesPatches) return;
    const branchId = _peek_scope_id();
    (state.patchParents ??= {})[branchId] = [
      scopeId,
      AccessorPrefix.BranchScopes + accessor,
    ];
    const branchIndex = withBranchId(branchId, cb);
    const shellId =
      branchIndex === undefined
        ? undefined
        : shipShell(state, shellIds?.[branchIndex]);
    // Shape-typed entry, densest form first: a bare number is the
    // selection + 1 (`0` hides), and empty/zero members drop.
    const branchPartial =
      branchIndex === undefined ? undefined : state.patchPartials?.[branchId];
    writePatch(scopeId, {
      [PatchKey.Branch + accessor]:
        branchIndex === undefined
          ? 0
          : branchIndex
            ? branchPartial || shellId
              ? shellId
                ? [branchIndex, branchPartial || {}, shellId]
                : [branchIndex, branchPartial || {}]
              : branchIndex + 1
            : branchPartial
              ? shellId
                ? [branchPartial, shellId]
                : [branchPartial]
              : shellId || 1,
    });
    return 1;
  });

  // Ships ordered item partials and keys: existing keys pair, new keys
  // construct from the shell, absent keys destroy.
  _patch_loop_writes((iterate, scopeId, accessor, shellId) => {
    const state = getChunk()!.boundary.state as PatchState;
    if (!state.writesPatches) return;
    const partials: object[] = [];
    const keys: unknown[] = [];
    const seen = new Set<unknown>();
    let indexKeys = true;
    iterate((itemKey, sameAsIndex, render) => {
      // Client pairing needs serializable, unique keys; failing the render
      // here (falling back to a navigation) beats corrupting the pairing.
      if (
        (typeof itemKey !== "string" && typeof itemKey !== "number") ||
        seen.has(itemKey)
      ) {
        throw new Error(
          `Persisted loop patches require unique string or number keys (got ${String(itemKey)}).`,
        );
      }
      seen.add(itemKey);
      indexKeys &&= sameAsIndex;
      // Loop items pair by key: the link is a keyed hop the bind walk
      // resolves against the live scopes' loop keys.
      const branchId = _peek_scope_id();
      (state.patchParents ??= {})[branchId] = [
        scopeId,
        [AccessorPrefix.BranchScopes + accessor, itemKey],
      ];
      keys.push(itemKey);
      withBranchId(branchId, render);
      partials.push(patchPartial(state, branchId));
    });
    const sentShellId = partials.length ? shipShell(state, shellId) : undefined;
    // Interleaved `[key, partial, …, shellId?]`: keys drop when every key
    // is its index, and the shell rides as a trailing string.
    const entry: unknown[] = [];
    for (let i = 0; i < partials.length; i++) {
      if (!indexKeys) entry.push(keys[i]);
      entry.push(partials[i]);
    }
    if (sentShellId) entry.push(sentShellId);
    writePatch(scopeId, {
      [PatchKey.Loop + accessor]: entry,
    });
    return 1;
  });
}

// Only a shell the server can ship rides an entry: a missing one makes a
// divergence unapplyable and the client rejects the patch.
function shipShell(state: PatchState, shellId: string | 0 | undefined) {
  if (!shellId || !serverRenderers[shellId]) return undefined;
  if (!(state.sentShells ??= new Set()).has(shellId)) {
    state.sentShells.add(shellId);
    state.shellFrames += serverRenderers[shellId];
  }
  return shellId;
}
