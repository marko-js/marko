import { classValue, styleValue } from "../common/helpers";
import {
  type Accessor,
  AccessorChar,
  ControlledType,
  NodeType,
} from "../common/types";
import { getAbortSignal } from "./abort-signal";
import {
  controllable_detailsOrDialog_open,
  controllable_detailsOrDialog_open_effect,
  controllable_input_checked,
  controllable_input_checked_effect,
  controllable_input_checkedValue,
  controllable_input_checkedValue_effect,
  controllable_input_value,
  controllable_input_value_effect,
  controllable_select_value,
  controllable_select_value_effect,
  controllable_textarea_value,
} from "./controllable";
import { on } from "./event";
import { parseHTML } from "./parse-html";
import { $scope } from "./scope";

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

export function data(nodeAccessor: Accessor, value: unknown) {
  const node = $scope[nodeAccessor] as Text | Comment;
  const normalizedValue = normalizeString(value);
  // TODO: benchmark if it is actually faster to check data first
  if (node.data !== normalizedValue) {
    node.data = normalizedValue;
  }
}

export function attrs(
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
) {
  const el = $scope[nodeAccessor] as Element;
  for (const { name } of el.attributes) {
    if (
      !(nextAttrs && (name in nextAttrs || hasAttrAlias(el, name, nextAttrs)))
    ) {
      el.removeAttribute(name);
    }
  }

  attrsInternal(nodeAccessor, nextAttrs);
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

export function partialAttrs(
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
  skip: Record<string, 1>,
) {
  const el = $scope[nodeAccessor] as Element;
  const partial: Partial<typeof nextAttrs> = {};

  for (const { name } of el.attributes) {
    if (!skip[name] && !(nextAttrs && name in nextAttrs)) {
      el.removeAttribute(name);
    }
  }

  for (const key in nextAttrs) {
    if (!skip[key]) partial[key] = nextAttrs[key];
  }

  attrsInternal(nodeAccessor, partial);
}

function attrsInternal(
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
) {
  const el = $scope[nodeAccessor] as Element;
  let events: undefined | Record<string, unknown>;
  let skip: RegExp | undefined;
  switch (el.tagName) {
    case "INPUT":
      if ("checked" in nextAttrs || "checkedChange" in nextAttrs) {
        controllable_input_checked(
          nodeAccessor,
          nextAttrs.checked,
          nextAttrs.checkedChange,
        );
      } else if (
        "checkedValue" in nextAttrs ||
        "checkedValueChange" in nextAttrs
      ) {
        controllable_input_checkedValue(
          nodeAccessor,
          nextAttrs.checkedValue,
          nextAttrs.checkedValueChange,
          nextAttrs.value,
        );
      } else if ("value" in nextAttrs || "valueChange" in nextAttrs) {
        controllable_input_value(
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
        controllable_select_value(
          nodeAccessor,
          nextAttrs.value,
          nextAttrs.valueChange,
        );
        skip = /^value(?:Change)?$/;
      }
      break;
    case "TEXTAREA":
      if ("value" in nextAttrs || "valueChange" in nextAttrs) {
        controllable_textarea_value(
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
        controllable_detailsOrDialog_open(
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
          (events ||= $scope[nodeAccessor + AccessorChar.EventAttributes] = {})[
            name[2] === "-" ? name.slice(3) : name.slice(2).toLowerCase()
          ] = value;
        } else if (!skip?.test(name)) {
          attr(el, name, value);
        }
    }
  }
}

export function attrsEvents(nodeAccessor: Accessor) {
  const el = $scope[nodeAccessor] as Element;
  const events = $scope[nodeAccessor + AccessorChar.EventAttributes] as Record<
    string,
    any
  >;

  switch ($scope[nodeAccessor + AccessorChar.ControlledType]) {
    case ControlledType.InputChecked:
      controllable_input_checked_effect(nodeAccessor);
      break;
    case ControlledType.InputCheckedValue:
      controllable_input_checkedValue_effect(nodeAccessor);
      break;
    case ControlledType.InputValue:
      controllable_input_value_effect(nodeAccessor);
      break;
    case ControlledType.SelectValue:
      controllable_select_value_effect(nodeAccessor);
      break;
    case ControlledType.DetailsOrDialogOpen:
      controllable_detailsOrDialog_open_effect(nodeAccessor);
      break;
  }

  for (const name in events) {
    on(el, name as any, events[name] as any);
  }
}

export function html(value: unknown, index: Accessor) {
  const firstChild = $scope[index] as Node & ChildNode;
  const lastChild = ($scope[index + "-"] || firstChild) as Node & ChildNode;
  const parentNode = firstChild.parentNode!;
  const afterReference = lastChild.nextSibling;
  const newContent = parseHTML(value || value === 0 ? value + "" : "<!>");

  $scope[index] = newContent.firstChild;
  $scope[index + AccessorChar.DynamicPlaceholderLastChild] =
    newContent.lastChild;
  parentNode.insertBefore(newContent, firstChild);

  let current = firstChild;
  while (current !== afterReference) {
    const next = current.nextSibling;
    current.remove();
    current = next!;
  }
}

export function props(nodeIndex: number, index: number) {
  const nextProps = $scope[index] as Record<string, unknown>;
  const prevProps = $scope[index + "-"] as Record<string, unknown> | undefined;
  const node = $scope[nodeIndex] as Node;

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

  $scope[index + "-"] = nextProps;
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
  index: string | number,
  thisObj: Record<string, unknown> & {
    onMount?: (this: unknown) => void;
    onUpdate?: (this: unknown) => void;
    onDestroy?: (this: unknown) => void;
  },
) {
  const instance = $scope[index] as typeof thisObj;
  if (instance) {
    Object.assign(instance, thisObj);
    instance.onUpdate?.();
  } else {
    $scope[index] = thisObj;
    thisObj.onMount?.();
    getAbortSignal(AccessorChar.LifecycleAbortController + index).onabort =
      () => thisObj.onDestroy?.();
  }
}
