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

export function _template_persisted(
  templateId: string,
  renderer: ServerRenderer,
  page?: 1,
) {
  enablePatchWrites();
  const template = _template(templateId, renderer, page);
  template.renderPatch = renderPatch;
  return template;
}

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
      // Loop items pair by key, which a bind path cannot express yet: an
      // empty link makes any bind crossing this boundary poison.
      const branchId = _peek_scope_id();
      (state.patchParents ??= {})[branchId] = [scopeId, ""];
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
