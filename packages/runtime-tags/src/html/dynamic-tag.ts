import { assertValidTagName } from "../common/errors";
import { normalizeDynamicRenderer } from "../common/helpers";
import { DYNAMIC_TAG_SCRIPT_REGISTER_ID } from "../common/meta";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  RendererProp,
  ResumeSymbol,
} from "../common/types";
import { _attr_select_value, _attr_textarea_value, _attrs } from "./attrs";
import type { ServerRenderer } from "./template";
import {
  _el_resume,
  _fragment,
  _html,
  _peek_scope_id,
  _reset_node_mark_run,
  _resume,
  _scope,
  _scope_id,
  _script,
  _set_serialize_reason,
  getChunk,
  getScopeById,
  getState,
  withBranchId,
} from "./writer";

// Build-stable per-site id the possession echo keys by, stashed on the hop's
// scope under this reserved prefix (`"Z"`, not an AccessorPrefix member so it
// stays out of every client bundle) for the client to read back -- see
// `_have`. Persisted resume only.
const HOP_SITE_PREFIX = MARKO_DEBUG ? "HopSite:" : "Z";

const voidElementsReg =
  /* cspell:disable-next-line */
  /^(?:area|b(?:ase|r)|col|embed|hr|i(?:mg|nput)|link|meta|param|source|track|wbr)$/;
interface BodyContentObject {
  [x: PropertyKey]: unknown;
  content: ServerRenderer;
}

// TODO: refactor dynamicTagInput and dynamicTagArgs to be the same impl with a flag for input vs args.

