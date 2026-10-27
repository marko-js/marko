import { normalizeDynamicRenderer } from "../../common/helpers";
import { ROOT_SCOPE_ID } from "../../common/meta";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  IdHop,
  UpdatesFrom,
  PatchKey,
  PatchPairing,
  RendererProp,
} from "../../common/types";
import {
  _content,
  _content_resume as _base_content_resume,
  _dynamic_tag as _base_dynamic_tag,
} from "../dynamic-tag";
import { K_SCOPE_ID, type Locals, REGISTRY, register } from "../serializer";
import type { ServerRenderer } from "../template";
import {
  type GroupMask,
  type ScopeInternals,
  type State,
  _peek_scope_id,
  _scope,
  getState,
  scopeWithId,
} from "../writer";
import { kKeptInstance } from "./serializer";
import {
  PatchRenderState,
  popIdHop,
  pushIdHop,
  SERVER_ALL,
  _content_withhold,
  _patch_fill,
  ensurePatchSetup,
  ensureScopePatch,
  findOwnerDepth,
  getUpdatesFrom,
  inCreatable,
  linkBranch,
  patchWait,
  shipShell,
  walkMarkers,
  withheldRenderers,
  withOwnerHops,
  withUnpatched,
  writePatchEntry,
} from "./writer";

// A patch pairs a tag whose renderer it renders (a native tag's body too); one
// it skips is the resumed page's to render, so a page renders it unpatched.
export function _dynamic_tag(
  scopeId: number,
  accessor: Accessor,
  tag: unknown,
  inputOrArgs: unknown,
  // Bits: 1 its entry ships the input, 2 the input is statically empty, 4 the
  // page registers what it names; `patched >> 3` is the call site `<id>`s name.
  patched = 0,
  content?: ServerRenderer | 0,
  inputIsArgs?: 1,
  markerGuard?: 1 | 0,
  mask?: GroupMask,
  group?: number,
  // A tag client state names: the client's once its scope exists.
  createdOnly?: 1 | 0,
  // The group its renderer changes by, where not the tag's, and its mask where
  // that differs from the tag's.
  rendererGroup?: number,
  rendererMask?: GroupMask,
  // A patch build passes the variable's registration, which a patch fills.
  tagVar?: 1 | string,
) {
  return renderDynamicTag(
    scopeId,
    accessor,
    tag,
    inputOrArgs,
    content,
    inputIsArgs,
    markerGuard,
    tagVar,
    patched & 3
      ? writeDynamicTagEntry(
          scopeId,
          accessor,
          tag,
          patched & 1 && inputOrArgs,
          content ? content[RendererProp.Id]! : 0,
          typeof tagVar === "string" ? tagVar : 0,
          mask,
          group,
          createdOnly,
          rendererGroup,
          rendererMask,
          !!(patched & 4),
        )
      : undefined,
    undefined,
    patched >> 3,
  );
}

// Renders a tag a patch treats as `pairing` (`PatchPairing`) says.
function renderDynamicTag(
  scopeId: number,
  accessor: Accessor,
  tag: unknown,
  inputOrArgs: unknown,
  content?: ServerRenderer | 0,
  inputIsArgs?: 1,
  markerGuard?: 1 | 0,
  tagVar?: 1 | string,
  pairing?: PatchPairing,
  // Where base passes a native tag's body its reason.
  _reason?: unknown,
  // The call site, where a template renders the tag (a native tag's body,
  // rendered by base, has none: its element renders one content).
  site?: number,
) {
  const state = getState();
  const isPatchRender = state instanceof PatchRenderState;
  const renderer = isPatchRender
    ? normalizeDynamicRenderer<ServerRenderer>(tag)
    : undefined;
  const pairs = pairsContent(
    state,
    scopeId,
    accessor,
    renderer,
    content,
    pairing,
  );
  if (isPatchRender && !pairs) return;
  // The child's groups are unknown: a patch template's page or response
  // writes the tag even where nothing resumes.
  const reason = markerGuard !== 0 || isPatchRender ? SERVER_ALL : 0;
  if (site !== undefined) {
    pushIdHop(IdHop.Site, MARKO_DEBUG ? [accessor, site] : site);
  }
  if (!pairs) {
    const unpatched = withUnpatched(() =>
      _base_dynamic_tag(
        scopeId,
        accessor,
        tag,
        inputOrArgs,
        content,
        inputIsArgs,
        markerGuard,
        tagVar ? 1 : undefined,
        pairing,
        reason,
        renderDynamicTag,
      ),
    );
    if (site !== undefined) popIdHop();
    return unpatched;
  }
  const value = _base_dynamic_tag(
    scopeId,
    accessor,
    tag,
    inputOrArgs,
    content,
    inputIsArgs,
    markerGuard,
    tagVar ? 1 : undefined,
    pairing === PatchPairing.Setup ? PatchPairing.Render : pairing,
    reason,
    renderDynamicTag,
  );
  if (site !== undefined) popIdHop();
  // A template whose own state drives its return keeps the client's value.
  if (
    typeof tagVar === "string" &&
    isPatchRender &&
    typeof renderer === "function" &&
    !statefulReturns.has(renderer[RendererProp.Id])
  ) {
    _patch_fill(scopeId, PatchKey.Fill + tagVar, value);
  }
  return value;
}

