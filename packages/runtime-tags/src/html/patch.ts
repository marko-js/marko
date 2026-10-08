import {
  normalizeDynamicRenderer,
  stringifyClassObject,
  stringifyStyleObject,
  toDelimitedString,
  hasKeys,
  isNotVoid,
} from "../common/helpers";
import { ROOT_SCOPE_ID } from "../common/meta";
import type {
  Accessor,
  EncodedAccessor,
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
import { _escape_style_value } from "./content";
import { _to_text, _unescaped } from "./content";
import { getRegistered, K_SCOPE_ID } from "./serializer";
import { quotedShell, rawShells } from "./shells";
import { _template, type ServerRenderer, startRender } from "./template";
import {
  _peek_scope_id,
  _scope_id,
  _html_resume,
  _text_resume,
  addSetupId,
  getChunk,
  getState,
  inCreatable,
  _client_guard,
  getFilteredGlobals,
  inUnpatched,
  maskGroup,
  scopePatch,
  openScopePatch,
  peekScopePatch,
  type ScopeInternals,
  type GroupMask,
  State,
  withBranchId,
  withKeptBranchId,
  writePatch,
  _attr_content,
  _html,
  type PatchLink,
  type SerializeState,
  _subscribe,
  scopeWithId,
  _scope,
} from "./writer";

export function _template_patch(
  templateId: string,
  renderer: ServerRenderer,
  page?: 0 | 1,
) {
  // Any render of a patch template, page or patch, tracks unpatched context.
  const template = _template(
    templateId,
    ((input) => {
      getState().patchPage = true;
      return renderer(input);
    }) as ServerRenderer,
    page as 1,
  ) as Template & ServerRenderer;
  template.patch = renderPatch;
  return template;
}

function renderPatch(
  this: Template & ServerRenderer,
  input: TemplateInput = {},
  headers?: PatchHeaders,
): RenderedTemplate {
  // Patches answer page navigations only; an embedded render (a micro-frame)
  // has no page whose shells the token could name.
  if ((this as ServerRenderer)[RendererProp.Embed]) {
    throw new Error(
      "Marko patches only render page templates; this template renders embedded, so request it as a document.",
    );
  }
  // The root's id names the flush's entry pair; globals re-ship every flush,
  // undefined included, so the live page's `$global` never reads stale.
  const root = Object.assign(
    (input: TemplateInput) => {
      const state = getState() as PatchState;
      if (MARKO_DEBUG && _peek_scope_id() !== ROOT_SCOPE_ID) {
        throw new Error("A patch render must start at the page root's scope.");
      }
      // The request's token: what the page holds, which this render adds to.
      const token = headers && readHeader(headers, "x-marko-patch");
      const held = token && token.slice(token.lastIndexOf(";") + 1);
      if (held) {
        state.sentShells = decodeHeld(held);
        state.heldCount = state.sentShells?.size || 0;
      }
      const globals = getFilteredGlobals(state.$global, 1);
      if (globals) {
        scopePatch(state, ROOT_SCOPE_ID)[PatchKey.Globals] = globals;
      }
      return this(input);
    },
    {
      [RendererProp.Embed]: this[RendererProp.Embed],
      [RendererProp.Id]: this[RendererProp.Id],
    },
  ) as unknown as typeof this;
  return startRender(root, input, PatchState);
}

/** A request's headers: a `Headers` or a plain record. */
export type PatchHeaders =
  | Record<string, string | undefined>
  | { get(name: string): string | null };

function readHeader(headers: PatchHeaders, name: string) {
  return typeof headers.get === "function"
    ? headers.get(name)
    : (headers as Record<string, string | undefined>)[name];
}

// The held-shell token: registry size, then indices into the sorted registry
// as delta varints, base64; over budget it drops its highest (they ship again).
const TOKEN_BUDGET = 1024;
let registry: { size: number; ids: string[]; at: Map<string, number> };
function shellRegistry() {
  const size = Object.keys(rawShells).length;
  if (registry?.size !== size) {
    const ids = Object.keys(rawShells).sort();
    registry = { size, ids, at: new Map(ids.map((id, i) => [id, i])) };
  }
  return registry;
}
function pushVarint(bytes: number[], n: number) {
  for (; n > 127; n >>>= 7) bytes.push((n & 127) | 128);
  bytes.push(n);
}
export function encodeHeld(ids: Set<string>) {
  const { size, at } = shellRegistry();
  // A bitmap over the registry orders the held indices without a sort.
  const bits = new Uint8Array((size >> 3) + 1);
  for (const id of ids) {
    const index = at.get(id);
    if (index !== undefined) bits[index >> 3] |= 1 << (index & 7);
  }
  const bytes: number[] = [];
  pushVarint(bytes, size);
  // Base64 grows bytes by a third; the token ends at the last delta that fits.
  const limit = (TOKEN_BUDGET * 3) >> 2;
  let end = bytes.length;
  for (
    let byte = 0, prev = -1;
    byte < bits.length && end === bytes.length;
    byte++
  ) {
    for (let bit = 0; bits[byte] >> bit; bit++) {
      if (bits[byte] & (1 << bit)) {
        const index = byte * 8 + bit;
        pushVarint(bytes, index - prev - 1);
        prev = index;
        if (bytes.length > limit) break;
        end = bytes.length;
      }
    }
  }
  bytes.length = end;
  return btoa(String.fromCharCode(...bytes)).replace(/=+$/, "");
}
// A bad token (unparsable, or naming another registry) holds nothing: the
// header is the client's, so a bad one costs it shells, never the render.
export function decodeHeld(held: string) {
  const { size, ids } = shellRegistry();
  let bytes: string;
  try {
    bytes = atob(held);
  } catch {
    return;
  }
  let i = 0;
  const next = () => {
    let n = 0;
    for (let shift = 0, byte = 128; byte & 128; shift += 7) {
      byte = bytes.charCodeAt(i++);
      n += (byte & 127) << shift;
    }
    return n;
  };
  if (next() !== size) return;
  const held_ = new Set<string>();
  for (let index = -1; i < bytes.length;) {
    index += next() + 1;
    if (index >= size) return;
    held_.add(ids[index]);
  }
  return held_;
}

// Serialize guards stay unset so the compiled resume payload drops at the
// source: a flush carries only patch fills.
class PatchState extends State {
  public sentShells?: Set<string>;
  // How many shells the request's token named: a response that shipped
  // none leaves the page's token as it is.
  public heldCount = 0;
  public pendingShells = "";
  override writesPatches = true;

  override shipShell(shellId: string | 0 | undefined) {
    return shipShell(this, shellId);
  }
  override pairBranch(
    scopeId: number,
    accessor: Accessor,
    branchId: number,
    contentId?: string,
    slotIds?: (string | undefined)[],
    ownerScopeId?: number,
  ) {
    if (!peekScopePatch(this, branchId)) {
      (this.patchLinks ??= {})[branchId] = {
        parent: scopeId,
        link: AccessorPrefix.BranchScopes + accessor,
        content: contentId,
        slots: slotIds,
        owner: ownerScopeId,
      };
    }
  }

  constructor($global: State["$global"]) {
    super($global);
    this.hasMainRuntime = true;
    this.hasReadyRuntime = true;
    // The live page owns its serialized globals; a flush never re-ships them.
    this.hasGlobals = true;
  }

  // The client evaluates and applies each line as one expression.
  override flushChunk(_html: string, scripts: string, pending: number) {
    let out = scripts ? scripts + "\n" : "";
    if (MARKO_DEBUG && this.pendingShells) {
      throw new Error(
        "Invalid patch state, a shell was shipped with nothing to resume in its chunk.",
      );
    }
    // The set only grows from the request's token, so an unchanged size means
    // the page's token still holds; base64 needs no escaping in the quotes.
    if (
      !pending &&
      this.sentShells &&
      this.sentShells.size !== this.heldCount
    ) {
      out += '"' + encodeHeld(this.sentShells) + '"\n';
    }
    this.patchTree = undefined;
    return out;
  }

  // Each item is its own line, applied before the next evaluates (like a
  // page's resume items); the first is `[...shells, tree]` or the tree alone,
  // led by the lazy modules it waits for (`_a,_b,{…}`, a sequence expression).
  override addResumes(serializeState: SerializeState, resumes: string) {
    if (!resumes) return;
    // The client reads a leading id (or a debug id's string) as a module to
    // wait for, so no item may start like one.
    if (MARKO_DEBUG && !"{[(".includes(resumes[0])) {
      throw new Error(
        `Invalid patch state, a frame starts with "${resumes[0]}".`,
      );
    }
    if (serializeState.resumes) {
      serializeState.resumes += "\n" + resumes;
    } else {
      let ready = "";
      // An optimized id ships as its template id (the client restores the
      // `_`); a debug id is a path, so it ships as a string.
      for (const id of this.patchFlushReadyIds || []) {
        ready += (MARKO_DEBUG ? JSON.stringify(id) : id.slice(1)) + ",";
      }
      serializeState.resumes =
        ready +
        (this.pendingShells
          ? "[" + this.pendingShells + "," + resumes + "]"
          : resumes);
      this.pendingShells = "";
      this.patchFlushReadyIds = undefined;
    }
  }

  // A flush line is the bare item, not the document's resume array.
  override resumeScript(resumes: string) {
    return resumes;
  }

  override walkScript() {
    return "";
  }

  // A patch applies to an already resumed page, so nothing ever resumes its
  // output — and shipped shell markup must match the client template.
  override mark() {
    return "";
  }

  // Ships the branch index, patch, and (once per response) the shell
  // so the client can create on divergence without bundling content.
  override writeBranch(
    scopeId: number,
    accessor: string,
    cb: () => number | undefined | void,
    shellIds?: string[],
    owned?: GroupMask,
    group?: number,
  ) {
    // A branch whose expression derives from a client-owned group re-renders
    // on the resumed page: the patch skips it.
    if (_client_guard(owned, group!)) return 1;
    // One whose expression derives from nothing request-derived, outside
    // structure a flush creates, keeps its branch: the entry ships only what its body fills.
    const kept = !_filled_guard(owned, group!);
    const branchId = _peek_scope_id();
    (this.patchLinks ??= {})[branchId] = {
      parent: scopeId,
      link: AccessorPrefix.BranchScopes + accessor,
    };
    const opened = openScopePatch(this, branchId);
    const branchIndex = (kept ? withKeptBranchId : withBranchId)(branchId, cb);
    const shellId =
      branchIndex === undefined || kept
        ? undefined
        : shipShell(this, shellIds?.[branchIndex]);
    if (kept && !hasKeys(opened)) {
      if (branchIndex === undefined) _scope_id();
      return 1 as const;
    }
    // Shape-typed entry, densest form first: a bare number is the
    // branch index + 1 (`0` hides), and empty/zero members drop.
    const branchPatch =
      branchIndex === undefined || !hasKeys(opened) ? undefined : opened;
    writePatch(scopeId, {
      [PatchKey.Branch + accessor]:
        branchIndex === undefined
          ? 0
          : branchIndex
            ? branchPatch || shellId
              ? shellId
                ? [branchIndex, branchPatch || {}, shellId]
                : [branchIndex, branchPatch || {}]
              : branchIndex + 1
            : branchPatch
              ? shellId
                ? [branchPatch, shellId]
                : [branchPatch]
              : shellId || 1,
    });
    if (branchIndex === undefined) {
      // Nothing rendered took the peeked id: consume it so no later scope
      // finds this branch's patch or link.
      _scope_id();
    }
    return 1 as const;
  }

  // Ships ordered item patches and keys: existing keys pair, new keys
  // create from the shell, absent keys destroy.
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
    owned?: GroupMask,
    group?: number,
  ) {
    // A client-owned list or a kept one keeps its rows: its entry ships only
    // what the rows themselves fill.
    const clientRows = _client_guard(owned, group!);
    const rowsKept = clientRows || !_filled_guard(owned, group!);
    const patches: object[] = [];
    const keys: unknown[] = [];
    let indexKeys = true;
    iterate((itemKey, sameAsIndex, render) => {
      indexKeys &&= sameAsIndex;
      // An item is found where it rendered, checked by key as the loop's
      // reconciler does (a client-owned list may since have moved it).
      const branchId = _peek_scope_id();
      (this.patchLinks ??= {})[branchId] = {
        parent: scopeId,
        link: [accessor, sameAsIndex ? keys.length : [keys.length, itemKey]],
      };
      keys.push(itemKey);
      // Opened here so an item settling after this flush re-links by its hop.
      patches.push(openScopePatch(this, branchId));
      (rowsKept ? withKeptBranchId : withBranchId)(branchId, render);
    });
    if (rowsKept && !patches.some(hasKeys)) return 1;
    if (clientRows) {
      // The rows are the client's: each patch applies to the row it still
      // holds under that key, and none is added or removed.
      const items: unknown[] = [];
      for (let i = 0; i < patches.length; i++) {
        if (hasKeys(patches[i])) {
          items.push(indexKeys ? i : [i, keys[i]], patches[i]);
        }
      }
      if (items.length)
        writePatch(scopeId, { [PatchKey.LoopItem + accessor]: items });
      return 1;
    }
    // Kept rows are never created, so they need no shell.
    const sentShellId =
      patches.length && !rowsKept ? shipShell(this, shellId) : undefined;
    // Interleaved `[key, patch, …, shellId?]`: keys drop when every key
    // is its index, and the shell rides as a trailing string.
    const entry: unknown[] = [];
    for (let i = 0; i < patches.length; i++) {
      if (!indexKeys) entry.push(keys[i]);
      entry.push(patches[i]);
    }
    if (sentShellId) entry.push(sentShellId);
    writePatch(scopeId, {
      [PatchKey.Loop + accessor]: entry,
    });
    return 1 as const;
  }
}

