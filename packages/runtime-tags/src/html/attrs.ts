import {
  classValue,
  getEventHandlerName,
  isEventHandler,
  isVoid,
  styleValue,
} from "../common/helpers";
import { type Accessor, AccessorPrefix, ControlledType } from "../common/types";
import { escapeTextAreaValue } from "./content";
import {
  getContext,
  withContext,
  write,
  writeContent,
  writeScope,
} from "./writer";

export function classAttr(value: unknown) {
  return stringAttr("class", classValue(value));
}

export function styleAttr(value: unknown) {
  return stringAttr("style", styleValue(value));
}

export function optionValueAttr(value: unknown) {
  const selectedValue = getContext(kSelectedValue);

  return (
    attr("value", value) +
    (!isVoid(value) &&
    (Array.isArray(selectedValue)
      ? selectedValue.includes(value)
      : selectedValue === value)
      ? " selected"
      : "")
  );
}

const kSelectedValue = Symbol("selectedValue");
export function controllable_select_value(
  scopeId: number,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
  content?: () => void,
) {
  if (valueChange) {
    writeControlledScope(
      ControlledType.SelectValue,
      scopeId,
      nodeAccessor,
      value,
      valueChange,
    );
  }

  if (content) {
    withContext(kSelectedValue, value, content);
  }
}

export function controllable_textarea_value(
  scopeId: number,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
) {
  if (valueChange) {
    writeControlledScope(
      ControlledType.InputValue,
      scopeId,
      nodeAccessor,
      undefined,
      valueChange,
    );
  }

  return escapeTextAreaValue(value);
}

export function controllable_input_value(
  scopeId: number,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
) {
  if (valueChange) {
    writeControlledScope(
      ControlledType.InputValue,
      scopeId,
      nodeAccessor,
      undefined,
      valueChange,
    );
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
    writeControlledScope(
      ControlledType.InputChecked,
      scopeId,
      nodeAccessor,
      undefined,
      checkedChange,
    );
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
  const multiple = Array.isArray(checkedValue);
  const valueAttr = attr("value", value);
  if (checkedValueChange) {
    writeControlledScope(
      ControlledType.InputCheckedValue,
      scopeId,
      nodeAccessor,
      checkedValue,
      checkedValueChange,
    );
  }

  return (multiple ? checkedValue.includes(value) : checkedValue === value)
    ? valueAttr + " checked"
    : valueAttr;
}

export function controllable_detailsOrDialog_open(
  scopeId: number,
  nodeAccessor: Accessor,
  open: unknown,
  openChange: unknown,
) {
  if (openChange) {
    writeControlledScope(
      ControlledType.DetailsOrDialogOpen,
      scopeId,
      nodeAccessor,
      open,
      openChange,
    );
  }
  return attr("open", open);
}

export function attr(name: string, value: unknown) {
  return isVoid(value) ? "" : nonVoidAttr(name, value);
}

export function attrs(
  data: Record<string, unknown>,
  nodeAccessor: Accessor,
  scopeId: number,
  tagName: string,
) {
  let result = "";
  let skip = /[\s/>"'=]/;
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
      skip = /^(?:value|checked(?:Value)?)(?:Change)?$|[\s/>"'=]/;
      break;
    case "select":
    case "textarea":
      if (data.value || data.valueChange) {
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
        result += controllable_detailsOrDialog_open(
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
    const value = data[name];

    switch (name) {
      case "class":
        result += classAttr(value);
        break;
      case "style":
        result += styleAttr(value);
        break;
      case "":
      case "content":
        break;
      default:
        if (!isVoid(value)) {
          if (isEventHandler(name)) {
            if (!events) {
              events = {};
              writeScope(scopeId, {
                [AccessorPrefix.EventAttributes + nodeAccessor]: events,
              });
            }

            events[getEventHandlerName(name)] = value;
          } else if (!skip.test(name)) {
            result += nonVoidAttr(name, value);
          }
        }
        break;
    }
  }
  return result;
}

export function writeAttrsAndContent(
  data: Record<string, unknown>,
  nodeAccessor: Accessor,
  scopeId: number,
  tagName: string,
) {
  write(`${attrs(data, nodeAccessor, scopeId, tagName)}>`);
  writeContent(data?.content);
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

export function writePartialAttrsAndContent(
  data: Record<string, unknown>,
  skip: Record<string, 1>,
  nodeAccessor: Accessor,
  scopeId: number,
  tagName: string,
) {
  write(`${partialAttrs(data, skip, nodeAccessor, scopeId, tagName)}>`);
  if (!skip.content) {
    writeContent(data?.content);
  }
}

function writeControlledScope(
  type: ControlledType,
  scopeId: number,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
) {
  writeScope(scopeId, {
    [AccessorPrefix.ControlledType + nodeAccessor]: type,
    [AccessorPrefix.ControlledValue + nodeAccessor]: value,
    [AccessorPrefix.ControlledHandler + nodeAccessor]: valueChange,
  });
}

function stringAttr(name: string, value: string) {
  return value && " " + name + attrAssignment(value);
}

function nonVoidAttr(name: string, value: unknown) {
  switch (typeof value) {
    case "string":
      return " " + name + attrAssignment(value);
    case "boolean":
      return " " + name;
    case "number":
      return " " + name + "=" + value;
    case "object":
      if (value instanceof RegExp) {
        return " " + name + attrAssignment(value.source);
      }
      break;
  }

  return " " + name + attrAssignment(value + "");
}

const singleQuoteAttrReplacements = /'|&(?=#?\w+;)/g;
const doubleQuoteAttrReplacements = /"|&(?=#?\w+;)/g;
const needsQuotedAttr = /["'>\s]|&#?\w+;|\/$/g;
export function attrAssignment(value: string) {
  return value
    ? needsQuotedAttr.test(value)
      ? value[needsQuotedAttr.lastIndex - 1] ===
        ((needsQuotedAttr.lastIndex = 0), '"')
        ? "='" + escapeSingleQuotedAttrValue(value) + "'"
        : '="' + escapeDoubleQuotedAttrValue(value) + '"'
      : "=" + value
    : "";
}

export function escapeSingleQuotedAttrValue(value: string) {
  return singleQuoteAttrReplacements.test(value)
    ? value.replace(
        singleQuoteAttrReplacements,
        replaceUnsafeSingleQuoteAttrChar,
      )
    : value;
}

function replaceUnsafeSingleQuoteAttrChar(match: string) {
  return match === "'" ? "&#39;" : "&amp;";
}

export function escapeDoubleQuotedAttrValue(value: string) {
  return doubleQuoteAttrReplacements.test(value)
    ? value.replace(
        doubleQuoteAttrReplacements,
        replaceUnsafeDoubleQuoteAttrChar,
      )
    : value;
}

function replaceUnsafeDoubleQuoteAttrChar(match: string) {
  return match === '"' ? "&#34;" : "&amp;";
}
