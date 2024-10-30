import { classValue, isVoid, styleValue } from "../common/helpers";
import { type Accessor, AccessorChar } from "../common/types";
import { ensureScopeWithId, getChunk, withContext } from "./writer";

export function classAttr(val: unknown) {
  return stringAttr("class", classValue(val));
}

export function styleAttr(val: unknown) {
  return stringAttr("style", styleValue(val));
}

// TODO: use symbols
const kSelectedValue = Symbol("selectedValue");
export function withSelectedValue(value: unknown, renderBody: () => void) {
  withContext(kSelectedValue, value, renderBody);
}

export function valueAttr_select(
  value: unknown,
  valueChange: unknown,
  _multiple: boolean,
  scopeId: number,
  elementAccessor: Accessor,
) {
  if (valueChange) {
    const scope = ensureScopeWithId(scopeId!);
    scope[elementAccessor + AccessorChar.ControlledValue] = value;
    scope[elementAccessor + AccessorChar.ControlledHandler] = valueChange;
  }
  return "";
}

export function valueAttr_option(value: unknown) {
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

export function valueAttr_input(
  value: unknown,
  valueChange: unknown,
  scopeId: number,
  elementAccessor: Accessor,
) {
  if (valueChange) {
    const scope = ensureScopeWithId(scopeId!);
    // scope[elementAccessor + AccessorChar.ControlledValue] = value;
    scope[elementAccessor + AccessorChar.ControlledHandler] = valueChange;
  }
  return attr("value", value);
}

export function checkedAttr(
  checked: unknown,
  checkedChange: unknown,
  scopeId: number,
  elementAccessor: Accessor,
) {
  if (checkedChange) {
    const scope = ensureScopeWithId(scopeId!);
    // scope[elementAccessor + AccessorChar.ControlledValue] = checked;
    scope[elementAccessor + AccessorChar.ControlledHandler] = checkedChange;
  }
  return attr("checked", checked);
}

export function checkedValueAttr(
  checkedValue: unknown,
  checkedValueChange: unknown,
  value: unknown,
  scopeId: number,
  elementAccessor: Accessor,
) {
  if (checkedValueChange) {
    const scope = ensureScopeWithId(scopeId!);
    // scope[elementAccessor + AccessorChar.ControlledValue] = checkedValue;
    scope[elementAccessor + AccessorChar.ControlledHandler] =
      checkedValueChange;
  }
  return checkedValue === value ? ` checked` : "";
}

export function checkedValuesAttr(
  checkedValues: unknown[],
  checkedValuesChange: unknown,
  value: unknown,
  scopeId: number,
  elementAccessor: Accessor,
) {
  if (checkedValuesChange) {
    const scope = ensureScopeWithId(scopeId!);
    scope[elementAccessor + AccessorChar.ControlledValue] = checkedValues;
    scope[elementAccessor + AccessorChar.ControlledHandler] =
      checkedValuesChange;
  }
  return checkedValues?.includes(value) ? ` checked` : "";
}

export function openAttr(
  open: unknown,
  openChange: unknown,
  scopeId: number,
  elementAccessor: Accessor,
) {
  if (openChange) {
    const scope = ensureScopeWithId(scopeId!);
    scope[elementAccessor + AccessorChar.ControlledValue] = open;
    scope[elementAccessor + AccessorChar.ControlledHandler] = openChange;
  }
  return attr("open", open);
}

export function attr(name: string, val: unknown) {
  return isVoid(val) ? "" : nonVoidAttr(name, val);
}

export function attrs(
  data: Record<string, unknown>,
  elementAccessor: Accessor = 0,
  scopeId: number = 0,
  type: string = "",
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
        if (type === "input") {
          result += valueAttr_input(
            val,
            data.valueChange,
            scopeId,
            elementAccessor,
          );
        } else if (type === "select") {
          result += valueAttr_select(
            val,
            data.valueChange,
            data.multiple as boolean,
            scopeId,
            elementAccessor,
          );
        } else if (type === "option") {
          result += valueAttr_option(val);
        } else {
          result += attr("value", val);
        }
        break;
      case "checkedValue":
        result += checkedValueAttr(
          val,
          data.checkedValue,
          data.value,
          scopeId,
          elementAccessor,
        );
        break;
      case "checkedValues":
        result += checkedValuesAttr(
          val as unknown[],
          data.checkedValues,
          data.value,
          scopeId,
          elementAccessor,
        );
        break;
      case "open":
        result += openAttr(val, data.openChange, scopeId, elementAccessor);
        break;
      default:
        if (!isVoid(val)) {
          const controllableAttr =
            controllableChangeAttrs[
              name as keyof typeof controllableChangeAttrs
            ];
          if (controllableAttr) {
            scope ??= ensureScopeWithId(scopeId!);
            scope[elementAccessor + AccessorChar.ControlledHandler] = val;
            scope[elementAccessor + AccessorChar.ControlledType] =
              controllableAttr;
          } else if (/^on[A-Z-]/.test(name)) {
            events ??= (scope ??= ensureScopeWithId(scopeId!))[
              (elementAccessor + AccessorChar.EventAttributes) as any
            ] ??= {} as any;
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
