import { MaybeSignal, compute, computeInput, get } from "./signals";
import { Fragment, ContainerNode } from "./fragments";
import { conditional } from "./control-flow";

export function el(name: string, parent: ContainerNode) {
  return parent.ownerDocument!.createElement(name);
}

export function endEl(elNode: Element, parent: ContainerNode) {
  parent.appendChild(elNode);
}

export function dynamicTag(
  tag: MaybeSignal<
    | string
    | (((input: MaybeSignal<object>, parent: ContainerNode) => void) & {
        names: string[];
      })
  >,
  input: MaybeSignal<object>,
  parent: ContainerNode,
  body: ((parent: ContainerNode) => void) | undefined
) {
  const renderFns = new Map();

  return conditional(
    compute(() => {
      const nextTag = get(tag);
      let nextRender = renderFns.get(nextTag);
      if (!nextRender) {
        if (typeof nextTag === "string") {
          nextRender = (fragmentParent: Fragment) => {
            const nextEl = el(nextTag, fragmentParent);
            dynamicAttrs(nextEl, input);
            if (body) {
              body(nextEl);
            }
            endEl(nextEl, fragmentParent);
          };
        } else if (nextTag) {
          const getInput = body
            ? () => ({ ...get(input), renderBody: body })
            : () => input;
          nextRender = (fragmentParent: Fragment) =>
            nextTag(computeInput(getInput, nextTag.names), fragmentParent);
        } else {
          nextRender = body || (() => {});
        }
        renderFns.set(nextTag, nextRender);
      }
      return nextRender;
    }),
    parent
  );
}

export function text(value: string, parent: ContainerNode) {
  const textNode = parent.ownerDocument!.createTextNode(normalizeValue(value));
  parent.appendChild(textNode);
  return textNode;
}

export function dynamicText(value: MaybeSignal<string>, parent: ContainerNode) {
  const textNode = text("", parent);
  compute(() => (textNode.nodeValue = normalizeValue(get(value))));
  return textNode;
}

export function attr(
  element: Element,
  name: string,
  value: unknown,
  remove?: boolean
) {
  const normalized = normalizeAttributeValue(value);
  if (normalized) {
    element.setAttribute(name, normalized);
  } else if (remove) {
    element.removeAttribute(name);
  }
}

export function dynamicAttr(element: Element, name: string, value: unknown) {
  compute(() => attr(element, name, get(value), true));
}

export function dynamicAttrs(element: Element, attrs: MaybeSignal<object>) {
  let previousAttrs: object;
  const seenAttrs: Set<string> = new Set();
  compute(() => {
    const nextAttrs = get(attrs);
    for (const name in previousAttrs) {
      if (!nextAttrs.hasOwnProperty(name)) {
        element.removeAttribute(name);
      }
    }
    if (seenAttrs.has(name)) {
      for (const name in nextAttrs) {
        if (seenAttrs.has(name)) {
          attr(element, name, get(nextAttrs[name]), true);
        }
      }
    }
    previousAttrs = nextAttrs;
  });
}

export function prop(element: Element, name: string, value: unknown) {
  element[name] = value;
}

export function dynamicProp(element: Element, name: string, value: unknown) {
  compute(() => (element[name] = get(value)));
}

export function dynamicProps(element: Element, props: MaybeSignal<object>) {
  let previousProps: object;
  compute(() => {
    const nextProps = get(props);
    for (const name in previousProps) {
      if (!nextProps.hasOwnProperty(name)) {
        delete element[name];
      }
    }
    for (const name in nextProps) {
      element[name] = nextProps[name];
    }
    previousProps = nextProps;
  });
}

function normalizeAttributeValue(value: unknown) {
  return value == null || value === false ? undefined : value + "";
}

function normalizeValue(value: unknown) {
  return value == null ? "" : value + "";
}
