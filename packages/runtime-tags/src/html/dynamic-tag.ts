import { assertValidTagName } from "../common/errors";
import { normalizeDynamicRenderer } from "../common/helpers";
import {
  DYNAMIC_TAG_SCRIPT_REGISTER_ID,
  DYNAMIC_TAG_VAR_REGISTER_ID,
} from "../common/meta";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  PatchPairing,
  RendererProp,
  ResumeSymbol,
} from "../common/types";
import { _attr_select_value, _attrs, _attrs_textarea_value } from "./attrs";
import type { Locals } from "./serializer";
import type { ServerRenderer } from "./template";
import {
  $chunk,
  _attr_content,
  _el,
  _existing_scope,
  _html,
  _peek_scope_id,
  _resume,
  _scope,
  _scope_id,
  _script,
  _set_scope_reason,
  ALL_GROUPS,
  applyBranchStart,
  deferBranchStart,
  getScopeById,
  getState,
  type GroupMask,
  rendererKey,
  withBranchId,
} from "./writer";

const voidElementsReg =
  /^(?:area|b(?:ase|r)|col|embed|hr|i(?:mg|nput)|link|meta|param|source|track|wbr)$/;
interface BodyContentObject {
  [x: PropertyKey]: unknown;
  content: ServerRenderer;
}