// Whether a patch renders a tag's content by its `pairing`: paired with the
// live branch, or skipped to wait for its lazy module as a render would.
export function pairsContent(
  state: State,
  scopeId: number,
  accessor: Accessor,
  renderer: ServerRenderer | string | undefined,
  content: unknown,
  pairing: PatchPairing | undefined,
) {
  const pairs =
    pairing === PatchPairing.Render ||
    pairing === PatchPairing.Keep ||
    pairing === PatchPairing.Setup;
  if (state instanceof PatchRenderState) {
    if (!pairs) {
      const readyId = (renderer as ServerRenderer)?.[RendererProp.ReadyId];
      if (readyId) patchWait(state, readyId);
      // The resumed page renders the tag, and so the content passed to it.
      _content_withhold(renderer);
      _content_withhold(content);
    } else {
      // A null renderer still renders the body: its writes pair too.
      if (renderer || content) {
        linkBranch(
          state,
          scopeId,
          accessor,
          _peek_scope_id(),
          undefined,
          undefined,
          typeof renderer === "function"
            ? renderer[RendererProp.Owner]
            : undefined,
          pairing === PatchPairing.Setup,
        );
      }
    }
  }
  return pairs;
}

// Content with no client renderer elides its slot to `0`: an unbound
// registration whose every occurrence serializes as that access text.
export function _content_elide(
  id: string,
  fn: ServerRenderer,
  scopeId: number | undefined,
) {
  return register("", _content(id, fn, scopeId), undefined, undefined, "0");
}

// Content whose kept instances take their holes as data: each instance a page
// renders joins its owner's set, and the client adds those it creates.
export function _content_kept(id: string, fn: ServerRenderer, scopeId: number) {
  const renderer = (...args: Parameters<ServerRenderer>) => {
    const state = getState();
    const instanceId = _peek_scope_id();
    const result = fn(...args);
    // An instance a patch may create takes its holes from the owner's withheld
    // entry, where the flush renders one (`kKeptInstance`).
    if (
      state instanceof PatchRenderState &&
      inCreatable() &&
      // Not the withheld entry's own render, which links under its key.
      !state.patchLinks[instanceId].key
    ) {
      const patch = state.patchTree![instanceId];
      if (patch) {
        (patch as { [kKeptInstance]?: string })[kKeptInstance] =
          PatchKey.Withheld + id + " " + scopeId;
      }
    }
    if (!(state instanceof PatchRenderState)) {
      const key = AccessorPrefix.WithheldScopes + id;
      (
        (scopeWithId(state, scopeId)[key] ||
          _scope(scopeId, { [key]: new Set() })[key]) as Set<ScopeInternals>
      ).add(scopeWithId(state, instanceId));
    }
    return result;
  };
  withheldRenderers.add(renderer);
  return _content_elide(id, renderer, scopeId);
}

// The dynamic tag entry of `input` content: a shell ships its id
// alone, a registered renderer rides the serializer, `0` marks none.
export function writeDynamicTagEntry(
  scopeId: number,
  accessor: Accessor,
  tag: unknown,
  args: unknown,
  contentId: string | 0,
  varId: string | 0,
  mask?: GroupMask,
  group?: number,
  createdOnly?: 1 | 0,
  rendererGroup?: number,
  rendererMask = mask,
  namesRegistered?: boolean,
) {
  const state = getState();
  const updatesFrom = getUpdatesFrom(mask, group!);
  if (!(state instanceof PatchRenderState)) {
    walkMarkers(state);
  } else {
    const renderer = normalizeDynamicRenderer<ServerRenderer>(tag);
    const fixed =
      rendererGroup !== undefined &&
      !writesEntry(getUpdatesFrom(rendererMask, rendererGroup));
    // A renderer its caller hands unchanged pairs, and its render writes its new
    // input, but for input a native element or the content's own code renders.
    if (
      writesEntry(updatesFrom) &&
      (!fixed ||
        typeof renderer === "string" ||
        (!!renderer && clientInputRenderers.has(renderer)))
    ) {
      const id =
        typeof renderer === "function" ? renderer[RendererProp.Id] : undefined;
      // A renderer ships its comparable id; a native name ships as `>div`,
      // and args ride as array input.
      const registered =
        typeof renderer === "function" ? REGISTRY.get(renderer) : undefined;
      const boundScope = registered?.scope as ScopeInternals | undefined;
      const ownerId = boundScope
        ? boundScope[K_SCOPE_ID]
        : id
          ? (renderer as ServerRenderer)[RendererProp.Owner]
          : undefined;
      // A renderer the client builds from its shell (bound to its owner by the
      // id's prefix) takes no input: the flush's entries render what it would.
      const shell = id && shipShell(state, id, namesRegistered);
      if (contentId) shipShell(state, contentId);
      const entry: unknown[] = [
        id
          ? withOwnerHops(
              ownerId === undefined ? "" : ownerPrefix(state, scopeId, ownerId),
              id,
            )
          : typeof renderer === "string"
            ? ">" + renderer
            : 0,
        contentId,
        (!shell && renderer && args) || 0,
        varId,
      ];
      // The resumed page renders a native tag's `content` input.
      if (typeof renderer === "string") {
        _content_withhold((Array.isArray(args) ? args[0] : args)?.content);
      }
      while (entry.length > 1 && !entry[entry.length - 1]) entry.pop();
      const value = entry.length > 1 ? entry : entry[0];
      const key = PatchKey.DynamicTag + accessor;
      // Client state names the tag: only a scope the flush creates takes it.
      if (createdOnly) {
        ensurePatchSetup(state, ensureScopePatch(state, scopeId))[key] = value;
        return PatchPairing.Setup;
      }
      writePatchEntry(state, scopeId, key, value);
    } else if (!(updatesFrom & UpdatesFrom.Client)) {
      // No entry ships: the live branch stays paired, a constant group's holes
      // seed nothing in it, and client state renders a live scope's tag itself.
      return createdOnly ? PatchPairing.Skip : PatchPairing.Keep;
    }
  }
  // A tag deriving from a group updating from the client, or named by client
  // state, is the resumed page's to render.
  return createdOnly || updatesFrom & UpdatesFrom.Client
    ? PatchPairing.Skip
    : PatchPairing.Render;
}

