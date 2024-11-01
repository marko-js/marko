import { classValue, styleValue } from "../common/helpers";
import {
  type Accessor,
  AccessorChar,
  ControlledType,
  NodeType,
  type Scope,
} from "../common/types";
import { getAbortSignal } from "./abort-signal";
import {
  controllable_details_open,
  controllable_details_open_effect,
  controllable_dialog_open,
  controllable_dialog_open_effect,
  controllable_input_checked,
  controllable_input_checked_effect,
  controllable_input_checkedValue,
  controllable_input_checkedValue_effect,
  controllable_input_checkedValues,
  controllable_input_checkedValues_effect,
  controllable_input_value,
  controllable_input_value_effect,
  controllable_select_value,
  controllable_select_value_effect,
} from "./controllable";
import { on } from "./event";
import { parseHTML } from "./parse-html";

const eventHandlerReg = /^on[A-Z-]/;

export function isDocumentFragment(node: Node): node is DocumentFragment {
  return node.nodeType === NodeType.DocumentFragment;
}

export function attr(element: Element, name: string, value: unknown) {
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

export function classAttr(element: Element, value: unknown) {
  setAttribute(element, "class", classValue(value) || undefined);
}

export function styleAttr(element: Element, value: unknown) {
  setAttribute(element, "style", styleValue(value) || undefined);
}

export function data(node: Text | Comment, value: unknown) {
  const normalizedValue = normalizeString(value);
  // TODO: benchmark if it is actually faster to check data first
  if (node.data !== normalizedValue) {
    node.data = normalizedValue;
  }
}

export function attrs(
  scope: Scope,
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
) {
  const el = scope[nodeAccessor] as Element;
  for (const { name } of el.attributes) {
    if (
      !(nextAttrs && (name in nextAttrs || hasAttrAlias(el, name, nextAttrs)))
    ) {
      el.removeAttribute(name);
    }
  }

  attrsInternal(scope, nodeAccessor, nextAttrs);
}

function hasAttrAlias(
  element: Element,
  attr: string,
  nextAttrs: Record<string, unknown>,
) {
  if (attr === "checked" && element.tagName === "INPUT") {
    return "checkedValue" in nextAttrs || "checkedValues" in nextAttrs;
  }
}

export function partialAttrs(
  scope: Scope,
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
  skip: Record<string, 1>,
) {
  const el = scope[nodeAccessor] as Element;
  const partial: Partial<typeof nextAttrs> = {};

  for (const { name } of el.attributes) {
    if (!skip[name] && !(nextAttrs && name in nextAttrs)) {
      el.removeAttribute(name);
    }
  }

  for (const key in nextAttrs) {
    if (!skip[key]) partial[key] = nextAttrs[key];
  }

  attrsInternal(scope, nodeAccessor, partial);
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
      if (nextAttrs.checkedChange) {
        controllable_input_checked(
          scope,
          nodeAccessor,
          nextAttrs.checked,
          nextAttrs.checkedChange,
        );
      } else if (nextAttrs.checkedValue || nextAttrs.checkedValueChange) {
        controllable_input_checkedValue(
          scope,
          nodeAccessor,
          nextAttrs.checkedValue,
          nextAttrs.checkedValueChange,
          nextAttrs.value,
        );
      } else if (nextAttrs.checkedValues || nextAttrs.checkedValuesChange) {
        controllable_input_checkedValues(
          scope,
          nodeAccessor,
          nextAttrs.checkedValues,
          nextAttrs.checkedValuesChange,
          nextAttrs.value,
        );
      } else if (nextAttrs.valueChange) {
        controllable_input_value(
          scope,
          nodeAccessor,
          nextAttrs.value,
          nextAttrs.valueChange,
        );
      } else {
        break;
      }
      skip = /^(?:value|checked(?:Values?)?)(?:Change)?$/;
      break;
    case "SELECT":
      if (nextAttrs.value || nextAttrs.valueChange) {
        controllable_select_value(
          scope,
          nodeAccessor,
          nextAttrs.value,
          nextAttrs.valueChange,
        );
        skip = /^value(?:Change)?$/;
      }
      break;
    case "DETAILS":
      if (nextAttrs.openChange) {
        controllable_details_open(
          scope,
          nodeAccessor,
          nextAttrs.open,
          nextAttrs.openChange,
        );
        skip = /^open(?:Change)?$/;
      }
      break;
    case "DIALOG":
      if (nextAttrs.openChange) {
        controllable_dialog_open(
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
        classAttr(el, value);
        break;
      case "style":
        styleAttr(el, value);
        break;
      case "renderBody":
        break;
      default:
        if (eventHandlerReg.test(name)) {
          (events ||= scope[nodeAccessor + AccessorChar.EventAttributes] = {})[
            name[2] === "-" ? name.slice(3) : name.slice(2).toLowerCase()
          ] = value;
        } else if (!skip?.test(name)) {
          attr(el, name, value);
        }
    }
  }
}

export function attrsEvents(scope: Scope, nodeAccessor: Accessor) {
  const el = scope[nodeAccessor] as Element;
  const events = scope[nodeAccessor + AccessorChar.EventAttributes] as Record<
    string,
    any
  >;

  switch (scope[nodeAccessor + AccessorChar.ControlledType]) {
    case ControlledType.InputChecked:
      controllable_input_checked_effect(scope, nodeAccessor);
      break;
    case ControlledType.InputCheckedValue:
      controllable_input_checkedValue_effect(scope, nodeAccessor);
      break;
    case ControlledType.InputCheckedValues:
      controllable_input_checkedValues_effect(scope, nodeAccessor);
      break;
    case ControlledType.InputValue:
      controllable_input_value_effect(scope, nodeAccessor);
      break;
    case ControlledType.SelectValue:
      controllable_select_value_effect(scope, nodeAccessor);
      break;
    case ControlledType.DetailsOpen:
      controllable_details_open_effect(scope, nodeAccessor);
      break;
    case ControlledType.DialogOpen:
      controllable_dialog_open_effect(scope, nodeAccessor);
      break;
  }

  for (const name in events) {
    on(el, name as any, events[name] as any);
  }
}

export function html(scope: Scope, value: unknown, index: Accessor) {
  const firstChild = scope[index] as Node & ChildNode;
  const lastChild = (scope[index + "-"] || firstChild) as Node & ChildNode;
  const parentNode = firstChild.parentNode!;
  const afterReference = lastChild.nextSibling;
  const newContent = parseHTML(value || value === 0 ? value + "" : "<!>");

  scope[index] = newContent.firstChild;
  scope[index + AccessorChar.DynamicPlaceholderLastChild] =
    newContent.lastChild;
  parentNode.insertBefore(newContent, firstChild);

  let current = firstChild;
  while (current !== afterReference) {
    const next = current.nextSibling;
    current.remove();
    current = next!;
  }
}

export function props(scope: Scope, nodeIndex: number, index: number) {
  const nextProps = scope[index] as Record<string, unknown>;
  const prevProps = scope[index + "-"] as Record<string, unknown> | undefined;
  const node = scope[nodeIndex] as Node;

  if (prevProps) {
    for (const name in prevProps) {
      if (!(name in nextProps)) {
        (node as any)[name] = undefined;
      }
    }
  }
  // https://jsperf.com/object-keys-vs-for-in-with-closure/194
  for (const name in nextProps) {
    (node as any)[name] = nextProps[name];
  }

  scope[index + "-"] = nextProps;
}

export function normalizeAttrValue(value: unknown) {
  if (value || value === 0) {
    return value === true ? "" : value + "";
  }
}

function normalizeString(value: unknown) {
  return value || value === 0 ? value + "" : "\u200d";
}
export function lifecycle(
  scope: Scope,
  index: string | number,
  thisObj: Record<string, unknown> & {
    onMount?: (this: unknown) => void;
    onUpdate?: (this: unknown) => void;
    onDestroy?: (this: unknown) => void;
  },
) {
  const instance = scope[index] as typeof thisObj;
  if (instance) {
    Object.assign(instance, thisObj);
    instance.onUpdate?.();
  } else {
    scope[index] = thisObj;
    thisObj.onMount?.();
    getAbortSignal(
      scope,
      AccessorChar.LifecycleAbortController + index,
    ).onabort = () => thisObj.onDestroy?.();
  }
}
