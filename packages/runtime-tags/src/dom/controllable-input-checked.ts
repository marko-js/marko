import { assertHandlerIsFunction } from "../common/errors";
import { isNotVoid } from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  ControlledType,
  type Scope,
} from "../common/types";
import {
  hasCheckboxChanged,
  normalizeStrProp,
  syncControllableFormInput,
  updateList,
} from "./controllable-shared";
import { _attr } from "./dom";
import { run, runId } from "./queue";
import { isResuming } from "./resume";

export function _attr_input_checked_default(
  scope: Scope,
  nodeAccessor: Accessor,
  checked: boolean,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  const normalizedChecked = isNotVoid(checked);
  if (el.defaultChecked !== normalizedChecked) {
    const restoreValue =
      scope[AccessorProp.Gen] < runId ? el.checked : normalizedChecked;
    el.defaultChecked = normalizedChecked;
    if (restoreValue !== normalizedChecked) {
      el.checked = restoreValue;
    }
  }
}
export function _attr_input_checked(
  scope: Scope,
  nodeAccessor: Accessor,
  checked: unknown,
  checkedChange: unknown,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  const normalizedChecked = isNotVoid(checked);
  if (MARKO_DEBUG) {
    assertHandlerIsFunction("checkedChange", checkedChange);
  }
  scope[AccessorPrefix.ControlledHandler + nodeAccessor] = checkedChange;
  scope[AccessorPrefix.ControlledType + nodeAccessor] = checkedChange
    ? ControlledType.InputChecked
    : ControlledType.None;

  if (checkedChange && scope[AccessorProp.Gen] < runId) {
    el.checked = normalizedChecked;
  } else {
    _attr_input_checked_default(scope, nodeAccessor, normalizedChecked);
  }
}
export function _attr_input_checked_script(
  scope: Scope,
  nodeAccessor: Accessor,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  syncControllableFormInput(el, hasCheckboxChanged, () => {
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

export function _attr_input_checkedValue_default(
  scope: Scope,
  nodeAccessor: Accessor,
  checkedValue: unknown,
  value: unknown,
) {
  const multiple = Array.isArray(checkedValue);
  const normalizedValue = normalizeStrProp(value);
  const normalizedCheckedValue = multiple
    ? checkedValue.map(normalizeStrProp)
    : normalizeStrProp(checkedValue);

  _attr(scope[nodeAccessor] as HTMLInputElement, "value", value);
  _attr_input_checked_default(
    scope,
    nodeAccessor,
    multiple
      ? normalizedCheckedValue.includes(normalizedValue)
      : normalizedValue === normalizedCheckedValue,
  );
}
export function _attr_input_checkedValue(
  scope: Scope,
  nodeAccessor: Accessor,
  checkedValue: unknown,
  checkedValueChange: unknown,
  value: unknown,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  const multiple = Array.isArray(checkedValue);
  const normalizedCheckedValue = (scope[
    AccessorPrefix.ControlledValue + nodeAccessor
  ] = multiple
    ? checkedValue.map(normalizeStrProp)
    : normalizeStrProp(checkedValue));
  if (MARKO_DEBUG) {
    assertHandlerIsFunction("checkedValueChange", checkedValueChange);
  }
  scope[AccessorPrefix.ControlledHandler + nodeAccessor] = checkedValueChange;
  scope[AccessorPrefix.ControlledType + nodeAccessor] = checkedValueChange
    ? ControlledType.InputCheckedValue
    : ControlledType.None;

  if (checkedValueChange && scope[AccessorProp.Gen] < runId) {
    el.checked = multiple
      ? normalizedCheckedValue.includes(normalizeStrProp(value))
      : normalizeStrProp(value) === normalizedCheckedValue;
    _attr(el, "value", value);
  } else {
    _attr_input_checkedValue_default(scope, nodeAccessor, checkedValue, value);
  }
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

  syncControllableFormInput(el, hasCheckboxChanged, () => {
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
        for (const radio of document.querySelectorAll<HTMLInputElement>(
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
