import { normalizeDynamicRenderer } from "../../common/helpers";
import { ROOT_SCOPE_ID } from "../../common/meta";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  PatchKey,
  RendererProp,
} from "../../common/types";
import { _content, _dynamic_tag as _base_dynamic_tag } from "../dynamic-tag";
import { K_SCOPE_ID, REGISTRY, register } from "../serializer";
import type { ServerRenderer } from "../template";
import {
  type GroupMask,
  type ScopeInternals,
  type State,
  _peek_scope_id,
  getState,
} from "../writer";
import {
  PatchRenderState,
  PatchUpdateState,
  SERVER_ALL,
  _content_withhold,
  _patch_value,
  entryKey,
  findOwnerDepth,
  groupSources,
  inCreatable,
  pairBranch,
  patchWait,
  shipShell,
  walkMarkers,
  withUnpatched,
  writePatch,
} from "./writer";

// A patch pairs a tag whose renderer it renders (a native tag's body too); one
// it skips is the resumed page's to render, so a page renders it unpatched.
export function _dynamic_tag(
  scopeId: number,
  accessor: Accessor,
  tag: unknown,
  inputOrArgs: unknown,
  content?: ServerRenderer | 0,
  inputIsArgs?: 1,
  markerGuard?: 1 | 0,
  // A patch build passes the variable's registration, which a patch fills.
  tagVar?: 1 | string,
  // A patched tag's entry ships its input (`1`), or none for a statically
  // empty one (`2`); the trailing ownership decides how a patch treats it.
  patched?: 1 | 2,
  owned?: GroupMask,
  group?: number,
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
    patched &&
      writeDynamicTagEntry(
        scopeId,
        accessor,
        tag,
        patched === 1 && inputOrArgs,
        content,
        typeof tagVar === "string" ? tagVar : 0,
        owned,
        group,
      ),
  );
}