// A read a patch fills needs no subscription; one in unpatched structure or
// `unfilled` (effects, state-mixed reads, client-owned params) subscribes.
export function _fill_global_subscribe(
  id: string,
  scopeId: number,
  unfilled?: 0 | 1,
) {
  const state = getState();
  if (!unfilled && !inUnpatched()) return;
  // A flush's scopes are live already (paired) or subscribe as they render
  // (created); the flush re-ships every global they could read.
  if (state.writesPatches) return;
  // Each join's set rides the globals (scope 0), as a closure's rides its owner.
  const key = AccessorPrefix.ClosureScopes + id;
  _subscribe(
    (scopeWithId(state, 0)[key] ||
      _scope(0, { [key]: new Set() })[key]) as Set<ScopeInternals>,
    scopeWithId(state, scopeId),
  );
}

// On when no patch fills the group here: it is client-sourced, or the read
// sits in unpatched structure (`_source_if` folded in: on a page, the mask).
export function _unfilled_if(owned?: GroupMask, group?: number) {
  const bits = maskGroup(owned, group!);
  return bits & 1 || (bits && inUnpatched()) ? 1 : undefined;
}

// A server-owned value goes in the scope's patch, else in a created scope's
// setup envelope, matching its resumed twin; a page render needs the walk.
function patchFillEntries(scopeId: number, mask: GroupMask, group: number) {
  const state = getState();
  if (!state.writesPatches) {
    getChunk()!.needsWalk = true;
    return;
  }
  const owned = maskGroup(mask, group);
  if (owned !== 2 && !inCreatable()) return;
  const patch = scopePatch(state, scopeId);
  return owned === 2
    ? patch
    : ((patch[PatchKey.Setup] ??= {}) as Record<string, unknown>);
}

