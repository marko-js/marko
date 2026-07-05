import { assertHandlerIsFunction } from "../common/errors";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  ControlledType,
  type Scope,
} from "../common/types";
import {
  hasSelectChanged,
  normalizeStrProp,
  syncControllableFormInput,
} from "./controllable-shared";
import { pendingEffects, run, runId } from "./queue";
import { isResuming } from "./resume";

export function _attr_select_value_default(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
) {
  let restoreValue: undefined | string | string[];
  const el = scope[nodeAccessor] as HTMLSelectElement;
  const live = scope[AccessorProp.Gen] < runId;
  const multiple = Array.isArray(value);
  const normalizedValue = multiple
    ? value.map(normalizeStrProp)
    : normalizeStrProp(value);

  pendingEffects.unshift(() => {
    for (const opt of el.options) {
      const selected = multiple
        ? normalizedValue.includes(opt.value)
        : opt.value === normalizedValue;
      if (opt.defaultSelected !== selected) {
        if (live) {
          restoreValue ??= getSelectValue(el, multiple);
        }
        opt.defaultSelected = selected;
      }
    }

    if (restoreValue !== undefined) {
      setSelectValue(el, restoreValue, multiple);
    }
  }, scope);
}
export function _attr_select_value(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
) {
  const el = scope[nodeAccessor] as HTMLSelectElement;
  const existing = scope[AccessorProp.Gen] < runId;
  const multiple = Array.isArray(value);
  const normalizedValue = (scope[
    AccessorPrefix.ControlledValue + nodeAccessor
  ] = multiple ? value.map(normalizeStrProp) : normalizeStrProp(value));
  if (MARKO_DEBUG) {
    assertHandlerIsFunction("valueChange", valueChange);
  }
  scope[AccessorPrefix.ControlledHandler + nodeAccessor] = valueChange;
  scope[AccessorPrefix.ControlledType + nodeAccessor] = valueChange
    ? ControlledType.SelectValue
    : ControlledType.None;

  if (MARKO_DEBUG && valueChange) {
    pendingEffects.unshift(
      () => assertSelectValueMatchesOption(el, normalizedValue, value),
      scope,
    );
  }

  if (valueChange && existing) {
    pendingEffects.unshift(
      () => setSelectValue(el, normalizedValue, multiple),
      scope,
    );
  } else {
    _attr_select_value_default(scope, nodeAccessor, normalizedValue);
  }
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

  syncControllableFormInput(el, hasSelectChanged, onChange);
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
  }).observe(el, { childList: true, subtree: true });
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
function assertSelectValueMatchesOption(
  el: HTMLSelectElement,
  normalizedValue: string | string[],
  value: unknown,
) {
  const multiple = Array.isArray(normalizedValue);
  if (multiple ? normalizedValue.some(Boolean) : normalizedValue) {
    for (const opt of el.options) {
      if (
        multiple
          ? normalizedValue.includes(opt.value)
          : opt.value === normalizedValue
      ) {
        return;
      }
    }
    console.error(
      "A controlled `<select>`'s `value` has no matching `<option>`:",
      value,
    );
  }
}
