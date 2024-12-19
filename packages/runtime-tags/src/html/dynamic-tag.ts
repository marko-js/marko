import { normalizeDynamicRenderer } from "../html";
import {
  attrs,
  controllable_select_value,
  controllable_textarea_value,
} from "./attrs";
import type { ServerRenderer } from "./template";
import {
  getScopeId,
  markResumeScopeStart,
  nextScopeId,
  type PartialScope,
  write,
  writeScope,
} from "./writer";

const voidElementsReg =
  /^(?:area|b(?:ase|r)|col|embed|hr|i(?:mg|nput)|link|meta|param|source|track|wbr)$/;
interface BodyContentObject {
  [x: PropertyKey]: unknown;
  content: ServerRenderer;
}

export function dynamicTagInput(
  scope: PartialScope,
  tag: unknown | string | ServerRenderer | BodyContentObject,
  input: Record<string, unknown>,
  content?: () => void,
  tagVar?: unknown,
) {
  if (!tag && !content) return undefined;

  const scopeId = getScopeId(scope)!;
  write(`${markResumeScopeStart(scopeId)}`);
  writeScope(scopeId, scope);
  if (!tag) {
    return content!();
  }

  if (typeof tag === "string") {
    nextScopeId();
    write(
      `<${tag}${attrs(input, MARKO_DEBUG ? `#${tag}/0` : 0, scopeId, tag)}>`,
    );

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
            MARKO_DEBUG ? `#${tag}/0` : 0,
            input.value,
            input.valueChange,
          ),
        );
      } else if (content) {
        if (tag === "select" && ("value" in input || "valueChange" in input)) {
          controllable_select_value(
            scopeId,
            MARKO_DEBUG ? `#${tag}/0` : 0,
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
    // TODO: this needs to return the element getter
    return null;
  }

  const renderer = getDynamicRenderer(tag) as ServerRenderer;

  if (MARKO_DEBUG) {
    if (typeof renderer !== "function") {
      throw new Error(`Invalid renderer passed for dynamic tag: ${tag}`);
    }
  }

  return renderer(content ? { ...input, content } : input, tagVar);
}

export function dynamicTagArgs(
  scope: PartialScope,
  tag: unknown | string | ServerRenderer | BodyContentObject,
  args: unknown[],
) {
  if (!tag) return undefined;

  const scopeId = getScopeId(scope)!;
  write(`${markResumeScopeStart(scopeId)}`);
  writeScope(scopeId, scope);

  if (typeof tag === "string") {
    nextScopeId();
    write(
      `<${tag}${attrs(args[0] as Record<string, unknown>, MARKO_DEBUG ? `#${tag}/0` : 0, scopeId, tag)}>`,
    );

    if (!voidElementsReg.test(tag)) {
      write(`</${tag}>`);
    }

    // TODO: this needs to return the element getter
    return undefined;
  }

  const renderer = getDynamicRenderer(tag) as ServerRenderer;

  if (MARKO_DEBUG) {
    if (typeof renderer !== "function") {
      throw new Error(`Invalid renderer passed for dynamic tag: ${tag}`);
    }
  }

  return renderer(...args);
}

let getDynamicRenderer = normalizeDynamicRenderer<ServerRenderer>;
export let createRenderer = (fn: ServerRenderer) => fn;

export function patchDynamicTag(
  newGetDynamicRenderer: typeof getDynamicRenderer,
  newCreateRenderer: typeof createRenderer,
) {
  getDynamicRenderer = newGetDynamicRenderer;
  createRenderer = newCreateRenderer;
}
