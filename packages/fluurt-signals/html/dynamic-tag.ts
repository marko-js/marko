import selfClosing from "self-closing-tags";
import { Renderer } from "../common/types";
import { write } from "./writer";
import { attrs } from "./attrs";

const selfClosing = /^(?:polylin|ellips|sourc|(?:ba|u)s)e|p(?:olygon|a(?:ram|th))|c(?:o(?:mmand|l)|ircle)|keygen|track|input|embed|meta|area|stop|rect|lin[ek]|img|(?:wb|h)r|br$/;
interface RenderBodyObject {
  [x: string]: unknown;
  renderBody: Renderer;
}

export function dynamicTag(
  tag: unknown | string | Renderer | RenderBodyObject,
  input: Record<string, unknown>,
  renderBody: (() => void) | undefined
) {
  if (tag == null || tag === false) {
    if (renderBody) {
      renderBody();
    }

    return;
  }

  if (typeof tag === "string") {
    write(`<${tag}${attrs(input)}>`);

    if (selfClosing.test(tag)) {
      if (renderBody) {
        throw new Error(
          `A renderBody was provided for a self closing "${tag}" tag.`
        );
      }
    } else {
      if (renderBody) {
        renderBody();
      }

      write(`</${tag}>`);
    }

    return;
  }

  const renderer = (tag as RenderBodyObject).renderBody || tag;

  if (typeof renderer === "function") {
    renderer(renderBody ? { ...input, renderBody } : input);
    return;
  }

  throw new Error(`Invalid renderer passed for dynamic tag: ${tag}`);
}