// On when a patch fills the group here: server-owned, or constant (`0`, a
// call-site constant) where a fresh scope may need the seed.
export function _filled_guard(mask: GroupMask, group: number) {
  const owned = maskGroup(mask, group);
  return owned === 2 || (owned === 0 && inCreatable()) ? 1 : 0;
}

// Page-side group guards (a patch serializes no resume data): any
// contribution, client or server, can change — the group's data serializes.
export function _source_if(mask: GroupMask, group: number) {
  return !getState().writesPatches && maskGroup(mask, group) ? 1 : undefined;
}

// An instance whose groups are constant (a mask composed to `0`) still
// resumes its markers, since patches pair on them.
export function _source_guard(mask: GroupMask, group: number) {
  return !getState().writesPatches && (mask === 0 || maskGroup(mask, group))
    ? 1
    : 0;
}

// A group's 2-bit value, composed into a child mask by pass-through.
export function _mask_group(mask: GroupMask, group: number) {
  return maskGroup(mask, group);
}

// Patch writers double as the output writers so the compiled template
// evaluates each patch-written expression once.
export function _patch_attr(
  scopeId: number,
  accessor: Accessor,
  name: string,
  value: unknown,
  owned?: GroupMask,
  group?: number,
) {
  // `0` is the removal sentinel: normalized values are always strings and
  // `undefined` entries are dropped entirely.
  const entries = patchFillEntries(scopeId, owned, group!);
  if (entries) {
    entries[PatchKey.Attr + accessor + " " + name] = attrValue(value) ?? 0;
  }
  return _attr(name, value);
}

