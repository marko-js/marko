import {
  type Accessor,
  AccessorChar,
  ControlledType,
  type Scope,
} from "../common/types";
import { attr, normalizeAttrValue } from "./dom";
import { createDelegator } from "./event";
import { pendingEffects, run } from "./queue";
import { resolveCursorPosition } from "./resolve-cursor-position";
import { isResuming } from "./resume";

export function controllable_input_checked(
  scope: Scope,
  nodeAccessor: Accessor,
  checked: unknown,
  checkedChange: unknown,
) {
  setCheckboxValue(
    scope,
    nodeAccessor,
    ControlledType.InputChecked,
    normalizeBoolProp(checked),
    checkedChange,
  );
}
export function controllable_input_checked_effect(
  scope: Scope,
  nodeAccessor: Accessor,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  syncControllable(el, "input", hasCheckboxChanged, () => {
    const checkedChange = scope[
      nodeAccessor + AccessorChar.ControlledHandler
    ] as undefined | ((value: unknown) => unknown);
    if (checkedChange) {
      scope[nodeAccessor + AccessorChar.ControlledType] =
        ControlledType.Pending;
      checkedChange(el.checked);
      run();
      if (
        scope[nodeAccessor + AccessorChar.ControlledType] ===
        ControlledType.Pending
      ) {
        el.checked = !el.checked;
      }
    }
  });
}

export function controllable_input_checkedValue(
  scope: Scope,
  nodeAccessor: Accessor,
  checkedValue: unknown,
  checkedValueChange: unknown,
  value: unknown,
) {
  scope[nodeAccessor + AccessorChar.ControlledValue] = checkedValue;
  attr(scope[nodeAccessor] as HTMLInputElement, "value", value);
  setCheckboxValue(
    scope,
    nodeAccessor,
    ControlledType.InputCheckedValue,
    Array.isArray(checkedValue)
      ? checkedValue.includes(value)
      : checkedValue === value,
    checkedValueChange,
  );
}
export function controllable_input_checkedValue_effect(
  scope: Scope,
  nodeAccessor: Accessor,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  syncControllable(el, "input", hasCheckboxChanged, () => {
    const checkedValueChange = scope[
      nodeAccessor + AccessorChar.ControlledHandler
    ] as undefined | ((value: unknown) => unknown);
    if (checkedValueChange) {
      const oldValue = scope[nodeAccessor + AccessorChar.ControlledValue];
      scope[nodeAccessor + AccessorChar.ControlledType] =
        ControlledType.Pending;
      checkedValueChange(
        Array.isArray(oldValue)
          ? updateList(oldValue, el.value, el.checked)
          : el.checked
            ? el.value
            : undefined,
      );
      run();

      if (
        scope[nodeAccessor + AccessorChar.ControlledType] ===
        ControlledType.Pending
      ) {
        el.checked = !el.checked;
      }
    }
  });
}

export function controllable_input_value(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  const normalizedValue = normalizeStrProp(value);
  scope[nodeAccessor + AccessorChar.ControlledHandler] = valueChange;

  if (valueChange) {
    scope[nodeAccessor + AccessorChar.ControlledType] =
      ControlledType.InputChecked;
    scope[nodeAccessor + AccessorChar.ControlledValue] = value;

    if (el.isConnected) {
      setValueAndUpdateSelection(el, normalizedValue);
    } else {
      el.defaultValue = normalizedValue;
    }
  } else {
    scope[nodeAccessor + AccessorChar.ControlledType] = ControlledType.None;
    el.defaultValue = normalizedValue;
  }
}
export function controllable_input_value_effect(
  scope: Scope,
  nodeAccessor: Accessor,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  if (isResuming) {
    scope[nodeAccessor + AccessorChar.ControlledValue] = el.defaultValue;
  }
  syncControllable(el, "input", hasValueChanged, (ev?: Event) => {
    const valueChange = scope[nodeAccessor + AccessorChar.ControlledHandler] as
      | undefined
      | ((value: unknown) => unknown);
    if (valueChange) {
      scope[nodeAccessor + AccessorChar.ControlledType] =
        ControlledType.Pending;
      if (ev) inputType = (ev as InputEvent).inputType;
      valueChange(el.value);
      run();
      if (
        scope[nodeAccessor + AccessorChar.ControlledType] ===
        ControlledType.Pending
      ) {
        setValueAndUpdateSelection(
          el,
          scope[nodeAccessor + AccessorChar.ControlledValue],
        );
      }

      inputType = "";
    }
  });
}

