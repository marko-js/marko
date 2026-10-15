import { normalizeDynamicRenderer } from "../../common/helpers";
import { ROOT_SCOPE_ID } from "../../common/meta";
import {
  type Accessor,
  AccessorPrefix,
  PatchKey,
  RenderDataProp,
  RendererProp,
} from "../../common/types";
import { K_SCOPE_ID, REGISTRY } from "../serializer";
import type { ServerRenderer } from "../template";
import {
  type Boundary,
  type Chunk,
  type GroupMask,
  type PartialScope,
  type ScopeInternals,
  type Channel,
  State,
  _attr_content as _base_attr_content,
  _resume_locals as _base_resume_locals,
  _script as _base_script,
  _subscribe as _base_subscribe,
  _var as _base_var,
  _html,
  _peek_scope_id,
  _resume,
  _scope,
  getChunk,
  getState,
  kBranchId,
  getGroupReason,
  scopeWithId,
  withBranchId,
  withContext,
} from "../writer";
import { PatchSerializerState } from "./serializer";
import { quotedShell, rawShells } from "./shells";
import { encodeHeld } from "./token";

// The server's build: what a patch page's render data names, the prefix of
// its requests' header (`patchRequest`) and the mark of a patch it answers.
export let patchBuild: string | undefined;

/** Names the build this server renders, once, before it renders a patch page.
 * Every page names it and every patch request and patch carries it, so a page
 * of another build is never patched (its request answers `"stale"`), and
 * patches render only once a build is named. The id must change whenever the
 * server or client output does; it is written raw in a script and in headers.
 * @experimental The patch protocol may change in a minor release. */
