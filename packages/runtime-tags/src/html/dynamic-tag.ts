import { normalizeDynamicRenderer } from "../html";
import { attrs, withSelectedValue } from "./attrs";
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
interface RenderBodyObject {
  [x: PropertyKey]: unknown;
  renderBody: ServerRenderer;
}

export function dynamicTagInput(
  scope: PartialScope,
  tag: unknown | string | ServerRenderer | RenderBodyObject,
  input: Record<string, unknown>,
  renderBody?: () => void,
  tagVar?: unknown,
) {
  if (!tag && !renderBody) return undefined;

  const scopeId = getScopeId(scope)!;
  write(`${markResumeScopeStart(scopeId)}`);
  writeScope(scopeId, scope);

  if (!tag) {
    return renderBody!();
  }

  if (typeof tag === "string") {
    nextScopeId();
    write(
      `<${tag}${attrs(input, MARKO_DEBUG ? `#${tag}/0` : 0, scopeId, tag)}>`,
    );

    if (!voidElementsReg.test(tag)) {
      if (tag === "select" && "value" in input && renderBody) {
        withSelectedValue(input.value, renderBody);
      } else {
        renderBody?.();
      }
      write(`</${tag}>`);
    } else if (MARKO_DEBUG && renderBody) {
      throw new Error(
        `A renderBody was provided for a "${tag}" tag, which cannot have children.`,
      );
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

  return renderer(renderBody ? { ...input, renderBody } : input, tagVar);
}

export function dynamicTagArgs(
  scope: PartialScope,
  tag: unknown | string | ServerRenderer | RenderBodyObject,
  args: unknown[],
) {
  if (!tag) return undefined;

  const scopeId = getScopeId(scope)!;
  write(`${markResumeScopeStart(scopeId)}`);
  writeScope(scopeId, scope);

  if (typeof tag === "string") {
    nextScopeId();
    write(`<${tag}${attrs(args[0] as Record<string, unknown>)}>`);

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
