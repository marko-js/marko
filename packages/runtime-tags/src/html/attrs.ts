import { classValue, isVoid, styleValue } from "../common/helpers";
import { type Accessor, AccessorChar, ControlledType } from "../common/types";
import { ensureScopeWithId, getChunk, withContext } from "./writer";

export function classAttr(val: unknown) {
  return stringAttr("class", classValue(val));
}

export function styleAttr(val: unknown) {
  return stringAttr("style", styleValue(val));
}

const kSelectedValue = Symbol("selectedValue");
export function withSelectedValue(value: unknown, renderBody: () => void) {
  withContext(kSelectedValue, value, renderBody);
}

export function optionValueAttr(value: unknown) {
  const { [kSelectedValue]: selectedValue } =
    getChunk()?.context || ({} as any);

  return (
    attr("value", value) +
    (!isVoid(value) &&
    (Array.isArray(value)
      ? selectedValue.includes(value)
      : selectedValue === value)
      ? ` selected`
      : "")
  );
}

export function controllable_select_value(
  scopeId: number,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
) {
  if (valueChange) {
    const scope = ensureScopeWithId(scopeId!);
    scope[nodeAccessor + AccessorChar.ControlledValue] = value;
    scope[nodeAccessor + AccessorChar.ControlledHandler] = valueChange;
    scope[nodeAccessor + AccessorChar.ControlledType] =
      ControlledType.SelectValue;
  }
  return "";
}

export function controllable_input_value(
  scopeId: number,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
) {
  if (valueChange) {
    const scope = ensureScopeWithId(scopeId!);
    // scope[nodeAccessor + AccessorChar.ControlledValue] = value;
    scope[nodeAccessor + AccessorChar.ControlledHandler] = valueChange;
    scope[nodeAccessor + AccessorChar.ControlledType] =
      ControlledType.InputValue;
  }
  return attr("value", value);
}

export function controllable_input_checked(
  scopeId: number,
  nodeAccessor: Accessor,
  checked: unknown,
  checkedChange: unknown,
) {
  if (checkedChange) {
    const scope = ensureScopeWithId(scopeId!);
    // scope[nodeAccessor + AccessorChar.ControlledValue] = checked;
    scope[nodeAccessor + AccessorChar.ControlledHandler] = checkedChange;
    scope[nodeAccessor + AccessorChar.ControlledType] =
      ControlledType.InputChecked;
  }
  return attr("checked", checked);
}

export function controllable_input_checkedValue(
  scopeId: number,
  nodeAccessor: Accessor,
  checkedValue: unknown,
  checkedValueChange: unknown,
  value: unknown,
) {
  if (checkedValueChange) {
    const scope = ensureScopeWithId(scopeId!);
    scope[nodeAccessor + AccessorChar.ControlledHandler] = checkedValueChange;
    scope[nodeAccessor + AccessorChar.ControlledType] =
      ControlledType.InputCheckedValue;
  }
  return (checkedValue === value ? ` checked` : "") + attr("value", value);
}

export function controllable_input_checkedValues(
  scopeId: number,
  nodeAccessor: Accessor,
  checkedValues: unknown,
  checkedValuesChange: unknown,
  value: unknown,
) {
  if (checkedValuesChange) {
    const scope = ensureScopeWithId(scopeId!);
    scope[nodeAccessor + AccessorChar.ControlledValue] = checkedValues;
    scope[nodeAccessor + AccessorChar.ControlledHandler] = checkedValuesChange;
    scope[nodeAccessor + AccessorChar.ControlledType] =
      ControlledType.InputCheckedValues;
  }
  return (
    (Array.isArray(checkedValues) && checkedValues.includes(value)
      ? ` checked`
      : "") + attr("value", value)
  );
}

export function controllable_dialog_open(
  scopeId: number,
  nodeAccessor: Accessor,
  open: unknown,
  openChange: unknown,
) {
  if (openChange) {
    const scope = ensureScopeWithId(scopeId!);
    scope[nodeAccessor + AccessorChar.ControlledValue] = open;
    scope[nodeAccessor + AccessorChar.ControlledHandler] = openChange;
    scope[nodeAccessor + AccessorChar.ControlledType] =
      ControlledType.DialogOpen;
  }
  return attr("open", open);
}

export function controllable_details_open(
  scopeId: number,
  nodeAccessor: Accessor,
  open: unknown,
  openChange: unknown,
) {
  if (openChange) {
    const scope = ensureScopeWithId(scopeId!);
    scope[nodeAccessor + AccessorChar.ControlledValue] = open;
    scope[nodeAccessor + AccessorChar.ControlledHandler] = openChange;
    scope[nodeAccessor + AccessorChar.ControlledType] =
      ControlledType.DetailsOpen;
  }
  return attr("open", open);
}

