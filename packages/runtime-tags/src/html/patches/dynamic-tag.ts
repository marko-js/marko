import { normalizeDynamicRenderer } from "../../common/helpers";
import { ROOT_SCOPE_ID } from "../../common/meta";
import { toArray } from "../../common/opt";
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
  _content as _base_content,
  _dynamic_tag as _base_dynamic_tag,
} from "../dynamic-tag";
import { REGISTRY, register } from "../serializer";
import type { ServerRenderer } from "../template";
import {
  _attr_content as _base_attr_content,
  type GroupMask,
  type State,
  _peek_scope_id,
  _scope,
  _subscribe,
  getScopeId,
  getState,
  scopeWithId,
} from "../writer";
import {
  PatchRenderState,
  popIdHop,
  pushIdHop,
  ALL_SERVER,
  _patch_fill,
  ensurePatchSetup,
  findOwnerDepth,
  getUpdatesFrom,
  isFilledEntry,
  addClientBranch,
  linkBranch,
  patchWait,
  shipShell,
  walkMarkers,
  withOwnerHops,
  withPairedBranchId,
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
  // The content whose closures a patch writes that a template renderer may render as a client branch.
  clientBranches?: string | string[],
) {
  const state = getState();
  // A template renderer may render the content instead of the patch.
  if (
    clientBranches &&
    state instanceof PatchRenderState &&
    typeof normalizeDynamicRenderer(tag) === "function"
  ) {
    for (const id of toArray(clientBranches))
      addClientBranch(state, id, scopeId);
  }
  const pairing =
    patched & 3
      ? writeDynamicTagEntry(
          scopeId,
          PatchKey.DynamicTag + accessor,
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
      : undefined;
  return renderDynamicTag(
    scopeId,
    accessor,
    tag,
    inputOrArgs,
    content,
    inputIsArgs,
    markerGuard,
    tagVar,
    pairing,
    // A kept tag with constant input needs no param writes; the page may have
    // left those holes unmarked.
    pairing === PatchPairing.Keep && !getUpdatesFrom(mask, group)
      ? 0
      : undefined,
    patched >> 3,
  );
}

// Renders a tag a patch treats as `pairing` (`PatchPairing`) says.
function renderDynamicTag(
  scopeId: number,
  accessor: Accessor,
  tag: unknown,
  inputOrArgs: unknown,
  content: ServerRenderer | 0 | undefined,
  inputIsArgs: 1 | undefined,
  markerGuard: 1 | 0 | undefined,
  tagVar: 1 | string | undefined,
  pairing: PatchPairing | undefined,
  // The child's reason where already decided: a kept tag's with constant input.
  givenReason: GroupMask | undefined,
  // The call site, where a template renders the tag.
  site: number,
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
  const reason =
    givenReason ?? (markerGuard !== 0 || isPatchRender ? ALL_SERVER : 0);
  pushIdHop(IdHop.Site, MARKO_DEBUG ? [accessor, site] : site);
  // A tag only a created scope takes renders unpatched, into its setup.
  const setup = pairing === PatchPairing.Setup;
  const value =
    !pairs || setup
      ? withUnpatched(() =>
          _base_dynamic_tag(
            scopeId,
            accessor,
            tag,
            inputOrArgs,
            content,
            inputIsArgs,
            markerGuard,
            tagVar ? 1 : undefined,
            setup ? PatchPairing.Render : pairing,
            reason,
            renderPatchedContent,
          ),
        )
      : _base_dynamic_tag(
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
          renderPatchedContent,
        );
  popIdHop();
  if (!pairs) return value;
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

// Content pairs as a dynamic tag's does: a paired body seeds no creation, and one
// updating from the client is the resumed page's (unpatched, or skipped).
export function renderPatchedContent(
  accessor: Accessor,
  scopeId: number,
  content: ServerRenderer | undefined,
  markerGuard: 1 | 0 | undefined,
  pairing: PatchPairing | undefined,
  // A native dynamic tag's body has none: its element renders one content.
  site?: number,
) {
  const state = getState();
  const renderer = normalizeDynamicRenderer<ServerRenderer>(content);
  const pairs = pairsContent(state, scopeId, accessor, renderer, 0, pairing);
  if (site !== undefined) {
    pushIdHop(IdHop.Site, MARKO_DEBUG ? [accessor, site] : site);
  }
  if (pairing === PatchPairing.Render) {
    _base_attr_content(accessor, scopeId, content, markerGuard);
  } else if (pairs) {
    withPairedBranchId(_peek_scope_id(), () =>
      _base_attr_content(accessor, scopeId, content, markerGuard),
    );
  } else if (!(state instanceof PatchRenderState)) {
    withUnpatched(() =>
      _base_attr_content(accessor, scopeId, content, markerGuard),
    );
  }
  if (site !== undefined) popIdHop();
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
    } else if (renderer || content) {
      // A null renderer still renders the body: its writes pair too.
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
  return pairs;
}

// Content with no client renderer (`elide`): a document writes it as `0`, a patch
// as bound to its owner and built from its shell (`=` before its id).
export function _content(
  id: string,
  fn: ServerRenderer,
  scopeId?: number,
  elide?: 0,
) {
  if (elide === undefined) return _base_content(id, fn, scopeId);
  const state = getState();
  const content = _base_content(id, fn, scopeId);
  return state instanceof PatchRenderState
    ? register("=" + id, content, scopeWithId(state, scopeId!))
    : register("", content, undefined, undefined, "0");
}

// The entry (`key`) of a dynamic tag or a native tag's content: a shell ships its
// id alone, a registered renderer rides the serializer, `0` marks none.
export function writeDynamicTagEntry(
  scopeId: number,
  key: string,
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
  const updatesFrom = getUpdatesFrom(mask, group);
  if (!(state instanceof PatchRenderState)) {
    walkMarkers(state);
  } else {
    const renderer = normalizeDynamicRenderer<ServerRenderer>(tag);
    const fixed =
      rendererGroup !== undefined &&
      !isFilledEntry(getUpdatesFrom(rendererMask, rendererGroup));
    // A renderer its caller hands unchanged pairs, and its render writes its new
    // input, but for input a native element renders.
    if (
      isFilledEntry(updatesFrom) &&
      (!fixed || typeof renderer === "string")
    ) {
      const id =
        typeof renderer === "function" ? renderer[RendererProp.Id] : undefined;
      // A renderer ships its comparable id; a native name ships as `>div`,
      // and args ride as array input.
      const registered =
        typeof renderer === "function" ? REGISTRY.get(renderer) : undefined;
      const ownerId = registered?.scope
        ? getScopeId(registered.scope)
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
      // The resumed page renders a native tag's `content` input: what it reads stays
      // filled (`_client_branch_if`). Only a renderer is content, not a value carrying its keys.
      if (typeof renderer === "string") {
        const value = (Array.isArray(args) ? args[0] : args)?.content;
        const content =
          (value as { content?: unknown } | undefined)?.content || value;
        const id =
          typeof content === "function" &&
          (content as ServerRenderer)[RendererProp.Id];
        if (id) {
          addClientBranch(
            state,
            id,
            (content as ServerRenderer)[RendererProp.Owner]!,
          );
        }
      }
      while (entry.length > 1 && !entry[entry.length - 1]) entry.pop();
      const value = entry.length > 1 ? entry : entry[0];
      // Client state names the tag: only a scope the flush creates takes it, rendering it
      // itself (`Skip`) where its renderer ships no shell.
      if (createdOnly) {
        ensurePatchSetup(state, scopeId)[key] = value;
        return shell ? PatchPairing.Setup : PatchPairing.Skip;
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
export function _client_branch_if(id: string, scopeId: number) {
  const state = getState();
  if (state instanceof PatchRenderState) {
    if ((state.clientBranches?.get(id) ?? -1) >= scopeId) return true;
    for (const awaitScopeId of state.pendingAwaits) {
      if (awaitScopeId >= scopeId) return true;
    }
  }
  return false;
}
