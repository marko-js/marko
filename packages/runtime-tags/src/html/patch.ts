import {
  normalizeAttrValue,
  normalizeDynamicRenderer,
  stringifyClassObject,
  stringifyStyleObject,
  toDelimitedString,
} from "../common/helpers";
import type {
  Accessor,
  RenderedTemplate,
  Template,
  TemplateInput,
} from "../common/types";
import { AccessorPrefix, PatchKey, RendererProp } from "../common/types";
import {
  _attr,
  _attr_option_value,
  _attrs,
  _attrs_partial,
  stringAttr,
} from "./attrs";
import { _escape, _to_text } from "./content";
import { getRegistered, K_SCOPE_ID, Serializer } from "./serializer";
import { shells } from "./shells";
import { _template, type ServerRenderer, startRender } from "./template";
import {
  _peek_scope_id,
  addSetupId,
  getChunk,
  getState,
  isInResumedBranch,
  maskGroup,
  patchPartial,
  type ScopeInternals,
  type SerializeReasonValue,
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
  public binds?: Map<WeakKey, number>;
  public shellFrames = "";
  override writesPatches = true;
  override shipShell(shellId: string | 0 | undefined) {
    return shipShell(this, shellId);
  }
  override pairBranch(
    scopeId: number,
    accessor: Accessor,
    branchId: number,
    contentId?: string,
    slotIds?: (string | 0 | undefined)[],
  ) {
    if (!this.patchInert && !this.patchPartials?.[branchId]) {
      const link = AccessorPrefix.BranchScopes + accessor;
      (this.patchParents ??= {})[branchId] = [scopeId, link];
      (this.patchPending ??= {})[branchId] = [
        scopeId,
        PatchKey.Child + link,
        contentId,
        slotIds,
      ];
    }
  }

  constructor($global: State["$global"]) {
    super($global);
    this.hasMainRuntime = true;
    // The live page owns its serialized globals; a frame never re-ships them.
    this.hasGlobals = true;
  }

  override flushChunk(_html: string, scripts: string) {
    const out = scripts ? scripts + "\n" : "";
    this.patchFlushed = undefined;
    this.patchPartials = undefined;
    this.patchSerializeStates = undefined;
    this.serializer = new Serializer();
    return out;
  }

  // `[...shells, tree]` — only a deferred run (its inner `_()` walks
  // mid-expression) hoists shells into a preceding `_()` call.
  override resumeScript(resumes: string) {
    this.patchFlushed = 1;
    const shellChunks = this.shellFrames && this.shellFrames.slice(1);
    this.shellFrames = "";
    if (this.patchDeferred) {
      this.patchDeferred = undefined;
      return shellChunks
        ? "(_([" + shellChunks + "])," + resumes + ")"
        : resumes;
    }
    return shellChunks ? "[" + shellChunks + "," + resumes + "]" : resumes;
  }

  override walkScript() {
    return "";
  }

  // A patch applies to an already resumed page, so nothing ever resumes its
  // output — and shipped shell markup must match the client template.
  override mark() {
    return "";
  }

  // Ships the selection, branch partial, and (once per response) the shell
  // so the client can construct on divergence without bundling content.
  override writeBranch(
    scopeId: number,
    accessor: string,
    cb: () => number | undefined | void,
    shellIds?: string[],
  ) {
    // Inert captures render plain html: no entries, no interception.
    if (this.patchInert) return;
    const branchId = _peek_scope_id();
    (this.patchParents ??= {})[branchId] = [
      scopeId,
      AccessorPrefix.BranchScopes + accessor,
    ];
    const branchIndex = withBranchId(branchId, cb);
    const shellId =
      branchIndex === undefined
        ? undefined
        : shipShell(this, shellIds?.[branchIndex]);
    // Shape-typed entry, densest form first: a bare number is the
    // selection + 1 (`0` hides), and empty/zero members drop.
    const branchPartial =
      branchIndex === undefined ? undefined : this.patchPartials?.[branchId];
    writePatch(
      scopeId,
      {
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
      },
      this.patchSerializeStates?.[branchId],
    );
    // Later settle frames nest under the live branch as a Child apply.
    if (branchIndex !== undefined) {
      (this.patchPending ??= {})[branchId] = [
        scopeId,
        PatchKey.Child + AccessorPrefix.BranchScopes + accessor,
      ];
    }
    return 1 as const;
  }

  // Ships ordered item partials and keys: existing keys pair, new keys
  // construct from the shell, absent keys destroy.
  override writeLoop(
    iterate: (
      each: (
        itemKey: unknown,
        sameAsIndex: boolean,
        render: () => void,
      ) => void,
    ) => void,
    scopeId: number,
    accessor: string,
    shellId?: string | 0,
  ) {
    if (this.patchInert) return;
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
      (this.patchParents ??= {})[branchId] = [
        scopeId,
        [AccessorPrefix.BranchScopes + accessor, itemKey],
      ];
      keys.push(itemKey);
      withBranchId(branchId, render);
      partials.push(patchPartial(this, branchId));
    });
    const sentShellId = partials.length ? shipShell(this, shellId) : undefined;
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
    return 1 as const;
  }
}

