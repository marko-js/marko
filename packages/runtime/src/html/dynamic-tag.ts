import type { Renderer } from "../common/types";
import { attrs } from "./attrs";
import { serializedScope } from "./serializer";
import type { Template } from "./template";
import {
  markResumeScopeStart,
  nextScopeId,
  peekNextScopeId,
  write,
  writeScope,
} from "./writer";

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
  tag: unknown | string | Renderer | RenderBodyObject | Template,
  input: Record<string, unknown>,
  renderBody: (() => void) | undefined,
) {
  if (!tag && !renderBody) return undefined;

  const futureScopeId = peekNextScopeId();
  const futureScope = serializedScope(futureScopeId);
  write(`${markResumeScopeStart(futureScopeId)}`);
  writeScope(futureScopeId, {});

  if (!tag) {
    renderBody!();

    return futureScope;
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
        `A renderBody was provided for a "${tag}" tag, which cannot have children.`,
      );
    }

    return futureScope;
  }

  const renderer = getDynamicRenderer(tag);

  if (typeof renderer === "function") {
    renderer(renderBody ? { ...input, renderBody } : input);
    return futureScope;
  } else if (MARKO_DEBUG) {
    throw new Error(`Invalid renderer passed for dynamic tag: ${tag}`);
  }
}

let getDynamicRenderer = (
  tag: unknown | string | Renderer | RenderBodyObject | Template,
) => (tag as Template)._ || (tag as RenderBodyObject).renderBody || tag;
export let createRenderer = (fn: Renderer) => fn;

export function patchDynamicTag(
  newGetDynamicRenderer: typeof getDynamicRenderer,
  newCreateRenderer: typeof createRenderer,
) {
  getDynamicRenderer = newGetDynamicRenderer;
  createRenderer = newCreateRenderer;
}