export function _dynamic_tag(
  scopeId: number,
  accessor: Accessor,
  tag: unknown | string | ServerRenderer | BodyContentObject,
  inputOrArgs: unknown,
  content?: (() => void) | 0,
  inputIsArgs?: 1,
  markerGuard?: 1 | 0,
  // Passed by a debug build's compiler for a tag variable.
  tagVar?: 1,
  // A patch build's pairing (`PatchPairing`; `Setup` maps to `Render` first).
  pairing?: PatchPairing,
  // The child's scope reason, where the client's default does not hold.
  reason?: GroupMask,
  // A patch build renders a native tag's content its own way, so the content pairs too.
  attrContent: (
    accessor: Accessor,
    scopeId: number,
    content: unknown,
    markerGuard?: 1 | 0,
    pairing?: PatchPairing,
  ) => void = _attr_content,
) {
  const shouldResume = markerGuard !== 0;
  // A patch entry may target this tag: its branch marks and pairs, while
  // the child's data still serializes on the tag's own reason.
  const marks = shouldResume || pairing;
  const renderer = normalizeDynamicRenderer<ServerRenderer>(tag);
  const state = getState();
  const branchId = _peek_scope_id();
  let rendered: boolean;
  let result: unknown;

  if (typeof renderer === "string") {
    // Debug-only: the name is written into markup unescaped, so passing a
    // sanitized value is the caller's contract rather than a runtime guarantee.
    if (MARKO_DEBUG) {
      assertValidTagName(renderer);
    }

    const nodeAccessor = MARKO_DEBUG ? `#${renderer.toLowerCase()}/0` : "a";
    const input = ((inputIsArgs
      ? (inputOrArgs as unknown[])[0]
      : inputOrArgs) || {}) as Record<string, unknown>;
    rendered = true;
    _scope_id();
    _html(`<${renderer}${_attrs(input, nodeAccessor, branchId, renderer)}>`);

    if (!voidElementsReg.test(renderer)) {
      // Rendered as a native tag's content, as `_attrs_content` does on the client.
      const renderContent = content || input.content;
      if (renderer === "textarea") {
        if (MARKO_DEBUG && normalizeDynamicRenderer(renderContent)) {
          throw new Error(
            "A dynamic tag rendering a `<textarea>` cannot have `content` and must use the `value` attribute instead.",
          );
        }
        _html(_attrs_textarea_value(branchId, nodeAccessor, input));
      } else if (
        renderer === "select" &&
        ("value" in input || "valueChange" in input)
      ) {
        // Only this case defers the content, so it renders inside the
        // dynamically scoped selected value.
        _attr_select_value(
          branchId,
          nodeAccessor,
          input.value,
          input.valueChange,
          renderContent
            ? () =>
                attrContent(
                  nodeAccessor,
                  branchId,
                  renderContent,
                  marks ? 1 : 0,
                  pairing,
                )
            : undefined,
          1,
        );
      } else if (renderContent) {
        attrContent(
          nodeAccessor,
          branchId,
          renderContent,
          marks ? 1 : 0,
          pairing,
        );
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
      (childScope[AccessorPrefix.EventAttributes + nodeAccessor] ||
        childScope[AccessorPrefix.ControlledHandler + nodeAccessor]);

    if (needsScript) {
      // The debug accessor is this write's only consumer, and `needsScript`
      // already means the branch scope ships.
      if (MARKO_DEBUG) {
        _scope(branchId, { [AccessorProp.Renderer]: renderer });
      }
      _script(branchId, DYNAMIC_TAG_SCRIPT_REGISTER_ID);
    }

    if (marks || needsScript) {
      _html(
        state.mark(
          ResumeSymbol.BranchEndNativeTag,
          scopeId + " " + accessor + " " + branchId,
        ),
      );
    }

    // Registered, not written: the getter only reaches the wire when a tag
    // variable holds it. It reads this scope's node visit, not the branch.
    result = _el(scopeId, DYNAMIC_TAG_VAR_REGISTER_ID + accessor);
  } else {
    if (MARKO_DEBUG && tagVar && renderer?.[RendererProp.Lazy]) {
      throw new Error(
        `A dynamic tag with a [tag variable](https://markojs.com/docs/reference/language#tag-variables) rendered \`${renderer[RendererProp.Id]}\`, which is lazily loaded, so it does not support one. Import it without \`load\`, or remove the variable.`,
      );
    }

    const chunk = $chunk;
    const beforeBranch = marks ? deferBranchStart(chunk) : undefined;

    const render = () => {
      if (renderer) {
        try {
          // The child's groups are unknown: the client may re-render it.
          _set_scope_reason(reason ?? (shouldResume ? ALL_GROUPS : 0));
          return inputIsArgs
            ? renderer(...(inputOrArgs as unknown[]))
            : renderer(
                content
                  ? { ...(inputOrArgs as Record<string, unknown>), content }
                  : inputOrArgs,
              );
        } finally {
          _set_scope_reason(undefined);
        }
      } else if (content) {
        // A falsy name renders only its body; `content=` is input for a named tag.
        // With no tag, the body's `<return>` is not its variable.
        content();
      }
    };
    // A kept renderer's body pairs with the live branch, so it renders
    // outside the branch id context that seeds a constant group's holes.
    result =
      marks && pairing !== PatchPairing.Keep
        ? withBranchId(branchId, render)
        : render();
    rendered = _peek_scope_id() !== branchId;

    if (beforeBranch !== undefined) {
      applyBranchStart(chunk, beforeBranch, rendered);
      _html(
        state.mark(
          ResumeSymbol.BranchEnd,
          scopeId + " " + accessor + (rendered ? " " + branchId : ""),
        ),
      );
      // Unlike a known tag's child scope, no link ships this one, so it flushes
      // here with the tag variable its template's `<return>` may call.
      if (renderer) _existing_scope(branchId);
    }
  }

  if (rendered) {
    // A patched tag keeps its key so a patch naming the same renderer pairs
    // by id alone.
    if (shouldResume || (pairing && typeof renderer === "function")) {
      _scope(scopeId, {
        [AccessorPrefix.ConditionalRenderer + accessor]: rendererKey(renderer),
      });
    }
  } else {
    _scope_id();
  }

  return result;
}

export function _content(id: string, fn: ServerRenderer, scopeId?: number) {
  fn[RendererProp.Id] = id;
  // The owner id the client derives from `RendererProp.Owner`; both sides key a
  // content instance by it, so they must be written from the same scope.
  fn[RendererProp.Owner] = scopeId;
  return fn;
}

// Registered content carries what its scopes may lack: the values of an
// attribute tag `<for>` that creates it, and closures unseen code may need.
export function _content_resume(
  id: string,
  fn: ServerRenderer,
  scopeId?: number,
  locals?: Locals,
) {
  return _resume(_content(id, fn, scopeId), id, scopeId, locals);
}
