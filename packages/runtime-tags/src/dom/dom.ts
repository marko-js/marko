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
    const specialAttr = specialAttrs[name as keyof typeof specialAttrs];
    if (specialAttr) {
      specialAttr(element, value as any, nextAttrs);
    } else if (name in controllableEffects) {
      (events ??= {})[name] = value;
    } else if (eventHandlerReg.test(name)) {
      (events ??= {})[
        name[2] === "-" ? name.slice(3) : name.slice(2).toLowerCase()
      ] = value;
    } else {
      attr(element, name, value);
    }
  }

  scope[elementAccessor + AccessorChar.EventAttributes] = events;
}

export function attrsEvents(scope: Scope, elementAccessor: Accessor) {
  const element = scope[elementAccessor] as Element;
  const events = scope[
    elementAccessor + AccessorChar.EventAttributes
  ] as Record<string, any>;
  for (const name in events) {
    const controllableEffect =
      controllableEffects[name as keyof typeof controllableEffects];
    if (controllableEffect) {
      controllableEffect(element, events[name]);
    } else {
      on(element, name as any, events[name] as any);
    }
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

const controlledValue = new WeakMap<Element, unknown>();
const controlledClock = new WeakMap<Element, number>();
function setControllableAttr(
  el: Element,
  attr: string,
  value: unknown,
  valueChange?: unknown,
) {
  if (valueChange) {
    (el as any)[attr] = value;
    controlledValue.set(el, value);
    controlledClock.set(el, (controlledClock.get(el) ?? 0) + 1);
  } else {
    setAttribute(el, attr, normalizeAttrValue(value));
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
  return (el: Element, attrChange: (value: unknown) => void) => {
    const handler = (event?: Event) => {
      updateWrapper(
        el,
        () => {
          const clock = controlledClock.get(el);
          runSync(() => attrChange(getValue(el)));
          if (controlledClock.get(el) === clock) {
            (el as any)[attr] = controlledValue.get(el);
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
      controlledValue.set(el, (el as any)[defaultAttr]);
      if ((el as any)[attr] !== (el as any)[defaultAttr]) handler();
    }
  };
}

function changeEffectMultiple<T extends Element = Element>(
  eventName: keyof GlobalEventHandlersEventMap,
  attr: string,
  defaultAttr: string,
  getEls: (el: T) => ArrayLike<Element>,
  getValue: (el: T) => unknown,
) {
  return (el: T, attrChange: (value: unknown) => void) => {
    const handler = () => {
      const els = getEls(el);
      const clock = controlledClock.get(els[0]);
      runSync(() => attrChange(getValue(el)));
      for (let i = 0; i < els.length; i++) {
        if (controlledClock.get(els[i]) === clock) {
          (els[i] as any)[attr] = controlledValue.get(els[i]);
        }
      }
    };
    on(el, eventName, handler);
    if (isResuming && !controlledValue.has(el)) {
      let outOfSync = false;
      const els = getEls(el);
      for (let i = 0; i < els.length; i++) {
        const defaultValue = (els[i] as any)[defaultAttr];
        if (defaultValue !== (els[i] as any)[attr]) {
          controlledValue.set(els[i], defaultValue);
          outOfSync = true;
        }
      }
      if (outOfSync) handler();
    }
  };
}
////////////

// input[value]
export function valueAttr_input(
  el: Element,
  value: unknown,
  valueChange: (value: unknown) => void,
) {
  preserveCursorPosition(el, () => {
    setControllableAttr(el, "value", value, valueChange);
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
  el: Element,
  checked: boolean,
  checkedChange: (value: unknown) => void,
) {
  setControllableAttr(el, "checked", checked, checkedChange);
}

export const checkedChangeEffect = changeEffect(
  "change",
  "checked",
  "defaultChecked",
);

// checkedValue
export function checkedValueAttr(
  el: Element,
  checkedValue: unknown,
  checkedValueChange: (value: unknown) => void,
  value: unknown,
) {
  setControllableAttr(
    el,
    "checked",
    checkedValue === value,
    checkedValueChange,
  );
}

export const checkedValueChangeEffect = changeEffect(
  "change",
  "checked",
  "defaultChecked",
  (el) => (el as any).value,
);

// checkedValues
export function checkedValuesAttr(
  el: Element,
  checkedValues: unknown[],
  checkedValuesChange: (values: unknown[]) => void,
  value: unknown,
) {
  setControllableAttr(
    el,
    "checked",
    checkedValues.includes(value),
    checkedValuesChange,
  );
}

const queryBoxes = (el: Element, query = "") =>
  (el.closest("form") || document).querySelectorAll(
    `input[name="${(el as any).name}"]${query}`,
  );
export const checkedValuesChangeEffect = changeEffectMultiple(
  "change",
  "checked",
  "defaultChecked",
  queryBoxes,
  (el) =>
    Array.from(queryBoxes(el, `:checked`)).map(
      (r) => (r as HTMLInputElement).value,
    ),
);

// select[value]
export function valueAttr_select(
  el: HTMLSelectElement,
  value: unknown,
  valueChange: (value: unknown) => void,
  multiple: boolean,
) {
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
}

export const valueChangeEffect_select = changeEffectMultiple<HTMLSelectElement>(
  "change",
  "selected",
  "defaultSelected",
  (el) => el.options,
  (el) =>
    el.multiple ? Array.from(el.selectedOptions).map((o) => o.value) : el.value,
);

// open
export function openAttr(
  el: Element,
  open: boolean,
  openChange: (value: unknown) => void,
) {
  setControllableAttr(el, "open", open, openChange);
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

const specialAttrs = {
  class: classAttr,
  style: styleAttr,
  renderBody: () => {},
  value: (el: Element, value: unknown, attrs: Record<string, any>) => {
    if (el.tagName === "INPUT") {
      valueAttr_input(el, value, attrs.valueChange);
    } else if (el.tagName === "SELECT") {
      valueAttr_select(
        el as HTMLSelectElement,
        value,
        attrs.valueChange,
        !!attrs.multiple,
      );
    }
  },
  checked: (el: Element, value: boolean, attrs: Record<string, any>) =>
    checkedAttr(el, value, attrs.checkedChange),
  checkedValue: (el: Element, value: unknown, attrs: Record<string, any>) =>
    checkedValueAttr(el, value, attrs.checkedValueChange, attrs.value),
  checkedValues: (el: Element, value: unknown[], attrs: Record<string, any>) =>
    checkedValuesAttr(el, value, attrs.checkedValuesChange, attrs.value),
  open: (el: Element, value: boolean, attrs: Record<string, any>) =>
    openAttr(el, value, attrs.openChange),
};

const controllableEffects = {
  valueChange: (el: Element, valueChange: (value: unknown) => void) => {
    if (el.tagName === "INPUT") {
      valueChangeEffect_input(el, valueChange);
    } else if (el.tagName === "SELECT") {
      valueChangeEffect_select(el as HTMLSelectElement, valueChange);
    }
  },
  checkedChange: checkedChangeEffect,
  checkedValueChange: checkedValueChangeEffect,
  checkedValuesChange: checkedValuesChangeEffect,
  openChange: (el: Element, openChange: (value: unknown) => void) => {
    if (el.tagName === "DIALOG") {
      openChangeEffect_dialog(el, openChange);
    } else if (el.tagName === "DETAILS") {
      openChangeEffect_details(el, openChange);
    }
  },
};
