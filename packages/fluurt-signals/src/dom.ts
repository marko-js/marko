import { MaybeSignal, Raw, compute, get, dynamicKeys } from "./signals";
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
    | (((parent: ContainerNode, ...input: unknown[]) => void) & {
        input?: string[];
      })
  >,
  input: MaybeSignal<{ [x: string]: unknown }>,
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
          if (nextTag.input) {
            const tagInput = body
              ? compute(() => ({ ...get(input), renderBody: body }))
              : input;
            nextRender = (fragmentParent: Fragment) =>
              nextTag(fragmentParent, dynamicKeys(tagInput, nextTag.input!));
          } else {
            nextRender = (fragmentParent: Fragment) => nextTag(fragmentParent);
          }
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

export function dynamicText(
  value: MaybeSignal<string | undefined>,
  parent: ContainerNode
) {
  const textNode = text("", parent);
  compute(() => (textNode.nodeValue = normalizeValue(get(value))));
  return textNode;
}

export function attr(element: Element, name: string, value: unknown) {
  const normalized = normalizeAttributeValue(value);
  if (normalized) {
    element.setAttribute(name, normalized);
  } else {
    element.removeAttribute(name);
  }
}

export function dynamicAttr(element: Element, name: string, value: unknown) {
  compute(() => attr(element, name, get(value)));
}

export function dynamicAttrs(
  element: Element,
  attrs: MaybeSignal<{ [x: string]: unknown } | null | undefined>
) {
  let previousAttrs: Raw<typeof attrs>;
  compute(() => {
    const nextAttrs = get(attrs);
    for (const name in previousAttrs) {
      if (!nextAttrs || !nextAttrs.hasOwnProperty(name)) {
        element.removeAttribute(name);
      }
    }
    for (const name in nextAttrs) {
      attr(element, name, get(nextAttrs[name]));
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