export function setPatchBuild(build: string) {
  if (MARKO_DEBUG && !/^[^"\\<;\0-\x1f\x7f]+$/.test(build)) {
    throw new Error(
      `Invalid patch build id ${JSON.stringify(build)}: it is written raw in a script and in headers, so it must be non-empty and cannot hold " \\ < ; or control characters.`,
    );
  }
  patchBuild = build;
}

// Markers a patch pairs through, walked even on a page with no other client
// code: a walk with nothing else to resume still runs on the runtime.
export function walkMarkers(state: State) {
  state.walkOnNextFlush = state.needsWalkerRuntime = true;
}

// Set while rendering structure patch renders skip (its branch expression
// derives from a client-owned group): the resumed page re-renders it, so no patch fills its reads.
const kUnpatched = Symbol("Unpatched");

export function inUnpatched() {
  return !!getChunk()?.context?.[kUnpatched];
}

export function withUnpatched<T>(cb: () => T): T;
export function withUnpatched<T, U>(cb: (value: U) => T, value: U): T;
export function withUnpatched<T, U>(cb: (value?: U) => T, value?: U): T {
  return withContext(kUnpatched, 1, cb, value);
}

// The branch of a `@catch` a patch creates from its renderer, whose setup sets
// up the scopes rendering directly in it (its own and its children's).
const kSetUp = Symbol("Set Up");

export function withRendererSetUp<U>(cb: (value: U) => void, value: U) {
  return withContext(
    kSetUp,
    getChunk()!.context![kBranchId],
    withUnpatched<void, U>,
    cb,
    value,
  );
}

// A patch mounts an effect where no creation queues it (`client` is `1` where one does): a
// created `@catch`'s renderer queues all but those reading only patch-written values (`0`).
export function _script(
  scopeId: number,
  registryId: string,
  markerGuard?: number,
  client?: 0 | 1,
) {
  const context = getChunk()?.context;
  if (
    !(getState() instanceof PatchUpdateState) ||
    (context?.[kSetUp] !== undefined && context[kSetUp] === context[kBranchId]
      ? client === 0
      : client !== 1)
  ) {
    _base_script(scopeId, registryId, markerGuard);
  }
}

// The lazy modules a patch render is inside: a write there makes the flush
// wait for each of them.
const kReadyIds = Symbol("Ready Ids");

export function withPatchReadyId<T>(
  readyId: string,
  cb: (input: unknown) => T,
  input: unknown,
): T {
  const readyIds = getPatchReadyIds();
  return withContext(
    kReadyIds,
    readyIds ? [...readyIds, readyId] : [readyId],
    cb,
    input,
  );
}

function getPatchReadyIds() {
  return getChunk()!.context?.[kReadyIds] as string[] | undefined;
}

// The branch a patch renders whose expression nothing behind can change.
const kKeptBranch = Symbol("Kept Branch");

// Whether a flush may create the scopes rendering here: in a branch not kept
// (the client decides by divergence).
export function inCreatable() {
  const context = getChunk()?.context;
  return (
    context?.[kBranchId] !== undefined &&
    context[kBranchId] !== context[kKeptBranch]
  );
}

// Renders a branch a flush pairs but never creates.
export function withKeptBranchId<T>(branchId: number, cb: () => T): T {
  return withBranchId(branchId, keepBranch<T, void, void>, cb);
}

// A loop's row renderer for rows a flush pairs but never creates, made once
// per loop: each row renders as `withKeptBranchId` renders a branch.
export function keptRow<A, B>(cb: (a: A, b: B) => void) {
  return (a: A, b: B) => keepBranch(cb, a, b);
}

function keepBranch<T, U, V>(cb: (a: U, b: V) => T, a: U, b: V): T {
  return withContext(kKeptBranch, getChunk()!.context![kBranchId], cb, a, b);
}

// A patch render ran this content renderer, so the values inside it fill as
// it renders (`_content_withheld`).
export function markContentRendered(
  state: PatchUpdateState,
  renderer: unknown,
) {
  const id = (renderer as ServerRenderer | undefined)?.[RendererProp.Id];
  if (id) state.withheldContents?.get(id)?.delete(renderer as ServerRenderer);
}

// Setup ids share the shell grammar (`inits…!effects…`), each written once:
// several locals may derive from one closure.
export function addSetupId(
  state: PatchUpdateState,
  scopeId: number,
  id: string,
  effect?: 1,
) {
  const setup = ensurePatchSetup(state, ensureScopePatch(state, scopeId));
  const setupIds = (state.setupIds ??= new Map());
  let ids = setupIds.get(setup);
  if (!ids) {
    setupIds.set(setup, (ids = { inits: "", effects: "", added: new Set() }));
  }
  if (ids.added.has(id)) return;
  ids.added.add(id);
  if (effect) ids.effects += (ids.effects && " ") + id;
  else ids.inits += (ids.inits && " ") + id;
  setup[PatchKey.Init] = ids.effects
    ? ids.inits + "!" + ids.effects
    : ids.inits;
}

// Structural patch entries hold their child patch objects, so the root
// patch IS the flush tree and one ordinary serializer flush emits it.
export function writePatch(
  state: PatchUpdateState,
  scopeId: number,
  key: string,
  value: unknown,
) {
  // `undefined` survives to the wire (`$`): it overwrites, never elides.
  ensureScopePatch(state, scopeId)[key] = value;
}

// A structural entry's key (`prefix + accessor`), built once per accessor: a
// key built on every write is a fresh string each patch object must intern.
const entryKeys: Record<string, Map<string, string>> = {};

export function entryKey(prefix: string, accessor: string) {
  const keys = (entryKeys[prefix] ||= new Map());
  let key = keys.get(accessor);
  if (key === undefined) keys.set(accessor, (key = prefix + accessor));
  return key;
}

export function peekScopePatch(state: PatchUpdateState, scopeId: number) {
  return state.patchTree?.[scopeId];
}

// A branch's patch opens detached before its render: the `Branch` entry
// embeds it, so no write inside links it to the parent first.
export function openScopePatch(state: PatchUpdateState, scopeId: number) {
  return (ensurePatchTree(state)[scopeId] = patchNode(state, {}));
}

// A node the patch writers build: nothing else holds it, so the patch
// serializer writes it without tracking its identity.
export function patchNode<T extends object>(state: PatchUpdateState, node: T) {
  (state.patchNodes ||= new Set()).add(node);
  return node;
}

export function ensurePatchSetup(
  state: PatchUpdateState,
  patch: Record<string, unknown>,
) {
  return (patch[PatchKey.Setup] ??= patchNode(state, {})) as Record<
    string,
    unknown
  >;
}

export function ensureScopePatch(
  state: PatchUpdateState,
  scopeId: number,
): Record<string, unknown> {
  const readyIds = getPatchReadyIds();
  if (readyIds) for (const readyId of readyIds) patchWait(state, readyId);
  const patches = ensurePatchTree(state);
  let patch = patches[scopeId];
  if (!patch) {
    linkScopePatch(
      state,
      scopeId,
      (patch = patches[scopeId] = patchNode(state, {})),
    );
  }
  return patch;
}

// Hangs a scope's patch off its parent's entry, or roots it; returns an entry
// that carries creation ids beside the patch.
export function linkScopePatch(
  state: PatchUpdateState,
  scopeId: number,
  patch: Record<string, unknown>,
): unknown[] | undefined {
  const link = state.patchLinks?.[scopeId];
  if (link) {
    // A scope writing after its parent's structural entry re-links through
    // it; a paired branch ignores the creation ids its child entry carries.
    const { parent, link: hop, content: contentId, slots: slotIds } = link;
    if (typeof hop === "string") {
      if (contentId) shipShell(state, contentId);
      const entry =
        slotIds && patchNode(state, [patch, contentId || 0, ...slotIds]);
      writePatch(state, parent, entryKey(PatchKey.Child, hop), entry || patch);
      return entry;
    } else {
      (
        (ensureScopePatch(state, parent)[
          entryKey(PatchKey.LoopItem, hop[0])
        ] ??= patchNode(state, [])) as unknown[]
      ).push(hop[1], patch);
    }
  } else if (scopeId === ROOT_SCOPE_ID) {
    // Every other patch nests inside an ancestor's structural entry rooted
    // here (`queueScope` is patch-inert, so the root registers directly).
    _scope(scopeId, patch);
    // A lazy module is named only by the frame that first needs it.
    state.patchFlushReadyIds = undefined;
    const { channel } = getChunk()!;
    channel.writeScopes[scopeId] = patch;
    channel.flushScopes = true;
  }
}

// The frame holding the current root names the lazy modules it is the first of
// the response to need (`PatchUpdateState.addResumes`); later frames wait behind it.
export function patchWait(state: PatchUpdateState, readyId: string) {
  const readyIds = (state.readyIds ||= new Set());
  if (readyIds.has(readyId)) return;
  readyIds.add(readyId);
  // The root first (creating it starts the current root's ids afresh).
  ensureScopePatch(state, ROOT_SCOPE_ID);
  (state.patchFlushReadyIds ??= new Set()).add(readyId);
}

// The flush's merge tree of patches by scope; `joinFlush` drops it.
function ensurePatchTree(state: PatchUpdateState) {
  return (state.patchTree ??= {});
}

// Every group server-sourced, for a child whose groups the caller cannot see;
// bit 0, which no group uses, keeps it apart from any mask, as `ALL_GROUPS`.
export const SERVER_ALL = 0x55555555;

// A group's 2-bit sources value in a patch build: no mask is server-sourced (a
// write with no ownership args), as is `SERVER_ALL`.
export function groupSources(mask: GroupMask, group: number) {
  return mask === undefined || mask === SERVER_ALL
    ? 2
    : getGroupReason(mask, group);
}

// Whether the group is client-sourced (the low mask bit): the resumed page then
// owns whatever derives from the group.
export function _client_guard(mask: GroupMask, group: number) {
  return groupSources(mask, group) & 1 ? 1 : 0;
}

// How a scope's patch reaches its parent's entry.
export interface PatchLink {
  parent: number;
  // A child accessor, or a loop item: its index, with its key when not that.
  link: string | [accessor: string, at: number | [index: number, key: unknown]];
  content?: string;
  slots?: (string | undefined)[];
  // A content body's owner (its client `_`) when not the rendering scope.
  owner?: number;
}

// A patch template's document render: structure tracks unpatched context.
export class PatchRenderState extends State {
  // A patch page's render data names the server's build, which its patch
  // requests lead with.
  override runtimeScript() {
    return (
      super.runtimeScript() +
      "." +
      RenderDataProp.PatchBuild +
      '="' +
      patchBuild +
      '"'
    );
  }

  // The client stamps the document's nonce on the scripts and styles patches
  // create, and runs each frame with it, so the nonce always serializes.
  override getSerializedGlobals() {
    const globals = super.getSerializedGlobals();
    const { cspNonce } = this.$global;
    if (!cspNonce) return globals;
    const withNonce = globals || {};
    withNonce.cspNonce = cspNonce;
    return withNonce;
  }

  // A try outside unpatched structure keeps its marks, which patches pair
  // through whether it shows its body or its `@catch`.
  override keepsTryMarks(chunk: Chunk, resumeWrites: number) {
    return !inUnpatched() || super.keepsTryMarks(chunk, resumeWrites);
  }
}

// A patch's globals keep undefined-valued keys (they overwrite, where a resume
// elides) but not the nonce: the document's CSP decides the live page's.
export function patchGlobals($global: Record<string, unknown>) {
  if (!$global) return 0;

  const serializedGlobals = $global.serializedGlobals as
    | string[]
    | Record<string, boolean>
    | undefined;

  if (!serializedGlobals) return 0;

  let filtered: 0 | Record<string, unknown> = 0;

  if (Array.isArray(serializedGlobals)) {
    for (const key of serializedGlobals) {
      const value = $global[key];
      if (key !== "cspNonce") {
        if (filtered) {
          filtered[key] = value;
        } else {
          filtered = { [key]: value };
        }
      }
    }
  } else {
    for (const key in serializedGlobals) {
      if (serializedGlobals[key]) {
        const value = $global[key];
        if (key !== "cspNonce") {
          if (filtered) {
            filtered[key] = value;
          } else {
            filtered = { [key]: value };
          }
        }
      }
    }
  }

  return filtered;
}

// The nonce a `<script>` or `<style>` spread injects: none in a patch render,
// whose request nonce the live page's CSP does not allow (it keeps its own).
export function _patch_nonce() {
  const state = getState();
  return state instanceof PatchUpdateState ? undefined : state.$global.cspNonce;
}

// Only a shell the server has rides an entry (a missing one rejects the patch),
// shipped once per response unless the page already holds it.
export function shipShell(
  state: PatchUpdateState,
  shellId: string | 0 | undefined,
) {
  if (shellId && rawShells[shellId]) {
    if (!(state.sentShells ??= new Set()).has(shellId)) {
      state.sentShells.add(shellId);
      state.pendingShells +=
        (state.pendingShells && ",") + quotedShell(shellId);
    }
    return shellId;
  }
}

// Serialize guards stay unset so the compiled resume payload drops at the
// source: a flush carries only patch fills.
export class PatchUpdateState extends PatchRenderState {
  public sentShells?: Set<string>;
  // How many shells the request's token named: a response that shipped
  // none leaves the page's token as it is.
  public heldCount = 0;
  public pendingShells = "";
  override serializer = new PatchSerializerState(this);
  // The flush's merge tree of patches by scope; `joinFlush` drops it.
  patchTree?: Record<number, Record<string, unknown>>;
  // Every object and array the patch writers built for the flush's tree.
  patchNodes?: Set<object>;
  // The lazy templates the current root is the first in the response to name
  // (all it named are `readyIds`): its frame applies once all are resident.
  patchFlushReadyIds?: Set<string>;
  // How a scope hangs off its parent: a reference's path from the root walks
  // these, and a scope writing after its parent's entry re-links through one.
  patchLinks?: Record<number, PatchLink>;
  // Content instances (by id) a patch render created and has not invoked
  // since: their consumer withheld them, so their values fill.
  withheldContents?: Map<string, Set<ServerRenderer>>;
  // Each setup envelope's ids by side, and every id it holds.
  setupIds?: Map<
    object,
    { inits: string; effects: string; added: Set<string> }
  >;

  // Nothing ever resumes a patch render's output, so resume writes stop at
  // the canonical scope (server reads); patch data flows through `writePatch`.
  override queueScope() {}

  override queuePassiveScope() {}

  // Paired scopes keep their effects and a branch's ride its shell; a scope a
  // creation below a branch (a child instance) mounts from setup.
  override queueEffect(scopeId: number, registryId: string) {
    if (inCreatable() && getChunk()!.context?.[kBranchId] !== scopeId) {
      addSetupId(this, scopeId, registryId, 1);
    }
  }

  // A pending patch must not stringify until its flush is emitted: the same
  // patch objects keep receiving later writes.
  override serializeFlush(boundary: Boundary) {
    if (!boundary.count) super.serializeFlush(boundary);
  }

  constructor($global: State["$global"]) {
    super($global);
    this.hasWalkerRuntime = true;
    this.hasWrittenReady = true;
    // The live page owns its serialized globals; a flush never re-ships them.
    this.hasWrittenGlobals = true;
  }

  // The client evaluates and applies each line as one expression.
  override joinFlush(_html: string, scripts: string, pending: number) {
    let out = scripts ? scripts + "\n" : "";
    if (MARKO_DEBUG && this.pendingShells) {
      throw new Error(
        "Invalid patch state, a shell was shipped with nothing to resume in its chunk.",
      );
    }
    // The set only grows from the request's token, so an unchanged size means
    // the page's token still holds; the client reads a `;` line as the token.
    if (
      !pending &&
      this.sentShells &&
      this.sentShells.size !== this.heldCount
    ) {
      out += ";" + encodeHeld(this.sentShells) + "\n";
    }
    this.patchTree = this.patchNodes = this.setupIds = undefined;
    return out;
  }

  // Each item is a line applied before the next evaluates; the first, the tree or
  // `[...shells, tree]`, is led by the lazy modules it waits for (`_a,_b,{…}`).
  override addResumes(channel: Channel, resumes: string) {
    if (!resumes) return;
    // The client reads a leading id (or a debug id's string) as a module to
    // wait for, so no item may start like one.
    if (MARKO_DEBUG && !"{[(".includes(resumes[0])) {
      throw new Error(
        `Invalid patch state, a frame starts with "${resumes[0]}".`,
      );
    }
    if (channel.resumes) {
      channel.resumes += "\n" + resumes;
    } else {
      let ready = "";
      // An optimized id ships as its template id (the client restores the
      // `_`); a debug id is a path, so it ships as a string.
      for (const id of this.patchFlushReadyIds || []) {
        ready += (MARKO_DEBUG ? JSON.stringify(id) : id.slice(1)) + ",";
      }
      channel.resumes =
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
}

export function pairBranch(
  state: PatchUpdateState,
  scopeId: number,
  accessor: Accessor,
  branchId: number,
  contentId?: string,
  slotIds?: (string | undefined)[],
  ownerScopeId?: number,
) {
  if (!peekScopePatch(state, branchId)) {
    (state.patchLinks ??= {})[branchId] = {
      parent: scopeId,
      link: entryKey(AccessorPrefix.BranchScopes, accessor),
      content: contentId,
      slots: slotIds,
      owner: ownerScopeId,
    };
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
  if (state instanceof PatchUpdateState) return;
  // Each join's set rides the globals (scope 0), as a closure's rides its owner.
  const key = AccessorPrefix.ClosureScopes + id;
  _subscribe(
    (scopeWithId(state, 0)[key] ||
      _scope(0, { [key]: new Set() })[key]) as Set<ScopeInternals>,
    scopeWithId(state, scopeId),
  );
}

// On when no patch fills the group here: it is client-sourced, or the read
// sits in unpatched structure (the patch `_write_if` folded in: on a page, the mask).
export function _unfilled_if(owned?: GroupMask, group?: number) {
  const bits = groupSources(owned, group!);
  return bits & 1 || (bits && inUnpatched()) ? 1 : undefined;
}

// Where a hole's fill goes: the scope's patch if server-owned, else a created scope's setup
// envelope unless a client source delivers it (`setup`: still), else `0`; a page writes html.
export function ensureFills(
  scopeId: number,
  mask: GroupMask,
  group: number,
  setup?: 1,
) {
  const state = getState();
  if (!(state instanceof PatchUpdateState)) {
    walkMarkers(getState());
    return;
  }
  const owned = groupSources(mask, group);
  if (owned !== 2 && ((owned && !setup) || !inCreatable())) return 0;
  const patch = ensureScopePatch(state, scopeId);
  return owned === 2 ? patch : ensurePatchSetup(state, patch);
}

// A patch update's output for a hole: its fill where the patch fills it, and
// never html.
export function writeFill(
  fills: Record<string, unknown> | 0,
  key: string,
  value: unknown,
) {
  if (fills) fills[key] = value;
  return "";
}

// On when a patch fills the group here: server-owned, or constant (`0`, a
// call-site constant) where a fresh scope may need the seed.
export function _filled_guard(mask: GroupMask, group: number) {
  const owned = groupSources(mask, group);
  return owned === 2 || (owned === 0 && inCreatable()) ? 1 : 0;
}

// On where the server alone feeds the group: a patch writes its values in
// place; a constant's only seed a created scope.
export function _server_guard(mask: GroupMask, group: number) {
  return groupSources(mask, group) === 2 ? 1 : 0;
}

// Page-side group guards (a patch serializes no resume data): any
// contribution, client or server, can change — the group's data serializes.
export function _write_if(mask: GroupMask, group: number) {
  return !(getState() instanceof PatchUpdateState) && groupSources(mask, group)
    ? 1
    : undefined;
}

// An instance whose groups are constant (a mask composed to `0`) still
// resumes its markers, since patches pair on them.
export function _write_guard(mask: GroupMask, group: number) {
  return !(getState() instanceof PatchUpdateState) &&
    (mask === 0 || groupSources(mask, group))
    ? 1
    : 0;
}

// A group's 2-bit value, composed into a child mask by pass-through.
export function _mask_group(mask: GroupMask, group: number) {
  return groupSources(mask, group);
}

// Peeks the child's scope id and links it: a child already written (tag-variable
// children render first) links now, any other on its first write (`patchLinks`).
export function _patch_child(scopeId: number, accessor: Accessor) {
  const childScopeId = _peek_scope_id();
  const state = getState();
  if (state instanceof PatchUpdateState) {
    (state.patchLinks ??= {})[childScopeId] = {
      parent: scopeId,
      link: accessor,
    };
    const patch = peekScopePatch(state, childScopeId);
    if (patch) {
      writePatch(state, scopeId, entryKey(PatchKey.Child, accessor), patch);
    }
  }
  return childScopeId;
}

// An init a fresh scope runs (setup) for what the client owns but nothing
// delivers: a closure a branch local derives from, or a root join.
export function _patch_init(scopeId: number, initId: string) {
  const state = getState();
  if (state instanceof PatchUpdateState && inCreatable()) {
    addSetupId(state, scopeId, initId);
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
  if (state instanceof PatchUpdateState) {
    // A seed for a branch no flush creates is dropped before any scan.
    if (setup && !inCreatable()) return "";
    const bind = bindEntry(state, scopeId, value);
    const patch = ensureScopePatch(state, scopeId);
    // Setup entries nest under `s`: the client applies them only to
    // freshly created scopes; only a scope below a branch is created.
    const entries = setup ? ensurePatchSetup(state, patch) : patch;
    // `key` is the compiled `Value` key; a bound registration's is rare.
    if (bind) {
      entries[PatchKey.BindValue + key.slice(PatchKey.Value.length)] = bind;
    } else {
      entries[key] = value;
    }
  }
  return "";
}

// Handler wiring: a scope-bound registration ships as a bind entry, any
// other value rides the creation seeds as a plain write. Returns the handler.
export function _patch_bind<T>(
  scopeId: number,
  key: string,
  value: T,
  mask?: GroupMask,
  group?: number,
) {
  const state = getState();
  if (state instanceof PatchUpdateState) {
    // A constant group's handler is a paired scope's already: only a created
    // scope takes it, as `ensureFills` seeds.
    const owned = groupSources(mask, group!);
    if (owned === 2 || (owned === 0 && inCreatable())) {
      const patch = ensureScopePatch(state, scopeId);
      const bind = bindEntry(state, scopeId, value);
      if (bind) {
        (owned === 2 ? patch : ensurePatchSetup(state, patch))[key] = bind;
      } else {
        // Both forms: the plain write clears paired scopes' slots, while the setup
        // entry lands after a created scope's seeds (which reset the change slot).
        const writeKey = PatchKey.Write + key.slice(PatchKey.Bind.length);
        if (owned === 2) patch[writeKey] = value;
        if (inCreatable()) ensurePatchSetup(state, patch)[writeKey] = value;
      }
    }
  }
  return value;
}

// A controllable `<let>`: its value fills a paired scope while the handler
// controls it under the server's ownership, else seeds a created one; the bind
// follows, so a seed cannot clobber an installed handler.
export function _patch_let_change(
  scopeId: number,
  valueKey: string,
  value: unknown,
  bindKey: string,
  change: unknown,
  owned?: GroupMask,
  group?: number,
  bindOwned?: GroupMask,
  bindGroup?: number,
) {
  if (getState() instanceof PatchUpdateState) {
    _patch_value(
      scopeId,
      valueKey,
      value,
      change && _filled_guard(owned, group!) ? undefined : 1,
    );
    _patch_bind(scopeId, bindKey, change, bindOwned, bindGroup);
  }
}

// A registration bound to the site's scope or an owner up its chain ships as
// its id or `[id, up]`; the serializer writes any other as a reference.
function bindEntry(state: PatchUpdateState, scopeId: number, value: unknown) {
  const registered =
    typeof value === "function" ? REGISTRY.get(value) : undefined;
  const bound = registered?.scope as ScopeInternals | undefined;
  const up = bound && findOwnerDepth(state, scopeId, bound[K_SCOPE_ID]);
  if (up !== undefined) {
    // Render-only locals (a loop's values) ride along, as the document's
    // call to the registered factory passes them; a function's ride its reference.
    const locals = registered!.locals?.(state.scope);
    if (!locals) return up ? [registered!.id, up] : registered!.id;
    if ((value as ServerRenderer)[RendererProp.Id]) {
      return [registered!.id, up, ...locals];
    }
  }
}

// A patch has no client scope for a function's render-only locals: they ride
// its reference to the owner (`PatchSerializerState.writeScopedRegistration`).
export function _resume_locals<T extends WeakKey>(
  val: T,
  id: string,
  locals: PartialScope,
  ownerScopeId?: number,
): T {
  return getState() instanceof PatchUpdateState
    ? _resume(val, id, ownerScopeId ?? ROOT_SCOPE_ID, () => [locals])
    : _base_resume_locals(val, id, locals, ownerScopeId);
}

// A patched scope write: setup entries nest under `s` AFTER the seeds, so
// a controllable seed cannot clobber its handler.
export function _patch_write(
  scopeId: number,
  key: string,
  value: unknown,
  setup?: 1,
) {
  const state = getState();
  if (state instanceof PatchUpdateState) {
    if (setup && !inCreatable()) return "";
    const bind = bindEntry(state, scopeId, value);
    const patch = ensureScopePatch(state, scopeId);
    const entries = setup ? ensurePatchSetup(state, patch) : patch;
    // A write of a bound registration resolves by path like a handler slot.
    if (bind) {
      entries[PatchKey.Bind + key.slice(PatchKey.Write.length)] = bind;
    } else {
      entries[key] = value;
    }
  }
  return "";
}

export function _patch_effect(scopeId: number, key: string, accessors: string) {
  const state = getState();
  if (state instanceof PatchUpdateState) {
    writePatch(state, scopeId, key, accessors);
  }
  return "";
}

// A page render's resume payload rides this; a patch carries fills alone.
export function _page_render() {
  return getState() instanceof PatchUpdateState ? undefined : 1;
}

// How many owners up from a tag's scope `ownerId` is, each the scope's client
// `_` (a content body's owner is where it was defined); none if off the chain.
export function findOwnerDepth(
  state: PatchUpdateState,
  scopeId: number,
  ownerId?: number,
) {
  let up = 0;
  for (let cur: number | undefined = scopeId; cur !== undefined; up++) {
    if (cur === ownerId) return up;
    const link: PatchLink | undefined = state.patchLinks?.[cur];
    cur = link && (link.owner ?? link.parent);
  }
}

// A flush's scopes are live already (paired) or subscribe as they render
// (created); a patch never records a subscription.
export function _subscribe(
  subscribers: Set<ScopeInternals> | undefined,
  scope: ScopeInternals,
  resumeId?: string | 0,
  markerGuard?: number,
) {
  return getState() instanceof PatchUpdateState
    ? scope
    : _base_subscribe(subscribers, scope, resumeId || undefined, markerGuard);
}

// A created child gets the same wiring as a resumed one: a seed bound to the
// parent's registration, so no separate init registers for it.
export function _var(
  parentScopeId: number,
  scopeOffsetAccessor: Accessor,
  childScopeId: number,
  registryId: string,
  nodeAccessor?: Accessor,
) {
  _base_var(
    parentScopeId,
    scopeOffsetAccessor,
    childScopeId,
    registryId,
    nodeAccessor,
  );
  const state = getState();
  if (state instanceof PatchUpdateState && inCreatable()) {
    ensurePatchSetup(state, ensureScopePatch(state, childScopeId))[
      PatchKey.Var
    ] = registryId;
  }
}

// Content a patch pairs with the live branch; a rendered renderer's values
// fill as it renders (`_content_withheld`).
export function _attr_content(
  nodeAccessor: Accessor,
  scopeId: number,
  content: unknown,
  markerGuard?: number,
) {
  const state = getState();
  if (state instanceof PatchUpdateState) {
    const renderer = normalizeDynamicRenderer<ServerRenderer>(content);
    if (typeof renderer === "function") {
      pairBranch(
        state,
        scopeId,
        nodeAccessor,
        _peek_scope_id(),
        undefined,
        undefined,
        renderer[RendererProp.Owner],
      );
    }
    markContentRendered(state, renderer);
  }
  _base_attr_content(nodeAccessor, scopeId, content, markerGuard);
}

// A value the client normalizes ships as is, but an object ships as the text
// ordinary rendering makes of it: it may not serialize.
export function normalizePatchValue(value: unknown) {
  return value && typeof value === "object" && !Array.isArray(value)
    ? value + ""
    : value;
}