export let _dynamic_tag = (
  scopeId: number,
  accessor: Accessor,
  tag: unknown | string | ServerRenderer | BodyContentObject,
  inputOrArgs: unknown,
  content?: (() => void) | 0,
  inputIsArgs?: 1,
  serializeReason?: 1 | 0,
  siteId?: string,
) => {
  const shouldResume = serializeReason !== 0;
  const renderer = normalizeDynamicRenderer<ServerRenderer>(tag);
  const state = getState()!;
  const branchId = _peek_scope_id();
  let rendered: boolean;
  let result: unknown;

  // A hop delivers its fresh branch as resumable HTML (a fragment the client
  // inserts and resumes) instead of a client-constructed subtree; everything
  // above the hop stays a matched-scope patch. Two triggers:
  //  - `state.fragments`: cross-route swap, the whole diverging subtree
  //    captured once at the first hop.
  //  - a possession miss: the client echoed (`x-marko-have`) which renderer
  //    it holds at this site (keyed by build-stable `siteId`, not the
  //    drifting scope id) and this render differs -- a same-route swap.
  //    Fragment-first dropped the construction graph, so the fragment is
  //    what lets the swap apply instead of a full navigation.
  // Native-tag targets behave identically: a hop to or between plain tag
  // names has nothing to client-construct, and the echo carries the tag-name
  // renderer value.
  const targetRendererId =
    (renderer as ServerRenderer | undefined)?.[RendererProp.Id] || renderer;
  const possessed = state.possessed;
  // Repeated hops (a `<${...}/>` in a keyed `<for>`) share one site id, so
  // disambiguate by the enclosing loop key -- the value the client reads off
  // the iteration's `LoopKey` (see `_have`). Positional loops expose no key:
  // iterations collide on the bare site id (`_have` keeps only the last
  // iteration's renderer per site), so this check can fire for the wrong row.
  // Safe only downstream: `_update_dynamic`'s `live[rendererKey] !==
  // rendererId` guard (dom/update) rejects a misfired fragment, and a missed
  // change throws "update diverged" into the full-navigation fallback rather
  // than merging against a stale branch.
  const siteKey =
    siteId !== undefined && state.loopKey !== undefined
      ? siteId + " " + state.loopKey
      : siteId;
  // `siteId` (and so `siteKey`) is compiled only in `persisted: "fragments"`
  // builds: a plain `persisted: true` build keeps its registered renderers
  // and replays same-route swaps through `_update_dynamic`, so its hops carry
  // no site id and a miss can never force a fragment (fragment and replay
  // paths disagree about who wires shared tag variables -- see
  // agent-feedback/bugs.md).
  const possessionKnown =
    possessed !== undefined && siteKey !== undefined && siteKey in possessed;
  const possessionMiss =
    possessionKnown && possessed![siteKey!] !== targetRendererId;
  // Cross-route capture (`state.fragments`) fires at the first hop the client
  // does not provably possess with the same renderer; nested hops render
  // inline into it. A hop the echo proves MATCHED (a shared layout hop, eg a
  // `<context>` provider wrapping the page) stays a matched-scope patch and
  // the walk descends to the true divergence -- capturing at a matched hop
  // would ship a fragment the applier's `live[rendererKey] !== rendererId`
  // guard rejects (already-equal), stranding the real change ("update
  // diverged", full-navigation fallback). With no echo at all every hop is
  // unproven and the first captures. A possession miss is the same-route
  // form: each diverging site takes its own fragment (`_fragment` routes the
  // first onto the main chain, the rest onto detached chunks).
  //
  // A possession miss while a fragment is already capturing (`$chunk.
  // fragment`) is a hop nested inside a fresh subtree (eg a cross-route
  // fragment containing a shared component the client possesses, stale, from
  // another route). Nothing above it is a matched patch to apply against, so
  // the hop renders inline into the enclosing capture, not its own detached
  // fragment: a detached capture would write empty branch brackets into the
  // enclosing fragment (brackets on the enclosing chunk, body on the detached
  // one) and could never apply (shared patch/live scopes make the guard
  // already-equal, always rejecting).
  const takeFragment =
    !getChunk()!.fragment &&
    (possessionMiss ||
      (state.fragments && !state.fragmentTaken && !possessionKnown));

  if (typeof renderer === "string") {
    if (MARKO_DEBUG) {
      assertValidTagName(renderer);
    }

    const input = ((inputIsArgs
      ? (inputOrArgs as unknown[])[0]
      : inputOrArgs) || {}) as Record<string, unknown>;
    rendered = true;
    const renderNative = (inFragment?: 1) => {
      _scope_id();
      _html(
        `<${renderer}${_attrs(input, MARKO_DEBUG ? `#${renderer}/0` : "a", branchId, renderer)}>`,
      );

      if (!voidElementsReg.test(renderer)) {
        const renderContent =
          content || normalizeDynamicRenderer<ServerRenderer>(input.content);
        if (renderer === "textarea") {
          if (MARKO_DEBUG && renderContent) {
            throw new Error(
              "A dynamic tag rendering a `<textarea>` cannot have `content` and must use the `value` attribute instead.",
            );
          }
          _html(
            _attr_textarea_value(
              branchId,
              MARKO_DEBUG ? `#${renderer}/0` : "a",
              input.value,
              input.valueChange,
              1,
            ),
          );
        } else if (renderContent) {
          if (typeof renderContent !== "function") {
            throw new Error(
              `Body content is not supported for the \`<${renderer}>\` tag.`,
            );
          }
          if (
            renderer === "select" &&
            ("value" in input || "valueChange" in input)
          ) {
            _attr_select_value(
              branchId,
              MARKO_DEBUG ? `#${renderer}/0` : "a",
              input.value,
              input.valueChange,
              renderContent,
              1,
            );
          } else {
            _dynamic_tag(
              branchId,
              MARKO_DEBUG ? `#${renderer}/0` : "a",
              renderContent,
              undefined,
              0,
              undefined,
              serializeReason,
            );
          }
        }

        _html(`</${renderer}>`);
      } else if (MARKO_DEBUG && content) {
        throw new Error(
          `Body content is not supported for the \`<${renderer}>\` tag.`,
        );
      }

      const childScope = getScopeById(branchId);
      const needsScript =
        childScope &&
        (childScope[
          AccessorPrefix.EventAttributes +
            (MARKO_DEBUG ? `#${renderer}/0` : "a")
        ] ||
          childScope[
            AccessorPrefix.ControlledHandler +
              (MARKO_DEBUG ? `#${renderer}/0` : "a")
          ]);

      if (needsScript) {
        _scope(branchId, { [AccessorProp.Renderer]: renderer });
        _script(branchId, DYNAMIC_TAG_SCRIPT_REGISTER_ID);
      }

      if (inFragment) {
        // Inside a fragment capture the branch bracket must NOT bake into the
        // markup: its parent-scope token is the anchor scope, which the
        // walker would stamp (self-pairing the patch scope, clobbering its
        // matched pairing). The applier binds the branch (`applyFragment`),
        // as for a component branch; only the element ref needs delivering, so
        // a plain node marker binds it onto the fragment-owned branch scope.
        _html(_el_resume(branchId, MARKO_DEBUG ? `#${renderer}/0` : "a"));
      } else if (shouldResume || needsScript) {
        _reset_node_mark_run();
        _html(
          state.mark(
            ResumeSymbol.BranchEndNativeTag,
            scopeId + " " + accessor + " " + branchId,
          ),
        );
      }
    };

    // A diverging native-tag branch ships as a fragment (like a component
    // branch): the element bakes into the capture, the applier binds the
    // branch at the hop's anchor.
    if (shouldResume && takeFragment) {
      _fragment(scopeId, accessor, () => renderNative(1));
    } else {
      renderNative();
    }

    // TODO: this needs to set result the element getter
  } else {
    if (shouldResume) {
      _reset_node_mark_run();
      _html(state.mark(ResumeSymbol.BranchStart, ""));
    }

    const render = () => {
      if (renderer) {
        try {
          _set_serialize_reason(
            shouldResume && inputOrArgs !== undefined ? 1 : 0,
          );
          return inputIsArgs
            ? renderer(...(inputOrArgs as unknown[]))
            : renderer(
                content
                  ? { ...(inputOrArgs as Record<string, unknown>), content }
                  : inputOrArgs,
              );
        } finally {
          _set_serialize_reason(undefined);
        }
      } else if (content) {
        return content();
      }
    };
    if (!shouldResume) {
      result = render();
    } else if (takeFragment) {
      result = _fragment(scopeId, accessor, () =>
        withBranchId(branchId, render),
      );
    } else {
      // A replay-constructed hop branch (renderer mismatch client-side)
      // seeds like other patch-list branches (see `_state_reason`).
      const updateStructural =
        state.update && (serializeReason as unknown as number) & 2;
      if (updateStructural) state.freshBranchDepth++;
      result = withBranchId(branchId, render);
      if (updateStructural) state.freshBranchDepth--;
    }
    rendered = _peek_scope_id() !== branchId;

    if (shouldResume) {
      _reset_node_mark_run();
      _html(
        state.mark(
          ResumeSymbol.BranchEnd,
          scopeId + " " + accessor + (rendered ? " " + branchId : ""),
        ),
      );
    }
  }

  if (rendered) {
    if (shouldResume) {
      _scope(scopeId, {
        [AccessorPrefix.ConditionalRenderer + accessor]:
          (renderer as ServerRenderer | undefined)?.[RendererProp.Id] ||
          renderer,
        // Stash the site id so the client can echo what it holds here, keyed
        // by a value that survives the document->update scope-id drift
        // (persisted only; non-persisted resume stays byte-identical).
        ...(siteId !== undefined
          ? { [HOP_SITE_PREFIX + accessor]: siteId }
          : null),
        // Update renders link the branch scope explicitly (no markers/DOM to
        // pair through); merges dispatch the content's registered update merge
        // by the renderer id above.
        ...(state.update && (serializeReason as unknown as number) & 2
          ? {
              [AccessorPrefix.BranchScopes + accessor]: _scope(branchId, {}),
            }
          : null),
      });
    }
  } else {
    _scope_id();
  }

  return result;
};

export function _content(id: string, fn: ServerRenderer) {
  fn[RendererProp.Id] = id;
  return fn;
}

export function _content_resume(
  id: string,
  fn: ServerRenderer,
  scopeId?: number,
) {
  return _resume(_content(id, fn), id, scopeId);
}

export const patchDynamicTag = (
  (originalDynamicTag) =>
  (patch: (tag: unknown, scopeId: number, accessor: Accessor) => unknown) => {
    _dynamic_tag = (
      scopeId,
      accessor,
      tag,
      input,
      content,
      inputIsArgs,
      resume,
      siteId,
    ) => {
      const patched = patch(tag, scopeId, accessor);
      if (patched !== tag)
        (patched as ServerRenderer)[RendererProp.Id] = tag as string;
      return originalDynamicTag(
        scopeId,
        accessor,
        patched,
        input,
        content,
        inputIsArgs,
        resume,
        siteId,
      );
    };
  }
)(_dynamic_tag);
