import { assertValidLoopKey } from "../common/errors";
import {
  normalizeDynamicRenderer,
  stringifyClassObject,
  stringifyStyleObject,
  toDelimitedString,
  hasKeys,
  isNotVoid,
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
  isInResumedBranch,
  _client_guard,
  _filled_guard,
  patchFills,
  getFilteredGlobals,
  patchPartial,
  openPatchPartial,
  peekPatchPartial,
  type ScopeInternals,
  type SerializeReasonValue,
  State,
  withBranchId,
  writePatch,
  _attr_content,
  _html,
  type PatchLink,
  type SerializeState,
} from "./writer";

// Intrinsic render summary as ONE self-resolving value: `1` must render,
// `0` proven clean, a lazy thunk resolves on first query; absent = unknown.
type Intrinsics = 0 | 1 | (() => unknown[]);
const kIntrinsics = Symbol();
type WithIntrinsics = { [kIntrinsics]?: Intrinsics };

export function _template_patch(
  templateId: string,
  renderer: ServerRenderer,
  page?: 0 | 1,
  intrinsics?: Intrinsics,
) {
  // A page render of patch template tracks unpatched context.
  const template = _template(
    templateId,
    ((input) => {
      getState().patchPage = true;
      return renderer(input);
    }) as ServerRenderer,
    page as 1,
  ) as Template & ServerRenderer & WithIntrinsics;
  template.patch = renderPatch;
  if (intrinsics !== undefined) template[kIntrinsics] = intrinsics;
  return template;
}

// A child renders unless its summary proves the subtree clean; `0` only
// holds when the walk closed without an unresolved cycle back-edge.
export function _must_render(child: unknown) {
  const intrinsics = (child as WithIntrinsics | undefined)?.[kIntrinsics];
  if (intrinsics === undefined) return true;
  if (typeof intrinsics !== "function") return !!intrinsics;
  return mustRenderWalk(child as WithIntrinsics, new Set(), { t: false });
}

function mustRenderWalk(
  holder: WithIntrinsics,
  visiting: Set<() => unknown[]>,
  taint: { t: boolean },
): boolean {
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
}