// Patch writers double as the output writers so the compiled template
// evaluates each patch-written expression once.
export function _patch_attr(
  scopeId: number,
  accessor: Accessor,
  name: string,
  value: unknown,
  owned?: SerializeReasonValue,
  group?: number,
) {
  const state = getState();
  if (state.writesPatches) {
    // `0` is the removal sentinel: normalized values are always strings and
    // `undefined` entries are dropped entirely.
    writeOwned(
      scopeId,
      PatchKey.Attr + accessor + " " + name,
      normalizeAttrValue(value) ?? 0,
      owned,
      group,
    );
  } else {
    getChunk()!.needsWalk = true;
  }

  return _attr(name, value);
}

// Class/style normalize on the server into the same string the dom helper
// writes, so the client applies them as plain attr entries.
export function _patch_attr_class(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
  owned?: SerializeReasonValue,
  group?: number,
) {
  return patchStringAttr(
    scopeId,
    accessor,
    "class",
    toDelimitedString(value, " ", stringifyClassObject),
    owned,
    group,
  );
}

export function _patch_attr_style(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
  owned?: SerializeReasonValue,
  group?: number,
) {
  return patchStringAttr(
    scopeId,
    accessor,
    "style",
    toDelimitedString(value, ";", stringifyStyleObject),
    owned,
    group,
  );
}

// Links a child scope into its parent's entry: immediately when already
// written (tag-variable children render first), else on its first write.
export function _patch_child(
  scopeId: number,
  accessor: Accessor,
  childScopeId: number,
) {
  const state = getState();
  if (state.writesPatches) {
    (state.patchParents ??= {})[childScopeId] = [scopeId, accessor];
    const partial = state.patchPartials?.[childScopeId];
    if (partial) {
      writePatch(scopeId, {
        [PatchKey.Child + accessor]: partial,
      });
    } else {
      (state.patchPending ??= {})[childScopeId] = [
        scopeId,
        PatchKey.Child + accessor,
      ];
    }
  }
}

// A server-owned local whose param group the client feeds is not written:
// a fresh scope re-derives it by running its feeds' closure inits (setup).
export function _patch_init(scopeId: number, initIds: string) {
  if (getState().writesPatches) {
    for (const id of initIds.split(" ")) addSetupId(scopeId, id);
  }
  return "";
}

// Emitted as the scope reason's complement (`$reason || _patch_value(...)`):
// a page render serializes the value through the reason-gated scope write,
// so only a patch (the falsy persisted reason) ever reaches here.
export function _patch_value(
  scopeId: number,
  key: string,
  value: unknown,
  setup?: 1,
) {
  const state = getState();
  if (state.writesPatches) {
    // Bound registrations cannot ride the wire as data: each stores a
    // bind at its bound scope and the serialized value references it.
    writeEmbeddedBinds(state as PatchState, value);
    if (setup) {
      if (state.patchFlushed) {
        throw new Error(
          "A persisted patch cannot write after its frame flushed (async patch content is not supported).",
        );
      }
      // Setup entries nest under `s`: the client applies them only to
      // freshly constructed scopes; only a scope below a branch constructs.
      if (!isInResumedBranch()) return "";
      const partial = patchPartial(state, scopeId);
      ((partial[PatchKey.Setup] ??= {}) as Record<string, unknown>)[
        PatchKey.Value + key
      ] = value;
    } else {
      writePatch(scopeId, {
        [PatchKey.Value + key]: value,
      });
    }
  }
  return "";
}

// A control entry: the kind (a `ControlledType` digit) rides the key
// ahead of the node accessor, and the kind's registered helper applies
// the value against the frame's final handler slot.
export function _patch_control(
  scopeId: number,
  accessor: Accessor,
  type: number,
  value: unknown,
  owned?: SerializeReasonValue,
  group?: number,
) {
  const state = getState();
  if (state.writesPatches && ownedWrite(owned, group)) {
    writeEmbeddedBinds(state as PatchState, value);
    writeOwned(
      scopeId,
      PatchKey.Control + type + accessor,
      value,
      owned,
      group,
    );
  }
  return "";
}

