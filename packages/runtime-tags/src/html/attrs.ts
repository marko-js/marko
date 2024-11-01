import { classValue, isVoid, styleValue } from "../common/helpers";
import { type Accessor, AccessorChar } from "../common/types";
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

// TODO: use this in the translator
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
  elementAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
) {
  if (valueChange) {
    const scope = ensureScopeWithId(scopeId!);
    scope[elementAccessor + AccessorChar.ControlledValue] = value;
    scope[elementAccessor + AccessorChar.ControlledHandler] = valueChange;
  }
  return "";
}

export function controllable_input_value(
  scopeId: number,
  elementAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
) {
  if (valueChange) {
    const scope = ensureScopeWithId(scopeId!);
    // scope[elementAccessor + AccessorChar.ControlledValue] = value;
    scope[elementAccessor + AccessorChar.ControlledHandler] = valueChange;
  }
  return attr("value", value);
}

export function controllable_input_checked(
  scopeId: number,
  elementAccessor: Accessor,
  checked: unknown,
  checkedChange: unknown,
) {
  if (checkedChange) {
    const scope = ensureScopeWithId(scopeId!);
    // scope[elementAccessor + AccessorChar.ControlledValue] = checked;
    scope[elementAccessor + AccessorChar.ControlledHandler] = checkedChange;
  }
  return attr("checked", checked);
}

export function controllable_input_checkedValue(
  scopeId: number,
  elementAccessor: Accessor,
  checkedValue: unknown,
  checkedValueChange: unknown,
  value: unknown,
) {
  if (checkedValueChange) {
    const scope = ensureScopeWithId(scopeId!);
    // scope[elementAccessor + AccessorChar.ControlledValue] = checkedValue;
    scope[elementAccessor + AccessorChar.ControlledHandler] =
      checkedValueChange;
  }
  return (checkedValue === value ? ` checked` : "") + attr("value", value);
}

export function controllable_input_checkedValues(
  scopeId: number,
  elementAccessor: Accessor,
  checkedValues: unknown,
  checkedValuesChange: unknown,
  value: unknown,
) {
  if (checkedValuesChange) {
    const scope = ensureScopeWithId(scopeId!);
    scope[elementAccessor + AccessorChar.ControlledValue] = checkedValues;
    scope[elementAccessor + AccessorChar.ControlledHandler] =
      checkedValuesChange;
  }
  return (
    (Array.isArray(checkedValues) && checkedValues.includes(value)
      ? ` checked`
      : "") + attr("value", value)
  );
}

export function controllable_dialog_open(
  scopeId: number,
  elementAccessor: Accessor,
  open: unknown,
  openChange: unknown,
) {
  if (openChange) {
    const scope = ensureScopeWithId(scopeId!);
    scope[elementAccessor + AccessorChar.ControlledValue] = open;
    scope[elementAccessor + AccessorChar.ControlledHandler] = openChange;
  }
  return attr("open", open);
}

export { controllable_dialog_open as controllable_details_open };

export function attr(name: string, val: unknown) {
  return isVoid(val) ? "" : nonVoidAttr(name, val);
}

export function attrs(
  data: Record<string, unknown>,
  elementAccessor: Accessor,
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
          elementAccessor,
          data.checked,
          data.checkedChange,
        );
      } else if (data.checkedValue || data.checkedValueChange) {
        result += controllable_input_checkedValue(
          scopeId,
          elementAccessor,
          data.checkedValue,
          data.checkedValueChange,
          data.value,
        );
      } else if (data.checkedValues || data.checkedValuesChange) {
        result += controllable_input_checkedValues(
          scopeId,
          elementAccessor,
          data.checkedValues,
          data.checkedValuesChange,
          data.value,
        );
      } else if (data.valueChange) {
        result += controllable_input_value(
          scopeId,
          elementAccessor,
          data.value,
          data.valueChange,
        );
      } else {
        break;
      }
      skip = /^(?:value|checked)(?:Values?)?(?:Change)?$|[\s/>"'=]/;
      break;
    case "select":
      if (data.value || data.valueChange) {
        result += controllable_select_value(
          scopeId,
          elementAccessor,
          data.value,
          data.valueChange,
        );
        skip = /^value(?:Change)?$|[\s/>"'=]/;
      }
      break;
    case "details":
    case "dialog":
      if (data.openChange) {
        result += controllable_dialog_open(
          scopeId,
          elementAccessor,
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
              (elementAccessor + AccessorChar.EventAttributes) as any
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
  elementAccessor: Accessor,
  scopeId: number,
  tagName: string,
) {
  const partial: Partial<typeof data> = {};
  for (const key in data) {
    if (!skip[key]) partial[key] = data[key];
  }

  return attrs(partial, elementAccessor, scopeId, tagName);
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
