import { MaybeSignal, Raw, compute, get, dynamicKeys } from "./signals";
import {
  Fragment,
  ContainerNode,
  DetachedElementWithParent
} from "./fragments";
import { conditional } from "./control-flow";

interface UnknownObject {
  [x: string]: unknown;
}
export type Renderer = ((...input: unknown[]) => void) & {
  input?: string[];
};

export class HydrateError extends Error {}
export let currentFragment: Fragment | undefined;
export let currentNode: ContainerNode | null = null;

const doc = document;
const detachedContainer = doc.createDocumentFragment();
let lastHydratedChild: Node | null = null;
let nextNodeToHydrate: typeof nextSiblingToHydrate | typeof firstChildToHydrate;

export function render(renderer: Renderer, input: UnknownObject = {}) {
  const container = (currentNode = doc.createDocumentFragment());
  renderer(input);
  currentNode = null;
  return container;
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
  currentNode = doc.createElement(name);
  currentNode.___eventualParentNode = parentNode;
  return currentNode;
}

function hydrateBeginEl(name: string) {
  const node = (currentNode = nextNodeToHydrate() as DetachedElementWithParent);
  nextNodeToHydrate = firstChildToHydrate;
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
  nextNodeToHydrate = nextSiblingToHydrate;
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
    currentFragment = new Fragment(text(""), text(""));
  }

  currentFragment.___parentFragment = parentFragment;
  currentFragment.___eventualParentNode = parentNode;
  currentNode = currentFragment;

  if (parentFragment) {
    parentFragment.___tracked.add(currentFragment);
  }

  return currentFragment;
}

function hydrateBeginFragment() {
  const fragment = new Fragment(insertTextAtCurrentHydratePosition(""));
  originalBeginFragment(fragment);
  nextNodeToHydrate = nextSiblingToHydrate;
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
  fragment.___after = insertTextAtCurrentHydratePosition("");
}

export function dynamicTag(
  tag: MaybeSignal<string | Renderer>,
  input: MaybeSignal<UnknownObject>,
  body: (() => void) | undefined
) {
  const renderFns = new Map();

  return conditional(
    compute(() => {
      const nextTag = get(tag);
      let nextRender = renderFns.get(nextTag);
      if (!nextRender) {
        if (typeof nextTag === "string") {
          nextRender = () => {
            beginEl(nextTag);
            dynamicAttrs(input);
            if (body) {
              body();
            }
            endEl();
          };
        } else if (nextTag) {
          if (nextTag.input) {
            const tagInput = body
              ? compute(() => ({ ...get(input), renderBody: body }))
              : input;
            nextRender = () => nextTag(dynamicKeys(tagInput, nextTag.input!));
          } else {
            nextRender = nextTag;
          }
        } else {
          nextRender = body || (() => {});
        }
        renderFns.set(nextTag, nextRender);
      }
      return nextRender;
    })
  );
}

export let text: typeof originalText | typeof hydrateText = originalText;
function originalText(value: string) {
  const textNode = doc.createTextNode(normalizeValue(value));
  currentNode!.appendChild(textNode);
  return textNode;
}

function hydrateText(value: string) {
  let node = nextNodeToHydrate() as Text;
  const normalized = normalizeValue(value);

  if (node && node.nodeType === 3 /** Node.TEXT_NODE */) {
    node.data = normalized;
  } else {
    node = insertTextAtCurrentHydratePosition(normalized);
  }

  lastHydratedChild = node;

  return node;
}

export function dynamicText(value: MaybeSignal<unknown>) {
  const textNode = text("");
  compute(() => (textNode.data = normalizeValue(get(value))));
  return textNode;
}

export function attr(name: string, value: unknown) {
  setAttr(currentNode as Element, name, value);
}

export function dynamicAttr(name: string, value: unknown) {
  const elNode = currentNode as Element;
  compute(() => {
    setAttr(elNode, name, get(value));
  });
}

export function dynamicAttrs(
  attrs: MaybeSignal<UnknownObject | null | undefined>
) {
  const elNode = currentNode as Element;
  let previousAttrs: Raw<typeof attrs>;
  compute(() => {
    const nextAttrs = get(attrs);
    for (const name in previousAttrs) {
      if (!(nextAttrs && name in nextAttrs)) {
        elNode.removeAttribute(name);
      }
    }
    for (const name in nextAttrs) {
      setAttr(elNode, name, get(nextAttrs[name]));
    }
    previousAttrs = nextAttrs;
  });
}

export function prop(name: string, value: unknown) {
  currentNode![name] = value;
}

export function dynamicProp(name: string, value: unknown) {
  const elNode = currentNode;
  compute(() => (elNode![name] = get(value)));
}

export function dynamicProps(props: MaybeSignal<object>) {
  const elNode = currentNode;
  let previousProps: object;
  compute(() => {
    const nextProps = get(props);
    for (const name in previousProps) {
      if (!(nextProps && name in nextProps)) {
        elNode![name] = undefined;
      }
    }
    for (const name in nextProps) {
      elNode![name] = nextProps[name];
    }
    previousProps = nextProps;
  });
}

export function beginHydrate(boundary: Node) {
  nextNodeToHydrate = nextSiblingToHydrate;
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

function insertTextAtCurrentHydratePosition(value: string) {
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

  const node = doc.createTextNode(value);
  parentNode.insertBefore(node, ref);
  lastHydratedChild = node;
  return node;
}

function nextSiblingToHydrate() {
  return lastHydratedChild!.nextSibling as ChildNode;
}

function firstChildToHydrate() {
  // This branch is only taken when we enter a new element (fragments won't go down this path).
  nextNodeToHydrate = nextSiblingToHydrate;
  return (currentNode as Element).firstChild as ChildNode;
}

function setAttr(element: Element, name: string, value: unknown) {
  const normalized = value == null || value === false ? undefined : value + "";
  if (normalized) {
    element.setAttribute(name, normalized);
  } else {
    element.removeAttribute(name);
  }
}

function normalizeValue(value: unknown) {
  return value == null ? "" : value + "";
}
