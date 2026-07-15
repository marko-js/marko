import { assertValidTagName } from "../common/errors";
import {
  encodePossessionSite,
  normalizeDynamicRenderer,
} from "../common/helpers";
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
  RENDERER_SITE_PREFIX,
  withBranchId,
} from "./writer";

const voidElementsReg =
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
  // Request-derived (bit 2) only: a state-driven dynamic tag in a patch
  // render must not write structural patch data (the server never pairs into
  // client-state-driven structure) -- matches `_if`/`forBranches`'s gates.
  const updateStructural =
    state.patch && (serializeReason as unknown as number) & 2;
  let rendered: boolean;
  let result: unknown;

  // A hop delivers its fresh branch as resumable HTML (a fragment the client
  // inserts and resumes) instead of a client-constructed subtree; everything
  // above the hop stays a matched-scope patch. Two triggers:
  //  - `state.freshStructure`: cross-route swap, the whole diverging subtree
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
  // Repeated hops (a `<${...}/>` in a `<for>`) share one site id, so
  // disambiguate by the enclosing loop key or positional index -- the value
  // the client reads off the iteration's `LoopKey` (see `_have`).
  const siteKey =
    siteId !== undefined
      ? [...(state.loopPath || []), encodePossessionSite(siteId)].join("/")
      : undefined;
  // `siteId` (and so `siteKey`) is compiled only in persisted builds.
  const possessionKnown =
    possessed !== undefined && siteKey !== undefined && siteKey in possessed;
  const possessionMiss =
    possessionKnown && possessed![siteKey!] !== targetRendererId;
  // Cross-route capture (`state.freshStructure`) fires at the first hop the client
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
      (state.freshStructure && !state.fragmentTaken && !possessionKnown));

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
        // by a value that survives the document->patch scope-id drift
        // (persisted only; non-persisted resume stays byte-identical).
        ...(siteId !== undefined
          ? { [RENDERER_SITE_PREFIX + accessor]: siteId }
          : null),
        // Patch renders link the branch scope explicitly (no markers/DOM to
        // pair through); merges dispatch the content's registered update merge
        // by the renderer id above. A tag-name renderer additionally stamps
        // the tag name on the branch (the same key the needsScript path
        // stashes) so the applier's discrimination between a native hop and
        // a lazy component -- whose optimized register id can be a valid
        // element localName -- is structural (see `_update_dynamic` in
        // dom/update-merges.ts). Fragment-delivered native branches carry it too:
        // a later frame of the same apply re-dispatches over the (by then
        // live, shared) branch scope and must still take the native path.
        ...(updateStructural
          ? {
              [AccessorPrefix.BranchScopes + accessor]: _scope(
                branchId,
                typeof renderer === "string"
                  ? { [AccessorProp.Renderer]: renderer }
                  : {},
              ),
            }
          : null),
      });
    }
  } else {
    if (updateStructural) {
      // A request-derived dynamic tag can disappear (attribute-tag bodies are
      // one common source). The explicit zero lets the update merge remove
      // the matched branch; omitting the renderer would mean "unchanged".
      _scope(scopeId, {
        [AccessorPrefix.ConditionalRenderer + accessor]: 0,
        [AccessorPrefix.BranchScopes + accessor]: undefined,
        ...(siteId !== undefined
          ? { [RENDERER_SITE_PREFIX + accessor]: siteId }
          : null),
      });
    }
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