// Renders a tag a patch treats as `pairing` says: `1` pairs and re-renders it,
// `3` pairs it keeping the live branch, `2` skips it (a client-owned renderer).
function renderDynamicTag(
  scopeId: number,
  accessor: Accessor,
  tag: unknown,
  inputOrArgs: unknown,
  content?: ServerRenderer | 0,
  inputIsArgs?: 1,
  markerGuard?: 1 | 0,
  tagVar?: 1 | string,
  pairing?: 1 | 2 | 3,
) {
  const state = getState();
  const isPatchUpdate = state instanceof PatchUpdateState;
  const renderer = isPatchUpdate
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
  if (isPatchUpdate && !pairs) return;
  // The child's groups are unknown: a patch template's page or response
  // writes the tag even where nothing resumes.
  const isPatchRender = isPatchUpdate || state instanceof PatchRenderState;
  const reason = isPatchRender
    ? markerGuard !== 0 || isPatchUpdate
      ? SERVER_ALL
      : 0
    : undefined;
  if (isPatchRender && !pairs) {
    return withUnpatched(() =>
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
    pairing,
    reason,
    renderDynamicTag,
  );
  // A template whose own state drives its return keeps the client's value.
  if (
    typeof tagVar === "string" &&
    isPatchUpdate &&
    typeof renderer === "function" &&
    !clientReturns.has(renderer[RendererProp.Id])
  ) {
    _patch_value(scopeId, PatchKey.Value + tagVar, value);
  }
  return value;
}

// Whether a patch renders a tag's content by its `pairing`: an update pairs it
// with the live branch, or skips it and waits for its lazy module as a render would.
export function pairsContent(
  state: State,
  scopeId: number,
  accessor: Accessor,
  renderer: ServerRenderer | string | undefined,
  content: unknown,
  pairing: 1 | 2 | 3 | undefined,
) {
  const pairs = pairing === 1 || pairing === 3;
  if (state instanceof PatchUpdateState) {
    if (!pairs) {
      const readyId = (renderer as ServerRenderer)?.[RendererProp.ReadyId];
      if (readyId) patchWait(state, readyId);
      // The resumed page renders the tag, and so the content passed to it.
      _content_withhold(renderer);
      _content_withhold(content);
    } else {
      // A null renderer still renders the body: its writes pair too.
      if (renderer || content) {
        pairBranch(
          state,
          scopeId,
          accessor,
          _peek_scope_id(),
          undefined,
          undefined,
          typeof renderer === "function"
            ? renderer[RendererProp.Owner]
            : undefined,
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

// The dynamic tag entry of `input` content: a shell ships its id
// alone, a registered renderer rides the serializer, `0` marks none.
export function writeDynamicTagEntry(
  scopeId: number,
  accessor: Accessor,
  tag: unknown,
  args: unknown,
  content: ServerRenderer | 0 | undefined,
  varId: string | 0,
  owned?: GroupMask,
  group?: number,
) {
  const state = getState();
  const sources = groupSources(owned, group!);
  if (!(state instanceof PatchUpdateState)) {
    walkMarkers(state);
  } else {
    const renderer = normalizeDynamicRenderer<ServerRenderer>(tag);
    if (sources === 2 || (!sources && inCreatable())) {
      const id =
        typeof renderer === "function" ? renderer[RendererProp.Id] : undefined;
      // A renderer ships its comparable id (or itself bare); a native name
      // ships as `>div`, and args ride as array input.
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
      const shell = id && shipShell(state as PatchUpdateState, id);
      // The patch creates a native or absent tag's body itself; params take
      // the page's own, and a renderer built from its shell takes none.
      const contentId = content ? content[RendererProp.Id]! : 0;
      if (!id) shipShell(state as PatchUpdateState, contentId);
      const entry: unknown[] = [
        id
          ? (ownerId === undefined
              ? ""
              : ownerPrefix(state, scopeId, ownerId)) + id
          : typeof renderer === "string"
            ? ">" + renderer
            : renderer || 0,
        (!shell && renderer && args) || 0,
        shell ? 0 : contentId,
        varId,
      ];
      // The resumed page renders a native tag's `content` input, and the body
      // of a renderer it runs from its params (no shell).
      if (typeof renderer === "string") {
        _content_withhold(
          ((Array.isArray(args) ? args[0] : args) as { content?: unknown })
            ?.content,
        );
      } else if (id && !shell) {
        _content_withhold(content);
      }
      // Render-only locals (a loop's values) ride last, as its factory takes them.
      const locals = registered?.locals?.(state.scope);
      if (locals) entry.push(...locals);
      while (entry.length > 1 && !entry[entry.length - 1]) entry.pop();
      writePatch(
        state,
        scopeId,
        entryKey(PatchKey.DynamicTag, accessor),
        entry.length > 1 ? entry : entry[0],
      );
    } else if (!(sources & 1)) {
      // No entry ships, so the live branch stays paired: its body is no
      // divergence for a constant group's hole to seed.
      return 3;
    }
  }
  // How a patch treats the tag (`_dynamic_tag`'s `patchPairing`): `1` pairs it,
  // `3` pairs a kept renderer, `2` skips it (it derives from a client-owned group).
  return sources & 1 ? 2 : 1;
}

// Content's owner as an id prefix: a `^` per scope up the tag's owner chain (its
// own first), then accessor hops down from it or the root, or up to a row.
function ownerPrefix(
  state: PatchUpdateState,
  scopeId: number,
  ownerId: number,
) {
  const up = findOwnerDepth(state, scopeId, ownerId);
  if (up !== undefined) return "^".repeat(up + 1);
  let hops = "";
  let relative: string | undefined;
  for (let cur = ownerId; cur !== ROOT_SCOPE_ID;) {
    if (MARKO_DEBUG && !state.patchLinks?.[cur]) {
      throw new Error(
        `A patch cannot reach the owner scope ${ownerId} of dynamic tag content.`,
      );
    }
    const link = state.patchLinks![cur];
    if (typeof link.link !== "string") {
      return relative || branchesUpTo(state, scopeId, cur, hops);
    }
    hops = link.link + " " + hops;
    cur = link.parent;
    const parentUp = relative ? undefined : findOwnerDepth(state, scopeId, cur);
    if (parentUp !== undefined) relative = "^".repeat(parentUp + 1) + hops;
  }
  return relative && relative.length < hops.length ? relative : hops;
}

// A row is a branch the tag renders inside, reached as the client links it: the
// tag's closest branch, then a parent branch per branch between.
function branchesUpTo(
  state: PatchUpdateState,
  scopeId: number,
  rowId: number,
  hops: string,
) {
  let prefix = "^" + AccessorProp.ClosestBranch + " ";
  for (let cur = scopeId; cur !== rowId;) {
    const link = state.patchLinks![cur];
    if (MARKO_DEBUG && !link) {
      throw new Error(
        `Content defined in a \`<for>\` row was rendered outside the row. Only state changed during render, which Marko does not support, can move it there.`,
      );
    }
    if (
      typeof link.link !== "string" ||
      link.link.startsWith(AccessorPrefix.BranchScopes)
    ) {
      prefix += AccessorProp.ParentBranch + " ";
    }
    cur = link.parent;
  }
  return prefix + hops;
}

// Templates and content whose own state drives their `<return>`: a dynamic
// tag's patch leaves the variable to the client for them.
export const clientReturns = new Set<unknown>();

export function _client_return(id: string) {
  clientReturns.add(id);
}

// Whether a consumer kept for the resumed page an instance of the content made
// in the scope's render, or yet may under a pending `<await>`: the server
// values inside fill then.
export function _content_withheld(id: string, scopeId: number) {
  const state = getState();
  return (
    state instanceof PatchUpdateState &&
    ((state.withheldContents?.get(id) ?? -1) >= scopeId ||
      !!state.pendingAwaits?.some((awaitScopeId) => awaitScopeId >= scopeId))
  );
}
