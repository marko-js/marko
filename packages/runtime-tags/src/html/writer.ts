/* eslint-disable @typescript-eslint/no-this-alias */

import {
  _el_read_error,
  _hoist_read_error,
  assertValidLoopKey,
} from "../common/errors";
import { forIn, forOf, forTo, forUntil } from "../common/for";
import {
  encodePossessionSite,
  isPromise,
  normalizeDynamicRenderer,
} from "../common/helpers";
import { concat, forEach, type Opt, push } from "../common/opt";
import {
  type $Global,
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type Falsy,
  type PersistedPatch,
  type PersistedPossession,
  type PersistedRender,
  ResumeSymbol,
} from "../common/types";
import { RendererProp } from "../common/types";
import { attrAssignment } from "./attrs";
import { forInBy, forOfBy, forStepBy } from "./for";
import {
  HAVE_RUNTIME_KEY,
  PERSISTED_REORDER_RUNTIME_CODE,
  PERSISTED_WALKER_RUNTIME_CODE,
  REORDER_RUNTIME_CODE,
  WALKER_RUNTIME_CODE,
} from "./inlined-runtimes.debug";
import {
  decodePersistedPossession,
  encodePersistedPossession,
} from "./persisted-token";
import {
  K_SCOPE_ID,
  quote,
  register as serializerRegister,
  type ScopeFlush,
  Serializer,
  setDebugInfo,
  toAccess,
  toObjectKey,
} from "./serializer";
import type { ServerRenderer } from "./template";

// ---- Render context & scope ids ---------------------------------------

export type PartialScope = Record<Accessor, unknown>;

interface SerializeState {
  readyId?: string;
  parent?: SerializeState;
  resumes: string;
  writeScopes: Record<number, PartialScope>;
  passiveScopes?: Record<number, PartialScope>;
  flushScopes: boolean;
}

type ScopeInternals = PartialScope & {
  [K_SCOPE_ID]?: number;
};

let $chunk: Chunk;

export function getChunk(): Chunk | undefined {
  return $chunk;
}

export function getContext(key: keyof NonNullable<Chunk["context"]>) {
  return $chunk.context?.[key];
}

export function getState(): State {
  return $chunk.boundary.state;
}

export function getScopeId(scope: unknown): number | undefined {
  return (scope as ScopeInternals)[K_SCOPE_ID];
}

export function getScopeById(scopeId: number | undefined) {
  if (scopeId !== undefined) {
    return $chunk.boundary.state.scopes.get(scopeId);
  }
}

export function $global() {
  return $chunk.boundary.state.$global;
}

export function _id() {
  const state = $chunk.boundary.state;
  const { $global } = state;
  return (
    "s" + $global.runtimeId + $global.renderId + (state.tagId++).toString(36)
  );
}

export function _scope_id() {
  return $chunk.boundary.state.scopeId++;
}

export function _peek_scope_id() {
  return $chunk.boundary.state.scopeId;
}

const kPendingContexts = Symbol("Pending Contexts");
export function withContext<T>(
  key: PropertyKey,
  value: unknown,
  cb: () => T,
): T;
export function withContext<T, U>(
  key: PropertyKey,
  value: unknown,
  cb: (value: U) => T,
  cbValue: U,
): T;
export function withContext<T, U>(
  key: PropertyKey,
  value: unknown,
  cb: (value?: U) => T,
  cbValue?: U,
): T {
  const ctx = ($chunk.context ||= { [kPendingContexts]: 0 } as any);
  const prev = ctx[key];
  ctx[kPendingContexts]++;
  ctx[key] = value;
  try {
    return cb(cbValue);
  } finally {
    ctx[kPendingContexts]--;
    ctx[key] = prev;
  }
}

const kBranchId = Symbol("Branch Id");
const kIsAsync = Symbol("Is Async");

export function isInResumedBranch() {
  return $chunk?.context?.[kBranchId] !== undefined;
}

export function withBranchId<T>(branchId: number, cb: () => T): T {
  return withContext(kBranchId, branchId, cb);
}

function withIsAsync<T, U>(cb: (value: U) => T, value: U): T {
  return withContext(kIsAsync, true, cb, value);
}

// ---- Document HTML emission -------------------------------------------

export function _html(html: string) {
  $chunk.writeHTML(html);
}

export function writeScript(script: string) {
  // Patch responses have no document and accept only bare frames.
  if (!$chunk.boundary.state.patch) $chunk.writeScript(script);
}

export function _script(scopeId: number, registryId: string) {
  // Patch effects run only for scopes the apply creates.
  if ($chunk.boundary.state.patch) {
    $chunk.writeEffect(scopeId, registryId);
    return;
  }
  if ($chunk.serializeState.readyId || $chunk.context?.[kIsAsync]) {
    _resume_branch(scopeId);
  }
  $chunk.boundary.state.needsMainRuntime = true;
  $chunk.writeEffect(scopeId, registryId);
}

export function _trailers(html: string) {
  const { state } = $chunk.boundary;
  if (!state.patch) state.trailerHTML += html;
}

export function _resume<T extends WeakKey>(
  val: T,
  id: string,
  scopeId?: number,
): T {
  return serializerRegister(
    id,
    val,
    scopeId === undefined ? undefined : _scope_with_id(scopeId),
  );
}

export function _el(scopeId: number, id: string) {
  return _resume(() => _el_read_error(), id, scopeId);
}

export function _hoist(scopeId: number, id: string) {
  const getter = () => _hoist_read_error();
  getter[Symbol.iterator] = _hoist_read_error;
  return _resume(getter, id, scopeId);
}

export function _el_resume(
  scopeId: number,
  accessor: Accessor,
  shouldResume?: number,
) {
  if (shouldResume === 0) return "";

  const { state } = $chunk.boundary;
  state.needsMainRuntime = true;
  // Persisted marker runs omit repeated scope ids. The leading space keeps a
  // continuation accessor distinct from reorder ids.
  if (state.persisted) {
    if ($chunk.fragment) {
      state.fragmentMarkerScopeIds += "," + scopeId + ",";
    }
    if ($chunk.lastNodeMarkScope === scopeId) {
      return state.mark(ResumeSymbol.Node, " " + accessor);
    }
    $chunk.lastNodeMarkScope = scopeId;
  }
  return state.mark(ResumeSymbol.Node, scopeId + " " + accessor);
}

// Non-node markers reset the node run so the next marker includes its scope.
export function _reset_node_mark_run() {
  $chunk.lastNodeMarkScope = -1;
}

export function _sep(shouldResume: number) {
  return shouldResume === 0 ? "" : "<!>";
}

export function _resume_branch(scopeId: number) {
  const branchId = $chunk.context?.[kBranchId];
  if (
    branchId !== undefined &&
    branchId !== scopeId &&
    // Branch ownership is recovered structurally by update merges; the
    // resume-only backref would be dead weight in the patch.
    !$chunk.boundary.state.patch
  ) {
    writeScope(scopeId, { [AccessorProp.ClosestBranchId]: branchId });
  }
}

export function _attr_content(
  nodeAccessor: Accessor,
  scopeId: number,
  content: unknown,
  serializeReason?: number,
) {
  const shouldResume = serializeReason !== 0;
  const render = normalizeServerRender(content);
  const branchId = _peek_scope_id();
  if (render) {
    if (shouldResume) {
      withBranchId(branchId, render);
    } else {
      render();
    }
  }

  const rendered = _peek_scope_id() !== branchId;
  if (rendered) {
    if (shouldResume) {
      writeScope(scopeId, {
        [AccessorPrefix.BranchScopes + nodeAccessor]: writeScope(branchId, {}),
        [AccessorPrefix.ConditionalRenderer + nodeAccessor]:
          render?.[RendererProp.Id],
      });
    }
  } else {
    _scope_id();
  }
}

function normalizeServerRender(value: unknown) {
  const renderer = normalizeDynamicRenderer<ServerRenderer>(value);
  if (renderer) {
    if (typeof renderer === "function") {
      return renderer;
    } else if (MARKO_DEBUG) {
      throw new Error(
        `Invalid \`content\` attribute. Received ${typeof value}`,
      );
    }
  }
}

export function _var(
  parentScopeId: number,
  scopeOffsetAccessor: Accessor,
  childScopeId: number,
  registryId: string,
  nodeAccessor?: Accessor,
) {
  // Fragment subtrees resume without setup, so their tag-variable wiring
  // remains serialized.
  const resumeWiring = !$chunk.boundary.state.patch || $chunk.fragment;
  if (resumeWiring) {
    writeScopePassive(parentScopeId, { [scopeOffsetAccessor]: _scope_id() });
  }
  // TODO: if the return value is already registered, use that.
  const childScope = writeScopePassive(
    childScopeId,
    resumeWiring
      ? { [AccessorProp.TagVariable]: _resume({}, registryId, parentScopeId) }
      : {},
  );
  if (nodeAccessor !== undefined) {
    writeScope(parentScopeId, {
      [AccessorPrefix.BranchScopes + nodeAccessor]: childScope,
    });
  }
}

function writeScopePassive(scopeId: number, partialScope: PartialScope) {
  const target = $chunk.serializeState;
  const scope = _scope_with_id(scopeId);
  const passive = (target.passiveScopes ||= {});
  // See the matching hook in `writeScope`: fragment-subtree scopes are
  // stamped from the entry's id list.
  if ($chunk.fragment) {
    const { state } = $chunk.boundary;
    (state.fragmentScopeIds ??= new Set()).add(scopeId);
  }
  Object.assign(scope, partialScope);
  passive[scopeId] = Object.assign(passive[scopeId] || {}, partialScope);
  return scope;
}

