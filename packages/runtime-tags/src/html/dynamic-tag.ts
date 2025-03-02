import { normalizeDynamicRenderer } from "../common/helpers";
import type { Accessor } from "../common/types";
import {
  attrs,
  controllable_select_value,
  controllable_textarea_value,
} from "./attrs";
import type { ServerRenderer } from "./template";
import {
  nextScopeId,
  register,
  resumeConditional,
  resumeSingleNodeConditional,
  write,
} from "./writer";

const voidElementsReg =
  /^(?:area|b(?:ase|r)|col|embed|hr|i(?:mg|nput)|link|meta|param|source|track|wbr)$/;
interface BodyContentObject {
  [x: PropertyKey]: unknown;
  content: ServerRenderer;
}

export function dynamicTagId(tagName: unknown) {
  const normalizedRenderer = normalizeDynamicRenderer<ServerRenderer>(tagName);
  return (
    (normalizedRenderer as ServerRenderer | undefined)?.___id ||
    normalizedRenderer
  );
}

// TODO: refactor dynamicTagInput and dynamicTagArgs to be the same impl with a flag for input vs args.
export function dynamicTagInput(
  scopeId: number,
  accessor: Accessor,
  tag: unknown | string | ServerRenderer | BodyContentObject,
  input: Record<string, unknown>,
  content?: () => void,
) {
  if (!tag && !content) {
    nextScopeId();
    return;
  }

  if (!tag) {
    resumeConditional(content!, scopeId, accessor);
    return;
  }

  if (typeof tag === "string") {
    resumeSingleNodeConditional(
      () => {
        nextScopeId();
        write(`<${tag}${attrs(input, accessor, scopeId, tag)}>`);

        if (!voidElementsReg.test(tag)) {
          if (tag === "textarea") {
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
              tag === "select" &&
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
          write(`</${tag}>`);
        } else if (MARKO_DEBUG && content) {
          throw new Error(`Body content is not supported for a "${tag}" tag.`);
        }
      },
      scopeId,
      accessor,
    );
    // TODO: this needs to return the element getter
    return;
  }

  const renderer = getDynamicRenderer(tag) as ServerRenderer;

  if (MARKO_DEBUG) {
    if (typeof renderer !== "function") {
      throw new Error(`Invalid renderer passed for dynamic tag: ${tag}`);
    }
  }

  let result;
  resumeConditional(
    () => {
      result = renderer(content ? { ...input, content } : input);
    },
    scopeId,
    accessor,
  );
  return result;
}

export function dynamicTagArgs(
  scopeId: number,
  accessor: Accessor,
  tag: unknown | string | ServerRenderer | BodyContentObject,
  args: unknown[],
) {
  if (!tag) {
    nextScopeId();
    return;
  }

  if (typeof tag === "string") {
    resumeSingleNodeConditional(
      () => {
        nextScopeId();
        write(
          `<${tag}${attrs(args[0] as Record<string, unknown>, accessor, scopeId, tag)}>`,
        );

        if (!voidElementsReg.test(tag)) {
          write(`</${tag}>`);
        }
      },
      scopeId,
      accessor,
    );
    // TODO: this needs to return the element getter
    return;
  }

  const renderer = getDynamicRenderer(tag) as ServerRenderer;

  if (MARKO_DEBUG) {
    if (typeof renderer !== "function") {
      throw new Error(`Invalid renderer passed for dynamic tag: ${tag}`);
    }
  }

  let result;
  resumeConditional(
    () => {
      result = renderer(...args);
    },
    scopeId,
    accessor,
  );
  return result;
}

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

let getDynamicRenderer = normalizeDynamicRenderer<ServerRenderer>;
export function patchDynamicTag(
  newGetDynamicRenderer: typeof getDynamicRenderer,
) {
  getDynamicRenderer = newGetDynamicRenderer;
}
