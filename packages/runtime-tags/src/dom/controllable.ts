import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  ControlledType,
  type Scope,
} from "../common/types";
import { _attr, normalizeAttrValue } from "./dom";
import { createDelegator } from "./event";
import { pendingEffects, run } from "./queue";
import { resolveCursorPosition } from "./resolve-cursor-position";
import { isResuming } from "./resume";

let inputType = "";
const controllableDelegate = createDelegator();

export function _attr_input_checked(
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
export function _attr_input_checked_script(
  scope: Scope,
  nodeAccessor: Accessor,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  syncControllable(el, "input", hasCheckboxChanged, () => {
    const checkedChange = scope[
      AccessorPrefix.ControlledHandler + nodeAccessor
    ] as undefined | ((value: unknown) => unknown);
    if (checkedChange) {
      const newValue = el.checked;
      el.checked = !newValue;
      checkedChange(newValue);
      run();
    }
  });
}

export function _attr_input_checkedValue(
  scope: Scope,
  nodeAccessor: Accessor,
  checkedValue: unknown,
  checkedValueChange: unknown,
  value: unknown,
) {
  const multiple = Array.isArray(checkedValue);
  const normalizedValue = normalizeStrProp(value);
  const normalizedCheckedValue = multiple
    ? checkedValue.map(normalizeStrProp)
    : normalizeStrProp(checkedValue);
  scope[AccessorPrefix.ControlledValue + nodeAccessor] = normalizedCheckedValue;
  _attr(scope[nodeAccessor] as HTMLInputElement, "value", normalizedValue);
  setCheckboxValue(
    scope,
    nodeAccessor,
    ControlledType.InputCheckedValue,
    multiple
      ? normalizedCheckedValue.includes(normalizedValue)
      : normalizedValue === normalizedCheckedValue,
    checkedValueChange,
  );
}
export function _attr_input_checkedValue_script(
  scope: Scope,
  nodeAccessor: Accessor,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  if (isResuming && el.defaultChecked) {
    if (scope[AccessorPrefix.ControlledValue + nodeAccessor]) {
      (scope[AccessorPrefix.ControlledValue + nodeAccessor] as string[]).push(
        el.value,
      );
    } else {
      scope[AccessorPrefix.ControlledValue + nodeAccessor] = el.value;
    }
  }

  syncControllable(el, "input", hasCheckboxChanged, () => {
    const checkedValueChange = scope[
      AccessorPrefix.ControlledHandler + nodeAccessor
    ] as undefined | ((value: unknown) => unknown);
    if (checkedValueChange) {
      const oldValue = scope[AccessorPrefix.ControlledValue + nodeAccessor];
      const newValue = Array.isArray(oldValue)
        ? updateList(oldValue, el.value, el.checked)
        : el.checked
          ? el.value
          : undefined;

      if (el.name && el.type[0] === "r") {
        for (const radio of (
          el.getRootNode() as Document | ShadowRoot
        ).querySelectorAll<HTMLInputElement>(
          `[type=radio][name=${CSS.escape(el.name)}]`,
        )) {
          if (radio.form === el.form) {
            radio.checked = Array.isArray(oldValue)
              ? oldValue.includes(radio.value)
              : oldValue === radio.value;
          }
        }
      } else {
        el.checked = !el.checked;
      }
      checkedValueChange(newValue);
      run();
    }
  });
}
function setCheckboxValue(
  scope: Scope,
  nodeAccessor: Accessor,
  type: ControlledType,
  checked: boolean,
  checkedChange: unknown,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  scope[AccessorPrefix.ControlledHandler + nodeAccessor] = checkedChange;
  scope[AccessorPrefix.ControlledType + nodeAccessor] = checkedChange
    ? type
    : ControlledType.None;

  if (checkedChange && !scope[AccessorProp.Creating]) {
    el.checked = checked;
  } else if (checked !== el.defaultChecked) {
    const restoreValue = scope[AccessorProp.Creating] ? checked : el.checked;
    el.defaultChecked = checked;
    if (restoreValue !== checked) {
      el.checked = restoreValue;
    }
  }
}

export function _attr_input_value(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  const normalizedValue = normalizeStrProp(value);
  scope[AccessorPrefix.ControlledHandler + nodeAccessor] = valueChange;
  scope[AccessorPrefix.ControlledValue + nodeAccessor] = normalizedValue;
  scope[AccessorPrefix.ControlledType + nodeAccessor] = valueChange
    ? ControlledType.InputValue
    : ControlledType.None;

  if (valueChange && !scope[AccessorProp.Creating]) {
    setInputValue(el, normalizedValue);
  } else if (el.defaultValue !== normalizedValue) {
    const restoreValue = scope[AccessorProp.Creating]
      ? normalizedValue
      : el.value;
    el.defaultValue = normalizedValue;
    setInputValue(el, restoreValue);
  }
}
export function _attr_input_value_script(scope: Scope, nodeAccessor: Accessor) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  if (isResuming) {
    scope[AccessorPrefix.ControlledValue + nodeAccessor] = el.defaultValue;
  }
  syncControllable(el, "input", hasValueChanged, (ev?: Event) => {
    const valueChange = scope[
      AccessorPrefix.ControlledHandler + nodeAccessor
    ] as undefined | ((value: unknown) => unknown);
    if (valueChange) {
      inputType = (ev as InputEvent)?.inputType;
      valueChange(el.value);
      run();
      setInputValue(el, scope[AccessorPrefix.ControlledValue + nodeAccessor]);
      inputType = "";
    }
  });
}
function setInputValue(el: HTMLInputElement, value: string) {
  if (el.value !== value) {
    const updatedPosition = resolveCursorPosition(
      inputType,
      (el.getRootNode() as Document | ShadowRoot).activeElement === el &&
        el.selectionStart,
      el.value,
      (el.value = value),
    );
    if (~updatedPosition) {
      el.setSelectionRange(updatedPosition, updatedPosition);
    }
  }
}

