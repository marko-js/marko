import {
  type Accessor,
  AccessorChar,
  ControlledType,
  type Scope,
} from "../common/types";
import { attr, normalizeAttrValue, setAttribute } from "./dom";
import { on } from "./event";
import { runSync } from "./queue";
import { resolveCursorPosition } from "./resolve-cursor-position";
import { isResuming } from "./resume";

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

let preserving = false;

type InputType =
  | "deleteContentBackward"
  | "deleteContentForward"
  | "insertText"
  | string;

export function preserveCursorPosition(
  el: Element,
  update: () => void,
  event?: InputEvent,
) {
  if (!preserving && document.activeElement === el) {
    const initialValue = (el as HTMLInputElement).value;
    const initialPosition = (el as HTMLInputElement).selectionStart!;
    preserving = true;
    update();
    preserving = false;
    const updatedValue = (el as HTMLInputElement).value;
    const updatedPosition = resolveCursorPosition(
      updatedValue,
      initialValue,
      initialPosition,
      event?.inputType as InputType,
    );
    if (updatedPosition !== undefined) {
      (el as HTMLInputElement).setSelectionRange(
        updatedPosition,
        updatedPosition,
      );
    }
  } else {
    update();
  }
}
