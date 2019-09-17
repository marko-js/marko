import { MaybeSignal, Raw, compute, get, dynamicKeys } from "./signals";
import { Fragment, ContainerNode } from "./fragments";
import { conditional } from "./control-flow";

interface UnknownObject {
  [x: string]: unknown;
}
type Renderer = ((...input: unknown[]) => void) & {
  input?: string[];
};

export let currentFragment: Fragment | undefined;
export let currentNode: ContainerNode | undefined;
const doc = document;
const detachedContainer = doc.createDocumentFragment();
const parentForNode: WeakMap<
  ContainerNode,
  ContainerNode | undefined
> = new WeakMap();

export function render(renderer: Renderer, input: UnknownObject = {}) {
  const container = (currentNode = doc.createDocumentFragment());
  renderer(input);
  currentNode = undefined;
  return container;
}

export function el(name: string) {
  const elNode = beginEl(name);
  endEl();
  return elNode;
}

export function beginEl(name: string) {
  const parentNode = currentNode!;
  currentNode = doc.createElement(name);
  parentForNode.set(currentNode, parentNode);
  return currentNode;
}

export function endEl() {
  const parentNode = parentForNode.get(currentNode!)!;
  parentNode.appendChild(currentNode as Element);
  currentNode = parentNode;
}

export function beginFragment(fragment?: Fragment): Fragment {
  const parentNode = currentNode;
  const parentFragment = currentFragment;

  if (fragment) {
    currentFragment = fragment;
  } else {
    currentNode = currentNode || detachedContainer;
    currentFragment = new Fragment();
  }

  currentNode = currentFragment;
  currentFragment.___parent = parentFragment;
  parentForNode.set(currentNode, parentNode);

  if (parentFragment) {
    parentFragment.___tracked.add(currentFragment);
  }

  return currentFragment;
}

export function endFragment(fragment: Fragment) {
  currentFragment = fragment.___parent;
  currentNode = parentForNode.get(fragment)!;
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

export function text(value: string) {
  const textNode = doc.createTextNode(normalizeValue(value));
  currentNode!.appendChild(textNode);
  return textNode;
}

export function dynamicText(value: MaybeSignal<unknown>) {
  const textNode = text("");
  compute(() => (textNode.nodeValue = normalizeValue(get(value))));
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