// Class/style normalize on the server into the same string the dom helper
// writes, so the client applies them as plain attr entries.
export function _patch_attr_class(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
  owned?: GroupMask,
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
  owned?: GroupMask,
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

// A child already written (tag-variable children render first) links now;
// otherwise `scopePatch` links it from `patchLinks` on its first write.
export function _patch_child(
  scopeId: number,
  accessor: Accessor,
  childScopeId: number,
) {
  const state = getState();
  if (state.writesPatches) {
    (state.patchLinks ??= {})[childScopeId] = {
      parent: scopeId,
      link: accessor,
    };
    const patch = peekScopePatch(state, childScopeId);
    if (patch) {
      writePatch(scopeId, {
        [PatchKey.Child + accessor]: patch,
      });
    }
  }
}

// Inits a fresh scope runs (setup) for what the client owns but nothing
// delivers: the closures a branch local derives from, or a root join.
export function _patch_init(scopeId: number, initIds: string) {
  if (getState().writesPatches && inCreatable()) {
    for (const id of initIds.split(" ")) addSetupId(scopeId, id);
  }
  return "";
}

// Emitted as the scope reason's complement, so only a patch (the falsy
// patch reason) ever reaches here.
export function _patch_value(
  scopeId: number,
  key: string,
  value: unknown,
  setup?: 1,
) {
  const state = getState();
  if (state.writesPatches) {
    // A seed for a branch no flush creates is dropped before any scan.
    if (setup && !inCreatable()) return "";
    const bind = bindEntry(state, scopeId, value);
    const entryKey = (bind ? PatchKey.BindValue : PatchKey.Value) + key;
    if (bind) value = bind;
    if (setup) {
      // Setup entries nest under `s`: the client applies them only to
      // freshly created scopes; only a scope below a branch is created.
      const patch = scopePatch(state, scopeId);
      ((patch[PatchKey.Setup] ??= {}) as Record<string, unknown>)[entryKey] =
        value;
    } else {
      writePatch(scopeId, { [entryKey]: value });
    }
  }
  return "";
}

// A control entry: the kind digit rides the key ahead of the accessor, and
// the kind's helper applies the value against the final handler slot.
export function _patch_control(
  scopeId: number,
  accessor: Accessor,
  type: number,
  value: unknown,
  owned?: GroupMask,
  group?: number,
) {
  const entries = patchFillEntries(scopeId, owned, group!);
  if (entries) entries[PatchKey.Control + type + accessor] = value;
  return "";
}

// Handler wiring: a scope-bound registration ships as a bind entry, any
// other value rides the creation seeds as a plain write.
export function _patch_bind(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
  owned?: GroupMask,
  group?: number,
) {
  const state = getState();
  if (state.writesPatches && _filled_guard(owned, group!)) {
    const bind = bindEntry(state, scopeId, value);
    if (bind) {
      writePatch(scopeId, { [PatchKey.Bind + accessor]: bind });
    } else {
      // Both forms: the plain write clears paired scopes' slots, while the setup
      // entry lands after a created scope's seeds (which reset the change slot).
      const patch = scopePatch(state, scopeId);
      patch[PatchKey.Write + accessor] = value;
      if (inCreatable()) {
        ((patch[PatchKey.Setup] ??= {}) as Record<string, unknown>)[
          PatchKey.Write + accessor
        ] = value;
      }
    }
  }
  return "";
}

// A registration bound to the site's scope or an owner up its chain ships as
// its id or `[id, up]`; the serializer writes any other as a reference.
function bindEntry(state: State, scopeId: number, value: unknown) {
  const registered =
    typeof value === "function" ? getRegistered(value) : undefined;
  const bound = registered?.scope as ScopeInternals | undefined;
  const up = bound && findOwnerDepth(state, scopeId, bound[K_SCOPE_ID]);
  if (up !== undefined) {
    // Render-only locals (a loop's values) ride along, as the document's
    // call to the registered factory passes them.
    const locals = registered!.locals?.(state.scope);
    return locals
      ? [registered!.id, up, ...locals]
      : up
        ? [registered!.id, up]
        : registered!.id;
  }
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
    if (setup && !inCreatable()) return "";
    // A write of a bound registration resolves by path like a handler slot.
    const bind = bindEntry(state, scopeId, value);
    const entryKey = (bind ? PatchKey.Bind : PatchKey.Write) + accessor;
    if (bind) value = bind;
    if (setup) {
      const patch = scopePatch(state, scopeId);
      ((patch[PatchKey.Setup] ??= {}) as Record<string, unknown>)[entryKey] =
        value;
    } else {
      writePatch(scopeId, { [entryKey]: value });
    }
  }
  return "";
}

