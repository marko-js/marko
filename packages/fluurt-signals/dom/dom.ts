import { Renderer } from "../common/types";
import {
  MaybeSignal,
  Raw,
  createSignal,
  createComputation,
  createEffect,
  get,
  set,
  dynamicKeys,
  beginBatch,
  endBatch
} from "./signals";
import { Fragment, removeFragment, withChildren } from "./fragments";
import { conditional } from "./control-flow";

type NAMESPACES =
  | typeof TAG_NAMESPACES[keyof typeof TAG_NAMESPACES]
  | typeof DEFAULT_NS;
const DEFAULT_NS = "http://www.w3.org/1999/xhtml";
export const TAG_NAMESPACES = {
  svg: "http://www.w3.org/2000/svg",
  math: "http://www.w3.org/1998/Math/MathML"
} as const;

const enum NodeType {
  Element = 1,
  Text = 3,
  Comment = 8,
  DocumentFragment = 11
};

const enum Markers {
  Fragment = "#F",
  Text = "#T",
  Element = "#"
};

export class HydrateError extends Error {}
export let parentFragment: Fragment | undefined;
export let parentElement: Element | DocumentFragment | null = null;
export let currentNS: NAMESPACES = DEFAULT_NS;

export interface ComponentFragment<Input> extends DocumentFragment {
  rerender: (input: Input) => void;
  destroy: () => void;
}

const doc = document;
const parser = doc.createElement("template");
export let lastElementRef: Element;
export const walker = document.createTreeWalker(
  document.body,
  129, // NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT
  null,
  false
);

let lastHydratedChild: Node | null = null;

type Template = [Node | null, string];
export type RendererWithTemplate<T extends Renderer> = T & { ___template: Template };

export function withTemplate<T extends Renderer>(renderer: T, template: Template) {
  (renderer as RendererWithTemplate<T>).___template = template;
  return renderer as RendererWithTemplate<T>;
}

export function createTemplate(html: string): Template {
  return [null, html];
}

export const empty = withTemplate(() => {}, createTemplate(""));

function cloneTemplate(template: Template) {
  let source = template[0];
  if (source === null) {
    parser.innerHTML = template[1];
    const content = parser.content;

    if ((source = content.firstChild) !== content.lastChild || source?.nodeType === NodeType.Comment) {
      source = doc.createDocumentFragment();
      source.appendChild(content);
    } else if (!source) {
      source = doc.createTextNode("");
    }

    template[0] = source;
  }
  return source!.cloneNode(true);
}

export function nextFragmentRef() {
  let current: Node | null = walker.currentNode;
  let next: Node | null;

  do {
    next = walker.nextNode();
    if (current.nodeValue === Markers.Fragment) {
      return current as Comment;
    }
  } while (current = next);

  throw new Error("Debug Error");
}

export function nextTextRef() {
  let current: Node | null = walker.currentNode;
  let next: Node | null;

  do {
    next = walker.nextNode();
    if (current.nodeValue === Markers.Text) {
      (current as ChildNode).replaceWith(next = doc.createTextNode(""));
      if (parentFragment!.___firstChild === current) {
        parentFragment!.___firstChild = next;
      }
      if (parentFragment!.___lastChild === current) {
        parentFragment!.___lastChild = next;
      }
      return next as Text;
    }
  } while (current = next);

  throw new Error("Debug Error");
}

export function nextElementRef() {
  let current: Node | null = walker.currentNode;
  let next: Node | null;

  do {
    next = walker.nextNode();
    if (current.nodeType === NodeType.Element && (current as Element).hasAttribute(Markers.Element)) {
      (current as Element).removeAttribute(Markers.Element);
      return lastElementRef = current as Element;
    }
  } while (current = next);

  throw new Error("Debug Error");
}

export function createRenderer<T extends Renderer>(renderer: T, template: Template) {
  type Input = Raw<Parameters<T>[0]>;
  return (input: Input) => {
    let container: ComponentFragment<Input> | null = null;
    let asyncPlaceholder: Text;

    const init = beginBatch();
    const fragment = beginFragment(template);
    const inputSignal = dynamicKeys(createSignal(input) as any, renderer.input!);
    
    createEffect(() => {
      if (container) {
        asyncPlaceholder.replaceWith(fragment.___dom!);
      } else {
        container = fragment.___dom as ComponentFragment<Input>;
      }
    }, []);

    renderer(inputSignal);
    endFragment();
    endBatch(init);

    if (!container) {
      container = doc.createDocumentFragment() as ComponentFragment<Input>;
      container.appendChild(asyncPlaceholder = doc.createTextNode(""));
    }

    container.rerender = ((newInput: Input) => {
      const update = beginBatch();
      set(inputSignal, newInput);
      endBatch(update);
    }) as T;

    container.destroy = () => removeFragment(fragment);

    return container;
  };
}

