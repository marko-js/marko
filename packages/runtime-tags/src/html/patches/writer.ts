import { isAttrTag } from "../../common/attr-tag";
import { ROOT_SCOPE_ID } from "../../common/meta";
import {
  encodeIdKey,
  encodeIdSite,
  withheldIdToken,
} from "../../common/patch-path";
import {
  type Accessor,
  AccessorPrefix,
  type Falsy,
  IdHop,
  UpdatesFrom,
  PatchKey,
  RenderDataProp,
  RendererProp,
} from "../../common/types";
import { K_SCOPE_ID, REGISTRY, setDebugInfo } from "../serializer";
import type { ServerRenderer } from "../template";
import {
  type Boundary,
  type Chunk,
  type GroupMask,
  type PartialScope,
  type ScopeInternals,
  type Channel,
  State,
  _resume_locals as _base_resume_locals,
  _subscribe as _base_subscribe,
  _var as _base_var,
  _html,
  _peek_scope_id as _base_peek_scope_id,
  _resume,
  _scope as _base_scope,
  _script as _base_script,
  getChunk,
  getState,
  kBranchId,
  getGroupReason,
  withBranchId,
  withContext,
} from "../writer";
import { PatchSerializerState } from "./serializer";
import { quotedShell, rawShells } from "./shells";
import { encodeHeld } from "./token";

// The server's build: what a patch page's render data names, the prefix of
// its requests' header (`patchRequestKind`) and the mark of a patch it answers.
export let patchBuild: string | undefined;

// A generated id names its declaration under the hops its render passed
// through: each row key and call site, the root's address first.
export function _id(declaration: string) {
  const ids = getIds();
  for (let hop = ids.built - 1; hop < ids.depth; hop++) {
    ids.addresses[hop + 1] =
      ids.addresses[hop] +
      encodeHop(ids.path[hop * 2] as IdHop, ids.path[hop * 2 + 1]);
  }
  ids.built = ids.depth + 1;
  return ids.addresses[ids.depth] + (MARKO_DEBUG ? "." : "") + declaration;
}

// The hops a render is under, two entries each (kind, value), and the first
// `built` addresses of them.
export interface IdPath {
  path: (string | number | [Accessor, number])[];
  depth: number;
  addresses: string[];
  built: number;
}

// The render enters a row, a call site or a withheld render; an address built
// deeper is stale.
export function pushIdHop(
  kind: IdHop,
  value: string | number | [Accessor, number],
) {
  const ids = getIds();
  if (ids.built > ids.depth + 1) ids.built = ids.depth + 1;
  ids.path[ids.depth * 2] = kind;
  ids.path[ids.depth++ * 2 + 1] = value;
}

// The render leaves the hop it entered last (`_patch_child_end` after a known
// child's call).
export function popIdHop() {
  getIds().depth--;
}

// The hops the render is under: later content's copy in its chunk's context
// (`State.captureContext`), else the state's.
const kIdPath = Symbol("Id Path");
export function getIds() {
  const chunk = getChunk()!;
  return (
    (chunk.context?.[kIdPath] as IdPath | undefined) ??
    (chunk.boundary.state as PatchPageState).ids
  );
}

function encodeHop(kind: IdHop, value: IdPath["path"][number]) {
  if (kind === IdHop.Row) {
    return MARKO_DEBUG
      ? "[" +
          (typeof value === "number"
            ? value
            : JSON.stringify(value).replace(/ /g, "\\u0020")) +
          "]"
      : encodeIdKey(value as string | number);
  }
  if (kind === IdHop.Withheld) {
    return MARKO_DEBUG
      ? "^[" + JSON.stringify(value) + "]"
      : withheldIdToken + encodeIdKey(value as string);
  }
  return MARKO_DEBUG
    ? "." +
        (value as [string, number])[0] +
        "@" +
        (value as [string, number])[1]
    : encodeIdSite(value as number);
}

