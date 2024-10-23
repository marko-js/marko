import { classValue, styleValue } from "../common/helpers";
import {
  type Accessor,
  AccessorChar,
  NodeType,
  type Scope,
} from "../common/types";
import { getAbortSignal } from "./abort-signal";
import { on } from "./event";
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
  if (value === undefined) {
    element.removeAttribute(name);
  } else {
    element.setAttribute(name, value);
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

const hasAlias = {
  selected: (attrs: Record<string, unknown>) =>
    "selectedValue" in attrs || "selectedValues" in attrs,
  checked: (attrs: Record<string, unknown>) =>
    "checkedValue" in attrs || "checkedValues" in attrs,
};

export function attrs(
  scope: Scope,
  elementAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
) {
  const element = scope[elementAccessor] as Element;
  let events: undefined | Record<string, unknown>;

  for (const { name } of element.attributes) {
    if (
      !(nextAttrs && name in nextAttrs) &&
      !hasAlias[name as keyof typeof hasAlias]?.(nextAttrs)
    ) {
      element.removeAttribute(name);
    }
  }

  // https://jsperf.com/object-keys-vs-for-in-with-closure/194
  for (const name in nextAttrs) {
    const value = nextAttrs[name];

    switch (name) {
      case "class":
        classAttr(element, value);
        break;
      case "style":
        styleAttr(element, value);
        break;
      case "renderBody":
        break;
      case "value":
        if (element.tagName === "INPUT") {
          valueAttr_input(
            scope,
            elementAccessor,
            value,
            nextAttrs.valueChange as any,
          );
        } else if (element.tagName === "SELECT") {
          valueAttr_select(
            scope,
            elementAccessor,
            value,
            nextAttrs.valueChange as any,
            !!nextAttrs.multiple,
          );
        }
        break;
      case "checked":
        checkedAttr(
          scope,
          elementAccessor,
          value as boolean,
          nextAttrs.checkedChange as any,
        );
        break;
      case "checkedValue":
        checkedValueAttr(
          scope,
          elementAccessor,
          value,
          nextAttrs.checkedValueChange as any,
          nextAttrs.value,
        );
        break;
      case "checkedValues":
        checkedValuesAttr(
          scope,
          elementAccessor,
          value as unknown[],
          nextAttrs.checkedValuesChange as any,
          nextAttrs.value,
        );
        break;
      case "open":
        openAttr(
          scope,
          elementAccessor,
          value as boolean,
          nextAttrs.openChange as any,
        );
        break;
      default: {
        const controllableAttr =
          controllableChangeAttrs[name as keyof typeof controllableChangeAttrs];
        if (controllableAttr) {
          scope[elementAccessor + AccessorChar.ControlledHandler] = value;
          scope[elementAccessor + AccessorChar.ControlledType] =
            controllableAttr;
        } else if (eventHandlerReg.test(name)) {
          (events ??= scope[elementAccessor + AccessorChar.EventAttributes] =
            {})[name[2] === "-" ? name.slice(3) : name.slice(2).toLowerCase()] =
            value;
        } else {
          attr(element, name, value);
        }
      }
    }
  }
}

export function attrsEvents(scope: Scope, elementAccessor: Accessor) {
  const element = scope[elementAccessor] as Element;
  const events = scope[
    elementAccessor + AccessorChar.EventAttributes
  ] as Record<string, any>;
  const controlledType = scope[
    elementAccessor + AccessorChar.ControlledType
  ] as keyof typeof controllableEffects;

  if (controlledType) {
    controllableEffects[controlledType](scope, elementAccessor);
  }

  for (const name in events) {
    on(element, name as any, events[name] as any);
  }
}

const doc = document;
const parser = /* @__PURE__ */ doc.createElement("template");

export function html(scope: Scope, value: unknown, index: Accessor) {
  const firstChild = scope[index] as Node & ChildNode;
  const lastChild = (scope[index + "-"] || firstChild) as Node & ChildNode;
  const parentNode = firstChild.parentNode!;
  const afterReference = lastChild.nextSibling;

  parser.innerHTML = value || value === 0 ? `${value}` : "<!>";
  const newContent = parser.content;
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
  value: unknown,
  valueChange: unknown,
) {
  if (valueChange) {
    // TODO: need to handle the case where valueChange becomes falsy
    // but also not have value overwrite checked/checkedValue/checkedValues
    // maybe use unique accessor chars per controllable type?
    scope[nodeAccessor + AccessorChar.ControlledValue] = value;
    scope[nodeAccessor + AccessorChar.ControlledHandler] = valueChange;
  }
}

function changeEffect(
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
    const attrChange = scope[nodeAccessor + AccessorChar.ControlledHandler];
    const handler = (event?: Event) => {
      updateWrapper(
        el,
        () => {
          const clock = controlledClock.get(el);
          runSync(() => attrChange(getValue(el)));
          if (controlledClock.get(el) === clock) {
            (el as any)[attr] =
              scope[nodeAccessor + AccessorChar.ControlledValue];
            return true;
          }
        },
        event,
      );
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

const elsByValue = LazyWeakMap(() => new Set<Element>());
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
      elsByValue.get(currentValue)!.add(el);
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
////////////

// input[value]
export function valueAttr_input(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: (value: unknown) => void,
) {
  const el = scope[nodeAccessor] as Element;
  preserveCursorPosition(el, () => {
    setControllableAttr(scope[nodeAccessor], "value", value, valueChange);
    setControllableState(scope, nodeAccessor, value, valueChange);
  });
}

export const valueChangeEffect_input = changeEffect(
  "input",
  "value",
  "defaultValue",
  undefined,
  preserveCursorPosition,
);

// checked
export function checkedAttr(
  scope: Scope,
  nodeAccessor: Accessor,
  checked: boolean,
  checkedChange: (value: unknown) => void,
) {
  setControllableAttr(scope[nodeAccessor], "checked", checked, checkedChange);
  setControllableState(scope, nodeAccessor, checked, checkedChange);
}

export const checkedChangeEffect = changeEffect(
  "change",
  "checked",
  "defaultChecked",
);

// checkedValue
export function checkedValueAttr(
  scope: Scope,
  nodeAccessor: Accessor,
  checkedValue: unknown,
  checkedValueChange: (value: unknown) => void,
  value: unknown,
) {
  setControllableAttr(
    scope[nodeAccessor],
    "checked",
    checkedValue === value,
    checkedValueChange,
  );
  setControllableState(scope, nodeAccessor, checkedValue, checkedValueChange);
}

export const checkedValueChangeEffect = changeEffect(
  "change",
  "checked",
  "defaultChecked",
  (el) => (el as any).value,
);

// checkedValues
export function checkedValuesAttr(
  scope: Scope,
  nodeAccessor: Accessor,
  checkedValues: unknown[],
  checkedValuesChange: (values: unknown[]) => void,
  value: unknown,
) {
  const el = scope[nodeAccessor] as Element;
  elsByValue.get(checkedValues)!.add(el);
  scope[nodeAccessor + AccessorChar.ControlledValue] = checkedValues;
  setControllableAttr(
    el,
    "checked",
    checkedValues.includes(value),
    checkedValuesChange,
  );
  setControllableState(scope, nodeAccessor, checkedValues, checkedValuesChange);
}

export const checkedValuesChangeEffect = changeEffectMultiple(
  "change",
  "checked",
  "defaultChecked",
  (_el, checkedValues) => Array.from(elsByValue.get(checkedValues)!),
  (_el, els, checkedValues) => {
    const next = new Set(checkedValues);
    for (const checkboxEl of els as HTMLInputElement[]) {
      if (checkboxEl.checked) next.add(checkboxEl.value);
      else next.delete(checkboxEl.value);
    }
    return Array.from(next);
  },
);

// select[value]
export function valueAttr_select(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: undefined | ((value: unknown) => void),
  multiple: boolean,
) {
  const el = scope[nodeAccessor] as HTMLSelectElement;
  const options = el.options;
  for (let i = 0; i < options.length; i++) {
    setControllableAttr(
      options[i],
      "selected",
      multiple
        ? (value as unknown[]).includes(options[i].value)
        : value === options[i].value,
      valueChange,
    );
  }
  setControllableState(scope, nodeAccessor, value, valueChange);
}

export const valueChangeEffect_select = changeEffectMultiple<HTMLSelectElement>(
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
  (selectEl, optionEl, currentValue) =>
    selectEl.multiple
      ? (currentValue as unknown[]).includes(
          (optionEl as HTMLOptionElement).value,
        )
      : currentValue === (optionEl as HTMLOptionElement).value,
);

// open
export function openAttr(
  scope: Scope,
  nodeAccessor: Accessor,
  open: boolean,
  openChange: (value: unknown) => void,
) {
  setControllableAttr(scope[nodeAccessor], "open", open, openChange);
  setControllableState(scope, nodeAccessor, open, openChange);
}

export const openChangeEffect_dialog = changeEffect(
  "close",
  "open",
  "open", // There is no `defaultOpen` attribute, so we can't check if it's out of sync on resume
);

export const openChangeEffect_details = changeEffect(
  "toggle",
  "open",
  "open", // There is no `defaultOpen` attribute, so we can't check if it's out of sync on resume
);

/////////

const controllableEffects = {
  value: (scope: Scope, nodeAccessor: Accessor) => {
    const el = scope[nodeAccessor] as Element;
    if (el.tagName === "INPUT") {
      valueChangeEffect_input(scope, nodeAccessor);
    } else if (el.tagName === "SELECT") {
      valueChangeEffect_select(scope, nodeAccessor);
    }
  },
  checked: checkedChangeEffect,
  checkedValue: checkedValueChangeEffect,
  checkedValues: checkedValuesChangeEffect,
  open: (scope: Scope, nodeAccessor: Accessor) => {
    const el = scope[nodeAccessor] as Element;
    if (el.tagName === "DIALOG") {
      openChangeEffect_dialog(scope, nodeAccessor);
    } else if (el.tagName === "DETAILS") {
      openChangeEffect_details(scope, nodeAccessor);
    }
  },
};

const controllableChangeAttrs = {
  valueChange: "value",
  checkedChange: "checked",
  checkedValueChange: "checkedValue",
  checkedValuesChange: "checkedValues",
  openChange: "open",
};

function LazyWeakMap<T>(
  construct: () => T,
): WeakMap<object, T> & { get: () => T } {
  const map = new WeakMap();
  const originalGet = map.get;
  return Object.assign(map, {
    get(key: object) {
      let value = originalGet.call(map, key);
      if (!value) {
        map.set(key, (value = construct()));
      }
      return value;
    },
  }) as WeakMap<object, T> & { get: () => T };
}