export function attr(name: string, val: unknown) {
  return isVoid(val) ? "" : nonVoidAttr(name, val);
}

export function attrs(
  data: Record<string, unknown>,
  nodeAccessor: Accessor,
  scopeId: number,
  tagName: string,
) {
  let result = "";
  let skip = /[\s/>"'=]/;
  let scope: Record<string, unknown> | undefined;
  let events: Record<string, unknown> | undefined;
  switch (tagName) {
    case "input":
      if (data.checkedChange) {
        result += controllable_input_checked(
          scopeId,
          nodeAccessor,
          data.checked,
          data.checkedChange,
        );
      } else if (data.checkedValue || data.checkedValueChange) {
        result += controllable_input_checkedValue(
          scopeId,
          nodeAccessor,
          data.checkedValue,
          data.checkedValueChange,
          data.value,
        );
      } else if (data.checkedValues || data.checkedValuesChange) {
        result += controllable_input_checkedValues(
          scopeId,
          nodeAccessor,
          data.checkedValues,
          data.checkedValuesChange,
          data.value,
        );
      } else if (data.valueChange) {
        result += controllable_input_value(
          scopeId,
          nodeAccessor,
          data.value,
          data.valueChange,
        );
      } else {
        break;
      }
      skip = /^(?:value|checked(?:Values?)?)(?:Change)?$|[\s/>"'=]/;
      break;
    case "select":
      if (data.value || data.valueChange) {
        result += controllable_select_value(
          scopeId,
          nodeAccessor,
          data.value,
          data.valueChange,
        );
        skip = /^value(?:Change)?$|[\s/>"'=]/;
      }
      break;
    case "option":
      if (data.value) {
        result += optionValueAttr(data.value);
        skip = /^value$|[\s/>"'=]/;
      }
      break;
    case "details":
    case "dialog":
      if (data.openChange) {
        result += controllable_dialog_open(
          scopeId,
          nodeAccessor,
          data.open,
          data.openChange,
        );
        skip = /^open(?:Change)?$|[\s/>"'=]/;
      }
      break;
  }

  for (const name in data) {
    const val = data[name];

    switch (name) {
      case "class":
        result += classAttr(val);
        break;
      case "style":
        result += styleAttr(val);
        break;
      case "":
      case "renderBody":
        break;
      default:
        if (!isVoid(val)) {
          if (/^on[A-Z-]/.test(name)) {
            events ||= (scope ??= ensureScopeWithId(scopeId!))[
              (nodeAccessor + AccessorChar.EventAttributes) as any
            ] ||= {} as any;
            events![
              name[2] === "-" ? name.slice(3) : name.slice(2).toLowerCase()
            ] = val;
          } else if (!skip.test(name)) {
            result += nonVoidAttr(name, val);
          }
        }
        break;
    }
  }
  return result;
}

export function partialAttrs(
  data: Record<string, unknown>,
  skip: Record<string, 1>,
  nodeAccessor: Accessor,
  scopeId: number,
  tagName: string,
) {
  const partial: Partial<typeof data> = {};
  for (const key in data) {
    if (!skip[key]) partial[key] = data[key];
  }

  return attrs(partial, nodeAccessor, scopeId, tagName);
}

function stringAttr(name: string, val: string) {
  return val && ` ${name}=${escapeAttrValue(val)}`;
}

function nonVoidAttr(name: string, val: unknown) {
  switch (typeof val) {
    case "string":
      return ` ${name + attrAssignment(val)}`;
    case "boolean":
      return ` ${name}`;
    case "number":
      return ` ${name}=${val}`;
    case "object":
      if (val instanceof RegExp) {
        return ` ${name + attrAssignment(val.source)}`;
      }
      break;
  }

  return ` ${name + attrAssignment(val + "")}`;
}

function attrAssignment(val: string) {
  return val ? `=${escapeAttrValue(val)}` : "";
}

const unsafeAttrChars = /["'>\s]/g;
export function escapeAttrValue(str: string) {
  if (unsafeAttrChars.test(str)) {
    const c = str[unsafeAttrChars.lastIndex - 1];
    unsafeAttrChars.lastIndex = 0;

    return c === '"'
      ? `'${str.replace(/'/g, "&#39;")}'`
      : `"${str.replace(/"/g, "&#34;")}"`;
  }

  return str;
}