/** Names this server's build, which must change with any server or client output, before a patch page renders.
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
// derives from a group updating from the client): no patch fills its reads.
const kUnpatched = Symbol("Unpatched");

export function inUnpatched() {
  return !!getChunk()!.context?.[kUnpatched];
}

export function withUnpatched<T>(cb: () => T): T;
export function withUnpatched<T, U>(cb: (value: U) => T, value: U): T;
export function withUnpatched<T, U>(cb: (value?: U) => T, value?: U): T {
  return withContext(kUnpatched, 1, cb, value);
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
  const context = getChunk()!.context;
  return (
    context?.[kBranchId] !== undefined &&
    context[kBranchId] !== context[kKeptBranch]
  );
}

// Renders a branch a flush pairs but never creates.
export function withKeptBranchId<T>(branchId: number, cb: () => T): T {
  return withBranchId(branchId, keepBranch<T, void, void>, cb);
}

// The renderer of a branch a flush pairs but never creates (a loop's rows, an
// `<await>` body), in the branch its caller opens, as `withKeptBranchId` renders.
export function keptBranch<A, B>(cb: (a: A, b: B) => void) {
  return (a: A, b: B) => keepBranch(cb, a, b);
}

function keepBranch<T, U, V>(cb: (a: U, b: V) => T, a: U, b: V): T {
  return withContext(kKeptBranch, getChunk()!.context![kBranchId], cb, a, b);
}

// A consumer keeps content for the resumed page to render, every item of an
// attribute tag: the values inside fill (`_content_withheld`).
export function _content_withhold(value: unknown) {
  const state = getState();
  if (state instanceof PatchRenderState) {
    if (isAttrTag(value)) {
      for (const item of value as Iterable<unknown>) withhold(state, item);
    } else {
      withhold(state, value);
    }
  }
}

// Only a renderer is content: any other value (spread attributes, an object
// carrying the same keys) withholds nothing.
function withhold(state: PatchRenderState, value: unknown) {
  const content =
    (value as { content?: unknown } | undefined)?.content || value;
  if (typeof content === "function") {
    const id = (content as ServerRenderer)[RendererProp.Id];
    const owner = (content as ServerRenderer)[RendererProp.Owner];
    // The highest owner withheld: a gate asks whether its scope or a later one
    // made an instance some consumer kept, in whatever order they reported.
    if (id && owner! > ((state.withheldContents ??= new Map()).get(id) ?? -1)) {
      state.withheldContents.set(id, owner!);
    }
    if (withheldRenderers.has(content as ServerRenderer)) {
      renderWithheld(state, content as ServerRenderer, id!, owner!);
    }
  }
}

// Content whose kept instances take their holes as data (`_content`'s `elide` 2).
export const withheldRenderers = new WeakSet<ServerRenderer>();

// A flush that leaves content to the consumers keeping it renders its holes
// once for its owner, under the entry every instance there takes.
function renderWithheld(
  state: PatchRenderState,
  renderer: ServerRenderer,
  id: string,
  ownerId: number,
) {
  const rendered = (state.withheldRendered ??= new Map());
  const key = PatchKey.Withheld + id;
  if (rendered.has(key + " " + ownerId)) return;
  const scopeId = _base_peek_scope_id();
  rendered.set(key + " " + ownerId, scopeId);
  state.patchLinks[scopeId] = {
    parent: ownerId,
    hop: "",
    key,
  };
  pushIdHop(IdHop.Withheld, id);
  renderer({});
  popIdHop();
}

// The inits a setup envelope names, each written once: several locals may
// derive from one closure.
export function addSetupId(
  state: PatchRenderState,
  scopeId: number,
  id: string,
) {
  const setup = ensurePatchSetup(state, ensureScopePatch(state, scopeId));
  const setupIds = (state.setupIds ??= new Map());
  let ids = setupIds.get(setup);
  if (!ids) setupIds.set(setup, (ids = new Set()));
  if (!ids.has(id)) {
    ids.add(id);
    setup[PatchKey.Init] = setup[PatchKey.Init]
      ? setup[PatchKey.Init] + " " + id
      : id;
  }
}

// Structural patch entries hold their child patch objects, so the root
// patch IS the flush tree and one ordinary serializer flush emits it.
export function writePatchEntry(
  state: PatchRenderState,
  scopeId: number,
  key: string,
  value: unknown,
) {
  // `undefined` survives to the wire (`$`): it overwrites, never elides.
  ensureScopePatch(state, scopeId)[key] = value;
}

export function peekScopePatch(state: PatchRenderState, scopeId: number) {
  return state.patchTree?.[scopeId];
}

// A branch's patch opens detached before its render: the `Branch` entry
// embeds it, so no write inside links it to the parent first.
export function openScopePatch(state: PatchRenderState, scopeId: number) {
  return (ensurePatchTree(state)[scopeId] = patchTreeNode(state, {}));
}

// A node the patch writers build: nothing else holds it, so the patch
// serializer writes it without tracking its identity.
export function patchTreeNode<T extends object>(
  state: PatchRenderState,
  node: T,
) {
  (state.patchTreeNodes ||= new Set()).add(node);
  return node;
}

export function ensurePatchSetup(
  state: PatchRenderState,
  patch: Record<string, unknown>,
  key: typeof PatchKey.Setup | typeof PatchKey.SetupValues = PatchKey.Setup,
) {
  return (patch[key] ??= patchTreeNode(state, {})) as Record<string, unknown>;
}

export function ensureScopePatch(
  state: PatchRenderState,
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
      (patch = patches[scopeId] = patchTreeNode(state, {})),
    );
  }
  return patch;
}

// Hangs a scope's patch off its parent's entry, or roots it; returns an entry
// that carries creation ids beside the patch.
export function linkScopePatch(
  state: PatchRenderState,
  scopeId: number,
  patch: Record<string, unknown>,
): unknown[] | undefined {
  const link = state.patchLinks[scopeId];
  if (link) {
    // A scope writing after its parent's structural entry re-links through
    // it; a paired branch ignores the creation ids its child entry carries.
    const { parent, hop, contentId, slotIds } = link;
    if (typeof hop === "string") {
      if (contentId) shipShell(state, contentId);
      const entry = slotIds && patchTreeNode(state, [patch, ...slotIds]);
      const key = link.key || PatchKey.Child + hop;
      if (link.setup) {
        ensurePatchSetup(state, ensureScopePatch(state, parent))[key] =
          entry || patch;
      } else {
        writePatchEntry(state, parent, key, entry || patch);
      }
      return entry;
    } else {
      (
        (ensureScopePatch(state, parent)[PatchKey.LoopItem + hop[0]] ??=
          patchTreeNode(state, [])) as unknown[]
      ).push(hop[1], patch);
    }
  } else if (scopeId === ROOT_SCOPE_ID) {
    // Every other patch nests inside an ancestor's structural entry rooted
    // here (`queueScope` is patch-inert, so the root registers directly).
    _base_scope(scopeId, patch);
    // A lazy module is named only by the flush that first needs it.
    state.patchFlushReadyIds = undefined;
    const { channel } = getChunk()!;
    channel.writeScopes[scopeId] = patch;
    channel.flushScopes = true;
  }
}

// The flush holding the current root names the lazy modules it first needs in
// the response (`PatchRenderState.addResumes`); later flushes wait behind it.
export function patchWait(state: PatchRenderState, readyId: string) {
  const readyIds = (state.readyIds ||= new Set());
  if (readyIds.has(readyId)) return;
  readyIds.add(readyId);
  // The root first (creating it starts the current root's ids afresh).
  ensureScopePatch(state, ROOT_SCOPE_ID);
  (state.patchFlushReadyIds ??= new Set()).add(readyId);
}

// The flush's merge tree of patches by scope; `joinFlush` drops it.
function ensurePatchTree(state: PatchRenderState) {
  return (state.patchTree ??= {});
}

// Every group server-sourced, for a child whose groups the caller cannot see;
// bit 0, which no group uses, keeps it apart from any mask, as `ALL_GROUPS`.
export const SERVER_ALL = 0x55555555;

// Where a group updates from: its 2 bits, which `_mask_group` also composes
// into a child's mask. No mask (no group args) reads as `SERVER_ALL`.
export function getUpdatesFrom(mask: GroupMask, group: number) {
  return mask === undefined || mask === SERVER_ALL
    ? UpdatesFrom.Server
    : getGroupReason(mask, group);
}

// Whether the group is client-sourced (the low mask bit): the resumed page then
// owns whatever derives from the group.
export function _client_guard(mask: GroupMask, group: number) {
  return getUpdatesFrom(mask, group) & UpdatesFrom.Client ? 1 : 0;
}

// How a scope's patch reaches its parent's entry.
export interface PatchLink {
  parent: number;
  // A child accessor, or a loop item: its index, with its key when not that.
  hop:
    | string
    | [accessor: string, at: number | [index: number, key: string | number]];
  contentId?: string;
  slotIds?: (string | undefined)[];
  // A content body's owner (its client `_`) when not the rendering scope.
  owner?: number;
  // Linked into the parent's setup: only a created parent takes it.
  setup?: boolean;
  // The parent's entry key, where not a child entry's.
  key?: string;
}

// A patch template's document render: structure tracks unpatched context.
export class PatchPageState extends State {
  ids: IdPath = {
    path: [],
    depth: 0,
    addresses: ["s" + this.$global.runtimeId + this.$global.renderId],
    built: 1,
  };
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

  // The client runs each flush with the document's nonce, so it always
  // serializes; the scripts and styles a patch creates get none.
  override getSerializedGlobals() {
    const globals = super.getSerializedGlobals();
    const { cspNonce } = this.$global;
    if (!cspNonce) return globals;
    const withNonce = globals || {};
    withNonce.cspNonce = cspNonce;
    return withNonce;
  }

  // Content rendering later keeps the hops it was called under, and rebuilds
  // their addresses from the root.
  override captureContext(chunk: Chunk) {
    const { path, depth, addresses } = (chunk.context?.[kIdPath] ??
      this.ids) as IdPath;
    chunk.context = {
      ...chunk.context,
      [kIdPath]: {
        path: path.slice(0, depth * 2),
        depth,
        addresses: [addresses[0]],
        built: 1,
      },
    };
  }

  // A try outside unpatched structure keeps its marks, which patches pair
  // through whether it shows its body or its `@catch`.
  override keepsTryMarks(chunk: Chunk, resumeWrites: number) {
    return !inUnpatched() || super.keepsTryMarks(chunk, resumeWrites);
  }
}

// A patch's globals keep undefined-valued keys (they overwrite, where a resume
// elides) but not the nonce: the document's CSP decides the live page's.
export function getPatchGlobals($global: Record<string, unknown>) {
  const serializedGlobals = $global.serializedGlobals as
    | string[]
    | Record<string, boolean>
    | undefined;

  if (!serializedGlobals) return 0;

  let filtered: 0 | Record<string, unknown> = 0;
  const add = (key: string) => {
    if (key !== "cspNonce") (filtered ||= {})[key] = $global[key];
  };

  if (Array.isArray(serializedGlobals)) {
    for (const key of serializedGlobals) add(key);
  } else {
    for (const key in serializedGlobals) {
      if (serializedGlobals[key]) add(key);
    }
  }

  return filtered;
}

// The nonce a `<script>` or `<style>` spread injects: none in a patch render,
// whose request nonce the live page's CSP does not allow (it keeps its own).
export function _patch_nonce() {
  const state = getState();
  return state instanceof PatchRenderState ? undefined : state.$global.cspNonce;
}

// Only a shell the server has rides an entry (a missing one rejects the patch),
// shipped once per response unless held or empty (the client's renderer suffices).
export function shipShell(
  state: PatchRenderState,
  shellId: string | 0 | undefined,
  ref?: boolean,
) {
  if (shellId && shellId in rawShells) {
    if (rawShells[shellId] && !(state.heldShells ??= new Set()).has(shellId)) {
      state.heldShells.add(shellId);
      state.pendingShells +=
        (state.pendingShells && ",") + quotedShell(shellId, ref);
    }
    return shellId;
  }
}

// Serialize guards stay unset so the compiled resume payload drops at the
// source: a flush carries only patch fills.
export class PatchRenderState extends PatchPageState {
  public heldShells?: Set<string>;
  // How many shells the request's token named: a response that shipped
  // none leaves the page's token as it is.
  public heldCount = 0;
  public pendingShells = "";
  override serializer = new PatchSerializerState(this);
  // A flush carries every entry rendered so far, so a patch never reorders: the
  // client creates a shown `@placeholder` from the shell its render ships.
  override writeReorders: State["writeReorders"] = false;
  // The boundary's pending count before the flush serialized.
  count = 0;
  // Output held for the async values its serializing found.
  held = "";
  // The flush's merge tree of patches by scope; `joinFlush` drops it.
  patchTree?: Record<number, Record<string, unknown>>;
  // Every object and array the patch writers built for the flush's tree.
  patchTreeNodes?: Set<object>;
  // The lazy templates the current root is the first in the response to name
  // (all it named are `readyIds`): its flush applies once all are resident.
  patchFlushReadyIds?: Set<string>;
  // How a scope hangs off its parent: a reference's path from the root walks
  // these, and a scope writing after its parent's entry re-links through one.
  patchLinks: Record<number, PatchLink> = {};
  // Content ids a consumer withheld, each with the highest owner scope of an
  // instance withheld.
  withheldContents?: Map<string, number>;
  // The scope of each pending `<await>` whose body may keep content made
  // before it.
  pendingAwaits = new Set<number>();
  // Each setup envelope's ids.
  setupIds?: Map<object, Set<string>>;
  // Each owner's withheld entry the response renders, with the scope it is in.
  withheldRendered?: Map<string, number>;
  // What each scope's slots holding built objects depend on, by accessor.
  liveDeps?: Record<number, Record<string, string>>;
  // The writes each entry re-runs on, and its scope, resolved as the flush
  // serializes.
  entryDeps?: Map<string[], number>;
  // The built objects each child scope's caller passes it, with their sources.
  liveArgs?: Map<number, Map<unknown, [scopeId: number, sources: string]>>;

  // Nothing ever resumes a patch render's output, so resume writes stop at the
  // canonical scope (server reads); patch data goes through `writePatchEntry`.
  override queueScope() {}

  override queuePassiveScope() {}

  // A paired scope keeps its effects; a created one gets its shell's (or the
  // composing shell's) and those its entries mount.
  override queueEffect() {}

  // A pending patch must not stringify until its flush is emitted: the same
  // patch objects keep receiving later writes.
  override serializeFlush(boundary: Boundary) {
    this.count = boundary.count;
    if (!boundary.count) super.serializeFlush(boundary);
  }

  constructor($global: State["$global"]) {
    super($global);
    this.hasWalkerRuntime = true;
    this.hasWrittenReady = true;
    // The live page owns its serialized globals; a flush never re-ships them.
    this.hasWrittenGlobals = true;
  }

  // Each line is one expression; an empty line ends the write, whose lines the
  // client applies together.
  override joinFlush(_html: string, scripts: string, pending: number) {
    let out = this.held + (scripts ? scripts + "\n" : "");
    if (MARKO_DEBUG && this.pendingShells) {
      throw new Error(
        "Invalid patch state, a shell was shipped with nothing to resume in its chunk.",
      );
    }
    // The set only grows from the request's token, so an unchanged size means
    // the page's token still holds; the client reads a `;` line as the token.
    if (
      !pending &&
      this.heldShells &&
      this.heldShells.size !== this.heldCount
    ) {
      out += ";" + encodeHeld(this.heldShells) + "\n";
    }
    this.patchTree = this.patchTreeNodes = this.setupIds = undefined;
    // Serializing at the write first saw these values: those already settled (a
    // resolved promise) join this write, which the stream's next tick sends.
    if (pending > this.count) {
      this.held = out;
      const { boundary } = this.serializer;
      boundary.startAsync();
      Promise.resolve().then(() => boundary.endAsync());
      return "";
    }
    this.held = "";
    return out && out + "\n";
  }

  // Each item is a line applied before the next evaluates; the first, the tree or
  // `[...shells, tree]`, is led by the lazy modules it waits for (`_a,_b,{…}`).
  override addResumes(channel: Channel, resumes: string) {
    if (!resumes) return;
    // The client reads a leading id (or a debug id's string) as a module to
    // wait for, so no item may start like one.
    if (MARKO_DEBUG && !"{[(".includes(resumes[0])) {
      throw new Error(
        `Invalid patch state, a flush starts with "${resumes[0]}".`,
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

export function linkBranch(
  state: PatchRenderState,
  scopeId: number,
  accessor: Accessor,
  branchId: number,
  contentId?: string,
  slotIds?: (string | undefined)[],
  ownerScopeId?: number,
  setup?: boolean,
) {
  // The id a pairing peeks is its own: no other branch has linked or opened it.
  state.patchLinks[branchId] = {
    parent: scopeId,
    hop: AccessorPrefix.BranchScopes + accessor,
    contentId,
    slotIds,
    owner: ownerScopeId,
    setup,
  };
}

// A read a patch fills needs no subscription; one in unpatched structure or
// `unfilled` (effects, state-mixed reads, client-sourced params) subscribes.
export function _fill_global_subscribe(
  id: string,
  scopeId: number,
  unfilled?: 0 | 1,
) {
  if (!unfilled && !inUnpatched()) return;
  // A flush's scopes are live already (paired) or subscribe as they render
  // (created); the flush re-ships every global they could read.
  if (getState() instanceof PatchRenderState) return;
  // The scope subscribes on resume, as a late closure subscriber does.
  _script(scopeId, id);
}

// On when no patch fills the group here: client-sourced, or read in unpatched structure
// (on a page, the mask) unless it is a param whose `own` group a call passes constant.
export function _unfilled_if(mask?: GroupMask, group?: number, own?: number) {
  const updatesFrom = getUpdatesFrom(mask, group!);
  return updatesFrom & UpdatesFrom.Client ||
    (updatesFrom &&
      inUnpatched() &&
      (own === undefined || getUpdatesFrom(mask, own)))
    ? 1
    : undefined;
}

// A hole's fill: its scope's patch if server-sourced, a created one's setup
// unless client sources set it (`setup`: still), else `0`; a page writes html.
export function ensureFills(
  scopeId: number,
  mask: GroupMask,
  group: number,
  setup?: 1,
) {
  const state = getState();
  if (!(state instanceof PatchRenderState)) {
    walkMarkers(getState());
    return;
  }
  const updatesFrom = getUpdatesFrom(mask, group);
  if (
    updatesFrom !== UpdatesFrom.Server &&
    ((updatesFrom && !setup) || !inCreatable())
  )
    return 0;
  const patch = ensureScopePatch(state, scopeId);
  return updatesFrom === UpdatesFrom.Server
    ? patch
    : ensurePatchSetup(state, patch);
}

// A patch render's output for a hole: its fill where the patch fills it, and
// never html.
export function writeFill(
  fills: Record<string, unknown> | 0,
  key: string,
  value: unknown,
) {
  if (fills) fills[key] = value;
  return "";
}

// On when a patch fills the group here: server-sourced, or constant (`0`, a
// call-site constant) where a fresh scope may need the seed.
export function _filled_guard(mask: GroupMask, group: number) {
  const updatesFrom = getUpdatesFrom(mask, group);
  return updatesFrom === UpdatesFrom.Server ||
    (updatesFrom === 0 && inCreatable())
    ? 1
    : 0;
}

// On where the server alone sources the group: a patch writes its values in
// place; a constant's only seed a created scope.
export function _server_guard(mask: GroupMask, group: number) {
  return getUpdatesFrom(mask, group) === UpdatesFrom.Server ? 1 : 0;
}

// Page-side group guards (a patch serializes no resume data): any
// contribution, client or server, can change — the group's data serializes.
export function _write_if(mask: GroupMask, group: number) {
  return !(getState() instanceof PatchRenderState) &&
    getUpdatesFrom(mask, group)
    ? 1
    : undefined;
}

// An instance whose groups are constant (a mask composed to `0`) still
// resumes its markers, since patches pair on them.
export function _write_guard(mask: GroupMask, group: number) {
  return !(getState() instanceof PatchRenderState) &&
    (mask === 0 || getUpdatesFrom(mask, group))
    ? 1
    : 0;
}

// Also links the known child's patch and enters its call site; a created
// `<define>` body's link names its owner.
export function _peek_scope_id(
  scopeId?: number,
  accessor?: Accessor,
  site?: number,
  wiresVar?: 1 | Falsy,
  ownerScopeId?: number,
) {
  const childScopeId = _base_peek_scope_id();
  if (scopeId === undefined) return childScopeId;
  const state = getState();
  pushIdHop(IdHop.Site, MARKO_DEBUG ? [accessor!, site!] : site!);
  if (state instanceof PatchRenderState) {
    const link: PatchLink = (state.patchLinks[childScopeId] = {
      parent: scopeId,
      hop: accessor!,
    });
    if (ownerScopeId && inCreatable()) link.owner = ownerScopeId;
    // A created child's tag variable wiring leads its setup, ahead of what it
    // renders; `_var` names it.
    if (wiresVar && inCreatable()) {
      ensurePatchSetup(state, ensureScopePatch(state, childScopeId))[
        PatchKey.Var
      ] = undefined;
    }
  }
  return childScopeId;
}

// A known child no slot holds, which no patch pairs: only its call site enters
// the id path, for the `<id>`s it renders, until `_patch_child_end`.
export function _patch_child(site: number, accessor?: Accessor) {
  pushIdHop(IdHop.Site, MARKO_DEBUG ? [accessor!, site] : site);
}

// An init a fresh scope runs (setup) for what the client owns but no patch fills.
export function _patch_init(scopeId: number, initId: string) {
  const state = getState();
  if (state instanceof PatchRenderState && inCreatable()) {
    addSetupId(state, scopeId, initId);
  }
  return "";
}

// A join a patch writes as holes under its group: a mixed group's scope re-runs
// it, fresh or existing (`1`: its effect's entry needn't ship); a client one, fresh.
export function _patch_join_init(
  scopeId: number,
  initId: string,
  mask: GroupMask,
  group: number,
  ...deps: (string | Falsy)[]
) {
  const state = getState();
  if (state instanceof PatchRenderState) {
    const updatesFrom = getUpdatesFrom(mask, group);
    if (updatesFrom === (UpdatesFrom.Client | UpdatesFrom.Server)) {
      writeInitEntry(state, scopeId, initId, deps);
      return 1;
    }
    if (updatesFrom & UpdatesFrom.Client && inCreatable())
      addSetupId(state, scopeId, initId);
  }
  return 0;
}

// Emitted as the scope reason's complement, so only a patch (the falsy
// patch reason) ever reaches here.
export function _patch_fill(
  scopeId: number,
  key: string,
  value: unknown,
  setup?: 1,
  mask?: GroupMask,
  group?: number,
) {
  const state = getState();
  if (state instanceof PatchRenderState) {
    // A seed for a branch no flush creates is dropped before any scan, and a
    // client group's: the client derives it (its inits, or its own value).
    if (setup && (!inCreatable() || _client_guard(mask!, group!))) return "";
    const bind = bindEntry(state, scopeId, value);
    const patch = ensureScopePatch(state, scopeId);
    // Setup entries nest under `s`: the client applies them only to
    // freshly created scopes; only a scope below a branch is created.
    const entries = setup
      ? ensurePatchSetup(state, patch, PatchKey.SetupValues)
      : patch;
    const entryKey = bind
      ? PatchKey.BindFill + key.slice(PatchKey.Fill.length)
      : key;
    entries[entryKey] = bind || value;
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
  if (state instanceof PatchRenderState) {
    // A constant group's handler is a paired scope's already: it goes only where a
    // scope may be created, which a paired one there takes again.
    const updatesFrom = getUpdatesFrom(mask, group!);
    if (
      updatesFrom === UpdatesFrom.Server ||
      (updatesFrom === 0 && inCreatable())
    ) {
      const patch = ensureScopePatch(state, scopeId);
      const bind = bindEntry(state, scopeId, value);
      // A plain value is a write a created scope takes as a paired one does.
      const entries =
        bind && updatesFrom !== UpdatesFrom.Server
          ? ensurePatchSetup(state, patch)
          : patch;
      const entryKey = bind
        ? PatchKey.Bind + key.slice(PatchKey.Write.length)
        : key;
      entries[entryKey] = bind || value;
    }
  }
  return value;
}

// A controllable `<let>`: its value fills a paired scope while the handler
// controls it and the group updates from the server, else seeds a created one.
export function _patch_let_change(
  scopeId: number,
  valueKey: string,
  value: unknown,
  bindKey: string,
  change: unknown,
  mask?: GroupMask,
  group?: number,
  bindMask?: GroupMask,
  bindGroup?: number,
) {
  if (getState() instanceof PatchRenderState) {
    const filled = change && _filled_guard(mask, group!);
    _patch_fill(scopeId, valueKey, value, filled ? undefined : 1, mask, group);
    _patch_bind(scopeId, bindKey, change, bindMask, bindGroup);
  }
}

// A registration bound to the site's scope or an owner up its chain ships as its
// id behind a `^` per hop (`^a0`); the serializer writes any other as a reference.
function bindEntry(state: PatchRenderState, scopeId: number, value: unknown) {
  const registered =
    typeof value === "function" ? REGISTRY.get(value) : undefined;
  const bound = registered?.scope as ScopeInternals | undefined;
  const up = bound && findOwnerDepth(state, scopeId, bound[K_SCOPE_ID]);
  // A live function's owner may be below the scope (a child's `<return>`): up to
  // the scope both reach, then down.
  if (up === undefined && bound && LIVE_FNS.has(value as WeakKey)) {
    const path = findOwnerPath(state, scopeId, bound[K_SCOPE_ID]!);
    return (
      path && [withOwnerHops("^".repeat(path[0]), registered!.id), path[1]]
    );
  }
  if (up !== undefined) {
    // Render-only locals (a loop's values) ride along, as the document's
    // call to the registered factory passes them; a function's ride its reference.
    const id = withOwnerHops("^".repeat(up), registered!.id);
    const locals = registered!.locals?.(state.scope);
    if (!locals) return id;
    if ((value as ServerRenderer)[RendererProp.Id]) {
      // Closure levels reach a patch render only in unpatched structure,
      // where a patch writes no entry: content sends its local values alone.
      if (MARKO_DEBUG && locals.length > 1) {
        throw new Error(
          "A patch sent content with more than one local: an entry inside unpatched structure.",
        );
      }
      return locals[0] ? [id, locals[0]] : id;
    }
  }
}

// A registration's id behind the hops to its owner, which the client reads off its
// leading `^`s, so no registration's own id may start with one.
export function withOwnerHops(hops: string, id: string) {
  if (MARKO_DEBUG && id[0] === "^") {
    throw new Error(
      `Registration id "${id}" starts with "^", which a patch reads as an owner hop.`,
    );
  }
  return hops + id;
}

// A patch has no client scope for a function's render-only locals: they ride
// its reference to the owner (`PatchSerializerState.writeScopedRegistration`).
export function _resume_locals<T extends WeakKey>(
  val: T,
  id: string,
  locals: PartialScope,
  ownerScopeId?: number,
): T {
  return getState() instanceof PatchRenderState
    ? _resume(val, id, ownerScopeId ?? ROOT_SCOPE_ID, () => [locals])
    : _base_resume_locals(val, id, locals, ownerScopeId);
}

// A patched scope write, a created scope's seed (`setup`) in its setup envelope.
export function _patch_write(
  scopeId: number,
  key: string,
  value: unknown,
  setup?: 1,
) {
  const state = getState();
  if (state instanceof PatchRenderState) {
    const accessor = key.slice(
      (key.startsWith(PatchKey.MarkedWrite)
        ? PatchKey.MarkedWrite
        : PatchKey.Write
      ).length,
    );
    // A built object's readers depend on its sources, which the call recorded.
    const deps = getLiveDeps(state, scopeId, value);
    if (deps) ((state.liveDeps ??= {})[scopeId] ??= {})[accessor] = deps;
    if (setup && !inCreatable()) return "";
    const bind = bindEntry(state, scopeId, value);
    const patch = ensureScopePatch(state, scopeId);
    const entries = setup ? ensurePatchSetup(state, patch) : patch;
    // A created scope's write (its setup) marks no change, which only a live
    // one runs by; a bind marks only a new function.
    const entryKey = bind
      ? PatchKey.Bind + accessor
      : setup
        ? PatchKey.Write + accessor
        : key;
    entries[entryKey] = bind || value;
  }
  return "";
}

// An effect, and in a patch render its entry (`1`, or `2` queued) valued by the
// writes it depends on that the patch sends.
export function _script(
  scopeId: number,
  registryId: string,
  markerGuard?: number,
  entry?: 0 | 1 | 2,
  ...deps: (string | Falsy)[]
) {
  _base_script(scopeId, registryId, markerGuard);
  const state = getState();
  if (entry && state instanceof PatchRenderState) {
    writePatchEntry(
      state,
      scopeId,
      (entry > 1 ? PatchKey.QueuedEffect : PatchKey.Effect) + registryId,
      trackDeps(state, scopeId, deps),
    );
  }
}

// An init the client runs on the scope, existing or created, once the writes it
// depends on that this patch sends are in.
export function _patch_init_entry(
  scopeId: number,
  initId: string,
  ...deps: (string | Falsy)[]
) {
  const state = getState();
  if (state instanceof PatchRenderState) {
    writeInitEntry(state, scopeId, initId, deps);
  }
}

function writeInitEntry(
  state: PatchRenderState,
  scopeId: number,
  initId: string,
  deps: (string | Falsy)[],
) {
  writePatchEntry(
    state,
    scopeId,
    PatchKey.Init + initId,
    trackDeps(state, scopeId, deps),
  );
}

// The writes an entry re-runs on resolve once the flush's are in: a slot
// holding a built object a call passed stands for that object's sources.
function trackDeps(
  state: PatchRenderState,
  scopeId: number,
  deps: (string | Falsy)[],
) {
  const names = deps.filter(Boolean);
  (state.entryDeps ??= new Map()).set(names, scopeId);
  return names;
}

export function resolveEntryDeps(
  state: PatchRenderState,
  scopeId: number,
  names: string[],
) {
  const seen = new Set<string>();
  let deps = "";
  for (const name of names) {
    let up = 0;
    while (name[up] === ">") up++;
    let owner: number | undefined = scopeId;
    for (let hop = up; hop-- && owner !== undefined;) {
      const link: PatchLink | undefined = state.patchLinks[owner];
      owner = link && (link.owner ?? link.parent);
    }
    const captured =
      owner !== undefined && state.liveDeps?.[owner]?.[name.slice(up)];
    if (captured) {
      const hops = name.slice(0, up);
      for (const dep of captured.split(" ")) {
        deps = addDep(seen, deps, hops + dep);
      }
    } else {
      deps = addDep(seen, deps, name);
    }
  }
  return deps;
}

function addDep(seen: Set<string>, deps: string, dep: string) {
  if (seen.has(dep)) return deps;
  seen.add(dep);
  return deps ? deps + " " + dep : dep;
}

// Live functions: their registrations name what they capture (`patches/live-bind`).
const LIVE_FNS = new WeakSet<WeakKey>();

export function _bind_resume<T extends WeakKey>(
  val: T,
  id: string,
  scopeId: number,
) {
  LIVE_FNS.add(val);
  return _resume(val, id, scopeId);
}

// A built object a call passes its child: its readers there depend on its sources.
export function _patch_live<T>(
  scopeId: number,
  value: T,
  ownerScopeId: number,
  ...sources: (string | Falsy)[]
) {
  const state = getState();
  if (state instanceof PatchRenderState) {
    const args = (state.liveArgs ??= new Map());
    let values = args.get(scopeId);
    if (!values) args.set(scopeId, (values = new Map()));
    values.set(value, [ownerScopeId, sources.filter(Boolean).join(" ")]);
  }
  return value;
}

// What a built object a call passed depends on: its sources, as hops from the scope
// through the owner it was built in.
function getLiveDeps(state: PatchRenderState, scopeId: number, value: unknown) {
  const built = state.liveArgs?.get(scopeId)?.get(value);
  if (built?.[1]) {
    const up = findOwnerDepth(state, scopeId, built[0]);
    if (up !== undefined) {
      const hops = ">".repeat(up);
      return hops + built[1].replaceAll(" ", " " + hops);
    }
  }
}

// A page render's resume payload rides this; a patch carries fills alone.
export function _page_render() {
  return getState() instanceof PatchRenderState ? undefined : 1;
}

// How a scope reaches `ownerId`: owners up to one `ownerId` is below or at, then
// the links down to it (a child's `<return>`).
function findOwnerPath(
  state: PatchRenderState,
  scopeId: number,
  ownerId: number,
) {
  const ups = new Map<number, number>();
  let up = 0;
  for (let cur: number | undefined = scopeId; cur !== undefined; up++) {
    ups.set(cur, up);
    const link: PatchLink | undefined = state.patchLinks[cur];
    cur = link && (link.owner ?? link.parent);
  }
  const down: PatchLink["hop"][] = [];
  for (let cur: number | undefined = ownerId; cur !== undefined;) {
    const at = ups.get(cur);
    if (at !== undefined) return [at, down.reverse()] as const;
    const link: PatchLink | undefined = state.patchLinks[cur];
    if (!link) return;
    down.push(link.hop);
    cur = link.parent;
  }
}

// How many owners up from a tag's scope `ownerId` is, each the scope's client
// `_` (a content body's owner is where it was defined); none if off the chain.
export function findOwnerDepth(
  state: PatchRenderState,
  scopeId: number,
  ownerId?: number,
) {
  let up = 0;
  for (let cur: number | undefined = scopeId; cur !== undefined; up++) {
    if (cur === ownerId) return up;
    const link: PatchLink | undefined = state.patchLinks[cur];
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
  return getState() instanceof PatchRenderState
    ? scope
    : _base_subscribe(subscribers, scope, resumeId || undefined, markerGuard);
}

// A patch render resumes no scope: it skips main's write and returns nothing,
// so a write's `_scope(…) || fills` writes the patch's fills.
export function _scope(
  scopeId: number,
  partialScope: PartialScope,
  file?: string,
  loc?: string | 0,
  vars?: Parameters<typeof setDebugInfo>[3],
): ScopeInternals | undefined {
  if (!(getState() instanceof PatchRenderState)) {
    // Main's debug `_scope` takes the debug arguments its type leaves out.
    return MARKO_DEBUG
      ? (_base_scope as typeof _scope)(scopeId, partialScope, file, loc, vars)
      : _base_scope(scopeId, partialScope);
  }
}

// Main's builds and counts a scope that a patch render drops.
export function _existing_scope(scopeId: number) {
  return _scope(scopeId, {});
}

// Names the wiring `_peek_scope_id` placed in a created child's setup.
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
  const setup =
    state instanceof PatchRenderState &&
    (peekScopePatch(state, childScopeId)?.[PatchKey.Setup] as
      | Record<string, unknown>
      | undefined);
  if (setup && PatchKey.Var in setup) setup[PatchKey.Var] = registryId;
}

// A value the client normalizes ships as is, but an object ships as the text
// ordinary rendering makes of it: it may not serialize.
export function normalizePatchValue(value: unknown) {
  return value && typeof value === "object" && !Array.isArray(value)
    ? value + ""
    : value;
}