// Registered content whose own client code renders the params a dynamic tag may
// keep handing it: a kept renderer's entry carries them there, as main's params do.
export function _content_resume(
  id: string,
  fn: ServerRenderer,
  scopeId?: number,
  locals?: Locals,
  clientInput?: 1,
) {
  if (clientInput) clientInputRenderers.add(fn);
  return _base_content_resume(id, fn, scopeId, locals);
}

const clientInputRenderers = new WeakSet<ServerRenderer>();

// The flush writes the entry: a server value changed it, or it seeds a scope
// the flush may create.
function writesEntry(sources: number) {
  return sources === UpdatesFrom.Server || (!sources && inCreatable());
}

// Content's owner as an id prefix: a `^` per scope up the tag's owner chain (its
// own first), then accessor hops down from it or the root, or up to a row.
function ownerPrefix(
  state: PatchRenderState,
  scopeId: number,
  ownerId: number,
) {
  const up = findOwnerDepth(state, scopeId, ownerId);
  if (up !== undefined) return "^".repeat(up + 1);
  let hops = "";
  let relative: string | undefined;
  for (let cur = ownerId; cur !== ROOT_SCOPE_ID;) {
    if (MARKO_DEBUG && !state.patchLinks[cur]) {
      throw new Error(
        `A patch cannot reach the owner scope ${ownerId} of dynamic tag content.`,
      );
    }
    const link = state.patchLinks[cur];
    if (typeof link.hop !== "string") {
      return relative || branchesUpTo(state, scopeId, cur, hops);
    }
    hops = link.hop + " " + hops;
    cur = link.parent;
    const parentUp = relative ? undefined : findOwnerDepth(state, scopeId, cur);
    if (parentUp !== undefined) relative = "^".repeat(parentUp + 1) + hops;
  }
  return relative && relative.length < hops.length ? relative : hops;
}

// A row is a branch the tag renders inside, reached as the client links it: the
// tag's closest branch, then a parent branch per branch between.
function branchesUpTo(
  state: PatchRenderState,
  scopeId: number,
  rowId: number,
  hops: string,
) {
  let prefix = "^" + AccessorProp.ClosestBranch + " ";
  for (let cur = scopeId; cur !== rowId;) {
    const link = state.patchLinks[cur];
    if (MARKO_DEBUG && !link) {
      throw new Error(
        `Content defined in a \`<for>\` row was rendered outside the row. Only state changed during render, which Marko does not support, can move it there.`,
      );
    }
    if (
      typeof link.hop !== "string" ||
      link.hop.startsWith(AccessorPrefix.BranchScopes)
    ) {
      prefix += AccessorProp.ParentBranch + " ";
    }
    cur = link.parent;
  }
  return prefix + hops;
}

// Templates and content whose own state drives their `<return>`: a dynamic
// tag's patch leaves the variable to the client for them.
export const statefulReturns = new Set<unknown>();

export function _stateful_return(id: string) {
  statefulReturns.add(id);
}

// Whether a consumer kept an instance the scope's render made for the resumed
// page, or yet may under a pending `<await>`: its server values fill then.
export function _content_withheld(id: string, scopeId: number) {
  const state = getState();
  if (state instanceof PatchRenderState) {
    if ((state.withheldContents?.get(id) ?? -1) >= scopeId) return true;
    for (const awaitScopeId of state.pendingAwaits) {
      if (awaitScopeId >= scopeId) return true;
    }
  }
  return false;
}
