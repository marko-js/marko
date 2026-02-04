import { assertExclusiveAttrs } from "../common/errors";
import {
  classValue,
  getEventHandlerName,
  isEventHandler,
  normalizeDynamicRenderer,
  styleValue,
} from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  ControlledType,
  type Scope,
} from "../common/types";
import { $signal } from "./abort-signal";
import { setConditionalRenderer } from "./control-flow";
import {
  _attr_details_or_dialog_open,
  _attr_details_or_dialog_open_script,
  _attr_input_checked,
  _attr_input_checked_script,
  _attr_input_checkedValue,
  _attr_input_checkedValue_script,
  _attr_input_value,
  _attr_input_value_script,
  _attr_select_value,
  _attr_select_value_script,
  _attr_textarea_value,
} from "./controllable";
import { _on } from "./event";
import { parseHTML } from "./parse-html";
import { createAndSetupBranch, type Renderer } from "./renderer";
import { subscribeToScopeSet } from "./signals";

export function _to_text(value: unknown) {
  return value || value === 0 ? value + "" : "";
}

export function _attr(element: Element, name: string, value: unknown) {
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
  setAttribute(element, "class", classValue(value) || undefined);
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
  setAttribute(element, "style", styleValue(value) || undefined);
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
  element.style.setProperty(name, value || value === 0 ? value + "" : "");
}

export function _attr_nonce(scope: Scope, nodeAccessor: Accessor) {
  _attr(scope[nodeAccessor], "nonce", scope[AccessorProp.Global].cspNonce);
}

export function _text(node: Text | Comment, value: unknown) {
  const normalizedValue = normalizeString(value);
  // TODO: benchmark if it is actually faster to check data first
  if (node.data !== normalizedValue) {
    node.data = normalizedValue;
  }
}

export function _text_content(node: ParentNode, value: unknown) {
  const normalizedValue = normalizeString(value);
  // TODO: benchmark if it is actually faster to check data first
  if (node.textContent !== normalizedValue) {
    node.textContent = normalizedValue;
  }
}