// `<show>` always renders; hidden ranges use `<t>` so the walker reaches them.
export function _show_start(display: unknown, mark?: unknown) {
  if (display) {
    // The wrapper itself is the range's single node.
    if (mark) {
      // Branch markers reset the node-marker run register (see `_el_resume`).
      $chunk.lastNodeMarkScope = -1;
      $chunk.writeHTML(
        $chunk.boundary.state.mark(ResumeSymbol.BranchStart, ""),
      );
    }
  } else {
    $chunk.writeHTML("<t hidden>");
  }
}

export function _show_end(
  scopeId: number,
  accessor: Accessor,
  display: unknown,
  serializeMarker?: number,
  serializeStateful?: number,
  parentEndTag?: string | 0,
  singleNode?: 1 | 0,
) {
  // Consume a scope id for the range holder the resume marks create.
  const branchId = _scope_id();
  const wrap = !display;

  if (wrap) $chunk.writeHTML("</t>");

  writeBranchEnd(
    scopeId,
    accessor,
    serializeStateful,
    serializeMarker,
    parentEndTag,
    wrap || singleNode ? 1 : undefined,
    " " + branchId,
  );
}

// ---- Control flow branches (document markers / patch scope links) -----

export function _for_of(
  list: Falsy | Iterable<unknown>,
  cb: (item: unknown, index: number) => void,
  by: Falsy | ((item: unknown, index: number) => unknown),
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: number,
  serializeMarker?: number,
  serializeStateful?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
  siteId?: string,
): void {
  forBranches(
    by,
    (each) =>
      each
        ? forOf(list, (item, index) => {
            const itemKey = forOfBy(by, item, index);
            each(itemKey, itemKey === index, () => cb(item, index));
          })
        : forOf(list, cb),
    scopeId,
    accessor,
    serializeBranch,
    serializeMarker,
    serializeStateful,
    parentEndTag,
    singleNode,
    siteId,
  );
}

export function _for_in(
  obj: Falsy | {},
  cb: (key: string, value: unknown) => void,
  by: Falsy | ((key: string, v: unknown) => unknown),
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: number,
  serializeMarker?: number,
  serializeStateful?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
  siteId?: string,
): void {
  forBranches(
    by,
    (each) =>
      each
        ? forIn(obj, (key, value) => {
            // There is no positional index for `for...in`, so the loop key
            // is always serialized.
            each(forInBy(by, key, value), false, () => cb(key, value));
          })
        : forIn(obj, cb),
    scopeId,
    accessor,
    serializeBranch,
    serializeMarker,
    serializeStateful,
    parentEndTag,
    singleNode,
    siteId,
  );
}

export function _for_to(
  to: number,
  from: number | Falsy,
  step: number | Falsy,
  cb: (index: number) => void,
  by: Falsy | ((v: number) => unknown),
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: number,
  serializeMarker?: number,
  serializeStateful?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
  siteId?: string,
): void {
  forBranches(
    by,
    (each) => {
      let index = 0;
      return each
        ? forTo(to, from, step, (value) => {
            const itemKey = forStepBy(by, value);
            each(itemKey, itemKey === index++, () => cb(value));
          })
        : forTo(to, from, step, cb);
    },
    scopeId,
    accessor,
    serializeBranch,
    serializeMarker,
    serializeStateful,
    parentEndTag,
    singleNode,
    siteId,
  );
}

export function _for_until(
  to: number,
  from: number | Falsy,
  step: number | Falsy,
  cb: (index: number) => void,
  by: Falsy | ((v: number) => unknown),
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: number,
  serializeMarker?: number,
  serializeStateful?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
  siteId?: string,
): void {
  forBranches(
    by,
    (each) => {
      let index = 0;
      return each
        ? forUntil(to, from, step, (value) => {
            const itemKey = forStepBy(by, value);
            each(itemKey, itemKey === index++, () => cb(value));
          })
        : forUntil(to, from, step, cb);
    },
    scopeId,
    accessor,
    serializeBranch,
    serializeMarker,
    serializeStateful,
    parentEndTag,
    singleNode,
    siteId,
  );
}

// Shared branch and scope writer for every `_for_*` loop variant.
function forBranches(
  by: unknown,
  iterate: (
    each:
      | 0
      | ((itemKey: unknown, sameAsIndex: boolean, render: () => void) => void),
  ) => void,
  scopeId: number,
  accessor: Accessor,
  serializeBranch: undefined | number,
  serializeMarker: undefined | number,
  serializeStateful: undefined | number,
  parentEndTag: string | undefined | 0,
  singleNode?: 1,
  // Identifies a request-derived keyed loop across renders.
  siteId?: string,
) {
  if (MARKO_DEBUG) {
    // eslint-disable-next-line no-var
    var seenKeys = new Set<unknown>();
  }

  if (serializeBranch === 0) {
    if (MARKO_DEBUG && by) {
      iterate((itemKey, _sameAsIndex, render) => {
        assertValidLoopKey(itemKey, seenKeys);
        render();
      });
    } else {
      iterate(0);
    }
    writeBranchEnd(
      scopeId,
      accessor,
      serializeStateful,
      serializeMarker,
      parentEndTag,
      singleNode,
      "",
    );
    return;
  }

  const { state } = $chunk.boundary;

  // Participating patch loops serialize their authoritative branch list as
  // scope data because no HTML markers are present.
  if (state.patch && !$chunk.fragment && (serializeBranch as number) & 2) {
    const branchScopes: ScopeInternals[] = [];
    const possessed = state.possessed;
    // Patch-list branches may be created fresh client-side; their seed
    // data serializes even when fragment delivery narrows the page-wide seed.
    state.freshBranchDepth++;
    iterate((itemKey, sameAsIndex, render) => {
      const branchId = _peek_scope_id();
      if (MARKO_DEBUG && by) {
        assertValidLoopKey(itemKey, seenKeys);
      }
      withBranchId(branchId, () => {
        const prevLoopKey = state.loopKey;
        const prevLoopPath = state.loopPath;
        // Request-derived loops always include the item key in the token path.
        state.loopKey =
          siteId !== undefined ? itemKey : sameAsIndex ? undefined : itemKey;
        const keyed = state.loopKey !== undefined;
        if (keyed) {
          state.loopPath = [
            ...(prevLoopPath || []),
            encodePossessionSite(siteId || "", state.loopKey),
          ];
        }
        const siteKey =
          siteId !== undefined
            ? "!" + (state.loopPath || []).join("/")
            : undefined;
        if (siteKey !== undefined) state.nextPossessed[siteKey] = "1";
        const itemPossessed =
          siteKey !== undefined && possessed?.[siteKey] === "1";
        if (siteKey !== undefined && !itemPossessed) {
          // A new key ships as a fragment because the client has no branch to
          // merge.
          _fragment(branchId, accessor, render);
        } else {
          render();
        }
        state.loopKey = prevLoopKey;
        state.loopPath = prevLoopPath;
        branchScopes.push(
          writeScope(branchId, {
            [AccessorProp.LoopKey]: itemKey,
            [AccessorProp.Owner]: scopeWithId(state, scopeId),
          }),
        );
      });
    });
    state.freshBranchDepth--;
    // Written even when empty: patch semantics are sparse (absence means
    // unchanged), so "now zero branches" must be an explicit empty list.
    writeScope(scopeId, {
      [AccessorPrefix.BranchScopes + accessor]: branchScopes,
    });
    writeBranchEnd(scopeId, accessor, serializeStateful, 0, parentEndTag);
    return;
  }

  const resumeKeys = serializeMarker !== 0;
  const resumeMarker = resumeKeys && (!parentEndTag || serializeStateful !== 0);
  let flushBranchIds = "";
  let loopScopes: Opt<ScopeInternals>;

  iterate((itemKey, sameAsIndex, render) => {
    const branchId = _peek_scope_id();
    if (MARKO_DEBUG && by) {
      assertValidLoopKey(itemKey, seenKeys);
    }
    if (resumeMarker) {
      if (singleNode) {
        flushBranchIds = " " + branchId + flushBranchIds;
      } else {
        // Structural markers reset the node-marker run across interleaving.
        $chunk.lastNodeMarkScope = -1;
        $chunk.writeHTML(state.mark(ResumeSymbol.BranchStart, flushBranchIds));
        flushBranchIds = branchId + "";
      }
    }

    withBranchId(branchId, () => {
      const prevLoopKey = state.loopKey;
      const prevLoopPath = state.loopPath;
      // Possession sites always include the item key; resumed loops include
      // it only when the live scope serialized one.
      const keyed = siteId !== undefined || (resumeKeys && !sameAsIndex);
      state.loopKey = keyed ? itemKey : undefined;
      if (state.loopKey !== undefined) {
        state.loopPath = [
          ...(prevLoopPath || []),
          encodePossessionSite(siteId || "", state.loopKey),
        ];
      }
      if (siteId !== undefined) {
        state.nextPossessed["!" + state.loopPath!.join("/")] = "1";
      }
      render();
      state.loopKey = prevLoopKey;
      state.loopPath = prevLoopPath;
      const branchScope = writeScope(
        branchId,
        keyed ? { [AccessorProp.LoopKey]: itemKey } : {},
      );
      if (!resumeMarker) {
        loopScopes = push(loopScopes, branchScope);
      }
    });
  });

  if (loopScopes) {
    writeScope(scopeId, {
      [AccessorPrefix.BranchScopes + accessor]: loopScopes,
    });
  }

  writeBranchEnd(
    scopeId,
    accessor,
    serializeStateful,
    serializeMarker,
    parentEndTag,
    singleNode,
    singleNode ? flushBranchIds : flushBranchIds ? " " + flushBranchIds : "",
  );
}