export {
  controllable_input_value as controllable_textarea_value,
  controllable_input_value_effect as controllable_textarea_value_effect,
};

export function controllable_select_value(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
) {
  scope[nodeAccessor + AccessorChar.ControlledHandler] = valueChange;

  if (valueChange) {
    scope[nodeAccessor + AccessorChar.ControlledType] =
      ControlledType.SelectValue;
    scope[nodeAccessor + AccessorChar.ControlledValue] = value;
  } else {
    scope[nodeAccessor + AccessorChar.ControlledType] = ControlledType.None;
  }

  pendingEffects.unshift(scope, () =>
    setSelectOptions(
      scope[nodeAccessor] as HTMLSelectElement,
      value,
      valueChange,
    ),
  );
}
export function controllable_select_value_effect(
  scope: Scope,
  nodeAccessor: Accessor,
) {
  const el = scope[nodeAccessor] as HTMLSelectElement;
  syncControllable(el, "input", hasSelectChanged, () => {
    const valueChange = scope[nodeAccessor + AccessorChar.ControlledHandler] as
      | undefined
      | ((value: unknown) => unknown);
    if (valueChange) {
      scope[nodeAccessor + AccessorChar.ControlledType] =
        ControlledType.Pending;
      valueChange(
        Array.isArray(scope[nodeAccessor + AccessorChar.ControlledValue])
          ? Array.from(el.selectedOptions, toValueProp)
          : el.value,
      );
      run();

      if (
        scope[nodeAccessor + AccessorChar.ControlledType] ===
        ControlledType.Pending
      ) {
        setSelectOptions(
          el,
          scope[nodeAccessor + AccessorChar.ControlledValue],
          valueChange,
        );
      }
    }
  });
}

function setSelectOptions(
  el: HTMLSelectElement,
  value: unknown,
  valueChange?: unknown,
) {
  if (Array.isArray(value)) {
    for (const opt of el.options) {
      const selected = value.includes(opt.value);
      if (valueChange) {
        opt.selected = selected;
      } else {
        opt.defaultSelected = selected;
      }
    }
  } else {
    const normalizedValue = normalizeStrProp(value);
    if (valueChange) {
      el.value = normalizedValue;
    } else {
      for (const opt of el.options) {
        opt.defaultSelected = opt.value === normalizedValue;
      }
    }
  }
}

export function controllable_detailsOrDialog_open(
  scope: Scope,
  nodeAccessor: Accessor,
  open: unknown,
  openChange: unknown,
) {
  scope[nodeAccessor + AccessorChar.ControlledHandler] = openChange;
  if (openChange) {
    scope[nodeAccessor + AccessorChar.ControlledType] =
      ControlledType.DetailsOrDialogOpen;
  } else {
    scope[nodeAccessor + AccessorChar.ControlledType] = ControlledType.None;
  }

  (scope[nodeAccessor] as HTMLDetailsElement).open = normalizeBoolProp(open);
}
export function controllable_detailsOrDialog_open_effect(
  scope: Scope,
  nodeAccessor: Accessor,
) {
  const el = scope[nodeAccessor] as HTMLDetailsElement;
  const hasChanged = () =>
    el.open !== scope[nodeAccessor + AccessorChar.ControlledValue];
  syncControllable(
    el,
    el.tagName === "DIALOG" ? "close" : "toggle",
    hasChanged,
    () => {
      const openChange = scope[
        nodeAccessor + AccessorChar.ControlledHandler
      ] as undefined | ((value: unknown) => unknown);
      if (openChange && hasChanged()) {
        scope[nodeAccessor + AccessorChar.ControlledType] =
          ControlledType.Pending;
        openChange(el.open);
        run();
        if (
          scope[nodeAccessor + AccessorChar.ControlledType] ===
          ControlledType.Pending
        ) {
          el.open = !el.open;
        }
      }
    },
  );
}