export {
  _attr_input_value as _attr_textarea_value,
  _attr_input_value_script as _attr_textarea_value_script,
};

export function _attr_select_value(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
) {
  let restoreValue: undefined | string | string[];
  const el = scope[nodeAccessor] as HTMLSelectElement;
  const existing = !scope[AccessorProp.Creating];
  const multiple = Array.isArray(value);
  const normalizedValue = multiple
    ? value.map(normalizeStrProp)
    : normalizeStrProp(value);
  scope[AccessorPrefix.ControlledHandler + nodeAccessor] = valueChange;
  scope[AccessorPrefix.ControlledValue + nodeAccessor] = normalizedValue;
  scope[AccessorPrefix.ControlledType + nodeAccessor] = valueChange
    ? ControlledType.SelectValue
    : ControlledType.None;

  pendingEffects.unshift(() => {
    if (valueChange && existing) {
      setSelectValue(el, normalizedValue, multiple);
    } else {
      for (const opt of el.options) {
        const selected = multiple
          ? normalizedValue.includes(opt.value)
          : opt.value === normalizedValue;
        if (opt.defaultSelected !== selected) {
          if (existing) {
            restoreValue ??= getSelectValue(el, multiple);
          }
          opt.defaultSelected = selected;
        }
      }

      if (restoreValue !== undefined) {
        setSelectValue(el, restoreValue, multiple);
      }
    }
  }, scope);
}
export function _attr_select_value_script(
  scope: Scope,
  nodeAccessor: Accessor,
) {
  const el = scope[nodeAccessor] as HTMLSelectElement;
  const onChange = () => {
    const valueChange = scope[
      AccessorPrefix.ControlledHandler + nodeAccessor
    ] as undefined | ((value: unknown) => unknown);
    if (valueChange) {
      const oldValue = scope[AccessorPrefix.ControlledValue + nodeAccessor] as
        | string
        | string[];
      const multiple = Array.isArray(oldValue);
      const newValue = getSelectValue(el, multiple);
      setSelectValue(el, oldValue, multiple);
      valueChange(newValue);
      run();
    }
  };

  if (isResuming) {
    if (el.multiple) {
      scope[AccessorPrefix.ControlledValue + nodeAccessor] = [];
      for (const opt of el.options) {
        if (opt.defaultSelected) {
          scope[AccessorPrefix.ControlledValue + nodeAccessor].push(opt.value);
        }
      }
    } else {
      scope[AccessorPrefix.ControlledValue + nodeAccessor] = "";
      for (const opt of el.options) {
        if (opt.defaultSelected) {
          scope[AccessorPrefix.ControlledValue + nodeAccessor] = opt.value;
          break;
        }
      }
    }
  }

  if (!(el as any)._) {
    new MutationObserver(() => {
      const value = scope[AccessorPrefix.ControlledValue + nodeAccessor];
      if (
        Array.isArray(value)
          ? value.length !== el.selectedOptions.length ||
            value.some((value, i) => value != el.selectedOptions[i].value)
          : el.value !== value
      ) {
        onChange();
      }
    }).observe(el, {
      childList: true,
      subtree: true,
    });
  }

  syncControllable(el, "input", hasSelectChanged, onChange);
}
function setSelectValue(
  el: HTMLSelectElement,
  value: string | string[],
  multiple: boolean,
) {
  if (multiple) {
    for (const opt of el.options) {
      opt.selected = value.includes(opt.value);
    }
  } else {
    el.value = value as string;
  }
}
function getSelectValue(el: HTMLSelectElement, multiple: boolean) {
  return multiple
    ? Array.from(el.selectedOptions, (opt) => opt.value)
    : el.value;
}