// Handler wiring: a scope-bound registration ships as a bind entry, any
// other value rides the construct seeds as a plain write.
export function _patch_bind(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
  owned?: SerializeReasonValue,
  group?: number,
) {
  const state = getState();
  if (state.writesPatches && ownedWrite(owned, group)) {
    const registered = !!value && getRegistered(value as WeakKey);
    const bound =
      registered && (registered.scope as ScopeInternals | undefined);
    if (bound) {
      // A scope-bound registration installs the way CSR setup does: the
      // entry anchors at the scope this instance was registered against
      // and names the child-link path down to the slot, so the factory
      // receives its own live scope. A target the bound scope cannot
      // reach through recorded links poisons (`0`): reject, never
      // install a silently broken handler.
      const boundId = bound[K_SCOPE_ID]!;
      let depth = 0;
      let cur: number | undefined = scopeId;
      let link;
      while (cur !== undefined && cur !== boundId) {
        link = state.patchParents?.[cur];
        if (!link?.[1]) {
          cur = undefined;
        } else {
          depth++;
          cur = link[0];
        }
      }
      let entry: 0 | unknown[] = 0;
      if (cur !== undefined) {
        entry = new Array(depth + 2);
        entry[0] = registered.id;
        entry[depth + 1] = accessor;
        for (let i = depth, scope = scopeId; i; i--) {
          link = state.patchParents![scope]!;
          entry[i] = link[1];
          scope = link[0];
        }
      }
      writePatch(cur ?? scopeId, {
        [PatchKey.Bind + (state.patchBinds = (state.patchBinds || 0) + 1)]:
          entry,
      });
    } else {
      // Both forms where a construct is possible: the plain write reaches
      // PAIRED scopes (a handler removed between frames clears its live
      // slot), while the setup entry lands after a construct's seeds — a
      // seed's first-render write resets the change slot, so apply-time
      // installs cannot last.
      writeEmbeddedBinds(state as PatchState, value);
      const partial = patchPartial(state, scopeId);
      partial[PatchKey.Write + accessor] = value;
      if (isInResumedBranch()) {
        ((partial[PatchKey.Setup] ??= {}) as Record<string, unknown>)[
          PatchKey.Write + accessor
        ] = value;
      }
    }
  }
  return "";
}

// A patched scope write: setup entries nest under `s` AFTER the seeds, so
// a controllable seed cannot clobber its handler.
export function _patch_write(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
  setup?: 1,
) {
  const state = getState();
  if (state.writesPatches) {
    writeEmbeddedBinds(state as PatchState, value);
    if (setup) {
      const partial = patchPartial(state, scopeId);
      ((partial[PatchKey.Setup] ??= {}) as Record<string, unknown>)[
        PatchKey.Write + accessor
      ] = value;
    } else {
      writePatch(scopeId, {
        [PatchKey.Write + accessor]: value,
      });
    }
  }
  return "";
}

// Binds each scope-bound registration in a patch value while the
// partial tree still accepts writes; the serialized slot references it.
function writeEmbeddedBinds(
  state: PatchState,
  value: unknown,
  seen?: Set<unknown>,
) {
  if (
    !value ||
    (typeof value !== "object" && typeof value !== "function") ||
    seen?.has(value)
  ) {
    return;
  }
  const registered = getRegistered(value as WeakKey);
  const bound = registered && (registered.scope as ScopeInternals | undefined);
  if (bound) {
    const binds = (state.binds ??= new Map());
    if (!binds.has(value as WeakKey)) {
      const n = (state.patchBinds = (state.patchBinds || 0) + 1);
      writePatch(bound[K_SCOPE_ID]!, {
        [PatchKey.BindSource + n]: registered.id,
      });
      binds.set(value as WeakKey, n);
    }
    return;
  }
  (seen ??= new Set()).add(value);
  if (Array.isArray(value)) {
    for (const item of value) writeEmbeddedBinds(state, item, seen);
  } else if (value instanceof Map) {
    for (const [key, item] of value) {
      writeEmbeddedBinds(state, key, seen);
      writeEmbeddedBinds(state, item, seen);
    }
  } else if (value instanceof Set) {
    for (const item of value) writeEmbeddedBinds(state, item, seen);
  } else if (typeof value === "object") {
    for (const key in value) {
      writeEmbeddedBinds(state, (value as Record<string, unknown>)[key], seen);
    }
  }
}

export function _patch_effect(
  scopeId: number,
  registerId: string,
  accessors: string,
  globals?: 1,
) {
  if (getState().writesPatches) {
    writePatch(scopeId, {
      [(globals ? PatchKey.GlobalEffect : PatchKey.Effect) + registerId]:
        accessors,
    });
  }
  return "";
}

