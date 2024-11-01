import { classValue, styleValue } from "../common/helpers";
import {
  type Accessor,
  AccessorChar,
  ControlledType,
  NodeType,
  type Scope,
} from "../common/types";
import { getAbortSignal } from "./abort-signal";
import { on } from "./event";
import { parseHTML } from "./parse-html";
import { preserveCursorPosition } from "./preserve-cursor";
import { runSync } from "./queue";
import { isResuming } from "./resume";

const eventHandlerReg = /^on[A-Z-]/;

export function isDocumentFragment(node: Node): node is DocumentFragment {
  return node.nodeType === NodeType.DocumentFragment;
}

export function attr(element: Element, name: string, value: unknown) {
  setAttribute(element, name, normalizeAttrValue(value));
}

function setAttribute(
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

function normalizeAttrValue(value: unknown) {
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

///////////

const controlledClock = new WeakMap<Element, number>();
function setControllableAttr(
  el: Element,
  attr: string,
  value: unknown,
  valueChange: unknown,
) {
  if (valueChange) {
    (el as any)[attr] = value;
    controlledClock.set(el, (controlledClock.get(el) ?? 0) + 1);
  } else {
    setAttribute(el, attr, normalizeAttrValue(value));
  }
}

function setControllableState(
  scope: Scope,
  nodeAccessor: Accessor,
  type: ControlledType,
  value: unknown,
  valueChange: unknown,
) {
  scope[nodeAccessor + AccessorChar.ControlledValue] = value;
  scope[nodeAccessor + AccessorChar.ControlledHandler] = valueChange;
  scope[nodeAccessor + AccessorChar.ControlledType] = type;
}

function setupControllable(
  eventName: keyof GlobalEventHandlersEventMap,
  attr: string,
  defaultAttr: string,
  getValue = (el: Element) => (el as any)[attr],
  updateWrapper: (el: Element, fn: () => void, event?: any) => void = (
    _el,
    fn,
  ) => fn(),
) {
  return (scope: Scope, nodeAccessor: Accessor) => {
    const el = scope[nodeAccessor] as Element;
    const handler = (event?: Event) => {
      const changeHandler =
        scope[nodeAccessor + AccessorChar.ControlledHandler];
      if (changeHandler) {
        updateWrapper(
          el,
          () => {
            const clock = controlledClock.get(el);
            runSync(() => changeHandler(getValue(el)));
            if (controlledClock.get(el) === clock) {
              (el as any)[attr] =
                scope[nodeAccessor + AccessorChar.ControlledValue];
              return true;
            }
          },
          event,
        );
      }
    };
    // TODO: consider not using the delegation here which only supports one handler per event
    // which means the user can't add their own handler (or will override this one)
    on(el, eventName, handler);
    if (isResuming) {
      // scope[nodeAccessor + AccessorChar.ControlledValue](el as any)[defaultAttr]);
      if ((el as any)[attr] !== (el as any)[defaultAttr]) handler();
    }
  };
}

const elsByValue = new WeakMap<unknown[], Set<Element>>();
function addElsByValue(value: unknown, el: Element) {
  if (Array.isArray(value)) {
    let els = elsByValue.get(value);
    if (!els) {
      elsByValue.set(value, (els = new Set()));
    }
    els.add(el);
  }
}
const queuedValues = new WeakSet<unknown[]>();
function changeEffectMultiple<T extends Element = Element>(
  eventName: keyof GlobalEventHandlersEventMap,
  attr: string,
  defaultAttr: string,
  getEls: (
    el: T,
    prevValue: unknown[],
  ) => Iterable<Element> & ArrayLike<Element>,
  getValue: (
    el: T,
    els: Iterable<Element> & ArrayLike<Element>,
    prevValue: unknown[],
  ) => unknown,
  getIndividualValue: (
    el: T,
    el2: Element,
    currentValue: unknown,
  ) => unknown = (x) => x,
) {
  return (scope: Scope, nodeAccessor: Accessor) => {
    const el = scope[nodeAccessor] as T;
    const currentValue = scope[
      nodeAccessor + AccessorChar.ControlledValue
    ] as unknown[];
    const attrChange = scope[nodeAccessor + AccessorChar.ControlledHandler] as (
      value: unknown,
    ) => void;
    const handler = () => {
      const els = getEls(el, currentValue);
      const clock = controlledClock.get(els[0]);
      runSync(() => attrChange(getValue(el, els, currentValue)));
      for (let i = 0; i < els.length; i++) {
        if (controlledClock.get(els[i]) === clock) {
          (els[i] as any)[attr] = getIndividualValue(el, els[i], currentValue);
        }
      }
    };
    on(el, eventName, handler);
    if (isResuming) {
      if (!currentValue) {
        // TODO: this should not be necessary
        // we need to make sure currentValue is always serialized
        return;
      }

      addElsByValue(currentValue, el);
      if (!queuedValues.has(currentValue)) {
        let outOfSync = false;
        const els = getEls(el, currentValue);
        for (let i = 0; i < els.length; i++) {
          const defaultValue = (els[i] as any)[defaultAttr];
          if (defaultValue !== (els[i] as any)[attr]) {
            outOfSync = true;
          }
        }
        if (outOfSync) {
          queueMicrotask(handler);
          queuedValues.add(currentValue);
        }
      }
    }
  };
}

export function controllable_input_checked(
  scope: Scope,
  nodeAccessor: Accessor,
  checked: unknown,
  checkedChange: unknown,
) {
  setControllableAttr(scope[nodeAccessor], "checked", checked, checkedChange);
  setControllableState(
    scope,
    nodeAccessor,
    ControlledType.InputChecked,
    checked,
    checkedChange,
  );
}
export const controllable_input_checked_effect = setupControllable(
  "change",
  "checked",
  "defaultChecked",
);

export function controllable_input_checkedValue(
  scope: Scope,
  nodeAccessor: Accessor,
  checkedValue: unknown,
  checkedValueChange: unknown,
  value: unknown,
) {
  const el = scope[nodeAccessor] as Element;
  attr(el, "value", value);
  setControllableAttr(
    el,
    "checked",
    checkedValue === value,
    checkedValueChange,
  );
  setControllableState(
    scope,
    nodeAccessor,
    ControlledType.InputCheckedValue,
    checkedValue,
    checkedValueChange,
  );
}
export const controllable_input_checkedValue_effect = setupControllable(
  "change",
  "checked",
  "defaultChecked",
  (el) => (el as HTMLInputElement).value,
);

export function controllable_input_checkedValues(
  scope: Scope,
  nodeAccessor: Accessor,
  checkedValues: unknown,
  checkedValuesChange: unknown,
  value: unknown,
) {
  const el = scope[nodeAccessor] as Element;
  attr(el, "value", value);
  addElsByValue(checkedValues, el);
  setControllableAttr(
    el,
    "checked",
    Array.isArray(checkedValues) && checkedValues.includes(value),
    checkedValuesChange,
  );
  setControllableState(
    scope,
    nodeAccessor,
    ControlledType.InputCheckedValues,
    checkedValues,
    checkedValuesChange,
  );
}
export const controllable_input_checkedValues_effect = changeEffectMultiple(
  "change",
  "checked",
  "defaultChecked",
  (el, checkedValues) => [...(elsByValue.get(checkedValues) || [el])],
  (_el, els, checkedValues) => {
    const next = new Set(checkedValues);
    for (const checkboxEl of els as HTMLInputElement[]) {
      if (checkboxEl.checked) next.add(checkboxEl.value);
      else next.delete(checkboxEl.value);
    }
    return Array.from(next);
  },
);

export function controllable_input_value(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
) {
  const el = scope[nodeAccessor] as Element;
  // TODO: avoid preserve pos when no change handler.
  preserveCursorPosition(el, () => {
    setControllableAttr(el, "value", value, valueChange);
    setControllableState(
      scope,
      nodeAccessor,
      ControlledType.InputValue,
      value,
      valueChange,
    );
  });
}
export const controllable_input_value_effect = setupControllable(
  "input",
  "value",
  "defaultValue",
  undefined,
  preserveCursorPosition,
);

export function controllable_select_value(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
) {
  const el = scope[nodeAccessor] as HTMLSelectElement;
  const options = el.options;
  for (let i = 0; i < options.length; i++) {
    setControllableAttr(
      options[i],
      "selected",
      Array.isArray(value)
        ? value.includes(options[i].value)
        : value === options[i].value,
      valueChange,
    );
  }
  setControllableState(
    scope,
    nodeAccessor,
    ControlledType.SelectValue,
    value,
    valueChange,
  );
}
export const controllable_select_value_effect =
  changeEffectMultiple<HTMLSelectElement>(
    "change",
    "selected",
    "defaultSelected",
    (selectEl) => selectEl.options,
    (selectEl, optionEls, previousValue) => {
      if (selectEl.multiple) {
        const next = new Set(previousValue);
        for (const optionEl of optionEls as HTMLOptionElement[]) {
          if (optionEl.selected) next.add(optionEl.value);
          else next.delete(optionEl.value);
        }
        return Array.from(next);
      } else {
        return selectEl.value;
      }
    },
    (_el, optionEl, currentValue) =>
      Array.isArray(currentValue)
        ? currentValue.includes((optionEl as HTMLOptionElement).value)
        : currentValue === (optionEl as HTMLOptionElement).value,
  );

export function controllable_details_open(
  scope: Scope,
  nodeAccessor: Accessor,
  open: unknown,
  openChange: unknown,
) {
  setControllableAttr(scope[nodeAccessor], "open", open, openChange);
  setControllableState(
    scope,
    nodeAccessor,
    ControlledType.DetailsOpen,
    open,
    openChange,
  );
}
export const controllable_details_open_effect = setupControllable(
  "toggle",
  "open",
  "open", // There is no `defaultOpen` attribute, so we can't check if it's out of sync on resume
);

export function controllable_dialog_open(
  scope: Scope,
  nodeAccessor: Accessor,
  open: unknown,
  openChange: unknown,
) {
  setControllableAttr(scope[nodeAccessor], "open", open, openChange);
  setControllableState(
    scope,
    nodeAccessor,
    ControlledType.DialogOpen,
    open,
    openChange,
  );
}
export const controllable_dialog_open_effect = setupControllable(
  "close",
  "open",
  "open", // There is no `defaultOpen` attribute, so we can't check if it's out of sync on resume
);