export function _attr_details_or_dialog_open(
  scope: Scope,
  nodeAccessor: Accessor,
  open: unknown,
  openChange: unknown,
) {
  scope[AccessorPrefix.ControlledHandler + nodeAccessor] = openChange;
  scope[AccessorPrefix.ControlledType + nodeAccessor] = openChange
    ? ControlledType.DetailsOrDialogOpen
    : ControlledType.None;

  if (openChange || scope[AccessorProp.Creating]) {
    (scope[nodeAccessor] as HTMLDetailsElement).open = scope[
      AccessorPrefix.ControlledValue + nodeAccessor
    ] = normalizeBoolProp(open);
  }
}
export function _attr_details_or_dialog_open_script(
  scope: Scope,
  nodeAccessor: Accessor,
) {
  const el = scope[nodeAccessor] as HTMLDetailsElement;
  const hasChanged = () =>
    el.open === !scope[AccessorPrefix.ControlledValue + nodeAccessor];
  syncControllable(
    el,
    el.tagName === "DIALOG" ? "close" : "toggle",
    hasChanged,
    () => {
      const openChange = scope[
        AccessorPrefix.ControlledHandler + nodeAccessor
      ] as undefined | ((value: unknown) => unknown);
      if (openChange && hasChanged()) {
        const newValue = el.open;
        el.open = !newValue;
        openChange(newValue);
        run();
      }
    },
  );
}

function syncControllable<T extends Element>(
  el: T,
  event: "input" | "close" | "toggle",
  hasChanged: (el: T) => boolean | undefined,
  onChange: (ev?: Event) => void,
) {
  if (!(el as any)._) {
    controllableDelegate(el, event, handleChange);
    if ((el as any).form) {
      controllableDelegate((el as any).form, "reset", handleFormReset);
    }

    if (isResuming && hasChanged(el)) {
      queueMicrotask(onChange);
    }
  }

  (el as any)._ = onChange;
}

function handleChange(ev: Event) {
  (ev.target as any)._?.(ev);
}

function handleFormReset(ev: Event) {
  const handlers: (() => void)[] = [];
  for (const el of (ev.target as HTMLFormElement).elements) {
    if ((el as any)._ && hasFormElementChanged(el)) {
      handlers.push((el as any)._);
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
