import { assertExclusiveAttrs } from "../common/errors";
import {
  classValue,
  getEventHandlerName,
  isEventHandler,
  isVoid,
  styleValue,
} from "../common/helpers";
import { type Accessor, AccessorPrefix, ControlledType } from "../common/types";
import { _escape_text } from "./content";
import {
  _attr_content,
  _html,
  _scope,
  getChunk,
  getContext,
  withContext,
} from "./writer";

export function _attr_class(value: unknown) {
  return stringAttr("class", classValue(value));
}

export function _attr_style(value: unknown) {
  return stringAttr("style", styleValue(value));
}

export function _attr_option_value(value: unknown) {
  const valueAttr = _attr("value", value);
  return normalizedValueMatches(getContext(kSelectedValue), value)
    ? valueAttr + " selected"
    : valueAttr;
}

const kSelectedValue = Symbol("selectedValue");
export function _attr_select_value(
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
      undefined,
      valueChange,
    );
  }

  if (content) {
    withContext(kSelectedValue, value, content);
  }
}

export function _attr_textarea_value(
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

  return _escape_text(value);
}

export function _attr_input_value(
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
  return _attr("value", value);
}

export function _attr_input_checked(
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
  return normalizeBoolAttrValue(checked) ? " checked" : "";
}

export function _attr_input_checkedValue(
  scopeId: number,
  nodeAccessor: Accessor,
  checkedValue: unknown,
  checkedValueChange: unknown,
  value: unknown,
) {
  const valueAttr = _attr("value", value);
  if (checkedValueChange) {
    writeControlledScope(
      ControlledType.InputCheckedValue,
      scopeId,
      nodeAccessor,
      getCheckedValueRef(checkedValue),
      checkedValueChange,
    );
  }

  return normalizedValueMatches(checkedValue, value)
    ? valueAttr + " checked"
    : valueAttr;
}

const checkedValuesRefs = new WeakMap<unknown[], []>();
function getCheckedValueRef(checkedValue: unknown) {
  if (Array.isArray(checkedValue)) {
    let ref = checkedValuesRefs.get(checkedValue);

    if (!ref) {
      ref = [];
      checkedValuesRefs.set(checkedValue, ref);
    }

    return ref;
  }
}

export function _attr_details_or_dialog_open(
  scopeId: number,
  nodeAccessor: Accessor,
  open: unknown,
  openChange: unknown,
) {
  const normalizedOpen = normalizeBoolAttrValue(open);
  if (openChange) {
    writeControlledScope(
      ControlledType.DetailsOrDialogOpen,
      scopeId,
      nodeAccessor,
      normalizedOpen,
      openChange,
    );
  }

  return normalizedOpen ? " open" : "";
}

export function _attr_nonce() {
  return getChunk()!.boundary.state.nonceAttr;
}

export function _attr(name: string, value: unknown) {
  return isVoid(value) ? "" : nonVoidAttr(name, value);
}

export function _attrs(
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
      if (MARKO_DEBUG) {
        assertExclusiveAttrs(data);
      }

      if (data.checkedChange) {
        result += _attr_input_checked(
          scopeId,
          nodeAccessor,
          data.checked,
          data.checkedChange,
        );
      } else if (data.checkedValue || data.checkedValueChange) {
        result += _attr_input_checkedValue(
          scopeId,
          nodeAccessor,
          data.checkedValue,
          data.checkedValueChange,
          data.value,
        );
      } else if (data.valueChange) {
        result += _attr_input_value(
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
        result += _attr_option_value(data.value);
        skip = /^value$|[\s/>"'=]/;
      }
      break;
    case "details":
    case "dialog":
      if (data.openChange) {
        result += _attr_details_or_dialog_open(
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
        result += _attr_class(value);
        break;
      case "style":
        result += _attr_style(value);
        break;
      default:
        if (
          name &&
          !(
            isVoid(value) ||
            skip.test(name) ||
            (name === "content" && tagName !== "meta")
          )
        ) {
          if (isEventHandler(name)) {
            if (!events) {
              events = {};
              _scope(scopeId, {
                [AccessorPrefix.EventAttributes + nodeAccessor]: events,
              });
            }

            events[getEventHandlerName(name)] = value;
          } else {
            result += nonVoidAttr(name, value);
          }
        }
        break;
    }
  }
  return result;
}

export function _attrs_content(
  data: Record<string, unknown>,
  nodeAccessor: Accessor,
  scopeId: number,
  tagName: string,
  serializeReason?: 1 | 0,
) {
  _html(`${_attrs(data, nodeAccessor, scopeId, tagName)}>`);
  _attr_content(nodeAccessor, scopeId, data?.content, serializeReason);
}

export function _attrs_partial(
  data: Record<string, unknown>,
  skip: Record<string, 1>,
  nodeAccessor: Accessor,
  scopeId: number,
  tagName: string,
) {
  const partial: Partial<typeof data> = {};
  for (const name in data) {
    const key = isEventHandler(name) ? `on-${getEventHandlerName(name)}` : name;
    if (!skip[key]) partial[key] = data[name];
  }

  return _attrs(partial, nodeAccessor, scopeId, tagName);
}

export function _attrs_partial_content(
  data: Record<string, unknown>,
  skip: Record<string, 1>,
  nodeAccessor: Accessor,
  scopeId: number,
  tagName: string,
  serializeReason?: 1 | 0,
) {
  _html(`${_attrs_partial(data, skip, nodeAccessor, scopeId, tagName)}>`);
  _attr_content(nodeAccessor, scopeId, data?.content, serializeReason);
}

function writeControlledScope(
  type: ControlledType,
  scopeId: number,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
) {
  _scope(scopeId, {
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

function normalizedValueMatches(a: unknown, b: unknown) {
  const value = normalizeStrAttrValue(b);
  if (Array.isArray(a)) {
    for (const item of a) {
      if (normalizeStrAttrValue(item) === value) {
        return true;
      }
    }
  } else if (normalizeStrAttrValue(a) === value) {
    return true;
  }

  return false;
}

function normalizeStrAttrValue(value: unknown) {
  return (value && value !== true) || value === 0 ? value + "" : "";
}

function normalizeBoolAttrValue(value: unknown) {
  if (value != null && value !== false) {
    return true;
  }
}
