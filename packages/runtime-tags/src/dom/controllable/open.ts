import { assertHandlerIsFunction } from "../../common/errors";
import { isNotVoid } from "../../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  ControlledType,
  type Scope,
} from "../../common/types";
import { run, runId } from "../queue";

export function _attr_details_or_dialog_open_default(
  scope: Scope,
  nodeAccessor: Accessor,
  open: unknown,
) {
  if (scope[AccessorProp.Gen] === runId) {
    (scope[nodeAccessor] as HTMLDetailsElement).open = isNotVoid(open);
  }
}
export function _attr_details_or_dialog_open(
  scope: Scope,
  nodeAccessor: Accessor,
  open: unknown,
  openChange: unknown,
) {
  const normalizedOpen = (scope[AccessorPrefix.ControlledValue + nodeAccessor] =
    isNotVoid(open));
  if (MARKO_DEBUG) {
    assertHandlerIsFunction("openChange", openChange);
  }
  scope[AccessorPrefix.ControlledHandler + nodeAccessor] = openChange;
  scope[AccessorPrefix.ControlledType + nodeAccessor] = openChange
    ? ControlledType.DetailsOrDialogOpen
    : ControlledType.None;

  if (openChange && scope[AccessorProp.Gen] < runId) {
    (scope[nodeAccessor] as HTMLDetailsElement).open = normalizedOpen;
  } else {
    _attr_details_or_dialog_open_default(scope, nodeAccessor, normalizedOpen);
  }
}
export function _attr_details_or_dialog_open_script(
  scope: Scope,
  nodeAccessor: Accessor,
) {
  const el = scope[nodeAccessor] as HTMLDetailsElement;
  new MutationObserver(() => {
    const openChange = scope[
      AccessorPrefix.ControlledHandler + nodeAccessor
    ] as undefined | ((value: unknown) => unknown);

    if (
      openChange &&
      el.open === !scope[AccessorPrefix.ControlledValue + nodeAccessor]
    ) {
      const newValue = el.open;
      el.open = !newValue;
      openChange(newValue);
      run();
    }
  }).observe(el, { attributes: true, attributeFilter: ["open"] });
}