export function _if(
  cb: () => void | number,
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: number,
  serializeMarker?: number,
  serializeStateful?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
  siteId?: string,
  branches?: ((() => void) | 0)[],
) {
  const { state } = $chunk.boundary;
  const resumeBranch = serializeBranch !== 0;
  const resumeMarker =
    serializeMarker !== 0 && (!parentEndTag || serializeStateful !== 0);
  const branchId = _peek_scope_id();
  if (resumeMarker && resumeBranch && !singleNode) {
    $chunk.lastNodeMarkScope = -1;
    $chunk.writeHTML(state.mark(ResumeSymbol.BranchStart, ""));
  }

  // A patch-list branch may be created fresh client-side; its seed data
  // serializes even when fragment delivery narrows the page-wide seed.
  const updateStructural =
    state.patch && !$chunk.fragment && (serializeBranch as number) & 2;
  let branchIndex: number | undefined;
  let takeFragment = false;

  if (branches) {
    // Select before rendering so a token mismatch can redirect into a
    // resumable fragment.
    branchIndex = cb() as number | undefined;
    if (updateStructural) {
      const possessed = state.possessed;
      const siteKey =
        siteId !== undefined
          ? [...(state.loopPath || []), encodePossessionSite(siteId)].join("/")
          : undefined;
      const possessedBranch =
        possessed !== undefined && siteKey !== undefined
          ? possessed[siteKey]
          : undefined;
      takeFragment = possessedBranch !== (branchIndex ?? -1) + "";
    }
  }

  if (siteId !== undefined) {
    const siteKey = [
      ...(state.loopPath || []),
      encodePossessionSite(siteId),
    ].join("/");
    state.nextPossessed[siteKey] = (branchIndex ?? -1) + "";
  }

  if (updateStructural) state.freshBranchDepth++;
  if (branches) {
    const render =
      branchIndex === undefined ? undefined : branches[branchIndex];
    if (render) {
      if (takeFragment) {
        _fragment(scopeId, accessor, () => withBranchId(branchId, render));
      } else if (resumeBranch) {
        withBranchId(branchId, render);
      } else {
        render();
      }
    }
  } else {
    branchIndex = (resumeBranch ? withBranchId(branchId, cb) : cb()) as
      number | undefined;
  }
  if (updateStructural) state.freshBranchDepth--;

  const shouldWriteBranch = resumeBranch && branchIndex !== undefined;

  // Participating patch conditionals write an explicit outcome and branch
  // scope because no HTML end marker is present.
  if (updateStructural) {
    writeScope(scopeId, {
      [AccessorPrefix.ConditionalRenderer + accessor]: branchIndex ?? -1,
      [AccessorPrefix.BranchScopes + accessor]:
        branchIndex === undefined ? undefined : writeScope(branchId, {}),
    });
    writeBranchEnd(scopeId, accessor, serializeStateful, 0, parentEndTag);
    return;
  }

  if (siteId !== undefined) {
    writeScope(scopeId, {
      [AccessorPrefix.ConditionalRenderer + accessor]: branchIndex ?? -1,
      [AccessorPrefix.BranchScopes + accessor]:
        shouldWriteBranch && !resumeMarker
          ? writeScope(branchId, {})
          : undefined,
    });
  } else if (shouldWriteBranch && (branchIndex || !resumeMarker)) {
    writeScope(scopeId, {
      // TODO: Write the renderer only for stateful conditions or direct closures.
      [AccessorPrefix.ConditionalRenderer + accessor]: branchIndex || undefined, // we convert 0 to undefined since the runtime defaults branch to 0.
      [AccessorPrefix.BranchScopes + accessor]: resumeMarker
        ? undefined
        : writeScope(branchId, {}),
    });
  }

  writeBranchEnd(
    scopeId,
    accessor,
    serializeStateful,
    serializeMarker,
    parentEndTag,
    singleNode,
    shouldWriteBranch ? " " + branchId : "",
  );
}

function writeBranchEnd(
  scopeId: number,
  accessor: Accessor,
  serializeStateful: undefined | number,
  serializeMarker: undefined | number,
  parentEndTag: string | undefined | 0,
  singleNode?: 1,
  branchIds?: string,
) {
  const endTag = parentEndTag || "";
  if (serializeMarker !== 0) {
    if (!parentEndTag || serializeStateful !== 0) {
      const { state } = $chunk.boundary;
      const mark = singleNode
        ? state.mark(
            parentEndTag
              ? ResumeSymbol.BranchEndSingleNodeOnlyChildInParent
              : ResumeSymbol.BranchEndSingleNode,
            scopeId + " " + accessor + (branchIds || ""),
          )
        : state.mark(
            parentEndTag
              ? ResumeSymbol.BranchEndOnlyChildInParent
              : ResumeSymbol.BranchEnd,
            scopeId + " " + accessor + (branchIds || ""),
          );
      // See the branch-start reset above: branch-end markers also bracket
      // interleave points.
      $chunk.lastNodeMarkScope = -1;
      $chunk.writeHTML(mark + endTag);
    } else {
      $chunk.writeHTML(endTag + _el_resume(scopeId, accessor));
    }
  } else {
    $chunk.writeHTML(endTag);
  }
}

// ---- Scope serialization ----------------------------------------------

let writeScope = (scopeId: number, partialScope: PartialScope) => {
  const { state } = $chunk.boundary;
  const target = $chunk.serializeState;
  const scope = scopeWithId(state, scopeId);
  const pending = target.writeScopes[scopeId];
  state.needsMainRuntime = true;
  // Fragment entries carry scope ids so dom-less scopes can also be stamped.
  if ($chunk.fragment) {
    (state.fragmentScopeIds ??= new Set()).add(scopeId);
    if (state.loopKey !== undefined) state.fragmentKeyed = true;
  }
  Object.assign(scope, partialScope);

  // Each serialize state only flushes the props it wrote itself; the
  // canonical scope (above) accumulates everything for server side reads.
  if (pending && pending !== partialScope) {
    Object.assign(pending, partialScope);
  } else {
    target.writeScopes[scopeId] = partialScope;
  }
  target.flushScopes = true;

  return scope;
};

// Module-eval reassignment: must stay immediately after the `let writeScope`
// declaration above.
if (MARKO_DEBUG) {
  writeScope = (
    (writeScope) =>
    (
      scopeId: number,
      partialScope: PartialScope,
      file?: string,
      loc?: string | 0,
      vars?: Record<string, string>,
    ) => {
      const scope = writeScope(scopeId, partialScope);
      if (file && loc !== undefined) {
        setDebugInfo(scope, file, loc, vars);
      }
      return scope;
    }
  )(writeScope) as typeof writeScope;
}

export { writeScope as _scope };

// Lets passive props join an existing scope flush without forcing wire data.
export function _existing_scope(scopeId: number) {
  return writeScope(scopeId, {});
}

export function _scope_with_id(scopeId: number) {
  return scopeWithId($chunk.boundary.state, scopeId);
}

function scopeWithId(state: State, scopeId: number) {
  const { scopes } = state;
  let scope = scopes.get(scopeId);
  if (!scope) {
    scopes.set(scopeId, (scope = { [K_SCOPE_ID]: scopeId }));
  }
  return scope;
}

export function _subscribe(
  subscribers: Set<ScopeInternals> | undefined,
  scope: ScopeInternals,
) {
  if (subscribers) {
    const { serializer } = $chunk.boundary.state;
    if (!$chunk.serializeState.readyId && !serializer.written(subscribers)) {
      // An unflushed set carries its subscriber in the same payload.
      subscribers.add(scope);
    } else {
      // Flushed or lazy sets add subscribers through their gated channel.
      serializer.writeCall(scope, subscribers, "add", $chunk.serializeState);
    }
  }
  return scope;
}

// ---- Serialize reasons & patch captures -------------------------------

// A reason is 1, empty, an offset group bitmask, or a keyed dynamic guard.
export type SerializeReasonValue =
  undefined | number | Partial<Record<string, 0 | 1>>;

export function _set_serialize_reason(reason: SerializeReasonValue) {
  $chunk.boundary.state.serializeReason = reason;
}

export function _scope_reason() {
  const reason = $chunk.boundary.state.serializeReason;
  $chunk.boundary.state.serializeReason = undefined;
  return reason;
}

// `$global` is render-wide, so its guard reads persisted mode directly.
export function _persisted_reason() {
  const { state } = $chunk.boundary;
  return state.patch ? 3 : state.persisted ? 2 : 0;
}

// Request values form patch payloads; state values remain client-owned.
export function _patch_reason() {
  return $chunk.boundary.state.patch ? 1 : undefined;
}

export function _state_reason() {
  const { state } = $chunk.boundary;
  // Fresh target structure needs server-only state seeds for its new scopes.
  if (state.patch) {
    if (!state.freshStructure) return undefined;
    // Only fragment and fresh-branch scopes accept fresh structure seeds.
    if (!$chunk.fragment && !state.freshBranchDepth) {
      return undefined;
    }
  }
  return 1;
}