export function _patch_effect(
  scopeId: number,
  registerId: string,
  accessors: string,
) {
  if (getState().writesPatches) {
    writePatch(scopeId, {
      [PatchKey.Effect + registerId]: accessors,
    });
  }
  return "";
}

// The dynamic tag entry of `input` content: a shell ships its id
// alone, a registered renderer rides the serializer, `0` marks none.
export function _patch_dynamic_tag(
  scopeId: number,
  accessor: Accessor,
  tag: unknown,
  args: unknown,
  contentId: string | 0,
  varId: string | 0,
  owned?: GroupMask,
  group?: number,
) {
  const state = getState();
  if (!state.writesPatches) {
    getChunk()!.needsWalk = true;
  } else {
    const renderer = normalizeDynamicRenderer<ServerRenderer>(tag);
    if (_filled_guard(owned, group!)) {
      const id =
        typeof renderer === "function" ? renderer[RendererProp.Id] : undefined;
      // A renderer ships its comparable id (or itself bare); native names are
      // `["div"]`/`>div`, and args ride as array input.
      const registered =
        typeof renderer === "function" ? getRegistered(renderer) : undefined;
      const boundScope = registered?.scope as ScopeInternals | undefined;
      const ownerId = boundScope
        ? boundScope[K_SCOPE_ID]
        : id
          ? (renderer as ServerRenderer)[RendererProp.Owner]
          : undefined;
      // A renderer the client builds from its shell takes no input: the
      // flush's entries for its scope render what the input would.
      const shell = id && !boundScope && shipShell(state as PatchState, id);
      if (contentId) shipShell(state as PatchState, contentId);
      const native = typeof renderer === "string";
      const entry: unknown[] = [
        id
          ? (ownerId === undefined
              ? ""
              : ownerPrefix(state, scopeId, ownerId)) + id
          : renderer || 0,
        (!shell && args) || 0,
        contentId,
        varId,
      ];
      // Render-only locals (a loop's values) ride last, as its factory takes them.
      const locals = registered?.locals?.(state.scope);
      if (locals) entry.push(...locals);
      while (entry.length > 1 && !entry[entry.length - 1]) entry.pop();
      if (native && entry.length > 1) entry[0] = ">" + renderer;
      writePatch(scopeId, {
        [PatchKey.DynamicTag + accessor]:
          entry.length > 1 || native ? entry : entry[0],
      });
    } else if (!_client_guard(owned, group!)) {
      // No entry ships, so the live branch stays paired: its body is no
      // divergence for a constant group's hole to seed.
      return 3;
    }
  }
  // How a patch treats the tag (`_dynamic_tag`'s `patchPairing`): `1` pairs it,
  // `3` pairs a kept renderer, `2` skips it (it derives from a client-owned group).
  return _client_guard(owned, group!) ? 2 : 1;
}

