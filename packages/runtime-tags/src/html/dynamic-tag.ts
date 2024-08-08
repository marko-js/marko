import type { Renderer } from "../common/types";
import { attrs } from "./attrs";
import type { ServerTemplate as Template } from "./template";
import {
  markResumeScopeStart,
  nextScopeId,
  peekNextScope,
  peekNextScopeId,
  write,
  writeScope,
} from "./writer";

const voidElementsReg =
  /^(?:area|b(?:ase|r)|col|embed|hr|i(?:mg|nput)|link|meta|param|source|track|wbr)$/;
interface RenderBodyObject {
  [x: PropertyKey]: unknown;
  renderBody: Renderer;
}

export function dynamicTagInput(
  tag: unknown | string | Renderer | RenderBodyObject | Template,
  input: Record<string, unknown>,
  renderBody?: () => void,
) {
  if (!tag && !renderBody) return undefined;

  const futureScopeId = peekNextScopeId();
  const futureScope = peekNextScope();
  write(`${markResumeScopeStart(futureScopeId)}`);
  writeScope(futureScopeId, futureScope);

  if (!tag) {
    renderBody!();

    return futureScope;
  }

  if (typeof tag === "string") {
    nextScopeId();
    write(`<${tag}${attrs(input)}>`);

    if (!voidElementsReg.test(tag)) {
      renderBody?.();
      write(`</${tag}>`);
    } else if (MARKO_DEBUG && renderBody) {
      throw new Error(
        `A renderBody was provided for a "${tag}" tag, which cannot have children.`,
      );
    }

    return futureScope;
  }

  const renderer = getDynamicRenderer(tag);

  if (MARKO_DEBUG) {
    if (typeof renderer !== "function") {
      throw new Error(`Invalid renderer passed for dynamic tag: ${tag}`);
    }
  }

  renderer(renderBody ? { ...input, renderBody } : input);
  return futureScope;
}

export function dynamicTagArgs(
  tag: unknown | string | Renderer | RenderBodyObject | Template,
  args: unknown[],
) {
  if (!tag) return undefined;

  const futureScopeId = peekNextScopeId();
  const futureScope = peekNextScope();
  write(`${markResumeScopeStart(futureScopeId)}`);
  writeScope(futureScopeId, futureScope);

  if (typeof tag === "string") {
    nextScopeId();
    write(`<${tag}${attrs(args[0] as Record<string, unknown>)}>`);

    if (!voidElementsReg.test(tag)) {
      write(`</${tag}>`);
    }

    return futureScope;
  }

  const renderer = getDynamicRenderer(tag);

  if (MARKO_DEBUG) {
    if (typeof renderer !== "function") {
      throw new Error(`Invalid renderer passed for dynamic tag: ${tag}`);
    }
  }

  renderer(...args);
  return futureScope;
}

let getDynamicRenderer = (
  tag: unknown | string | Renderer | RenderBodyObject | Template,
) =>
  (tag as { _?: Renderer })._ ||
  (tag as { renderBody?: Renderer }).renderBody ||
  (tag as Renderer);
export let createRenderer = (fn: Renderer) => fn;

export function patchDynamicTag(
  newGetDynamicRenderer: typeof getDynamicRenderer,
  newCreateRenderer: typeof createRenderer,
) {
  getDynamicRenderer = newGetDynamicRenderer;
  createRenderer = newCreateRenderer;
}