export function _serialize_if(condition: SerializeReasonValue, key: number) {
  // Record entries mask state bit 1; numeric entries are pure group masks.
  return condition &&
    (condition === 1 ||
      (typeof condition === "number"
        ? (condition >>> (key + 1)) & 1
        : condition[key]! & 1))
    ? 1
    : undefined;
}

export function _serialize_guard(condition: SerializeReasonValue, key: number) {
  // Persisted mode adds render-wide bits without erasing threaded group bits.
  return (
    (condition &&
      (condition === 1
        ? 1
        : typeof condition === "number"
          ? (condition >>> (key + 1)) & 1
          : condition[key])) ||
    _persisted_reason()
  );
}

// Patch holes serialize under typed keys consumed by compiled handlers;
// absence means unchanged.
export function _hole_value<T>(
  scopeId: number,
  key: Accessor,
  value: T,
  guard?: number,
): T {
  // Fragment markup already contains its hole values.
  const { state } = $chunk.boundary;
  if (guard && state.patch && !$chunk.fragment) {
    writeScope(scopeId, { [key]: value });
  }
  return value;
}

// ---- Fragment capture -------------------------------------------------

// Captures divergent markup as a fragment entry instead of suppressed patch
// HTML; async content requires a `<try>` placeholder boundary.
export function _fragment<T>(
  scopeId: number,
  accessor: Accessor,
  render: () => T,
): T {
  const start = $chunk;
  const { state } = start.boundary;

  if (state.fragmentTaken) {
    // Additional swaps capture on detached chunks with independent anchors.
    const capture = start.fork(start.boundary, null);
    capture.fragment = true;
    capture.fragmentAnchor = scopeId + "," + JSON.stringify(accessor);
    capture.writeHTML = Chunk.prototype.writeHTML;
    let out: T;
    capture.render(() => {
      out = render();
    });
    if (capture.async || capture.next) {
      // Additional fragments are sync-only; abort before this capture can be
      // queued, or production could ship incomplete markup.
      start.boundary.abort(
        new Error(
          MARKO_DEBUG
            ? "multiple simultaneous fragments with async content are not supported yet"
            : "fragment diverged",
        ),
      );
    } else {
      (state.writeFragments ||= []).push(capture);
    }
    return out!;
  }

  state.fragmentTaken = true;
  state.fragmentAnchor = scopeId + "," + JSON.stringify(accessor);
  start.fragment = true;
  start.writeHTML = Chunk.prototype.writeHTML;
  // The fragment walker never saw the pre-capture marker run.
  start.lastNodeMarkScope = -1;
  try {
    return render();
  } finally {
    // Continue post-hop output in a fresh non-fragment chunk.
    const end = $chunk;
    end.next = $chunk = end.fork(end.boundary, end.next);
    $chunk.fragment = false;
    $chunk.writeHTML = noopWriteHTML;
  }
}

// Entry scope ids exclude scopes already reachable through markers.
function takeFragmentScopeIds(state: State) {
  const ids = state.fragmentScopeIds;
  if (!ids) {
    state.fragmentMarkerScopeIds = "";
    state.fragmentKeyed = false;
    return "";
  }
  state.fragmentScopeIds = null;
  const markerIds = state.fragmentMarkerScopeIds;
  state.fragmentMarkerScopeIds = "";
  const unmarked = state.fragmentKeyed
    ? [...ids].filter((id) => !markerIds.includes("," + id + ","))
    : [...ids];
  state.fragmentKeyed = false;
  return unmarked.length ? ",[" + unmarked.join(",") + "]" : "";
}

function writeFragmentEntry(
  state: State,
  anchor: string,
  html: string,
  scopeIds: string,
) {
  return (
    "[" +
    anchor +
    "," +
    JSON.stringify(state.commentPrefix) +
    "," +
    JSON.stringify(html) +
    scopeIds +
    "]"
  );
}

// ---- Async content & reorder plumbing ---------------------------------

export function writeWaitReady(
  readyId: string,
  renderer: ServerRenderer,
  input: unknown,
) {
  const chunk = $chunk;
  const { boundary } = chunk;
  const body = new Chunk(boundary, null, chunk.context, {
    readyId,
    parent: chunk.serializeState,
    resumes: "",
    writeScopes: {},
    flushScopes: false,
  });
  // Lazy fragment markup captures now; its resume data remains ready-gated.
  if (chunk.fragment) {
    body.fragment = true;
    body.fragmentAsync = chunk.fragmentAsync;
    body.writeHTML = Chunk.prototype.writeHTML;
  }
  const bodyEnd = body.render(renderer, input);

  if (body === bodyEnd) {
    chunk.writeHTML(body.html);
    // Inlined body markers invalidate this chunk's marker run.
    chunk.lastNodeMarkScope = -1;
    body.deferOwnReady();
    chunk.deferredReady = push(chunk.deferredReady, body);
  } else {
    // The remainder of the render continues after the async body in a chunk
    // that restores the parent serialize state.
    bodyEnd.next = $chunk = chunk.fork(boundary, chunk.next);
    chunk.next = body;
  }
}

export function _await<T>(
  scopeId: number,
  accessor: Accessor,
  promise: Promise<T> | T,
  content: (value: T) => void,
  serializeMarker?: number,
) {
  const resumeMarker = serializeMarker !== 0;

  // Patch awaits serialize their parent link because no HTML end marker exists.
  const updateBranch =
    $chunk.boundary.state.patch &&
    !$chunk.fragment &&
    ((render: () => void) => {
      const { state } = $chunk.boundary;
      const branchId = _peek_scope_id();
      // A detached await branch needs its seed data.
      state.freshBranchDepth++;
      withBranchId(branchId, render);
      state.freshBranchDepth--;
      writeScope(scopeId, {
        [AccessorPrefix.BranchScopes + accessor]: writeScope(branchId, {}),
      });
      return true;
    });

  if (!isPromise(promise)) {
    if (updateBranch && updateBranch(() => content(promise))) {
      // handled
    } else if (resumeMarker) {
      const branchId = _peek_scope_id();
      // Branch markers reset the node-marker run register (see `_el_resume`);
      // both brackets reset so a node marker on either side re-emits its id.
      $chunk.lastNodeMarkScope = -1;
      $chunk.writeHTML(
        $chunk.boundary.state.mark(ResumeSymbol.BranchStart, ""),
      );
      content(promise);
      $chunk.lastNodeMarkScope = -1;
      $chunk.writeHTML(
        $chunk.boundary.state.mark(
          ResumeSymbol.BranchEnd,
          scopeId + " " + accessor + " " + branchId,
        ),
      );
    } else {
      content(promise);
    }
    return;
  }

  const chunk = $chunk;
  const { boundary } = chunk;
  // A bare pending await would prevent its fragment entry from assembling.
  if (chunk.fragment && !chunk.fragmentAsync) {
    throw new Error(
      "async content inside a fragment frame requires a placeholder boundary",
    );
  }
  chunk.next = $chunk = chunk.fork(boundary, chunk.next);
  chunk.async = true;
  if (chunk.context?.[kPendingContexts]) {
    chunk.context = { ...chunk.context, [kPendingContexts]: 0 };
  }
  boundary.startAsync();
  promise.then(
    (value) => {
      if (chunk.async) {
        chunk.async = false;

        if (!boundary.signal.aborted) {
          chunk.render(() => {
            const site = chunk.boundarySite;
            if (site && !site.b.async) {
              // The head completion tombstones pending state with its swap.
              if (site.k) {
                writeScope(site.s!, { [site.k]: 0 });
                site.k = "";
              }
              if (site.p) {
                delete boundary.state.nextPossessed[site.p];
                site.p = "";
              }
            }
            if (
              updateBranch &&
              updateBranch(() => withIsAsync(content, value))
            ) {
              // handled -- the body flushes as its own frame in resolution
              // order; the serialized branch link lets the client attach it.
            } else if (resumeMarker) {
              const branchId = _peek_scope_id();
              // Branch markers reset the node-marker run register (see the
              // sync path above).
              $chunk.lastNodeMarkScope = -1;
              $chunk.writeHTML(
                $chunk.boundary.state.mark(ResumeSymbol.BranchStart, ""),
              );
              withIsAsync(content, value);
              $chunk.lastNodeMarkScope = -1;
              $chunk.writeHTML(
                $chunk.boundary.state.mark(
                  ResumeSymbol.BranchEnd,
                  scopeId + " " + accessor + " " + branchId,
                ),
              );
            } else {
              withIsAsync(content, value);
            }
          });
          boundary.endAsync();
        }
      }
    },
    (err) => {
      chunk.async = false;
      boundary.abort(err);
    },
  );
}

// Marks a persisted `<try>` placeholder as pending on its parent scope.
const BOUNDARY_SITE_PREFIX = MARKO_DEBUG ? "BoundarySite:" : "T";

// Tracks pending-boundary state until its body starts shipping.
interface BoundarySite {
  s?: number;
  k?: string;
  p?: string;
  b: Chunk;
}