// A spread that may carry `content`: the set patches as attributes and
// the content as a dynamic tag entry, the way a static `content=` does.
export function _patch_attrs_content(
  data: Record<string, unknown>,
  accessor: Accessor,
  scopeId: number,
  tagName: string,
  serializeReason?: 1 | 0,
  controllable?: 1,
  owned?: GroupMask,
  group?: number,
) {
  const content = data?.content;
  _patch_dynamic_tag(scopeId, accessor, content, 0, 0, 0, owned, group);
  _html(
    `${_patch_attrs(withoutContent(data), accessor, scopeId, tagName, controllable, owned, group)}>`,
  );
  _attr_content(accessor, scopeId, content, serializeReason);
}

export function _patch_attrs_partial_content(
  data: Record<string, unknown>,
  skip: Record<string, 1>,
  accessor: Accessor,
  scopeId: number,
  tagName: string,
  serializeReason?: 1 | 0,
  controllable?: 1,
  owned?: GroupMask,
  group?: number,
) {
  const content = data?.content;
  _patch_dynamic_tag(scopeId, accessor, content, 0, 0, 0, owned, group);
  _html(
    `${_patch_attrs_partial(withoutContent(data), skip, accessor, scopeId, tagName, controllable, owned, group)}>`,
  );
  _attr_content(accessor, scopeId, content, serializeReason);
}

