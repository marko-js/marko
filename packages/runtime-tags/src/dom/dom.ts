import {
  assertExclusiveAttrs,
  assertValidAttrName,
  assertValidAttrValue,
  assertValidTextValue,
} from "../common/errors";
import {
  escapeStyleValue,
  getEventHandlerName,
  isEventHandler,
  normalizeAttrValue,
  normalizeDynamicRenderer,
  stringifyClassObject,
  stringifyStyleObject,
  toDelimitedString,
} from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  ControlledType,
  RendererProp,
  type Scope,
} from "../common/types";
import { $signal } from "./abort-signal";
import { setConditionalRenderer } from "./control-flow";
import { type ControllableAttrs, controllableScripts } from "./controllable";
import { _on } from "./event";
import { parseHTML } from "./parse-html";
import { createAndSetupBranch, type Renderer } from "./renderer";
import { _id, subscribeToScopeSet } from "./signals";

export function _to_text(value: unknown) {
  if (MARKO_DEBUG) {
    assertValidTextValue(value);
  }
  // Numeric 0 is special-cased so it still renders; bigint `0n` deliberately is
  // not (not worth the DOM-runtime size).
  return value || value === 0 ? value + "" : "";
}

export function _attr(element: Element, name: string, value: unknown) {
  if (MARKO_DEBUG) {
    assertValidAttrValue(name, value);
  }
  setAttribute(element, name, normalizeAttrValue(value));
}

export function setAttribute(
  element: Element,
  name: string,
  value: string | undefined,
) {
  // TODO: benchmark if it is actually faster to check first
  if (element.getAttribute(name) != value) {
    if (value === undefined) {
      element.removeAttribute(name);
    } else {
      element.setAttribute(name, value);
    }
  }
}

export function _attr_class(element: Element, value: unknown) {
  setAttribute(
    element,
    "class",
    toDelimitedString(value, " ", stringifyClassObject) || undefined,
  );
}

export function _attr_class_items(
  element: Element,
  items: Record<string, unknown>,
) {
  for (const key in items) {
    _attr_class_item(element, key, items[key]);
  }
}

export function _attr_class_item(
  element: Element,
  name: string,
  value: unknown,
) {
  element.classList.toggle(name, !!value);
}

export function _attr_style(element: Element, value: unknown) {
  setAttribute(
    element,
    "style",
    toDelimitedString(value, ";", stringifyStyleObject) || undefined,
  );
}

export function _attr_style_items(
  element: HTMLElement,
  items: Record<string, unknown>,
) {
  for (const key in items) {
    _attr_style_item(element, key, items[key]);
  }
}

export function _attr_style_item(
  element: HTMLElement,
  name: string,
  value: unknown,
) {
  element.style.setProperty(name, _to_text(value));
}

export function _style_shell(scope: Scope, nodeAccessor: Accessor) {
  const element = scope[nodeAccessor] as HTMLStyleElement;
  const id = _id(scope);
  _attr_nonce(scope, nodeAccessor);
  element.className = id;
  _text_content(element, "." + id + "~*{}");
}

export function _style_rule_item(
  element: HTMLStyleElement,
  name: string,
  value: unknown,
) {
  const text = element.textContent!;
  const decl = name + ":" + escapeStyleValue(_to_text(value)) + ";";
  let start = text.indexOf("{" + name + ":");
  if (!~start) start = text.indexOf(";" + name + ":");
  _text_content(
    element,
    ~start
      ? // `escapeStyleValue` never emits a raw `;`, so the next one ends the declaration.
        text.slice(0, ++start) + decl + text.slice(text.indexOf(";", start) + 1)
      : text.slice(0, -1) + decl + "}",
  );
}

export function _attr_nonce(scope: Scope, nodeAccessor: Accessor) {
  _attr(scope[nodeAccessor], "nonce", scope[AccessorProp.Global].cspNonce);
}

export function _text(node: Text | Comment, value: unknown) {
  const normalizedValue = _to_text(value);
  // TODO: benchmark if it is actually faster to check data first
  if (node.data !== normalizedValue) {
    node.data = normalizedValue;
  }
}

export function _text_content(node: ParentNode, value: unknown) {
  const normalizedValue = _to_text(value);
  // TODO: benchmark if it is actually faster to check data first
  if (node.textContent !== normalizedValue) {
    node.textContent = normalizedValue;
  }
}