export function _try(
  scopeId: number,
  accessor: Accessor,
  content: () => void,
  input: {
    placeholder?: { content?(): void };
    catch?: { content?(err: unknown): void };
  },
  siteId?: string,
) {
  const branchId = _peek_scope_id();
  // Branch markers reset the node-marker run register (see `_el_resume`).
  $chunk.lastNodeMarkScope = -1;
  $chunk.writeHTML($chunk.boundary.state.mark(ResumeSymbol.BranchStart, ""));

  const catchContent = input.catch
    ? (normalizeDynamicRenderer(input.catch) as ServerRenderer | undefined) || 0
    : undefined;
  const placeholderContent = normalizeDynamicRenderer(input.placeholder) as
    ServerRenderer | undefined;

  // A token-proven pending boundary needs its body delivered as markup.
  const { state } = $chunk.boundary;
  const possessed = state.possessed;
  const siteKey =
    siteId !== undefined
      ? [...(state.loopPath || []), encodePossessionSite(siteId)].join("/")
      : undefined;
  const pendingPossession =
    possessed !== undefined && siteKey !== undefined
      ? possessed["!" + siteKey]
      : undefined;
  const wasPending =
    state.patch && !$chunk.fragment && pendingPossession === "1";
  if (wasPending) {
    const boundaryBody = () => tryBoundaryBody(content, branchId, siteKey);
    if (catchContent !== undefined) {
      tryCatch(boundaryBody, catchContent || (() => {}));
    } else {
      boundaryBody();
    }
  } else if (catchContent !== undefined) {
    tryCatch(
      placeholderContent
        ? () =>
            tryPlaceholder(
              content,
              placeholderContent,
              branchId,
              scopeId,
              accessor,
              siteId,
            )
        : content,
      catchContent || (() => {}),
    );
  } else if (placeholderContent) {
    tryPlaceholder(
      content,
      placeholderContent,
      branchId,
      scopeId,
      accessor,
      siteId,
    );
  } else {
    content();
  }

  writeScope(branchId, {
    [AccessorProp.BranchAccessor]: accessor,
    [AccessorProp.CatchContent]: catchContent,
    [AccessorProp.PlaceholderContent]: placeholderContent,
  });

  // Patch renders serialize the branch link that documents carry in markers.
  if ($chunk.boundary.state.patch && !$chunk.fragment) {
    writeScope(scopeId, {
      [AccessorPrefix.BranchScopes + accessor]: writeScope(branchId, {}),
    });
  }

  $chunk.lastNodeMarkScope = -1;
  $chunk.writeHTML(
    $chunk.boundary.state.mark(
      ResumeSymbol.BranchEnd,
      scopeId + " " + accessor + " " + branchId,
    ),
  );
}

// Captures a token-matched try body as resumable markup on its reorder channel.
function tryBoundaryBody(
  content: () => void,
  branchId: number,
  siteKey: string | undefined,
) {
  const chunk = $chunk;
  const { boundary } = chunk;
  const root = chunk.fork(boundary, null);
  root.fragment = true;
  root.fragmentAsync = true;
  root.writeHTML = Chunk.prototype.writeHTML;
  root.render(content);
  const body = root.consume();
  if (body.async && siteKey !== undefined) {
    const p = "!" + siteKey;
    boundary.state.nextPossessed[p] = "1";
    body.boundarySite = { b: body, p };
  }
  if (body.async) {
    // Boundary-body entries support one pending segment until they gain
    // internal reorder anchors.
    for (let cur = body.next; cur; cur = cur.next) {
      if (cur.async) {
        boundary.abort(
          new Error(
            MARKO_DEBUG
              ? "multiple pending awaits inside one persisted try are not supported yet"
              : "boundary diverged",
          ),
        );
      }
    }
  }
  body.reorderId = branchId + "";
  // Eager registration carries pending bodies to their resolution flush.
  boundary.state.reorder(body);
}

function tryPlaceholder(
  content: () => void,
  placeholder: () => void,
  branchId: number,
  scopeId: number,
  accessor: Accessor,
  siteId: string | undefined,
) {
  const chunk = $chunk;
  const { boundary } = chunk;
  const body = chunk.fork(boundary, null);
  // Fragment placeholders let awaited bodies ship in later entries.
  body.fragmentAsync = true;

  if (body === body.render(content)) {
    chunk.append(body);
    return;
  }

  chunk.next = $chunk = chunk.fork(boundary, chunk.next);
  chunk.placeholder = { body, render: placeholder, branchId };
  let boundarySite: BoundarySite | undefined;
  if (siteId !== undefined) {
    const p =
      "!" +
      [...(boundary.state.loopPath || []), encodePossessionSite(siteId)].join(
        "/",
      );
    boundary.state.nextPossessed[p] = "1";
    boundarySite = { b: body, p };
  }
  // The browser only needs presence; the server token owns the site identity.
  if (siteId !== undefined && !chunk.fragment && !boundary.state.patch) {
    writeScope(scopeId, {
      [BOUNDARY_SITE_PREFIX + accessor]: "",
    });
    // The body head tombstones this stash in the same drain as its first swap.
    (boundarySite ||= { b: body }).s = scopeId;
    boundarySite.k = BOUNDARY_SITE_PREFIX + accessor;
  }
  if (boundarySite) chunk.placeholder.site = body.boundarySite = boundarySite;
}

function tryCatch(content: () => void, catchContent: (err: unknown) => void) {
  const chunk = $chunk;
  const { boundary } = chunk;
  const { state } = boundary;
  const catchBoundary = new Boundary(state, undefined, boundary);
  const body = chunk.fork(catchBoundary, null);
  const bodyEnd = body.render(content);

  if (catchBoundary.signal.aborted) {
    // Sync error
    catchContent(catchBoundary.signal.reason);
    return;
  }

  if (body === bodyEnd) {
    // Sync success
    chunk.append(body);
    return;
  }

  // The async catch machinery below is reorder-based (placeholder marks,
  // out-of-order swap scripts) -- no patch/fragment story yet.
  if (chunk.fragment) {
    throw new Error(
      "async content inside a fragment frame's <try> requires a placeholder (catch-only boundaries are not supported yet)",
    );
  }

  const reorderId = state.nextReorderId();
  const endMarker = state.mark(Mark.PlaceholderEnd, reorderId);
  const bodyNext = (bodyEnd.next = $chunk = body.fork(boundary, chunk.next));
  chunk.next = body;
  chunk.writeHTML(state.mark(Mark.Placeholder, reorderId));
  bodyEnd.writeHTML(endMarker);
  boundary.startAsync();
  catchBoundary.onNext = () => {
    if (boundary.signal.aborted) return;
    if (catchBoundary.signal.aborted) {
      // Patch responses have no channel for a late async catch branch.
      if (state.patch) {
        boundary.abort(
          new Error(
            MARKO_DEBUG
              ? "an <await> rejected during a persisted update; async catch delivery is reorder-based and not supported in patch responses yet"
              : "boundary diverged",
          ),
        );
        return;
      }
      if (!bodyEnd.consumed) {
        let cur: Chunk = body;
        let writeMarker = true;

        do {
          const next = cur.next!;

          if (cur.boundary !== catchBoundary) {
            cur.boundary.abort(catchBoundary.signal.reason);
          }

          if (writeMarker && !cur.consumed) {
            writeMarker = false;
            cur.async = false;
            cur.next = bodyNext;
            cur.needsWalk = true;
            cur.html = endMarker;
            cur.scripts = cur.effects = cur.lastEffect = "";
            cur.placeholder = cur.reorderId = cur.deferredReady = null;
          }

          cur = next;
        } while (cur !== bodyNext);
      }

      const catchChunk = chunk.fork(boundary, null);
      catchChunk.reorderId = reorderId;
      catchChunk.render(catchContent, catchBoundary.signal.reason);
      state.reorder(catchChunk);
      boundary.endAsync();
    } else if (!catchBoundary.count) {
      boundary.endAsync();
    } else {
      boundary.onNext();
    }
  };
}

// ---- State / Boundary / Chunk & low-level helpers ---------------------

const NOOP = () => {};

enum Mark {
  Placeholder = "!^",
  PlaceholderEnd = "!",
  ReorderMarker = "#",
}

enum RuntimeKey {
  Walk = ".w",
  Resume = ".r",
  Ready = ".b",
  Scripts = ".j",
}

export class State implements SerializeState {
  public tagId = 1;
  public scopeId = 1;
  public reorderId = 1;
  public readyGate = 1;
  public hasGlobals = false;
  public needsMainRuntime = false;
  public hasMainRuntime = false;
  public hasReadyRuntime = false;
  public hasReorderRuntime = false;
  public hasWrittenResume = false;
  public walkOnNextFlush = false;
  public trailerHTML = "";
  public resumes = "";
  public nonceAttr = "";
  public serializer = new Serializer();
  public writeReorders: Chunk[] | null = null;
  public scopes = new Map<number, ScopeInternals>();
  public flushScopes = false;
  public writeScopes: Record<number, PartialScope> = {};
  public readyIds: Set<string> | null = null;
  public serializeReason: SerializeReasonValue;
  // The patch facts (`PersistedPatch`) when this is a patch render; truthy
  // reads gate every patch-mode divergence from document rendering.
  public patch?: PersistedPatch;
  // Cross-route patches seed and capture fresh target structure.
  public freshStructure = false;
  public fragmentTaken = false;
  public fragmentAnchor = "";
  public writeFragments: Chunk[] | null = null;
  // Decoded source-route facts from the opaque client token.
  public possessed?: PersistedPossession;
  public nextPossessed: PersistedPossession = {};
  public writtenHave = "";
  public sentHave = false;
  // Disambiguates one compiled site across keyed loop iterations.
  public loopKey: unknown;
  public loopPath?: string[];
  /** Unmarked scope ids captured for the next fragment entry. */
  public fragmentScopeIds: Set<number> | null = null;
  // Node-marker scopes are already stamped by the fragment walker; keyed
  // captures only carry the remaining dom-less scope ids.
  public fragmentMarkerScopeIds = "";
  public fragmentKeyed = false;
  /** Depth of patch branches whose scopes are freshly constructed. */
  public freshBranchDepth = 0;
  constructor(
    public $global: $Global & { renderId: string; runtimeId: string },
    // Persisted request facts survive Boundary resets. Absent means ordinary
    // rendering.
    public persisted?: PersistedRender,
  ) {
    if ($global.cspNonce) {
      this.nonceAttr = " nonce" + attrAssignment($global.cspNonce);
    }
    if (persisted) {
      // Persisted mode is render-wide; threaded reasons remain state groups.
      const patch = (this.patch = persisted.patch);
      this.freshStructure = !!patch && patch.fromRoute !== patch.targetRoute;
      this.possessed = patch?.have
        ? decodePersistedPossession(patch.have, patch.source)
        : undefined;
      // Patch responses carry no document: no walker bootstrap to emit.
      this.hasMainRuntime = !!patch;
    }
  }

