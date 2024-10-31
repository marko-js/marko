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
  checkedValues: unknown[],
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
    (checkedValues?.includes(value) ? ` checked` : "") + attr("value", value)
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
  let scope: Record<string, unknown> | undefined;
  let events: Record<string, unknown> | undefined;

  for (const name in data) {
    const val = data[name];

    switch (name) {
      case "class":
        result += classAttr(val);
        break;
      case "style":
        result += styleAttr(val);
        break;
      case "value":
        // TODO: need to somehow know what type of element this is
        if (tagName === "input") {
          result += controllable_input_value(
            scopeId,
            elementAccessor,
            val,
            data.valueChange,
          );
        } else if (tagName === "select") {
          result += controllable_select_value(
            scopeId,
            elementAccessor,
            val,
            data.valueChange,
          );
        } else if (tagName === "option") {
          result += optionValueAttr(val);
        } else {
          result += attr("value", val);
        }
        break;
      case "checkedValue":
        result += controllable_input_checkedValue(
          scopeId,
          elementAccessor,
          val,
          data.checkedValue,
          data.value,
        );
        break;
      case "checkedValues":
        result += controllable_input_checkedValues(
          scopeId,
          elementAccessor,
          val as unknown[],
          data.checkedValues,
          data.value,
        );
        break;
      case "open":
        result += controllable_dialog_open(
          scopeId,
          elementAccessor,
          val,
          data.openChange,
        );
        break;
      default:
        if (!isVoid(val)) {
          const controllableAttr =
            controllableChangeAttrs[
              name as keyof typeof controllableChangeAttrs
            ];
          if (controllableAttr) {
            scope ||= ensureScopeWithId(scopeId!);
            scope[elementAccessor + AccessorChar.ControlledHandler] = val;
            scope[elementAccessor + AccessorChar.ControlledType] =
              controllableAttr;
          } else if (/^on[A-Z-]/.test(name)) {
            events ||= (scope ??= ensureScopeWithId(scopeId!))[
              (elementAccessor + AccessorChar.EventAttributes) as any
            ] ||= {} as any;
            events![
              name[2] === "-" ? name.slice(3) : name.slice(2).toLowerCase()
            ] = val;
          } else if (!/^renderBody$|[\s/>"'=]/.test(name)) {
            result += nonVoidAttr(name, val);
          }
        }
        break;
    }
  }
  return result;
}

const controllableChangeAttrs = {
  valueChange: "value",
  checkedChange: "checked",
  checkedValueChange: "checkedValue",
  checkedValuesChange: "checkedValues",
  openChange: "open",
};
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