export function beginElNS(tag: string) {
  currentNS = TAG_NAMESPACES[tag] || currentNS;
  return beginEl(tag);
}

export function setNS(ns: NAMESPACES) {
  currentNS = ns;
}

export function endNS() {
  currentNS = DEFAULT_NS;
}

export function el(name: string) {
  const elNode = beginEl(name);
  endEl();
  return elNode;
}

export let beginEl:
  | typeof originalBeginEl
  | typeof hydrateBeginEl = originalBeginEl;
function originalBeginEl(name: string) {
  return parentElement!.appendChild(
    (parentElement = doc.createElementNS(currentNS, name))
  );
}

function hydrateBeginEl(name: string) {
  const node = (parentElement = nextNodeToHydrate() as Element);
  lastHydratedChild = null;

  if (!node || node.localName !== name) {
    throw new HydrateError();
  }

  return node;
}

export let endEl = originalEndEl;
function originalEndEl() {
  parentElement = parentElement!.parentNode as Element | DocumentFragment;
}

function hydrateEndEl() {
  lastHydratedChild = parentElement as Node | null;
  parentElement = parentElement!.parentNode as Element | DocumentFragment;
}

export function beginFragment(template: Template, rootFragment?: Fragment): Fragment {
  const fragment = new Fragment();
  const node = cloneTemplate(template);
  const isFragment = node.nodeType === NodeType.DocumentFragment;
  fragment.___dom = node;
  fragment.___parentFragment = rootFragment;
  fragment.___firstRef = fragment.___lastRef = fragment;
  fragment.___firstChild = walker.currentNode = isFragment ? node.firstChild! : node;
  fragment.___lastChild = isFragment ? node.lastChild! : node;

  return (parentFragment = fragment);
}

export function endFragment() {
  if (parentFragment!.___nextNode) {
    walker.currentNode = parentFragment!.___nextNode;
  }
  parentFragment = parentFragment!.___parentFragment;
}

export let text: typeof originalText | typeof hydrateText = originalText;
function originalText(value: string) {
  const textNode = doc.createTextNode(normalizeTextData(value));
  parentElement!.appendChild(textNode);
  return textNode;
}

function hydrateText(value: string) {
  const data = normalizeTextData(value);
  const node = nextNodeToHydrate() as Text;

  // Insert a new TextNode if the node to hydrate is missing, isn't text or
  // the data is empty, since we know empty text nodes won't be rendered from the server.
  if (data === "" || !node || node.nodeType !== 3 /** Node.TEXT_NODE */) {
    let ref: Node | null;

    if (lastHydratedChild) {
      ref = lastHydratedChild.nextSibling;
    } else {
      ref = parentElement!.firstChild;
    }

    lastHydratedChild = doc.createTextNode(data);
    parentElement!.insertBefore(lastHydratedChild, ref);
    return lastHydratedChild as Text;
  }

  const existingData = node.data;

  if (existingData !== data) {
    if (existingData.indexOf(data) === 0) {
      // We have a text node with more content in the browser than on the server.
      // This happens when there are dynamic text nodes next to static ones.
      // Here we split the text node so that the dynamic text also gets it's own node.
      node.splitText(data.length);
    } else {
      node.data = data;
    }
  }

  lastHydratedChild = node;

  return node;
}

export function dynamicText(value: MaybeSignal<unknown>) {
  const data = createComputation(_value => normalizeTextData(_value), [value]);
  const textNode = nextTextRef();
  createEffect(
    (_textNode, _data) => {
      _textNode.data = _data;
    },
    [textNode, data] as const
  );
  return textNode;
}

export function html(value: string) {
  const data = normalizeTextData(value);

  if (data) {
    const parser: Element = (parentElement!.nodeType ===
    11 /** Node.DOCUMENT_FRAGMENT_NODE */
      ? doc.body
      : parentElement!
    ).cloneNode() as Element;
    parser.innerHTML = value;

    while (parser.firstChild) {
      parentElement!.appendChild(parser.firstChild);
    }
  }
}