// The content renderer never rides the set: its own entry carries it, and a
// shared record would serialize it again (about 40 B), so this one copies.
function withoutContent(data: Record<string, unknown>) {
  if (!data?.content) return data;
  const { content: _, ...set } = data;
  return set;
}

export function _patch_text(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
  shouldResume?: number,
  owned?: GroupMask,
  group?: number,
) {
  const entries = patchFillEntries(scopeId, owned, group!);
  if (entries) entries[PatchKey.Text + accessor] = _to_text(value);
  // The patch write doubles as the output writer, so the text rides the
  // same resume marking a plain placeholder gets.
  return _text_resume(scopeId, accessor, value, shouldResume);
}

// An unescaped hole: the entry carries the markup string the client parses
// into the hole's range; the output writer marks that range for resume.
export function _patch_html(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
  shouldResume?: number,
  owned?: GroupMask,
  group?: number,
) {
  const entries = patchFillEntries(scopeId, owned, group!);
  if (entries) entries[PatchKey.Html + accessor] = _unescaped(value);
  return _html_resume(scopeId, accessor, value, shouldResume);
}

// A text-only body carries plain text (html output escapes per namespace);
// a `<style>` interpolation's write doubles as the escaped output.
export function _patch_style(
  scopeId: number,
  accessor: Accessor,
  name: string,
  value: unknown,
  owned?: GroupMask,
  group?: number,
) {
  const entries = patchFillEntries(scopeId, owned, group!);
  if (entries) entries[PatchKey.Style + accessor + " " + name] = value;
  return _escape_style_value(value);
}

// A `<show>`'s display: the client moves the body's range in or out, and
// the encoded accessors let a created scope find the range's markers.
export function _patch_show(
  scopeId: number,
  accessor: Accessor,
  display: unknown,
  node: EncodedAccessor,
  start?: EncodedAccessor,
  end?: EncodedAccessor,
  owned?: GroupMask,
  group?: number,
) {
  const entries = patchFillEntries(scopeId, owned, group!);
  if (entries) {
    const entry: unknown[] = [display ? 1 : 0, node];
    if (start !== undefined) entry.push(start);
    if (end !== undefined) entry.push(end);
    entries[PatchKey.Show + accessor] = entry;
  }
}

export function _patch_text_content(
  scopeId: number,
  accessor: Accessor,
  value: string,
  escape: (value: unknown) => string,
  owned?: GroupMask,
  group?: number,
) {
  const entries = patchFillEntries(scopeId, owned, group!);
  if (entries) entries[PatchKey.TextContent + accessor] = value;
  return escape(value);
}

// A spread's attribute set: the entry carries the merged object and the
// client's `_attrs` re-applies it (removing what the new set lacks).
export function _patch_attrs(
  data: Record<string, unknown>,
  accessor: Accessor,
  scopeId: number,
  tagName: string,
  controllable?: 1,
  owned?: GroupMask,
  group?: number,
) {
  const entries = patchFillEntries(scopeId, owned, group!);
  // `controllable` marks a spread owning the element's controllable; the
  // array form carries `skip`/`controllable` without key bytes.
  if (entries) {
    entries[PatchKey.Attrs + accessor] = controllable
      ? [data ?? 0, 0, 1]
      : (data ?? 0);
  }
  return _attrs(data, accessor, scopeId, tagName);
}

