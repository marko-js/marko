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
import { Fragment, replaceFragment, removeFragment } from "./fragments";
import { conditional } from "./control-flow";

type NAMESPACES =
  | typeof TAG_NAMESPACES[keyof typeof TAG_NAMESPACES]
  | typeof DEFAULT_NS;
const DEFAULT_NS = "http://www.w3.org/1999/xhtml";
export const TAG_NAMESPACES = {
  svg: "http://www.w3.org/2000/svg",
  math: "http://www.w3.org/1998/Math/MathML"
} as const;

export class HydrateError extends Error {}
export let parentFragment: Fragment | undefined;
export let parentElement: Element | DocumentFragment | null = null;
export let currentNS: NAMESPACES = DEFAULT_NS;

export interface ComponentFragment<Input> extends DocumentFragment {
  rerender: (input: Input) => void;
  destroy: () => void;
}

const doc = document;
const detachedContainer = doc.createDocumentFragment();
let lastHydratedChild: Node | null = null;

export function createRenderer<T extends Renderer>(renderer: T) {
  type Input = Raw<Parameters<T>[0]>;
  return (input: Input) => {
    const inputSignal = dynamicKeys(createSignal(input), renderer.input!);
    const container = (parentElement = doc.createDocumentFragment()) as ComponentFragment<
      Input
    >;

    const placeholderFragment = beginFragment();
    endFragment(placeholderFragment);
    parentElement = null;

    const init = beginBatch();
    const fragment = beginFragment();
    createEffect(() => replaceFragment(placeholderFragment, fragment), []);
    renderer(inputSignal);
    endFragment(fragment);
    endBatch(init);

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

export function beginFragment(): Fragment {
  parentElement = parentElement || detachedContainer;
  const fragment = new Fragment();
  fragment.___firstChild = text("");
  fragment.___parentFragment = parentFragment;

  if (parentFragment) {
    parentFragment.___tracked.add(fragment);
  }

  return (parentFragment = fragment);
}

export function endFragment(fragment: Fragment) {
  fragment.___lastChild = text("");
  parentFragment = fragment.___parentFragment;
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
  let current: string;
  const data = createComputation(_value => normalizeTextData(_value), [value]);
  const textNode = text((current = get(data) || ""));
  createEffect(
    (_textNode, _data) => {
      if (current !== _data) {
        _textNode.data = _data;
      }
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
  conditional(createComputation(_value => () => html(_value), [value]));
}

export function attr(name: string, value: unknown) {
  setAttr(parentElement as Element, name, normalizeAttrValue(value));
}

export function dynamicAttr(name: string, value: unknown) {
  const elNode = parentElement as Element;
  const data = createComputation(_value => normalizeAttrValue(_value), [value]);
  createEffect(setAttr, [elNode, name, data] as const);
}

export function dynamicTag(
  tag: MaybeSignal<string | Renderer>,
  input: MaybeSignal<Record<string, unknown>>,
  renderBody: (() => void) | undefined
) {
  const renderFns = new Map();

  return conditional(
    createComputation(
      _tag => {
        let nextRender = renderFns.get(_tag);
        if (!nextRender) {
          if (typeof _tag === "string") {
            nextRender = () => {
              beginElNS(_tag);
              dynamicAttrs(input);

              if (renderBody) {
                renderBody();
              }

              endEl();
              endNS();
            };
          } else if (_tag) {
            if (_tag.input) {
              const tagInput = renderBody
                ? createComputation(_input => ({ ..._input, renderBody }), [
                    input
                  ])
                : input;
              nextRender = () => _tag(dynamicKeys(tagInput, _tag.input!));
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
    [parentElement as Element, attrs] as const
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
