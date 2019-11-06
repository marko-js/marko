import { Renderer } from "../common/types";
import { write } from "./writer";
import { attrs } from "./attrs";

const voidElements = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
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
  if (!tag) {
    if (renderBody) {
      renderBody();
    }

    return;
  }

  if (typeof tag === "string") {
    write(`<${tag}${attrs(input)}>`);

    if (voidElements.has(tag)) {
      if (renderBody) {
        throw new Error(
          `A renderBody was provided for a "${tag}" tag, which cannot have children.`
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