// The patch form: static attrs after the spread render separately, so
// the entry names them (`skip`) for the client to leave alone.
export function _patch_attrs_partial(
  data: Record<string, unknown>,
  skip: Record<string, 1>,
  accessor: Accessor,
  scopeId: number,
  tagName: string,
  controllable?: 1,
  owned?: GroupMask,
  group?: number,
) {
  const entries = patchFillEntries(scopeId, owned, group!);
  if (entries) {
    entries[PatchKey.Attrs + accessor] = controllable
      ? [data ?? 0, skip, 1]
      : [data ?? 0, skip];
  }
  return _attrs_partial(data, skip, accessor, scopeId, tagName);
}

// An option's `value` renders through the select-aware writer (it may add
// `selected`); the patch entry is the plain attribute the client re-syncs.
export function _patch_attr_option_value(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
  owned?: GroupMask,
  group?: number,
) {
  const entries = patchFillEntries(scopeId, owned, group!);
  if (entries) {
    entries[PatchKey.Attr + accessor + " value"] = attrValue(value) ?? 0;
  }
  return _attr_option_value(value);
}

function patchStringAttr(
  scopeId: number,
  accessor: Accessor,
  name: string,
  value: string,
  owned?: GroupMask,
  group?: number,
) {
  const entries = patchFillEntries(scopeId, owned, group!);
  if (entries) {
    entries[PatchKey.Attr + accessor + " " + name] = value || 0;
  }
  return stringAttr(name, value);
}

// Whether a consumer withheld a content renderer the flush handed it
// (handed over, never invoked): server values inside fill then.
export function _content_withheld(id: string) {
  return !!getState().withheldContents?.has(id);
}

// How many owners up from a tag's scope `ownerId` is, each the scope's client
// `_` (a content body's owner is where it was defined); none if off the chain.
function findOwnerDepth(state: State, scopeId: number, ownerId?: number) {
  let up = 0;
  for (let cur: number | undefined = scopeId; cur !== undefined; up++) {
    if (cur === ownerId) return up;
    const link: PatchLink | undefined = state.patchLinks?.[cur];
    cur = link && (link.owner ?? link.parent);
  }
}

// Content's owner as a prefix of its id: a `^` per scope up the tag's owner
// chain (the first is the tag's own). An owner off that chain adds the hops
// down to it, from the nearest scope on the chain or from the page root,
// whichever is shorter: `^^ a ` or `a b `. Hops are accessors: content leaves
// a `<for>` row only through a render side effect, so none crosses a row.
function ownerPrefix(state: State, scopeId: number, ownerId: number) {
  const up = findOwnerDepth(state, scopeId, ownerId);
  if (up !== undefined) return "^".repeat(up + 1);
  let hops = "";
  let relative: string | undefined;
  for (let cur = ownerId; cur !== ROOT_SCOPE_ID;) {
    const link: PatchLink | undefined = state.patchLinks?.[cur];
    if (typeof link?.link !== "string") {
      if (relative) return relative;
      if (MARKO_DEBUG) {
        throw new Error(
          link
            ? `Content defined in a \`<for>\` row was rendered outside the row. Only a side effect during render, which Marko does not support, can move it there.`
            : `A patch cannot reach the owner scope ${ownerId} of dynamic tag content.`,
        );
      }
      return "^";
    }
    hops = link.link + " " + hops;
    cur = link.parent;
    const parentUp = relative ? undefined : findOwnerDepth(state, scopeId, cur);
    if (parentUp !== undefined) relative = "^".repeat(parentUp + 1) + hops;
  }
  return relative && relative.length < hops.length ? relative : hops;
}

// Only a shell the server has rides an entry (a missing one rejects the patch),
// shipped once per response unless the page already holds it.
function shipShell(state: PatchState, shellId: string | 0 | undefined) {
  if (shellId && rawShells[shellId]) {
    if (!(state.sentShells ??= new Set()).has(shellId)) {
      state.sentShells.add(shellId);
      state.pendingShells +=
        (state.pendingShells && ",") + quotedShell(shellId);
    }
    return shellId;
  }
}

function attrValue(value: unknown) {
  if (isNotVoid(value)) return value === true ? "" : value + "";
}
