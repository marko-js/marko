import type {
  RenderedTemplate,
  Template,
  TemplateInput,
} from "../common/types";
import { AccessorPrefix } from "../common/types";
import { serverRenderers } from "./renderer-shells";
import { _template, type ServerRenderer, startRender } from "./template";
import {
  _patch_branch_writes,
  _patch_loop_writes,
  _peek_scope_id,
  _scope as writeScope,
  getChunk,
  State,
  withBranchId,
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
  }

  // A patch never references scopes by object: the client owns branch owner
  // links (set at pairing/construction), so the member drops.
  override scopeRef() {
    return undefined;
  }

  override flushChunk(_html: string, scripts: string) {
    return scripts ? scripts + "\n" : "";
  }

  // A frame only ever applies to the render that produced the page:
  // `[1, rootId, [scope run], ...records]` — the run's ids are frame-local
  // labels (number = id/delta, object = partial, string = effects), records
  // are typed by opcode (0 = shell), and the named root is the walk's only
  // id-established pair. The client stages the whole frame, then pairs
  // top-down from the root.
  override resumeScript(resumes: string) {
    const shells = this.shellFrames;
    this.shellFrames = "";
    return (
      "[1," + (this.rootScopeId || 0) + ",[" + resumes + "]" + shells + "]"
    );
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
  // A patch ships the selection, the branch scope (whose captures carry the
  // values), and — once per response — the branch's shell so the client can
  // construct on divergence without bundling the content.
  _patch_branch_writes((scopeId, accessor, cb, shellIds) => {
    const state = getChunk()!.boundary.state as PatchState;
    if (!state.writesPatches) return;
    const branchId = _peek_scope_id();
    const branchIndex = withBranchId(branchId, cb);
    writeScope(scopeId, {
      [AccessorPrefix.ConditionalRenderer + accessor]: branchIndex ?? -1,
      [AccessorPrefix.BranchScopes + accessor]:
        branchIndex === undefined
          ? undefined
          : (writeScope(branchId, {}),
            [
              branchId,
              shipShell(
                state,
                branchIndex === undefined ? undefined : shellIds?.[branchIndex],
              ),
            ]),
    });
    return 1;
  });

  // A loop patch ships the ordered item branch ids and keys (plus the item
  // body's shell once per response): existing keys pair, new keys construct
  // from the shell, and absent keys destroy.
  _patch_loop_writes((iterate, scopeId, accessor, shellId) => {
    const state = getChunk()!.boundary.state as PatchState;
    if (!state.writesPatches) return;
    const ids: number[] = [];
    const keys: unknown[] = [];
    const seen = new Set<unknown>();
    iterate((itemKey, _sameAsIndex, render) => {
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
      const branchId = _peek_scope_id();
      ids.push(branchId);
      keys.push(itemKey);
      withBranchId(branchId, render);
      writeScope(branchId, {});
    });
    writeScope(scopeId, {
      [AccessorPrefix.BranchScopes + accessor]: [
        ids,
        keys,
        ids.length ? shipShell(state, shellId) : undefined,
      ],
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