  get runtimePrefix() {
    const { $global } = this;
    return $global.runtimeId + "." + $global.renderId;
  }

  get commentPrefix() {
    const { $global } = this;
    return $global.runtimeId + $global.renderId;
  }

  takeHave() {
    return (
      encodePersistedPossession(
        this.nextPossessed,
        this.persisted!.descriptor,
      ) || "PA"
    );
  }

  takeHaveMetadata() {
    const have = this.takeHave();
    if (this.sentHave && have === this.writtenHave) return "";
    let metadata = "~=" + have;
    if (this.sentHave) {
      let prefix = 0;
      while (
        prefix < have.length &&
        have[prefix] === this.writtenHave[prefix]
      ) {
        prefix++;
      }
      const delta = "~+" + prefix.toString(36) + "." + have.slice(prefix);
      if (delta.length < metadata.length) metadata = delta;
    }
    this.sentHave = true;
    this.writtenHave = have;
    return metadata;
  }

  reorder(chunk: Chunk) {
    if (this.writeReorders) {
      this.writeReorders.push(chunk);
    } else {
      this.needsMainRuntime = true;
      this.writeReorders = [chunk];
    }
  }

  writeReady(id: string, resumes: string) {
    if (this.patch) {
      // Patch ready batches ride keyed entries parked until modules load.
      return "[" + quote(id, 0) + "," + resumes + "]";
    }
    const readyKey = toObjectKey(id);
    if (this.readyIds?.has(id)) {
      return this.readyAccess(readyKey) + ".push(" + resumes + ")";
    }

    (this.readyIds ||= new Set()).add(id);
    if (this.hasReadyRuntime) {
      return this.readyAccess(readyKey) + "=[" + resumes + "]";
    }

    this.hasReadyRuntime = true;
    return (
      this.runtimePrefix +
      RuntimeKey.Ready +
      "={" +
      readyKey +
      ":[" +
      resumes +
      "]}"
    );
  }

  readyAccess(readyKey: string) {
    return this.runtimePrefix + RuntimeKey.Ready + toAccess(readyKey);
  }

  nextReorderId() {
    const c =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";
    let n = this.reorderId++;
    let r = c[n % 54]; // Avoids chars that cannot start a property name.
    for (n = (n / 54) | 0; n; n >>>= 6) {
      r += c[n & 63];
    }

    return r;
  }

  mark(code: ResumeSymbol | Mark, str: string) {
    return "<!--" + this.commentPrefix + code + str + "-->";
  }
}

export enum FlushStatus {
  complete,
  continue,
  aborted,
}

export class Boundary extends AbortController {
  public onNext = NOOP;
  public count = 0;
  constructor(
    public state: State,
    signal?: AbortSignal,
    public parent?: Boundary,
  ) {
    super();
    this.signal.addEventListener("abort", () => {
      this.count = 0;
      // Reset render progress for the retry but preserve the render mode.
      this.state = new State(this.state.$global, this.state.persisted);
      this.onNext();
    });

    if (signal) {
      if (signal.aborted) {
        this.abort(signal.reason);
      } else {
        signal.addEventListener("abort", () => {
          this.abort(signal.reason);
        });
      }
    }
  }

  flush() {
    if (!this.signal.aborted) {
      flushSerializer(this, this.state);
    }

    return this.count
      ? FlushStatus.continue
      : this.signal.aborted
        ? FlushStatus.aborted
        : FlushStatus.complete;
  }

  startAsync() {
    if (!this.signal.aborted) {
      this.count++;
    }
  }

  endAsync() {
    if (!this.signal.aborted && this.count) {
      this.count--;
      this.onNext();
    }
  }
}

export class Chunk {
  public html = "";
  public scripts = "";
  public effects = "";
  public lastEffect = "";
  /** Node-marker run register (see `_el_resume`); -1 = no marker yet. */
  public lastNodeMarkScope = -1;
  public async = false;
  public consumed = false;
  public needsWalk = false;
  /** Fragment markup capture, inherited by forks. */
  public fragment = false;
  /** Detached fragment entry anchor; empty on the main chain. */
  public fragmentAnchor = "";
  /** Whether awaits can flush behind a fragment placeholder. */
  public fragmentAsync = false;
  /** Tracks the pending-boundary marker until its body starts shipping. */
  public boundarySite: BoundarySite | null = null;
  public reorderId: string | null = null;
  public deferredReady: Opt<Chunk> = null;
  public placeholder: {
    body: Chunk;
    render: () => void;
    branchId: number;
    site?: BoundarySite;
  } | null = null;
  constructor(
    public boundary: Boundary,
    public next: Chunk | null,
    public context: Record<string | symbol, unknown> | null,
    public serializeState: SerializeState,
  ) {
    // Patch writes suppress document HTML unless fragment capture restores it.
    if (boundary.state.patch) this.writeHTML = noopWriteHTML;
  }

  fork(boundary: Boundary, next: Chunk | null) {
    const chunk = new Chunk(boundary, next, this.context, this.serializeState);
    chunk.boundarySite = this.boundarySite;
    if (this.fragment) {
      chunk.fragment = true;
      chunk.fragmentAsync = this.fragmentAsync;
      chunk.writeHTML = Chunk.prototype.writeHTML;
    }
    return chunk;
  }

  writeHTML(html: string) {
    this.html += html;
  }

  writeEffect(scopeId: number, registryId: string) {
    if (this.lastEffect === registryId) {
      this.effects += " " + scopeId;
    } else {
      this.lastEffect = registryId;
      this.effects = concatEffects(this.effects, registryId + " " + scopeId);
    }
  }

  writeScript(script: string) {
    this.scripts = concatScripts(this.scripts, script);
  }

  append(chunk: Chunk) {
    this.html += chunk.html;
    this.effects = concatEffects(this.effects, chunk.effects);
    this.scripts = concatScripts(this.scripts, chunk.scripts);
    this.lastEffect = chunk.lastEffect || this.lastEffect;
    this.deferredReady = concat(this.deferredReady, chunk.takeDeferredReady());
  }

  takeDeferredReady() {
    const { deferredReady } = this;
    this.deferredReady = null;
    return deferredReady;
  }

  deferOwnReady() {
    if (
      this.serializeState.readyId &&
      (this.effects || this.scripts || this.serializeState.flushScopes)
    ) {
      // Own resume data precedes nested lazy content that may reference it.
      const deferred = this.fork(this.boundary, null);
      deferred.effects = this.effects;
      deferred.scripts = this.scripts;
      this.effects = this.scripts = this.lastEffect = "";
      this.deferredReady = concat<Chunk>(deferred, this.deferredReady);
    }
  }
  flushPlaceholder() {
    const { placeholder } = this;
    if (placeholder) {
      const body = placeholder.body.consume();

      if (body.async && !this.boundary.state.patch) {
        const { state } = this.boundary;
        const reorderId = (body.reorderId = placeholder.branchId
          ? placeholder.branchId + ""
          : state.nextReorderId());
        this.writeHTML(state.mark(Mark.Placeholder, reorderId));
        const after = this.render(placeholder.render);
        if (after !== this) {
          // TODO: eventually this should be allowed.
          // Once it's allowed we'll need check if placeholder needs to be disposed once body complete.
          this.boundary.abort(
            new Error("An @placeholder cannot contain async content."),
          );
        }
        after.writeHTML(state.mark(Mark.PlaceholderEnd, reorderId));
        state.reorder(body);
      } else if (body.async && this.fragment) {
        // Fragment placeholders ship now; their detached bodies queue by try
        // branch id.
        const { state } = this.boundary;
        // Boundary bodies support one pending await without internal anchors.
        for (let cur = body.next; cur; cur = cur.next) {
          if (cur.async) {
            this.boundary.abort(
              new Error(
                "multiple pending awaits inside one fragment placeholder boundary are not supported yet",
              ),
            );
          }
        }
        const placeholderBranchId = state.scopeId++;
        // Branch markers reset the node-marker run register (see `_el_resume`);
        // this is a chunk method, so the register is on `this`.
        this.lastNodeMarkScope = -1;
        this.writeHTML(state.mark(ResumeSymbol.BranchStart, ""));
        const after = this.render(placeholder.render);
        if (after !== this) {
          this.boundary.abort(
            new Error("An @placeholder cannot contain async content."),
          );
        }
        this.lastNodeMarkScope = -1;
        this.writeHTML(
          state.mark(
            ResumeSymbol.BranchEnd,
            placeholder.branchId + " ! " + placeholderBranchId,
          ),
        );
        body.reorderId = placeholder.branchId + "";
        // Registered eagerly: reordered chunks queue up front and
        // `flushScript` carries the still-pending ones until they settle.
        state.reorder(body);
      } else {
        // An inline body with a live stash was pending only on a nested boundary.
        const { site } = placeholder;
        if (site && site.k) {
          // (`writeScope` reads `$chunk`; `render` establishes it, exactly
          // as the shipping branch does for the placeholder's own render.)
          this.render(() => {
            writeScope(site.s!, { [site.k!]: 0 });
          });
          site.k = "";
        }
        if (site?.p) {
          delete this.boundary.state.nextPossessed[site.p];
          site.p = "";
        }
        body.next = this.next;
        this.next = body;
      }

      this.placeholder = null;
    }
  }