let inputType = "";
function setValueAndUpdateSelection(el: HTMLInputElement, value: string) {
  const initialValue = el.value;
  if (initialValue !== value) {
    if ((el.getRootNode() as Document | ShadowRoot).activeElement === el) {
      const initialPosition = el.selectionStart!;
      el.value = value;
      const updatedPosition = resolveCursorPosition(
        el.value,
        initialValue,
        initialPosition,
        inputType,
      );
      if (~updatedPosition) {
        el.setSelectionRange(updatedPosition, updatedPosition);
      }
    } else {
      el.value = value;
    }
  }
}

function setCheckboxValue(
  scope: Scope,
  nodeAccessor: Accessor,
  type: ControlledType,
  checked: boolean,
  checkedChange: unknown,
) {
  scope[nodeAccessor + AccessorChar.ControlledHandler] = checkedChange;

  if (checkedChange) {
    scope[nodeAccessor + AccessorChar.ControlledType] = type;
    (scope[nodeAccessor] as HTMLInputElement).checked = checked;
  } else {
    scope[nodeAccessor + AccessorChar.ControlledType] = ControlledType.None;
    (scope[nodeAccessor] as HTMLInputElement).defaultChecked = checked;
  }
}

const delegateFormControl = createDelegator();
const formChangeHandlers = new WeakMap<Element, (ev?: Event) => void>();
function syncControllable<T extends Element>(
  el: T,
  event: "input" | "close" | "toggle",
  hasChanged: (el: T) => boolean | undefined,
  onChange: (ev?: Event) => void,
) {
  formChangeHandlers.set(el, onChange);
  delegateFormControl(el, event, onFormChange);
  if ((el as any).form) {
    delegateFormControl((el as any).form!, "reset", onFormReset);
  }

  if (isResuming && hasChanged(el)) {
    queueMicrotask(onChange);
  }
}

function onFormChange(ev: Event) {
  formChangeHandlers.get(ev.target as Element)?.(ev);
}

function onFormReset(ev: Event) {
  const handlers: (() => void)[] = [];
  for (const el of (ev.target as HTMLFormElement).elements) {
    const handler = formChangeHandlers.get(el);
    if (handler && hasFormElementChanged(el)) {
      handlers.push(handler);
    }
  }

  requestAnimationFrame(() => {
    if (!ev.defaultPrevented) {
      for (const change of handlers) {
        change();
      }
    }
  });
}

function hasValueChanged(el: HTMLInputElement) {
  return el.value !== el.defaultValue;
}

function hasCheckboxChanged(el: HTMLInputElement) {
  return el.checked !== el.defaultChecked;
}

function hasSelectChanged(el: HTMLSelectElement) {
  for (const opt of el.options) {
    if (opt.selected !== opt.defaultSelected) {
      return true;
    }
  }
}

function hasFormElementChanged(el: Element) {
  return (el as HTMLSelectElement).options
    ? hasSelectChanged(el as HTMLSelectElement)
    : hasValueChanged(el as HTMLInputElement) ||
        hasCheckboxChanged(el as HTMLInputElement);
}

function normalizeStrProp(value: unknown) {
  return normalizeAttrValue(value) || "";
}

function normalizeBoolProp(value: unknown) {
  return value != null && value !== false;
}

function updateList(arr: unknown[], val: unknown, push: boolean) {
  const index = arr.indexOf(val);
  return (
    (push
      ? !~index && [...arr, val]
      : ~index && arr.slice(0, index).concat(arr.slice(index + 1))) || arr
  );
}

function toValueProp(it: { value: string }) {
  return it.value;
}