export function dynamicHTML(value: MaybeSignal<string>) {
  const emptyMarker = nextFragmentRef();
  let firstChild: Node = emptyMarker;
  let lastChild: Node = emptyMarker;

  createEffect(html => {
    parser.innerHTML = html;
    const content = parser.content;
    const parent = firstChild.parentNode!;
    const oldFirstChild = firstChild;
    const oldLastChild = lastChild;
    if (!content.firstChild) {
      content.appendChild(emptyMarker);
    }
    firstChild = content.firstChild!;
    lastChild = content.lastChild!;
    parent.insertBefore(content, oldFirstChild);
    withChildren(
      parent,
      oldFirstChild,
      oldLastChild,
      null,
      parent.removeChild
    );
  }, [value]);
}

export function attr(name: string, value: unknown) {
  setAttr(parentElement as Element, name, normalizeAttrValue(value));
}

export function dynamicAttr(name: string, value: unknown) {
  const elNode = lastElementRef;
  const data = createComputation(_value => normalizeAttrValue(_value), [value]);
  createEffect(setAttr, [elNode, name, data] as const);
}

export function dynamicTag(
  tag: MaybeSignal<string | RendererWithTemplate<Renderer>>,
  input: MaybeSignal<Record<string, unknown>>,
  renderBody: RendererWithTemplate<() => void> | undefined
) {
  const renderFns = new Map();

  return conditional(
    createComputation(
      _tag => {
        let nextRender = renderFns.get(_tag);
        if (!nextRender) {
          if (typeof _tag === "string") {
            nextRender = withTemplate(() => {
              nextElementRef();
              dynamicAttrs(input);

              if (renderBody) {
                renderBody();
              }
            }, createTemplate(`<${_tag} #>${renderBody ? renderBody.___template[1] : ""}</${_tag}>`));
          } else if (_tag) {
            if (_tag.input) {
              const tagInput = renderBody
                ? createComputation(_input => ({ ..._input, renderBody }), [
                    input
                  ])
                : input;
              nextRender = withTemplate(() => _tag(dynamicKeys(tagInput, _tag.input!)), _tag.___template);
            } else {
              nextRender = _tag;
            }
          } else {
            nextRender = renderBody;
          }
          renderFns.set(_tag, nextRender);
        }
        return nextRender;
      },
      [tag] as const
    )
  );
}

export function dynamicAttrs(
  attrs: MaybeSignal<Record<string, unknown> | null | undefined>
) {
  let previousAttrs: Raw<typeof attrs>;
  createEffect(
    (_elNode, _attrs) => {
      for (const name in previousAttrs) {
        if (!(_attrs && name in _attrs)) {
          _elNode.removeAttribute(name);
        }
      }
      for (const name in _attrs) {
        setAttr(_elNode, name, normalizeAttrValue(_attrs[name]));
      }
      previousAttrs = _attrs;
    },
    [lastElementRef, attrs] as const
  );
}

export function prop(name: string, value: unknown) {
  parentElement![name] = value;
}

export function dynamicProp(name: string, value: unknown) {
  createEffect((_elNode, _value) => (_elNode[name] = _value), [
    parentElement as Element,
    value
  ] as const);
}

export function dynamicProps(props: MaybeSignal<object>) {
  let previousProps: object;
  createEffect(
    (_elNode, _props) => {
      const nextProps = _props;
      for (const name in previousProps) {
        if (!(nextProps && name in nextProps)) {
          _elNode[name] = undefined;
        }
      }
      for (const name in nextProps) {
        _elNode[name] = nextProps[name];
      }
      previousProps = nextProps;
    },
    [parentElement as Element, props] as const
  );
}

export function beginHydrate(boundary: Node) {
  parentElement = boundary.parentNode as Element;
  lastHydratedChild = boundary;
  beginEl = hydrateBeginEl;
  endEl = hydrateEndEl;
  text = hydrateText;
}

export function endHydrate() {
  parentElement = lastHydratedChild = null;
  beginEl = originalBeginEl;
  endEl = originalEndEl;
  text = originalText;
}

function nextNodeToHydrate() {
  if (lastHydratedChild) {
    return lastHydratedChild!.nextSibling as ChildNode;
  }

  return parentElement!.firstChild as ChildNode;
}

function setAttr(element: Element, name: string, value: string | undefined) {
  if (value) {
    element.setAttribute(name, value);
  } else {
    element.removeAttribute(name);
  }
}

function normalizeAttrValue(value: unknown) {
  return value == null || value === false ? undefined : value + "";
}

function normalizeTextData(value: unknown) {
  return value == null ? "" : value + "";
}
