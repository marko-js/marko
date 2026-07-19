import {
  assertExclusiveAttrs,
  assertHandlerIsFunction,
  assertValidAttrName,
  assertValidAttrValue,
} from "../common/errors";
import {
  getEventHandlerName,
  isEventHandler,
  isNotVoid,
  isVoid,
  stringifyClassObject,
  stringifyStyleObject,
  toDelimitedString,
} from "../common/helpers";
import { type Accessor, AccessorPrefix, ControlledType } from "../common/types";
import { _escape } from "./content";
import {
  _attr_content,
  _html,
  _id,
  _scope,
  getChunk,
  getContext,
  withContext,
} from "./writer";

export function _attr_class(value: unknown) {
  return stringAttr(
    "class",
    toDelimitedString(value, " ", stringifyClassObject),
  );
}

export function _attr_style(value: unknown) {
  return stringAttr(
    "style",
    toDelimitedString(value, ";", stringifyStyleObject),
  );
}

export function _attr_option_value(value: unknown) {
  const valueAttr = _attr("value", value);
  const selectedValue = getContext(kSelectedValue);
  if (
    selectedValue !== undefined &&
    normalizedValueMatches(selectedValue, value)
  ) {
    if (MARKO_DEBUG) {
      const matched = getContext(kSelectedValueMatched) as
        { value: boolean } | undefined;
      if (matched) {
        matched.value = true;
      }
    }
    return valueAttr + " selected";
  }
  return valueAttr;
}

const kSelectedValue = Symbol("selectedValue");
const kSelectedValueMatched = Symbol("selectedValueMatched");
export function _attr_select_value(
  scopeId: number,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
  content?: () => void,
  serializeType?: 1,
) {
  if (valueChange) {
    writeControlledScope(
      ControlledType.SelectValue,
      scopeId,
      nodeAccessor,
      undefined,
      valueChange,
      serializeType,
    );
  }

  if (content) {
    if (MARKO_DEBUG && valueChange) {
      const matched = { value: false };
      withContext(kSelectedValue, value, () =>
        withContext(kSelectedValueMatched, matched, content),
      );
      if (
        !matched.value &&
        (Array.isArray(value)
          ? value.some((v) => normalizeStrAttrValue(v) !== "")
          : normalizeStrAttrValue(value) !== "")
      ) {
        console.error(
          "A controlled `<select>`'s `value` has no matching `<option>`:",
          value,
        );
      }
    } else {
      withContext(kSelectedValue, value, content);
    }
  }
}

export function _attr_textarea_value(
  scopeId: number,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
  serializeType?: 1,
) {
  if (valueChange) {
    writeControlledScope(
      ControlledType.InputValue,
      scopeId,
      nodeAccessor,
      undefined,
      valueChange,
      serializeType,
    );
  }

  return _escape(value);
}

export function _attr_input_value(
  scopeId: number,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
  serializeType?: 1,
) {
  if (valueChange) {
    writeControlledScope(
      ControlledType.InputValue,
      scopeId,
      nodeAccessor,
      undefined,
      valueChange,
      serializeType,
    );
  }
  return _attr("value", value);
}

export function _attr_input_checked(
  scopeId: number,
  nodeAccessor: Accessor,
  checked: unknown,
  checkedChange: unknown,
  serializeType?: 1,
) {
  if (checkedChange) {
    writeControlledScope(
      ControlledType.InputChecked,
      scopeId,
      nodeAccessor,
      undefined,
      checkedChange,
      serializeType,
    );
  }
  return isNotVoid(checked) ? " checked" : "";
}