// The dynamic tag entry of `input` content: a shell record ships its id
// alone, a registered renderer rides the serializer, `0` marks none.
export function _patch_dynamic_tag(
  scopeId: number,
  accessor: Accessor,
  tag: unknown,
  owned?: SerializeReasonValue,
  group?: number,
) {
  const state = getState();
  if (!state.writesPatches) {
    getChunk()!.needsWalk = true;
  } else {
    const renderer = normalizeDynamicRenderer<ServerRenderer>(tag);
    if (ownedWrite(owned, group)) {
      const id =
        typeof renderer === "function" ? renderer[RendererProp.Id] : undefined;
      // An identified renderer ships its comparable id (record in-band or
      // dom registration); anything else rides the serializer.
      if (id) shipShell(state as PatchState, id);
      writePatch(scopeId, {
        [PatchKey.DynamicTag + accessor]: id ? [id] : (renderer ?? 0),
      });
    }
  }
}

export function _patch_text(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
  owned?: SerializeReasonValue,
  group?: number,
) {
  const state = getState();
  if (state.writesPatches) {
    writeOwned(
      scopeId,
      PatchKey.Text + accessor,
      _to_text(value),
      owned,
      group,
    );
  } else {
    getChunk()!.needsWalk = true;
  }

  return _escape(value);
}

// A spread's attribute set: the entry carries the merged object and the
// client's `_attrs` re-applies it (removing what the new set lacks).
export function _patch_attrs(
  data: Record<string, unknown>,
  accessor: Accessor,
  scopeId: number,
  tagName: string,
  owned?: SerializeReasonValue,
  group?: number,
) {
  const state = getState();
  if (state.writesPatches) {
    if (ownedWrite(owned, group)) {
      writeEmbeddedBinds(state as PatchState, data);
      writeOwned(scopeId, PatchKey.Attrs + accessor, data ?? 0, owned, group);
    }
  } else {
    getChunk()!.needsWalk = true;
  }
  return _attrs(data, accessor, scopeId, tagName);
}
// The partial form: static attrs after the spread render separately, so
// the entry names them (`skip`) for the client to leave alone.
export function _patch_attrs_partial(
  data: Record<string, unknown>,
  skip: Record<string, 1>,
  accessor: Accessor,
  scopeId: number,
  tagName: string,
  owned?: SerializeReasonValue,
  group?: number,
) {
  const state = getState();
  if (state.writesPatches) {
    if (ownedWrite(owned, group)) {
      writeEmbeddedBinds(state as PatchState, data);
      writeOwned(
        scopeId,
        PatchKey.Attrs + accessor,
        [data ?? 0, skip],
        owned,
        group,
      );
    }
  } else {
    getChunk()!.needsWalk = true;
  }
  return _attrs_partial(data, skip, accessor, scopeId, tagName);
}

// An option's `value` renders through the select-aware writer (it may add
// `selected`); the patch entry is the plain attribute the client re-syncs.
export function _patch_attr_option_value(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
  owned?: SerializeReasonValue,
  group?: number,
) {
  const state = getState();
  if (state.writesPatches) {
    writeOwned(
      scopeId,
      PatchKey.Attr + accessor + " value",
      normalizeAttrValue(value) ?? 0,
      owned,
      group,
    );
  } else {
    getChunk()!.needsWalk = true;
  }
  return _attr_option_value(value);
}

function patchStringAttr(
  scopeId: number,
  accessor: Accessor,
  name: string,
  value: string,
  owned?: SerializeReasonValue,
  group?: number,
) {
  const state = getState();
  if (state.writesPatches) {
    writeOwned(
      scopeId,
      PatchKey.Attr + accessor + " " + name,
      value || 0,
      owned,
      group,
    );
  } else {
    getChunk()!.needsWalk = true;
  }

  return stringAttr(name, value);
}

// A patch write needs exclusive server ownership; a contribution-less group
// (a call-site constant) writes only where a fresh scope may need it.
function ownedWrite(owned?: SerializeReasonValue, group?: number) {
  const mask = owned === undefined ? 2 : maskGroup(owned, group!);
  return mask === 2 || (mask === 0 && isInResumedBranch());
}
function writeOwned(
  scopeId: number,
  key: string,
  value: unknown,
  owned?: SerializeReasonValue,
  group?: number,
) {
  if (ownedWrite(owned, group)) writePatch(scopeId, { [key]: value });
}

// Only a shell the server can ship rides an entry: a missing one makes a
// divergence unapplyable and the client rejects the patch.
function shipShell(state: PatchState, shellId: string | 0 | undefined) {
  if (!shellId || !shells[shellId]) return undefined;
  if (!(state.sentShells ??= new Set()).has(shellId)) {
    state.sentShells.add(shellId);
    state.shellFrames += shells[shellId];
  }
  return shellId;
}
