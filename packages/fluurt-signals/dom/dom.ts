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
import {
  Fragment,
  ContainerNode,
  DetachedElementWithParent,
  replaceFragment,
  removeFragment,
  resolveElement,
  clearFragment
} from "./fragments";
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
export let currentFragment: Fragment | undefined;
export let currentNode: ContainerNode | null = null;
export let currentNS: NAMESPACES = DEFAULT_NS;

const doc = document;
const detachedContainer = doc.createDocumentFragment();
let lastHydratedChild: Node | null = null;

export function createRenderer<T extends Renderer>(renderer: T) {
  type Input = Raw<Parameters<T>[0]>;
  return (input: Input) => {
    const inputSignal = dynamicKeys(createSignal(input), renderer.input!);
    const container = (currentNode = doc.createDocumentFragment()) as DocumentFragment & {
      rerender: (input: Input) => void;
      destroy: () => void;
    };

    const placeholderFragment = beginFragment();
    endFragment(placeholderFragment);
    currentNode = null;

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
  const parentNode = currentNode!;
  currentNode = doc.createElementNS(currentNS, name);
  currentNode.___eventualParentNode = parentNode;
  return currentNode;
}

function hydrateBeginEl(name: string) {
  const node = (currentNode = nextNodeToHydrate() as DetachedElementWithParent);
  lastHydratedChild = null;

  if (!node || node.localName !== name) {
    throw new HydrateError();
  }

  return node;
}

export let endEl = originalEndEl;
function originalEndEl() {
  const parentNode = currentNode!.___eventualParentNode!;
  parentNode.appendChild(currentNode as Element);
  currentNode!.___eventualParentNode = undefined;
  currentNode = parentNode;
}

function hydrateEndEl() {
  lastHydratedChild = currentNode as Node | null;
  currentNode = (currentNode as Element)
    .parentNode as DetachedElementWithParent;
}

export let beginFragment = originalBeginFragment;
function originalBeginFragment(fragment?: Fragment): Fragment {
  const parentNode = currentNode!;
  const parentFragment = currentFragment;

  if (fragment) {
    currentFragment = fragment;
  } else {
    currentNode = currentNode || detachedContainer;
    currentFragment = new Fragment();
    currentFragment.___before = text("");
    currentFragment.___after = text("");
  }

  currentFragment.___parentFragment = parentFragment;
  currentFragment.___eventualParentNode = parentNode;
  currentNode = currentFragment;

  if (parentFragment) {
    parentFragment.___tracked.add(currentFragment);
  }

  return currentFragment;
}

function hydrateBeginFragment(fragment?: Fragment) {
  if (!fragment) {
    fragment = new Fragment();
    fragment.___before = text("");
  }
  originalBeginFragment(fragment);
  return fragment;
}

export let endFragment = originalEndFragment;
function originalEndFragment(fragment: Fragment) {
  currentFragment = fragment.___parentFragment;
  currentNode = fragment.___eventualParentNode!;
  fragment.___eventualParentNode = undefined;
}

function hydrateEndFragment(fragment: Fragment) {
  originalEndFragment(fragment);
  fragment.___after = text("");
}

export let text: typeof originalText | typeof hydrateText = originalText;
function originalText(value: string) {
  const textNode = doc.createTextNode(normalizeTextData(value));
  currentNode!.appendChild(textNode);
  return textNode;
}

function hydrateText(value: string) {
  const data = normalizeTextData(value);
  const node = nextNodeToHydrate() as Text;

  // Insert a new TextNode if the node to hydrate is missing, isn't text or
  // the data is empty, since we know empty text nodes won't be rendered from the server.
  if (data === "" || !node || node.nodeType !== 3 /** Node.TEXT_NODE */) {
    let parentNode: Element;
    let ref: Node | null;

    if (lastHydratedChild) {
      parentNode = lastHydratedChild.parentNode as Element;
      ref = lastHydratedChild.nextSibling;
    } else {
      // currentNode shouldn't be a fragment here, since fragment would have set lastHydratedChild.
      parentNode = currentNode as Element;
      ref = parentNode.firstChild;
    }

    lastHydratedChild = doc.createTextNode(data);
    parentNode.insertBefore(lastHydratedChild, ref);
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
    const parentNode = resolveElement(currentNode!);
    const parser: Element = (parentNode.nodeType ===
    11 /** Node.DOCUMENT_FRAGMENT_NODE */
      ? doc.body
      : parentNode
    ).cloneNode() as Element;
    parser.innerHTML = value;

    while (parser.firstChild) {
      currentNode!.appendChild(parser.firstChild);
    }
  }
}

export function dynamicHTML(value: MaybeSignal<string>) {
  const fragment: Fragment = beginFragment();
  endFragment(fragment);
  createEffect(
    (_fragment, _value) => {
      clearFragment(_fragment);
      beginFragment(_fragment);
      html(_value);
      endFragment(_fragment);
    },
    [fragment, value] as const
  );
}

export function attr(name: string, value: unknown) {
  setAttr(currentNode as Element, name, normalizeAttrValue(value));
}

export function dynamicAttr(name: string, value: unknown) {
  const elNode = currentNode as Element;
  const data = createComputation(_value => normalizeAttrValue(_value), [value]);
  createEffect(setAttr, [elNode, name, data]);
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
    [currentNode as Element, attrs] as const
  );
}

export function prop(name: string, value: unknown) {
  currentNode![name] = value;
}

export function dynamicProp(name: string, value: unknown) {
  createEffect((_elNode, _value) => (_elNode[name] = _value), [
    currentNode as Element,
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
    [currentNode as Element, props] as const
  );
}

export function beginHydrate(boundary: Node) {
  currentNode = boundary.parentNode as DetachedElementWithParent;
  lastHydratedChild = boundary;
  beginFragment = hydrateBeginFragment;
  endFragment = hydrateEndFragment;
  beginEl = hydrateBeginEl;
  endEl = hydrateEndEl;
  text = hydrateText;
}

export function endHydrate() {
  currentNode = lastHydratedChild = null;
  beginFragment = originalBeginFragment;
  endFragment = originalEndFragment;
  beginEl = originalBeginEl;
  endEl = originalEndEl;
  text = originalText;
}

function nextNodeToHydrate() {
  if (lastHydratedChild) {
    return lastHydratedChild!.nextSibling as ChildNode;
  }

  // This branch is only taken when we enter a new element (fragments won't go down this path).
  return (currentNode as Element).firstChild as ChildNode;
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