export function _attr_input_checkedValue(
  scopeId: number,
  nodeAccessor: Accessor,
  checkedValue: unknown,
  checkedValueChange: unknown,
  value: unknown,
  serializeType?: 1,
) {
  const valueAttr = _attr("value", value);
  if (checkedValueChange) {
    writeControlledScope(
      ControlledType.InputCheckedValue,
      scopeId,
      nodeAccessor,
      getCheckedValueRef(checkedValue),
      checkedValueChange,
      serializeType,
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
  serializeType?: 1,
) {
  const normalizedOpen = isNotVoid(open);
  if (openChange) {
    writeControlledScope(
      ControlledType.DetailsOrDialogOpen,
      scopeId,
      nodeAccessor,
      normalizedOpen || undefined,
      openChange,
      serializeType,
    );
  }

  return normalizedOpen ? " open" : "";
}

export function _attr_nonce() {
  return getChunk()!.boundary.state.nonceAttr;
}

export function _style_html(decls: string) {
  const id = _id();
  return `<style${_attr_nonce()} class=${id}>.${id}~*{${decls}}</style>`;
}

export function _attr(name: string, value: unknown) {
  return isVoid(value) ? "" : nonVoidAttr(name, value);
}

// `value && attr` / `|| attr` / `?? attr` with the literal side prebuilt as `attr`.
export function _attr_and(name: string, value: unknown, attr: string) {
  return value ? attr : _attr(name, value);
}

export function _attr_or(name: string, value: unknown, attr: string) {
  return value ? _attr(name, value) : attr;
}

export function _attr_nullish(name: string, value: unknown, attr: string) {
  return value == null ? attr : _attr(name, value);
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
  // A lone `null`/`undefined`/`false` spread reaches here unwrapped; skip the
  // controllable switch (the attr loop below is a no-op on a nullish value).
  switch (data && tagName) {
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
          1,
        );
        skip = /^checked(?:Value)?(?:Change)?$|[\s/>"'=]/;
      } else if ("checkedValue" in data || data.checkedValueChange) {
        result += _attr_input_checkedValue(
          scopeId,
          nodeAccessor,
          data.checkedValue,
          data.checkedValueChange,
          data.value,
          1,
        );
        skip = /^(?:value|checked(?:Value)?)(?:Change)?$|[\s/>"'=]/;
      } else if (data.valueChange) {
        result += _attr_input_value(
          scopeId,
          nodeAccessor,
          data.value,
          data.valueChange,
          1,
        );
        skip = /^value(?:Change)?$|[\s/>"'=]/;
      }
      break;
    case "select":
    case "textarea":
      if ("value" in data || data.valueChange) {
        skip = /^value(?:Change)?$|[\s/>"'=]/;
      }
      break;
    case "option":
      if ("value" in data) {
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
          1,
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
          if (MARKO_DEBUG) {
            assertValidAttrName(name);
          }

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
  // The controlled `type` is only read back on resume by the spread resume path
  // (`_attrs_script`). Statically-typed controllables resume through a typed
  // `_script` that never reads it, so it is only serialized when requested.
  serializeType?: 1,
) {
  if (MARKO_DEBUG) {
    assertHandlerIsFunction("valueChange", valueChange);
  }

  _scope(
    scopeId,
    serializeType
      ? {
          [AccessorPrefix.ControlledType + nodeAccessor]: type,
          [AccessorPrefix.ControlledValue + nodeAccessor]: value,
          [AccessorPrefix.ControlledHandler + nodeAccessor]: valueChange,
        }
      : {
          [AccessorPrefix.ControlledValue + nodeAccessor]: value,
          [AccessorPrefix.ControlledHandler + nodeAccessor]: valueChange,
        },
  );
}

function stringAttr(name: string, value: string) {
  return value && " " + name + attrAssignment(value);
}

function nonVoidAttr(name: string, value: unknown) {
  if (MARKO_DEBUG) {
    assertValidAttrValue(name, value);
  }
  switch (typeof value) {
    case "string":
      return " " + name + attrAssignment(value);
    case "boolean":
      return " " + name;
    case "number":
      return " " + name + "=" + value;
  }

  return " " + name + attrAssignment(value + "");
}

export function attrAssignment(value: string) {
  if (!value) return "";
  // 0: no quoting needed, 1: double-quote wrap, 2: single-quote wrap (the first
  // char forcing quotes is a `"`, so wrapping in `'` avoids escaping it).
  const quoting = attrValueQuoting(value);
  return quoting
    ? quoting === 2
      ? "='" + escapeSingleQuotedAttrValue(value) + "'"
      : '="' + escapeDoubleQuotedAttrValue(value) + '"'
    : "=" + value;
}

// Equivalent to scanning `/["'>\s]|&[#a-zA-Z]|\/$/` for the first quote-forcing
// char, but a `charCodeAt` scan beats the regex on the common no-quote path.
function attrValueQuoting(value: string) {
  const len = value.length;
  for (let i = 0; i < len; i++) {
    const code = value.charCodeAt(i);
    if (code === 34) return 2;
    if (
      code === 39 ||
      code === 62 ||
      isAsciiOrUnicodeSpace(code) ||
      (code === 38 && isCharRefStart(value.charCodeAt(i + 1)))
    ) {
      return 1;
    }
  }
  return value.charCodeAt(len - 1) === 47 ? 1 : 0;
}

// The exact set matched by regex `\s`, verified against every code point.
function isAsciiOrUnicodeSpace(code: number) {
  return (
    code === 32 ||
    (code >= 9 && code <= 13) ||
    (code >= 0x2000
      ? code <= 0x200a ||
        code === 0x2028 ||
        code === 0x2029 ||
        code === 0x202f ||
        code === 0x205f ||
        code === 0x3000 ||
        code === 0xfeff
      : code === 0xa0 || code === 0x1680)
  );
}

// Every character reference starts `&#` or `&` + an ASCII letter — and parsers
// also decode semicolon-less numeric and legacy named references — so any such
// `&` must be escaped to round-trip (a bare `&` never decodes).
function isCharRefStart(code: number) {
  return (
    code === 35 || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
  );
}

function escapeSingleQuotedAttrValue(value: string) {
  return escapeQuotedAttrValue(value, "'", 39, "&#39;");
}

function escapeDoubleQuotedAttrValue(value: string) {
  return escapeQuotedAttrValue(value, '"', 34, "&#34;");
}

// Locates the first quote/`&` with SIMD-accelerated `indexOf` (much faster than
// a regex on the common already-safe path) then rewrites in a single pass.
function escapeQuotedAttrValue(
  value: string,
  quoteChar: string,
  quoteCode: number,
  quoteEnt: string,
) {
  const quote = value.indexOf(quoteChar);
  const amp = value.indexOf("&");
  if (quote === -1 && amp === -1) return value;
  const start = quote === -1 ? amp : amp === -1 || quote < amp ? quote : amp;

  let result = value.slice(0, start);
  let last = start;
  for (let i = start; i < value.length; i++) {
    const code = value.charCodeAt(i);
    if (code === quoteCode) {
      result += value.slice(last, i) + quoteEnt;
      last = i + 1;
    } else if (code === 38 && isCharRefStart(value.charCodeAt(i + 1))) {
      result += value.slice(last, i) + "&amp;";
      last = i + 1;
    }
  }

  return result + value.slice(last);
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
