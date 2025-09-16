import { normalizeDynamicRenderer } from "../common/helpers";
import { type Accessor, AccessorPrefix, ResumeSymbol } from "../common/types";
import { _attr_select_value, _attr_textarea_value, _attrs } from "./attrs";
import type { ServerRenderer } from "./template";
import {
  _html,
  _peek_scope_id,
  _resume,
  _scope,
  _scope_id,
  _set_serialize_reason,
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
) => {
  const shouldResume = serializeReason !== 0;
  const renderer = normalizeDynamicRenderer<ServerRenderer>(tag);

  if (MARKO_DEBUG) {
    if (
      renderer &&
      typeof renderer !== "function" &&
      typeof renderer !== "string"
    ) {
      throw new Error(`Invalid renderer passed for dynamic tag: ${renderer}`);
    }
  }

  const state = getState()!;
  const branchId = _peek_scope_id();
  let rendered = false;
  let result: unknown;

  if (typeof renderer === "string") {
    const input = ((inputIsArgs
      ? (inputOrArgs as unknown[])[0]
      : inputOrArgs) || {}) as Record<string, unknown>;
    rendered = true;
    _scope_id();
    _html(
      `<${renderer}${_attrs(input, MARKO_DEBUG ? `#${renderer}/0` : 0, branchId, renderer)}>`,
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
            MARKO_DEBUG ? `#${renderer}/0` : 0,
            input.value,
            input.valueChange,
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
            MARKO_DEBUG ? `#${renderer}/0` : 0,
            input.value,
            input.valueChange,
            renderContent,
          );
        } else {
          _dynamic_tag(
            branchId,
            MARKO_DEBUG ? `#${renderer}/0` : 0,
            renderContent,
            [],
            0,
            1,
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

    if (shouldResume) {
      _html(
        state.mark(
          ResumeSymbol.BranchEndNativeTag,
          scopeId + " " + accessor + " " + branchId,
        ),
      );
    }

    // TODO: this needs to set result the element getter
  } else {
    if (shouldResume) {
      _html(state.mark(ResumeSymbol.BranchStart, ""));
    }

    const render = () => {
      if (renderer) {
        try {
          _set_serialize_reason(shouldResume ? 1 : 0);
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
    result = shouldResume ? withBranchId(branchId, render) : render();
    rendered = _peek_scope_id() !== branchId;

    if (shouldResume) {
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
        [AccessorPrefix.ConditionalScope + accessor]: _scope(branchId, {}),
        [AccessorPrefix.ConditionalRenderer + accessor]:
          (renderer as ServerRenderer | undefined)?.___id || renderer,
      });
    }
  } else {
    _scope_id();
  }

  return result;
};

export function _content(id: string, fn: ServerRenderer) {
  fn.___id = id;
  return fn;
}

export function _content_resume(
  id: string,
  fn: ServerRenderer,
  scopeId?: number,
) {
  return _resume(_content(id, fn), id, scopeId);
}

export function patchDynamicTag(
  patch: (
    scopeId: number,
    accessor: Accessor,
    tag: unknown | string | ServerRenderer | BodyContentObject,
  ) => unknown,
) {
  _dynamic_tag = (
    (originalDynamicTag) =>
    (scopeId, accessor, tag, input, content, inputIsArgs, resume) => {
      const patched = patch(scopeId, accessor, tag);
      if (patched !== tag) (patched as any).___id = tag;
      return originalDynamicTag(
        scopeId,
        accessor,
        patched,
        input,
        content,
        inputIsArgs,
        resume,
      );
    }
  )(_dynamic_tag);
}
