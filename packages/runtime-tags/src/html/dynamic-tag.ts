import { normalizeDynamicRenderer } from "../common/helpers";
import { type Accessor, AccessorPrefix, ResumeSymbol } from "../common/types";
import {
  attrs,
  controllable_select_value,
  controllable_textarea_value,
} from "./attrs";
import { isTemplate, type ServerRenderer } from "./template";
import {
  getState,
  nextScopeId,
  peekNextScopeId,
  register,
  withBranchId,
  write,
  writeScope,
} from "./writer";

const voidElementsReg =
  /^(?:area|b(?:ase|r)|col|embed|hr|i(?:mg|nput)|link|meta|param|source|track|wbr)$/;
interface BodyContentObject {
  [x: PropertyKey]: unknown;
  content: ServerRenderer;
}

// TODO: refactor dynamicTagInput and dynamicTagArgs to be the same impl with a flag for input vs args.

export let dynamicTag = (
  scopeId: number,
  accessor: Accessor,
  tag: unknown | string | ServerRenderer | BodyContentObject,
  inputOrArgs: unknown,
  content?: (() => void) | 0,
  inputIsArgs?: 1,
  shouldResume?: 1 | 0,
) => {
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
  const branchId = peekNextScopeId();
  let result: unknown;

  if (typeof renderer === "string") {
    const input = ((inputIsArgs
      ? (inputOrArgs as unknown[])[0]
      : inputOrArgs) || {}) as Record<string, unknown>;
    nextScopeId();
    write(`<${renderer}${attrs(input, accessor, scopeId, renderer)}>`);

    if (!voidElementsReg.test(renderer)) {
      const renderNativeTag = () => {
        if (renderer === "textarea") {
          if (MARKO_DEBUG && content) {
            throw new Error(
              "A dynamic tag rendering a `<textarea>` cannot have `content` and must use the `value` attribute instead.",
            );
          }
          write(
            controllable_textarea_value(
              scopeId,
              accessor,
              input.value,
              input.valueChange,
            ),
          );
        } else if (content) {
          if (
            renderer === "select" &&
            ("value" in input || "valueChange" in input)
          ) {
            controllable_select_value(
              scopeId,
              accessor,
              input.value,
              input.valueChange,
              content,
            );
          } else {
            content();
          }
        }
      };

      if (shouldResume) {
        withBranchId(branchId, renderNativeTag);
      } else {
        renderNativeTag();
      }
      write(`</${renderer}>`);
    } else if (MARKO_DEBUG && content) {
      throw new Error(`Body content is not supported for a "${renderer}" tag.`);
    }

    if (shouldResume) {
      write(
        state.mark(
          ResumeSymbol.BranchSingleNode,
          scopeId + " " + accessor + " " + branchId,
        ),
      );
    }

    // TODO: this needs to set result the element getter
  } else {
    if (shouldResume) {
      write(state.mark(ResumeSymbol.BranchStart, branchId + ""));
    }

    const render = () => {
      if (renderer) {
        if (isTemplate(renderer)) {
          const input = inputIsArgs
            ? (inputOrArgs as unknown[])[0]
            : inputOrArgs;
          return renderer(
            content
              ? { ...(input as Record<string, unknown>), content }
              : input,
            shouldResume,
          );
        }
        return inputIsArgs
          ? renderer(...(inputOrArgs as unknown[]))
          : renderer(
              content
                ? { ...(inputOrArgs as Record<string, unknown>), content }
                : inputOrArgs,
            );
      } else if (content) {
        return content();
      }
    };
    result = shouldResume ? withBranchId(branchId, render) : render();

    if (shouldResume) {
      write(state.mark(ResumeSymbol.BranchEnd, scopeId + " " + accessor));
    }
  }

  const rendered = peekNextScopeId() !== branchId;
  if (rendered) {
    if (shouldResume) {
      writeScope(scopeId, {
        [AccessorPrefix.ConditionalScope + accessor]: writeScope(branchId, {}),
        [AccessorPrefix.ConditionalRenderer + accessor]:
          (renderer as ServerRenderer | undefined)?.___id || renderer,
      });
    }
  } else {
    nextScopeId();
  }

  return result;
};

export function createContent(id: string, fn: ServerRenderer) {
  fn.___id = id;
  return fn;
}

export function registerContent(
  id: string,
  fn: ServerRenderer,
  scopeId?: number,
) {
  return register(createContent(id, fn), id, scopeId);
}

export function patchDynamicTag(
  patch: (
    scopeId: number,
    accessor: Accessor,
    tag: unknown | string | ServerRenderer | BodyContentObject,
  ) => unknown,
) {
  dynamicTag = (
    (originalDynamicTag) =>
    (scopeId, accessor, tag, input, content, inputIsArgs, resume) => {
      const patched = patch(scopeId, accessor, tag);
      (patched as any).___id = tag;
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
  )(dynamicTag);
}