export function renderPatch(
  this: Template & ServerRenderer,
  input: TemplateInput = {},
  headers?: PatchHeaders,
): RenderedTemplate {
  // The page root is about to allocate the first id: the flush names it
  // as the walk's entry pair, and globals re-ship with every flush
  // (undefined included) so the live page's global object never reads stale.
  const root = Object.assign(
    (input: TemplateInput) => {
      const state = getState() as PatchState;
      state.rootScopeId = _peek_scope_id();
      // The request's token: what the page holds, which this render adds to.
      const token = headers && readHeader(headers, "x-marko-patch");
      const held = token && token.slice(token.lastIndexOf(";") + 1);
      if (held) {
        state.sentShells = decodeHeld(held);
        state.heldCount = state.sentShells?.size || 0;
      }
      const globals = getFilteredGlobals(state.$global, 1);
      if (globals) {
        patchPartial(state, state.rootScopeId)[PatchKey.Globals] = globals;
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

// The shells the requesting page holds (`x-marko-patch`, after the build
// id), as the last response's closing token named them. The server's shell
// registry numbers every shell of the build in sorted order, so a token is
// the registry size, then the held indices sorted and delta-coded as
// varints, base64. A registry of another size (a lazily registered chunk,
// another build) voids the token. The client never reads it. A token stays
// under a header-safe budget by forgetting its highest indices: their
// shells ship again, nothing else changes.
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
// A token that fails to parse, names another registry size, or an index
// outside the registry holds nothing: the header is the client's, and a bad
// one costs that client a shell, never the render.
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
  // The chunk's items after the first, each on its own line.
  public laterResumes = "";
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
    ownerScopeId?: number,
  ) {
    if (!this.patchInert && !peekPatchPartial(this, branchId)) {
      const link = AccessorPrefix.BranchScopes + accessor;
      (this.patchLinks ??= {})[branchId] = {
        parent: scopeId,
        link: link,
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
    // A response that added a shell closes with the token the next request
    // sends back: id prefixes (the compiler escapes quotes, separators and
    // control characters out of ids) and base64, so it quotes as is. The
    // set only grows from what the token named, so an unchanged size is
    // the same set and the page keeps the token it has.
    if (
      !pending &&
      this.sentShells &&
      this.sentShells.size !== this.heldCount
    ) {
      out += '"' + encodeHeld(this.sentShells) + '"\n';
    }
    this.patchFlushed = undefined;
    this.patchTree = undefined;
    return out;
  }

  // Each item is its own line, applied before the next evaluates (like a
  // page's resume items), so a later one can reference an applied tree.
  override addResumes(serializeState: SerializeState, resumes: string) {
    if (!resumes) return;
    if (serializeState.resumes) {
      this.laterResumes += "\n" + resumes;
    } else {
      serializeState.resumes = resumes;
    }
  }

  // `[...shells, tree]`, or the tree alone; shells ride the first line.
  override resumeScript(resumes: string) {
    this.patchFlushed = 1;
    const { pendingShells, laterResumes } = this;
    this.pendingShells = this.laterResumes = "";
    return (
      (pendingShells
        ? "[" + pendingShells + (resumes && "," + resumes) + "]"
        : resumes) + laterResumes
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

  // Ships the branch index, partial, and (once per response) the shell
  // so the client can create on divergence without bundling content.
  override writeBranch(
    scopeId: number,
    accessor: string,
    cb: () => number | undefined | void,
    shellIds?: string[],
    owned?: SerializeReasonValue,
    group?: number,
  ) {
    // Inert captures render plain html: no entries, no interception.
    if (this.patchInert) return;
    // A branch with a client-owned group upstream re-renders on the resumed
    // page: the patch skips it.
    if (_client_guard(owned, group!)) return 1;
    const branchId = _peek_scope_id();
    (this.patchLinks ??= {})[branchId] = {
      parent: scopeId,
      link: AccessorPrefix.BranchScopes + accessor,
    };
    const opened = openPatchPartial(this, branchId);
    const branchIndex = withBranchId(branchId, cb);
    const shellId =
      branchIndex === undefined
        ? undefined
        : shipShell(this, shellIds?.[branchIndex]);
    // Shape-typed entry, densest form first: a bare number is the
    // branch index + 1 (`0` hides), and empty/zero members drop.
    const branchPartial =
      branchIndex === undefined || !hasKeys(opened) ? undefined : opened;
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
    if (branchIndex === undefined) {
      // Nothing rendered took the peeked id: consume it so no later scope
      // finds this branch's partial or link.
      _scope_id();
    }
    return 1 as const;
  }

  // Ships ordered item partials and keys: existing keys pair, new keys
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
    owned?: SerializeReasonValue,
    group?: number,
  ) {
    if (this.patchInert) return;
    // A client-owned list, or a stable one (nothing request-derived behind
    // it) outside a branch a flush creates, keeps its rows: the entry ships
    // only for what the rows themselves fill.
    const rowsKept =
      _client_guard(owned, group!) || !_filled_guard(owned, group!);
    const partials: object[] = [];
    const keys: unknown[] = [];
    let indexKeys = true;
    if (MARKO_DEBUG) {
      // eslint-disable-next-line no-var
      var seenKeys = new Set<unknown>();
    }
    iterate((itemKey, sameAsIndex, render) => {
      if (MARKO_DEBUG) {
        assertValidLoopKey(itemKey, seenKeys);
      }
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
      partials.push(openPatchPartial(this, branchId));
      withBranchId(branchId, render);
    });
    if (rowsKept && !partials.some(hasKeys)) return 1;
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
  // `0` is the removal sentinel: normalized values are always strings and
  // `undefined` entries are dropped entirely.
  if (patchFills(owned, group!)) {
    writePatch(scopeId, {
      [PatchKey.Attr + accessor + " " + name]: attrValue(value) ?? 0,
    });
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
// written (tag-variable children render first), else on its first write
// (`patchPartial` derives the entry from the link).
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
    const partial = peekPatchPartial(state, childScopeId);
    if (partial) {
      writePatch(scopeId, {
        [PatchKey.Child + accessor]: partial,
      });
    }
  }
}

// A server-owned local whose param group the client is upstream of is not
// written: a fresh scope re-derives it by running its upstreams' closure
// inits (setup).
export function _patch_init(scopeId: number, initIds: string) {
  if (getState().writesPatches) {
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
    if (setup && !isInResumedBranch()) return "";
    const bind = bindEntry(state, scopeId, value);
    const entryKey = (bind ? PatchKey.BindValue : PatchKey.Value) + key;
    if (bind) value = bind;
    if (setup) {
      if (state.patchFlushed) {
        throw new Error(
          "A patch cannot write after its flush was written (async patch content is not supported).",
        );
      }
      // Setup entries nest under `s`: the client applies them only to
      // freshly created scopes; only a scope below a branch is created.
      const partial = patchPartial(state, scopeId);
      ((partial[PatchKey.Setup] ??= {}) as Record<string, unknown>)[entryKey] =
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
  owned?: SerializeReasonValue,
  group?: number,
) {
  if (patchFills(owned, group!)) {
    writePatch(scopeId, { [PatchKey.Control + type + accessor]: value });
  }
  return "";
}

// Handler wiring: a scope-bound registration ships as a bind entry, any
// other value rides the creation seeds as a plain write.
export function _patch_bind(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
  owned?: SerializeReasonValue,
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

// A value that is itself a registration bound to the site's scope or an owner
// up its chain resolves there by hops: its bare id, else `[id, up]`. The
// serializer writes any other bound registration as a reference.
function bindEntry(state: State, scopeId: number, value: unknown) {
  if (value && (typeof value === "object" || typeof value === "function")) {
    const registered = getRegistered(value);
    const bound = registered?.scope as ScopeInternals | undefined;
    const up = bound && findOwnerDepth(state, scopeId, bound[K_SCOPE_ID]);
    if (up !== undefined) return up ? [registered!.id, up] : registered!.id;
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
    if (setup && !isInResumedBranch()) return "";
    // A write of a bound registration resolves by path like a handler slot.
    const bind = bindEntry(state, scopeId, value);
    const entryKey = (bind ? PatchKey.Bind : PatchKey.Write) + accessor;
    if (bind) value = bind;
    if (setup) {
      const partial = patchPartial(state, scopeId);
      ((partial[PatchKey.Setup] ??= {}) as Record<string, unknown>)[entryKey] =
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
  owned?: SerializeReasonValue,
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
      const boundScope = id
        ? (getRegistered(renderer as WeakKey)?.scope as
            | ScopeInternals
            | undefined)
        : undefined;
      // Owner-bound content (shipped content's owner, bound content's scope)
      // is a `^` binding the tag's scope and one more per hop up; content
      // bound off that chain rides as itself (a reference).
      const ownerId = boundScope
        ? boundScope[K_SCOPE_ID]
        : id
          ? (renderer as ServerRenderer)[RendererProp.Owner]
          : undefined;
      const up =
        ownerId !== undefined && findOwnerDepth(state, scopeId, ownerId);
      const byRef = !!boundScope && up === undefined;
      if (id && !boundScope) shipShell(state as PatchState, id);
      if (contentId) shipShell(state as PatchState, contentId);
      const native = typeof renderer === "string";
      const entry: unknown[] = [
        id && !byRef
          ? (ownerId === undefined ? "" : "^".repeat((up || 0) + 1)) + id
          : renderer || 0,
        args || 0,
        contentId,
        varId,
      ];
      while (entry.length > 1 && !entry[entry.length - 1]) entry.pop();
      if (native && entry.length > 1) entry[0] = ">" + renderer;
      writePatch(scopeId, {
        [PatchKey.DynamicTag + accessor]:
          entry.length > 1 || native ? entry : entry[0],
      });
    }
  }
  // How a patch treats the tag (`_dynamic_tag`'s `patchPairing`): `1` pairs it,
  // `2` skips it (a client-owned group is upstream of the renderer).
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
  owned?: SerializeReasonValue,
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
  owned?: SerializeReasonValue,
  group?: number,
) {
  const content = data?.content;
  _patch_dynamic_tag(scopeId, accessor, content, 0, 0, 0, owned, group);
  _html(
    `${_patch_attrs_partial(withoutContent(data), skip, accessor, scopeId, tagName, controllable, owned, group)}>`,
  );
  _attr_content(accessor, scopeId, content, serializeReason);
}

// The content renderer never rides the set: its entry carries it.
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
  owned?: SerializeReasonValue,
  group?: number,
) {
  if (patchFills(owned, group!)) {
    writePatch(scopeId, { [PatchKey.Text + accessor]: _to_text(value) });
  }
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
  owned?: SerializeReasonValue,
  group?: number,
) {
  if (patchFills(owned, group!)) {
    writePatch(scopeId, { [PatchKey.Html + accessor]: _unescaped(value) });
  }
  return _html_resume(scopeId, accessor, value, shouldResume);
}

// A text-only body carries plain text (html output escapes per namespace);
// a `<style>` interpolation's write doubles as the escaped output.
export function _patch_style(
  scopeId: number,
  accessor: Accessor,
  name: string,
  value: unknown,
  owned?: SerializeReasonValue,
  group?: number,
) {
  if (patchFills(owned, group!)) {
    writePatch(scopeId, { [PatchKey.Style + accessor + " " + name]: value });
  }
  return _escape_style_value(value);
}

export function _patch_text_content(
  scopeId: number,
  accessor: Accessor,
  value: string,
  escape: (value: unknown) => string,
  owned?: SerializeReasonValue,
  group?: number,
) {
  if (patchFills(owned, group!)) {
    writePatch(scopeId, { [PatchKey.TextContent + accessor]: value });
  }
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
  owned?: SerializeReasonValue,
  group?: number,
) {
  if (patchFills(owned, group!)) {
    // `controllable` marks a spread owning the element's controllable; the
    // array form carries `skip`/`controllable` without key bytes.
    writePatch(scopeId, {
      [PatchKey.Attrs + accessor]: controllable
        ? [data ?? 0, 0, 1]
        : (data ?? 0),
    });
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
  controllable?: 1,
  owned?: SerializeReasonValue,
  group?: number,
) {
  if (patchFills(owned, group!)) {
    writePatch(scopeId, {
      [PatchKey.Attrs + accessor]: controllable
        ? [data ?? 0, skip, 1]
        : [data ?? 0, skip],
    });
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
  if (patchFills(owned, group!)) {
    writePatch(scopeId, {
      [PatchKey.Attr + accessor + " value"]: attrValue(value) ?? 0,
    });
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
  if (patchFills(owned, group!)) {
    writePatch(scopeId, {
      [PatchKey.Attr + accessor + " " + name]: value || 0,
    });
  }
  return stringAttr(name, value);
}

// Whether a consumer withheld a content renderer the flush handed it
// (handed over, never invoked): server values inside fill then.
export function _content_withheld(id: string) {
  const state = getState() as PatchState;
  return !!state.definedContents?.has(id) && !state.renderedContents?.has(id);
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

// Only a shell the server has rides an entry (a missing one rejects the patch);
// a named one moves last, so a token over budget forgets the stalest first.
function shipShell(state: PatchState, shellId: string | 0 | undefined) {
  if (shellId && rawShells[shellId]) {
    if (!(state.sentShells ??= new Set()).delete(shellId)) {
      state.pendingShells +=
        (state.pendingShells && ",") + quotedShell(shellId);
    }
    state.sentShells.add(shellId);
    return shellId;
  }
}

function attrValue(value: unknown) {
  if (isNotVoid(value)) return value === true ? "" : value + "";
}
