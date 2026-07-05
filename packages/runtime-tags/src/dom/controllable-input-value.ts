import { assertHandlerIsFunction } from "../common/errors";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  ControlledType,
  type Scope,
} from "../common/types";
import {
  hasValueChanged,
  syncControllableFormInput,
} from "./controllable-shared";
import { normalizeAttrValue } from "./dom";
import { run, runId } from "./queue";
import { resolveCursorPosition } from "./resolve-cursor-position";
import { isResuming } from "./resume";

let inputType = "";

export function _attr_input_value_default(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  const normalizedValue = normalizeAttrValue(value) || "";
  if (el.defaultValue !== normalizedValue) {
    const restoreValue =
      // Types whose `value` IDL attribute reflects the content attribute
      // (hidden inputs, button labels, checkbox/radio values) have no
      // user-owned live value to preserve -- restoring would write the
      // stale attribute back.
      scope[AccessorProp.Gen] < runId &&
      !/^(?:hidden|submit|image|reset|button|checkbox|radio)$/.test(el.type)
        ? el.value
        : normalizedValue;
    el.defaultValue = normalizedValue;
    setInputValue(el, restoreValue);
  }
}
export function _attr_input_value(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  const normalizedValue = normalizeAttrValue(value) || "";
  if (MARKO_DEBUG) {
    assertHandlerIsFunction("valueChange", valueChange);
  }
  scope[AccessorPrefix.ControlledHandler + nodeAccessor] = valueChange;
  scope[AccessorPrefix.ControlledValue + nodeAccessor] = normalizedValue;
  scope[AccessorPrefix.ControlledType + nodeAccessor] = valueChange
    ? ControlledType.InputValue
    : ControlledType.None;

  if (valueChange && scope[AccessorProp.Gen] < runId) {
    setInputValue(el, normalizedValue);
  } else {
    _attr_input_value_default(scope, nodeAccessor, normalizedValue);
  }
}
export function _attr_input_value_script(scope: Scope, nodeAccessor: Accessor) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  if (isResuming) {
    scope[AccessorPrefix.ControlledValue + nodeAccessor] = el.defaultValue;
  }
  syncControllableFormInput(el, hasValueChanged, (ev?: Event) => {
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
      document.activeElement === el && el.selectionStart,
      el.value,
      (el.value = value),
    );
    if (~updatedPosition) {
      el.setSelectionRange(updatedPosition, updatedPosition);
    }
  }
}