export function _attrs(
  scope: Scope,
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
) {
  const el = scope[nodeAccessor] as Element;
  for (let i = el.attributes.length; i--; ) {
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

  attrsInternal(scope, nodeAccessor, nextAttrs);
}

export function _attrs_content(
  scope: Scope,
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
) {
  _attrs(scope, nodeAccessor, nextAttrs);
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
) {
  const el = scope[nodeAccessor] as Element;
  const partial: Partial<typeof nextAttrs> = {};

  for (let i = el.attributes.length; i--; ) {
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

  attrsInternal(scope, nodeAccessor, partial);
}

export function _attrs_partial_content(
  scope: Scope,
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
  skip: Record<string, 1>,
) {
  _attrs_partial(scope, nodeAccessor, nextAttrs, skip);
  _attr_content(scope, nodeAccessor, nextAttrs?.content);
}

function attrsInternal(
  scope: Scope,
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
) {
  const el = scope[nodeAccessor] as Element;
  let events: undefined | Record<string, unknown>;
  let skip: RegExp | undefined;
  switch (el.tagName) {
    case "INPUT":
      if ("checked" in nextAttrs || "checkedChange" in nextAttrs) {
        _attr_input_checked(
          scope,
          nodeAccessor,
          nextAttrs.checked,
          nextAttrs.checkedChange,
        );
      } else if (
        "checkedValue" in nextAttrs ||
        "checkedValueChange" in nextAttrs
      ) {
        _attr_input_checkedValue(
          scope,
          nodeAccessor,
          nextAttrs.checkedValue,
          nextAttrs.checkedValueChange,
          nextAttrs.value,
        );
      } else if ("value" in nextAttrs || "valueChange" in nextAttrs) {
        _attr_input_value(
          scope,
          nodeAccessor,
          nextAttrs.value,
          nextAttrs.valueChange,
        );
      } else {
        break;
      }
      skip = /^(?:value|checked(?:Value)?)(?:Change)?$/;
      break;
    case "SELECT":
      if ("value" in nextAttrs || "valueChange" in nextAttrs) {
        _attr_select_value(
          scope,
          nodeAccessor,
          nextAttrs.value,
          nextAttrs.valueChange,
        );
        skip = /^value(?:Change)?$/;
      }
      break;
    case "TEXTAREA":
      if ("value" in nextAttrs || "valueChange" in nextAttrs) {
        _attr_textarea_value(
          scope,
          nodeAccessor,
          nextAttrs.value,
          nextAttrs.valueChange,
        );
        skip = /^value(?:Change)?$/;
      }
      break;
    case "DETAILS":
    case "DIALOG":
      if ("open" in nextAttrs || "openChange" in nextAttrs) {
        _attr_details_or_dialog_open(
          scope,
          nodeAccessor,
          nextAttrs.open,
          nextAttrs.openChange,
        );
        skip = /^open(?:Change)?$/;
      }
      break;
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
  const rendererAccessor = AccessorPrefix.ConditionalRenderer + nodeAccessor;
  if (scope[rendererAccessor] !== (scope[rendererAccessor] = content?.___id)) {
    setConditionalRenderer(scope, nodeAccessor, content, createAndSetupBranch);
    if (content?.___accessor) {
      subscribeToScopeSet(
        content.___owner!,
        content.___accessor,
        scope[AccessorPrefix.BranchScopes + nodeAccessor],
      );
    }
  }
}

export function _attrs_script(scope: Scope, nodeAccessor: Accessor) {
  const el = scope[nodeAccessor] as Element;
  const events = scope[AccessorPrefix.EventAttributes + nodeAccessor] as Record<
    string,
    any
  >;

  switch (scope[AccessorPrefix.ControlledType + nodeAccessor]) {
    case ControlledType.InputChecked:
      _attr_input_checked_script(scope, nodeAccessor);
      break;
    case ControlledType.InputCheckedValue:
      _attr_input_checkedValue_script(scope, nodeAccessor);
      break;
    case ControlledType.InputValue:
      _attr_input_value_script(scope, nodeAccessor);
      break;
    case ControlledType.SelectValue:
      _attr_select_value_script(scope, nodeAccessor);
      break;
    case ControlledType.DetailsOrDialogOpen:
      _attr_details_or_dialog_open_script(scope, nodeAccessor);
      break;
  }

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
    value || value === 0 ? value + "" : "",
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

export function normalizeClientRender(value: any) {
  const renderer = normalizeDynamicRenderer<Renderer>(value);
  if (renderer) {
    if ((renderer as Renderer).___id) {
      return renderer as Renderer;
    } else if (MARKO_DEBUG) {
      throw new Error(
        `Invalid \`content\` attribute. Received ${typeof value}`,
      );
    }
  }
}

export function normalizeAttrValue(value: unknown) {
  if (value || value === 0) {
    return value === true ? "" : value + "";
  }
}

function normalizeString(value: unknown) {
  return value || value === 0 ? value + "" : "\u200d";
}
export function _lifecycle(
  scope: Scope,
  thisObj: Record<string, unknown> & {
    onMount?: (this: unknown) => void;
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
    thisObj.onMount?.();
    $signal(scope, accessor).onabort = () => thisObj.onDestroy?.();
  }
}

export function removeChildNodes(startNode: ChildNode, endNode: ChildNode) {
  const stop = endNode.nextSibling;
  let current = startNode;
  while (current !== stop) {
    const next = current.nextSibling;
    current.remove();
    current = next!;
  }
}

export function insertChildNodes(
  parentNode: ParentNode,
  referenceNode: Node | null,
  startNode: Node,
  endNode: Node,
) {
  parentNode.insertBefore(toInsertNode(startNode, endNode), referenceNode);
}

export function toInsertNode(startNode: Node, endNode: Node) {
  if (startNode === endNode) return startNode;
  const parent = new DocumentFragment();
  const stop = endNode.nextSibling;
  let current = startNode;
  while (current !== stop) {
    const next = current.nextSibling;
    parent.appendChild(current);
    current = next!;
  }

  return parent;
}
