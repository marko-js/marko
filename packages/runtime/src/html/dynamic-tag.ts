import type { Renderer } from "../common/types";
import {
  markResumeScopeStart,
  nextScopeId,
  peekNextScopeId,
  write,
  writeScope,
} from "./writer";
import { attrs } from "./attrs";

const voidElements = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);
interface RenderBodyObject {
  [x: string]: unknown;
  renderBody: Renderer;
}

export function dynamicTag(
  tag: unknown | string | Renderer | RenderBodyObject,
  input: Record<string, unknown>,
  renderBody: (() => void) | undefined
) {
  if (!tag && !renderBody) return undefined;

  const internalScope = {};

  const futureScopeId = peekNextScopeId();
  write(`${markResumeScopeStart(futureScopeId)}`);
  writeScope(futureScopeId, internalScope);

  if (!tag) {
    renderBody!();

    return internalScope;
  }

  if (typeof tag === "string") {
    nextScopeId();
    write(`<${tag}${attrs(input)}>`);

    if (!voidElements.has(tag)) {
      if (renderBody) {
        renderBody();
      }

      write(`</${tag}>`);
    } else if (MARKO_DEBUG && renderBody) {
      throw new Error(
        `A renderBody was provided for a "${tag}" tag, which cannot have children.`
      );
    }

    return internalScope;
  }

  const renderer = (tag as RenderBodyObject).renderBody || tag;

  if (typeof renderer === "function") {
    renderer(
      renderBody ? { ...input, renderBody } : input,
      null,
      internalScope
    );
    return internalScope;
  } else if (MARKO_DEBUG) {
    throw new Error(`Invalid renderer passed for dynamic tag: ${tag}`);
  }
}
