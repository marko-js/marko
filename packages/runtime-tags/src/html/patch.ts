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

  // A frame only ever applies to the render that produced the page: one
  // flat entry array (number = scope id, object = partial, string = effects,
  // array = shell). Shells append; the client defers constructs until they
  // register.
  override resumeScript(resumes: string) {
    const shells = this.shellFrames;
    this.shellFrames = "";
    return "[" + resumes + shells + "]";
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
    // Only a shell the server can ship rides the entry: a missing one makes
    // a divergence unapplyable and the client rejects the patch.
    let shellId =
      branchIndex === undefined ? undefined : shellIds?.[branchIndex];
    if (shellId) {
      if (!serverRenderers[shellId]) {
        shellId = undefined;
      } else if (!(state.sentShells ??= new Set()).has(shellId)) {
        state.sentShells.add(shellId);
        state.shellFrames += serverRenderers[shellId];
      }
    }
    writeScope(scopeId, {
      [AccessorPrefix.ConditionalRenderer + accessor]: branchIndex ?? -1,
      [AccessorPrefix.BranchScopes + accessor]:
        branchIndex === undefined
          ? undefined
          : (writeScope(branchId, {}), [branchId, shellId]),
    });
    return 1;
  });
}