export function _attrs(
  scope: Scope,
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
  controllable?: ControllableAttrs,
) {
  const el = scope[nodeAccessor] as Element;
  for (let i = el.attributes.length; i--;) {
    const { name } = el.attributes.item(i)!;
    if (
      !(nextAttrs && (name in nextAttrs || hasAttrAlias(el, name, nextAttrs)))
    ) {
      el.removeAttribute(name);
    }
  }

  if (MARKO_DEBUG) {
    assertExclusiveAttrs(nextAttrs);
  }

  attrsInternal(scope, nodeAccessor, nextAttrs, controllable);
}

export function _attrs_content(
  scope: Scope,
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
  controllable?: ControllableAttrs,
) {
  _attrs(scope, nodeAccessor, nextAttrs, controllable);
  _attr_content(scope, nodeAccessor, nextAttrs?.content);
}

function hasAttrAlias(
  element: Element,
  attr: string,
  nextAttrs: Record<string, unknown>,
) {
  return (
    attr === "checked" &&
    element.tagName === "INPUT" &&
    "checkedValue" in nextAttrs
  );
}

export function _attrs_partial(
  scope: Scope,
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
  skip: Record<string, 1>,
  controllable?: ControllableAttrs,
) {
  const el = scope[nodeAccessor] as Element;
  const partial: Partial<typeof nextAttrs> = {};

  for (let i = el.attributes.length; i--;) {
    const { name } = el.attributes.item(i)!;
    if (!skip[name] && !(nextAttrs && name in nextAttrs)) {
      el.removeAttribute(name);
    }
  }

  for (const name in nextAttrs) {
    const key = isEventHandler(name) ? `on-${getEventHandlerName(name)}` : name;
    if (!skip[key]) partial[key] = nextAttrs[name];
  }

  if (MARKO_DEBUG) {
    assertExclusiveAttrs({ ...nextAttrs, ...skip });
  }

  attrsInternal(scope, nodeAccessor, partial, controllable);
}

export function _attrs_partial_content(
  scope: Scope,
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
  skip: Record<string, 1>,
  controllable?: ControllableAttrs,
) {
  _attrs_partial(scope, nodeAccessor, nextAttrs, skip, controllable);
  _attr_content(scope, nodeAccessor, nextAttrs?.content);
}

function attrsInternal(
  scope: Scope,
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
  controllable?: ControllableAttrs,
) {
  const el = scope[nodeAccessor] as Element;
  let events = scope[AccessorPrefix.EventAttributes + nodeAccessor] as
    | undefined
    | Record<string, unknown>;
  let skip: RegExp | void = undefined;
  for (const name in events) events[name] = 0;
  // Only a spread that claims the element's controllable may release it; one
  // owned by a static attr is installed by a signal that does not re-run here.
  if (controllable) {
    scope[AccessorPrefix.ControlledType + nodeAccessor] = ControlledType.None;
    scope[AccessorPrefix.ControlledHandler + nodeAccessor] = 0;
    // A lone `null`/`undefined`/`false` spread reaches here unwrapped, and has
    // no controlled attrs to claim; the attr loop below is a no-op on it.
    if (nextAttrs) skip = controllable(scope, nodeAccessor, nextAttrs);
  }

  // https://jsperf.com/object-keys-vs-for-in-with-closure/194
  for (const name in nextAttrs) {
    const value = nextAttrs[name];
    switch (name) {
      case "class":
        _attr_class(el, value);
        break;
      case "style":
        _attr_style(el, value);
        break;
      default: {
        if (MARKO_DEBUG) {
          assertValidAttrName(name);
        }

        if (isEventHandler(name)) {
          (events ||= scope[AccessorPrefix.EventAttributes + nodeAccessor] =
            {})[getEventHandlerName(name)] = value;
        } else if (
          !(skip?.test(name) || (name === "content" && el.tagName !== "META"))
        ) {
          _attr(el, name, value);
        }
        break;
      }
    }
  }
}

export function _attr_content(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
) {
  const content = normalizeClientRender(value);
  if (
    scope[AccessorPrefix.ConditionalRenderer + nodeAccessor] !==
    (scope[AccessorPrefix.ConditionalRenderer + nodeAccessor] =
      content?.[RendererProp.Id])
  ) {
    setConditionalRenderer(scope, nodeAccessor, content, createAndSetupBranch);
    if (content?.[RendererProp.Accessor]) {
      subscribeToScopeSet(
        content[RendererProp.Owner]!,
        content[RendererProp.Accessor],
        scope[AccessorPrefix.BranchScopes + nodeAccessor],
      );
    }
  }

  for (const accessor in content?.[RendererProp.LocalClosures]) {
    content![RendererProp.LocalClosures]![accessor](
      scope[AccessorPrefix.BranchScopes + nodeAccessor],
      content![RendererProp.LocalClosureValues]![accessor],
    );
  }
}