  consume() {
    let cur: Chunk = this;
    let html = "";
    let effects = "";
    let scripts = "";
    let lastEffect = "";
    let needsWalk = false;
    let deferredReady: Opt<Chunk>;

    while (cur.next && !cur.async) {
      cur.flushPlaceholder();
      needsWalk ||= cur.needsWalk;
      html += cur.html;
      if (cur.serializeState.readyId) {
        deferredReady = push(deferredReady, cur);
      } else {
        effects = concatEffects(effects, cur.effects);
        scripts = concatScripts(scripts, cur.scripts);
        lastEffect = cur.lastEffect || lastEffect;
      }
      deferredReady = concat(deferredReady, cur.takeDeferredReady());
      cur.consumed = true;
      cur = cur.next;
    }

    cur.deferOwnReady();
    cur.deferredReady = concat(deferredReady, cur.deferredReady);
    cur.needsWalk ||= needsWalk;
    cur.html = html + cur.html;
    cur.effects = concatEffects(effects, cur.effects);
    cur.scripts = concatScripts(scripts, cur.scripts);
    cur.lastEffect ||= lastEffect;
    return cur;
  }

  render(content: () => void): Chunk;
  render<T>(content: (val: T) => void, val: T): Chunk;
  render<T>(content: (val?: T) => void, val?: T): Chunk {
    const prev = $chunk;
    $chunk = this;
    try {
      content(val);
      return $chunk;
    } catch (err) {
      this.boundary.abort(err);
      return this;
    } finally {
      $chunk = prev;
    }
  }

  flushReadyScripts(reservations?: string[]) {
    const { boundary, serializeState } = this;
    const { readyId } = serializeState;
    // Patch ready entries join the frame that carries their markup.
    const concat = boundary.state.patch ? concatSequence : concatScripts;
    let scripts = "";
    forEach(this.takeDeferredReady(), (chunk) => {
      scripts = concat(scripts, chunk.flushReadyScripts(reservations));
    });

    if (readyId && !this.async) {
      const { state } = boundary;
      flushSerializer(boundary, serializeState);
      const deps = state.serializer.takeChannelDeps();
      const { effects } = this;
      const { resumes } = serializeState;
      const chunkScripts = this.scripts;
      serializeState.resumes = "";
      this.effects = this.scripts = "";
      this.lastEffect = "";
      if (resumes || effects) {
        state.needsMainRuntime = true;
        const batch = concatSequence(
          depsMarker(deps),
          concatSequence(resumes, effects && `"${effects}"`),
        );
        if (reservations) {
          // Main-stream gates reserve ready-batch order until reorders arrive.
          const gate = state.readyGate++;
          reservations.push(state.writeReady(readyId, gate + ""));
          scripts = concatScripts(
            scripts,
            "(b=>b.splice(b.indexOf(" +
              gate +
              "),1," +
              batch +
              "))(" +
              state.readyAccess(toObjectKey(readyId)) +
              ")",
          );
        } else {
          scripts = concat(scripts, state.writeReady(readyId, batch));
        }
      }
      scripts = concat(scripts, chunkScripts);
    }

    return scripts;
  }

  flushScript() {
    const { boundary } = this;
    const { state } = boundary;
    const { $global, runtimePrefix } = state;
    let needsWalk = state.walkOnNextFlush;
    if (needsWalk) state.walkOnNextFlush = false;

    // Patch flushes produce bare frames with ready entries folded in.
    const concat = state.patch ? concatFrames : concatScripts;
    const concatReady = state.patch ? concatSequence : concatScripts;
    let readyResumeScripts = this.flushReadyScripts();
    for (let channel; (channel = state.serializer.pendingReadyChannel());) {
      const resumes = state.serializer.stringifyScopes([], boundary, channel);
      const deps = state.serializer.takeChannelDeps();
      state.needsMainRuntime = true;
      readyResumeScripts = concatReady(
        readyResumeScripts,
        state.writeReady(
          channel.readyId!,
          concatSequence(depsMarker(deps), resumes),
        ),
      );
    }

    if (readyResumeScripts) {
      needsWalk = true;
    }

    // Document effects wait for blocked markup; patch effects ride atomic
    // frames.
    const holdEffects = this.async && !state.patch;
    const effects = holdEffects ? "" : this.effects;
    let { html, scripts } = this;

    if (state.patch && html) {
      // Patch HTML is captured fragment markup and becomes a frame entry.
      state.resumes = concatSequence(
        state.resumes,
        writeFragmentEntry(
          state,
          state.fragmentAnchor,
          html,
          takeFragmentScopeIds(state),
        ),
      );
      state.fragmentAnchor = "";
      html = "";
    }

    if (state.needsMainRuntime && !state.hasMainRuntime) {
      state.hasMainRuntime = true;
      scripts = concatScripts(
        scripts,
        (state.persisted
          ? PERSISTED_WALKER_RUNTIME_CODE
          : WALKER_RUNTIME_CODE) +
          '("' +
          $global.runtimeId +
          '")("' +
          $global.renderId +
          '")',
      );
    }

    // Patch mode holds ready entries until every entry type has landed in
    // `state.resumes` (below), so they ride this flush's frame.
    if (!state.patch) {
      scripts = concatScripts(scripts, readyResumeScripts);
      readyResumeScripts = "";
    }

    if (effects) {
      needsWalk = true;
      state.resumes = state.resumes
        ? state.resumes + ',"' + effects + '"'
        : '"' + effects + '"';
    }

    // Completed fragment boundary bodies become entries on this frame.
    if (state.patch && state.writeReorders) {
      let carried: Chunk[] | null = null;
      for (const bodyChunk of state.writeReorders) {
        if (bodyChunk.async) {
          // Carry pending bodies to their resolution flush; drop aborted ones.
          let aborted: Boundary | undefined = bodyChunk.boundary;
          while (aborted && !aborted.signal.aborted) {
            aborted = aborted.parent;
          }
          if (!aborted) {
            (carried ||= []).push(bodyChunk);
          }
          continue;
        }
        const branchId = bodyChunk.reorderId!;
        let bodyHTML = "";
        let bodyEffects = "";
        let cur: Chunk | null = bodyChunk;
        bodyChunk.reorderId = null;
        while (cur) {
          cur.flushPlaceholder();
          cur.consumed = true;
          bodyHTML += cur.html;
          bodyEffects = concatEffects(bodyEffects, cur.effects);
          // A lazy child in the body parked its resume batch on this
          // chunk's deferred-ready list; its keyed entry rides this frame.
          readyResumeScripts = concatReady(
            readyResumeScripts,
            cur.flushReadyScripts(),
          );
          cur.html = cur.effects = cur.lastEffect = "";
          cur = cur.next;
        }
        state.resumes = concatSequence(
          state.resumes,
          writeFragmentEntry(
            state,
            branchId + ",0",
            bodyHTML,
            takeFragmentScopeIds(state),
          ),
        );
        if (bodyEffects) {
          state.resumes = state.resumes + ',"' + bodyEffects + '"';
        }
      }
      state.writeReorders = carried;
    }

    // Detached swaps emit independent entries keyed by their anchors.
    if (state.patch && state.writeFragments) {
      for (const capture of state.writeFragments) {
        let fragHTML = "";
        let fragEffects = "";
        let cur: Chunk | null = capture;
        while (cur) {
          cur.flushPlaceholder();
          cur.consumed = true;
          fragHTML += cur.html;
          fragEffects = concatEffects(fragEffects, cur.effects);
          // Lazy-child resume batches captured on this detached chain ride
          // this frame as keyed entries, like the main capture's.
          readyResumeScripts = concatReady(
            readyResumeScripts,
            cur.flushReadyScripts(),
          );
          cur.html = cur.effects = cur.lastEffect = "";
          cur = cur.next;
        }
        state.resumes = concatSequence(
          state.resumes,
          writeFragmentEntry(
            state,
            capture.fragmentAnchor,
            fragHTML,
            takeFragmentScopeIds(state),
          ),
        );
        if (fragEffects) {
          state.resumes = state.resumes + ',"' + fragEffects + '"';
        }
      }
      state.writeFragments = null;
    }

    // Lazy batches follow the markup that binds their scopes in the same frame.
    if (state.patch && readyResumeScripts) {
      state.resumes = concatSequence(state.resumes, readyResumeScripts);
    }

    if (state.patch) {
      const metadata = state.takeHaveMetadata();
      if (metadata) {
        state.resumes = concatSequence(state.resumes, quote(metadata, 0));
      }
    }

    if (state.resumes) {
      if (state.patch) {
        // Patch resumes emit as one bare frame per flush.
        scripts = concat(scripts, "[" + state.resumes + "]");
      } else if (state.hasWrittenResume) {
        scripts = concatScripts(
          scripts,
          runtimePrefix + RuntimeKey.Resume + ".push(" + state.resumes + ")",
        );
      } else {
        state.hasWrittenResume = true;
        scripts = concatScripts(
          scripts,
          runtimePrefix + RuntimeKey.Resume + "=[" + state.resumes + "]",
        );
      }
    }

    if (!state.patch && state.writeReorders) {
      let carried: Chunk[] | null = null;

      for (const reorderedChunk of state.writeReorders) {
        // A chunk requeued when its reorder marker streamed delivers once
        // settled, or as an empty reorder once an aborted boundary strands it.
        if (reorderedChunk.async && reorderedChunk.consumed) {
          let aborted: Boundary | undefined = reorderedChunk.boundary;
          while (aborted && !aborted.signal.aborted) {
            aborted = aborted.parent;
          }

          if (!aborted) {
            (carried ||= []).push(reorderedChunk);
            continue;
          }

          reorderedChunk.async = false;
        }

        needsWalk = true;

        if (!state.hasReorderRuntime) {
          state.hasReorderRuntime = true;
          scripts = concatScripts(
            scripts,
            (state.persisted
              ? PERSISTED_REORDER_RUNTIME_CODE
              : REORDER_RUNTIME_CODE) +
              "(" +
              runtimePrefix +
              ")",
          );
        }

        const { reorderId } = reorderedChunk;
        const readyReservations: string[] = [];
        let reorderHTML = "";
        let reorderEffects = "";
        let reorderScripts = "";
        let cur = reorderedChunk;
        reorderedChunk.reorderId = null;

        for (;;) {
          cur.flushPlaceholder();
          cur.deferOwnReady();
          const { next } = cur;
          // Reorder-ready batches fill slots reserved by the main stream.
          const readyResumeScripts = cur.flushReadyScripts(readyReservations);
          cur.consumed = true;
          reorderHTML += cur.html;
          reorderEffects = concatEffects(reorderEffects, cur.effects);
          reorderScripts = concatScripts(
            reorderScripts,
            concatScripts(readyResumeScripts, cur.scripts),
          );

          if (cur.async) {
            reorderHTML += state.mark(
              Mark.ReorderMarker,
              (cur.reorderId = state.nextReorderId()),
            );
            state.reorder(cur);
            cur.html = cur.effects = cur.scripts = cur.lastEffect = "";
            cur.next = null;
          }

          if (next) {
            cur = next;
          } else {
            break;
          }
        }

        if (reorderEffects) {
          if (!state.hasWrittenResume) {
            state.hasWrittenResume = true;
            scripts = concatScripts(
              scripts,
              runtimePrefix + RuntimeKey.Resume + "=[]",
            );
          }

          reorderScripts = concatScripts(
            reorderScripts,
            '_.push("' + reorderEffects + '")',
          );
        }

        for (const reservation of readyReservations) {
          scripts = concatScripts(scripts, reservation);
        }

        scripts = concatScripts(
          scripts,
          reorderScripts &&
            runtimePrefix +
              RuntimeKey.Scripts +
              toAccess(reorderId!) +
              "=_=>{" +
              reorderScripts +
              "}",
        );

        html +=
          "<t hidden " +
          state.commentPrefix +
          "=" +
          reorderId +
          ">" +
          reorderHTML +
          "</t>";
      }

      state.writeReorders = carried;
    }

    if (state.persisted && !state.patch) {
      const have = state.takeHave();
      if (have !== state.writtenHave) {
        state.writtenHave = have;
        scripts = concatScripts(
          scripts,
          runtimePrefix + HAVE_RUNTIME_KEY + "=" + quote(have, 0),
        );
      }
    }

    if (needsWalk && !state.patch) {
      scripts = concatScripts(scripts, runtimePrefix + RuntimeKey.Walk + "()");
    }

    this.html = html;
    this.scripts = scripts;
    if (!holdEffects) this.effects = this.lastEffect = "";
    state.resumes = "";
    return this;
  }

