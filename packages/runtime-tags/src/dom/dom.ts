import { classValue, styleValue } from "../common/helpers";
import {
  type Accessor,
  AccessorChar,
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
  for (const { name } of element.attributes) {
    if (
      !(nextAttrs && name in nextAttrs) &&
      !hasAlias[name as keyof typeof hasAlias]?.(nextAttrs)
    ) {
      element.removeAttribute(name);
    }
  }

  attrsInternal(scope, elementAccessor, nextAttrs);
}

export function partialAttrs(
  scope: Scope,
  elementAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
  skip: Record<string, 1>,
) {
  const element = scope[elementAccessor] as Element;
  const partial: Partial<typeof nextAttrs> = {};

  for (const { name } of element.attributes) {
    if (!skip[name] && !(nextAttrs && name in nextAttrs)) {
      element.removeAttribute(name);
    }
  }

  for (const key in nextAttrs) {
    if (!skip[key]) partial[key] = nextAttrs[key];
  }

  attrsInternal(scope, elementAccessor, partial);
}

function attrsInternal(
  scope: Scope,
  elementAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
) {
  let events: undefined | Record<string, unknown>;
  const element = scope[elementAccessor] as Element;
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
          controllable_input_value(
            scope,
            elementAccessor,
            value,
            nextAttrs.valueChange as any,
          );
        } else if (element.tagName === "SELECT") {
          controllable_select_value(
            scope,
            elementAccessor,
            value,
            nextAttrs.valueChange as any,
            !!nextAttrs.multiple,
          );
        } else {
          attr(element, name, value);
        }
        break;
      case "checked":
        controllable_input_checked(
          scope,
          elementAccessor,
          value as boolean,
          nextAttrs.checkedChange as any,
        );
        break;
      case "checkedValue":
        controllable_input_checkedValue(
          scope,
          elementAccessor,
          value,
          nextAttrs.checkedValueChange as any,
          nextAttrs.value,
        );
        break;
      case "checkedValues":
        controllable_input_checkedValues(
          scope,
          elementAccessor,
          value as unknown[],
          nextAttrs.checkedValuesChange as any,
          nextAttrs.value,
        );
        break;
      case "open":
        controllable_dialog_open(
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
          (events ||= scope[elementAccessor + AccessorChar.EventAttributes] =
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
export function controllable_input_value(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: (value: unknown) => void,
) {
  const el = scope[nodeAccessor] as Element;
  preserveCursorPosition(el, () => {
    setControllableAttr(el, "value", value, valueChange);
    setControllableState(scope, nodeAccessor, value, valueChange);
  });
}
export const controllable_input_value_setup = setupControllable(
  "input",
  "value",
  "defaultValue",
  undefined,
  preserveCursorPosition,
);

// checked
export function controllable_input_checked(
  scope: Scope,
  nodeAccessor: Accessor,
  checked: boolean,
  checkedChange: (value: unknown) => void,
) {
  setControllableAttr(scope[nodeAccessor], "checked", checked, checkedChange);
  setControllableState(scope, nodeAccessor, checked, checkedChange);
}
export const controllable_input_checked_setup = setupControllable(
  "change",
  "checked",
  "defaultChecked",
);

// checkedValue
export function controllable_input_checkedValue(
  scope: Scope,
  nodeAccessor: Accessor,
  checkedValue: unknown,
  checkedValueChange: (value: unknown) => void,
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
  setControllableState(scope, nodeAccessor, checkedValue, checkedValueChange);
}
export const controllable_input_checkedValue_setup = setupControllable(
  "change",
  "checked",
  "defaultChecked",
  (el) => (el as HTMLInputElement).value,
);

// checkedValues
export function controllable_input_checkedValues(
  scope: Scope,
  nodeAccessor: Accessor,
  checkedValues: unknown[],
  checkedValuesChange: (values: unknown[]) => void,
  value: unknown,
) {
  const el = scope[nodeAccessor] as Element;
  attr(el, "value", value);
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
export const controllable_input_checkedValues_setup = changeEffectMultiple(
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
export function controllable_select_value(
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
export const controllable_select_value_setup =
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
    (selectEl, optionEl, currentValue) =>
      selectEl.multiple
        ? (currentValue as unknown[]).includes(
            (optionEl as HTMLOptionElement).value,
          )
        : currentValue === (optionEl as HTMLOptionElement).value,
  );

// open
export function controllable_dialog_open(
  scope: Scope,
  nodeAccessor: Accessor,
  open: boolean,
  openChange: (value: unknown) => void,
) {
  setControllableAttr(scope[nodeAccessor], "open", open, openChange);
  setControllableState(scope, nodeAccessor, open, openChange);
}
export const controllable_dialog_open_setup = setupControllable(
  "close",
  "open",
  "open", // There is no `defaultOpen` attribute, so we can't check if it's out of sync on resume
);

export { controllable_dialog_open as controllable_details_open };
export const controllable_details_open_setup = setupControllable(
  "toggle",
  "open",
  "open", // There is no `defaultOpen` attribute, so we can't check if it's out of sync on resume
);

/////////

const controllableEffects = {
  value: (scope: Scope, nodeAccessor: Accessor) => {
    switch ((scope[nodeAccessor] as Element).tagName) {
      case "INPUT":
        controllable_input_value_setup(scope, nodeAccessor);
        break;
      case "SELECT":
        controllable_select_value_setup(scope, nodeAccessor);
        break;
    }
  },
  checked: controllable_input_checked_setup,
  checkedValue: controllable_input_checkedValue_setup,
  checkedValues: controllable_input_checkedValues_setup,
  open: (scope: Scope, nodeAccessor: Accessor) => {
    switch ((scope[nodeAccessor] as Element).tagName) {
      case "DIALOG":
        controllable_dialog_open_setup(scope, nodeAccessor);
        break;
      case "DETAILS":
        controllable_details_open_setup(scope, nodeAccessor);
        break;
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