export function _attrs_script(scope: Scope, nodeAccessor: Accessor) {
  const el = scope[nodeAccessor] as Element;
  const events = scope[AccessorPrefix.EventAttributes + nodeAccessor] as Record<
    string,
    any
  >;

  // A table, not a switch: naming each handler here, or a case per kind, puts
  // all five in this shared function, so every page with a spread pays.
  controllableScripts[
    scope[AccessorPrefix.ControlledType + nodeAccessor] as ControlledType
  ]?.(scope, nodeAccessor);

  for (const name in events) {
    _on(el, name as any, events[name] as any);
  }
}

export function _html(scope: Scope, value: unknown, accessor: Accessor) {
  const firstChild = scope[accessor] as ChildNode;
  const parentNode = firstChild.parentNode!;
  const lastChild = (scope[AccessorPrefix.DynamicHTMLLastChild + accessor] ||
    firstChild) as ChildNode;
  const newContent = parseHTML(
    _to_text(value),
    (parentNode as Element).namespaceURI!,
  );

  insertChildNodes(
    parentNode,
    firstChild,
    (scope[accessor] =
      newContent.firstChild || newContent.appendChild(new Text())),
    (scope[AccessorPrefix.DynamicHTMLLastChild + accessor] =
      newContent.lastChild!),
  );
  removeChildNodes(firstChild, lastChild);
}

function normalizeClientRender(value: any) {
  const renderer = normalizeDynamicRenderer<Renderer>(value);
  if (renderer) {
    if ((renderer as Renderer)[RendererProp.Id]) {
      return renderer as Renderer;
    } else if (MARKO_DEBUG) {
      throw new Error(
        `Invalid \`content\` attribute. Received ${typeof value}`,
      );
    }
  }
}

export function _lifecycle(
  scope: Scope,
  thisObj: Record<string, unknown> & {
    onMount?: (this: unknown) => Record<string, unknown> | void;
    onUpdate?: (this: unknown) => void;
    onDestroy?: (this: unknown) => void;
  },
  index: number = 0,
) {
  const accessor = AccessorPrefix.Lifecycle + index;
  const instance = scope[accessor] as typeof thisObj;
  if (instance) {
    Object.assign(instance, thisObj);
    instance.onUpdate?.();
  } else {
    scope[accessor] = thisObj;
    if (MARKO_DEBUG) {
      const snapshot = { ...thisObj };
      Object.assign(thisObj, thisObj.onMount?.());
      for (const prop in snapshot) {
        if (!Object.is(snapshot[prop], thisObj[prop])) {
          throw new Error(
            `Tried to overwrite existing property "${prop}" in <lifecycle> onMount.`,
          );
        }
      }
    } else {
      Object.assign(thisObj, thisObj.onMount?.());
    }
    $signal(scope, accessor).onabort = () => thisObj.onDestroy?.();
  }
}

export function removeChildNodes(startNode: ChildNode, endNode: ChildNode) {
  const stop = endNode.nextSibling;
  while (startNode !== stop) {
    const next = startNode.nextSibling;
    startNode.remove();
    startNode = next!;
  }
}

export function insertChildNodes(
  parentNode: ParentNode,
  referenceNode: Node | null,
  startNode: Node,
  endNode: Node,
) {
  // Branches are assembled into a detached tree, where staging the range in a
  // DocumentFragment costs an allocation and buys no layout work.
  if ((parentNode as Node).isConnected) {
    parentNode.insertBefore(toInsertNode(startNode, endNode), referenceNode);
  } else {
    const stop = endNode.nextSibling;
    while (startNode !== stop) {
      const next = startNode.nextSibling;
      parentNode.insertBefore(startNode, referenceNode);
      startNode = next!;
    }
  }
  return parentNode;
}

export function toInsertNode(startNode: Node, endNode: Node) {
  return startNode === endNode
    ? startNode
    : insertChildNodes(new DocumentFragment(), null, startNode, endNode);
}