  flushHTML() {
    const { boundary } = this;
    const { state } = boundary;
    if (this.needsWalk) {
      this.needsWalk = false;
      state.walkOnNextFlush = true;
    }

    this.flushScript();
    const { scripts } = this;

    if (state.patch) {
      // Patch responses: raw frames, one per line -- no script wrapper,
      // no asset flush, no trailer.
      this.html = this.scripts = "";
      return scripts ? scripts + "\n" : "";
    }

    const { $global, nonceAttr } = state;
    const { __flush__ } = $global;
    let { html } = this;
    this.html = this.scripts = "";

    if (scripts) {
      html += "<script" + nonceAttr + ">" + scripts + "</script>";
    }

    if (__flush__) {
      $global.__flush__ = undefined;
      html = __flush__($global, html);
    }

    if (!boundary.count) {
      html += state.trailerHTML;
    }

    return html;
  }
}

function noopWriteHTML() {}

function flushSerializer(boundary: Boundary, serializeState: SerializeState) {
  const { state } = boundary;
  const { serializer } = state;
  const pending = serializer.pending(serializeState);
  if (serializeState.flushScopes || pending) {
    const { writeScopes, passiveScopes } = serializeState;
    const isBlockingState = serializeState !== state;
    const flushes: ScopeFlush[] = [];

    if (passiveScopes) {
      // Passive props ride along with scopes this state is flushing anyway.
      for (const key in passiveScopes) {
        const props = writeScopes[key as unknown as number];
        if (props) {
          writeScopes[key as unknown as number] = Object.assign(
            passiveScopes[key as unknown as number],
            props,
          );
          delete passiveScopes[key as unknown as number];
        }
      }
    }

    if (!isBlockingState && !state.hasGlobals) {
      state.hasGlobals = true;
      const globals = getFilteredGlobals(state.$global);
      // Globals become scope 0 so we can reference them as `_(0)`.
      if (globals) flushes.push([0, globals, globals]);
    }

    for (const key in writeScopes) {
      const scopeId = +key;
      const props = writeScopes[scopeId];
      // Only props written by this state are transmitted; scopes that were
      // merely referenced are resolved by id wherever they are used.
      if (Object.getOwnPropertyNames(props).length) {
        flushes.push([scopeId, state.scopes.get(scopeId)!, props]);
      }
    }

    if (flushes.length || pending) {
      if (isBlockingState && !state.hasGlobals) {
        // Globals serialize before ready data that may reference them.
        flushSerializerGlobals(boundary);
      }
      serializeState.resumes = concatSequence(
        serializeState.resumes,
        serializer.stringifyScopes(flushes, boundary, serializeState),
      );
    }
    serializeState.writeScopes = {};
    serializeState.flushScopes = false;
    if (pending) {
      state.walkOnNextFlush = true;
    }
  }
}

function flushSerializerGlobals(boundary: Boundary) {
  const { state } = boundary;
  const globals = getFilteredGlobals(state.$global);
  if (globals) {
    state.hasGlobals = true;
    state.needsMainRuntime = true;
    state.resumes = concatSequence(
      state.resumes,
      state.serializer.stringifyScopes([[0, globals, globals]], boundary),
    );
  }
}

function depsMarker(deps: Set<string> | null) {
  let marker = "";
  if (deps) {
    for (const dep of deps) {
      marker += (marker ? "," : "[") + quote(dep, 0);
    }
    marker += "]";
  }
  return marker;
}

function getFilteredGlobals($global: Record<string, unknown>) {
  if (!$global) return 0;

  const serializedGlobals = $global.serializedGlobals as
    string[] | Record<string, boolean> | undefined;

  if (!serializedGlobals) return 0;

  let filtered: 0 | Record<string, unknown> = 0;

  if (Array.isArray(serializedGlobals)) {
    for (const key of serializedGlobals) {
      const value = $global[key];
      if (value !== undefined) {
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
        if (value !== undefined) {
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

function concatEffects(a: string, b: string) {
  return a ? (b ? a + " " + b : a) : b;
}

function concatSequence(a: string, b: string) {
  return a ? (b ? a + "," + b : a) : b;
}

function concatScripts(a: string, b: string) {
  return a ? (b ? a + ";" + b : a) : b;
}

// Patch responses are newline-delimited bare `[...]` frames: the router
// parses one frame per line, so pieces join with a newline instead of `;`.
function concatFrames(a: string, b: string) {
  return a ? (b ? a + "\n" + b : a) : b;
}

type QueueCallback = (ticked: true) => void;
const tick =
  globalThis.setImmediate ||
  globalThis.setTimeout ||
  globalThis.queueMicrotask ||
  ((cb: () => void) => Promise.resolve().then(cb));
let tickQueue: Set<QueueCallback> | undefined;

export function queueTick(cb: QueueCallback) {
  if (tickQueue) {
    tickQueue.add(cb);
  } else {
    tickQueue = new Set([cb]);
    tick(flushTickQueue);
  }
}

export function offTick(cb: QueueCallback) {
  tickQueue?.delete(cb);
}

function flushTickQueue() {
  const queue = tickQueue!;
  tickQueue = undefined;

  for (const cb of queue) {
    cb(true);
  }
}
