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
  // The server never patches client-state-driven structure.
  const updateStructural =
    state.patch && (serializeReason as unknown as number) & 2;
  let rendered: boolean;
  let result: unknown;

  // A mismatched dynamic hop delivers resumable HTML instead of construction
  // code; native tag targets use the same path.
  const targetRendererId =
    (renderer as ServerRenderer | undefined)?.[RendererProp.Id] || renderer;
  const possessed = state.possessed;
  // The loop path disambiguates repeated instances of one compiled hop.
  const siteKey =
    siteId !== undefined
      ? [...(state.loopPath || []), encodePossessionSite(siteId)].join("/")
      : undefined;
  // `siteId` (and so `siteKey`) is compiled only in persisted builds.
  const possessionKnown =
    possessed !== undefined && siteKey !== undefined && siteKey in possessed;
  const possessionMiss =
    possessionKnown && possessed![siteKey!] !== targetRendererId;
  // Cross-route renders capture the first unproven hop; same-route renders
  // capture each mismatch. Nested captures stay in their enclosing fragment.
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
        // Fragment native branches omit brackets so the walker cannot pair
        // their anchor scope to itself; the applier binds the branch.
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

    // Diverging native branches ship as fragments bound at the hop anchor.
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
        // Patch branches link explicitly; native renderers retain their tag so
        // later frames cannot confuse them with component registry ids.
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
      // Zero explicitly removes a request-derived branch; absence is unchanged.
      _scope(scopeId, {
        [AccessorPrefix.ConditionalRenderer + accessor]: 0,
        [AccessorPrefix.BranchScopes + accessor]: undefined,
      });
    }
    _scope_id();
  }

  if (siteKey !== undefined) {
    state.nextPossessed[siteKey] = rendered ? "" + targetRendererId : "0";
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
