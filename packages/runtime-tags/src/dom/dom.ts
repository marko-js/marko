import {
  assertExclusiveAttrs,
  assertValidAttrName,
  assertValidAttrValue,
  assertValidTextValue,
} from "../common/errors";
import {
  escapeStyleValue,
  getEventHandlerName,
  isEventHandler,
  isNotVoid,
  normalizeDynamicRenderer,
  stringifyClassObject,
  stringifyStyleObject,
  toDelimitedString,
} from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  ControlledType,
  RendererProp,
  type Scope,
} from "../common/types";
import { $signal } from "./abort-signal";
import { setConditionalRenderer } from "./control-flow";
import {
  _attr_details_or_dialog_open,
  _attr_details_or_dialog_open_script,
  _attr_input_checked,
  _attr_input_checked_script,
  _attr_input_checkedValue,
  _attr_input_checkedValue_script,
  _attr_input_value,
  _attr_input_value_dynamic_default,
  _attr_input_value_script,
  _attr_select_value,
  _attr_select_value_script,
} from "./controllable";
import { _on } from "./event";
import { parseHTML } from "./parse-html";
import { queueWrite } from "./queue";
import { createAndSetupBranch, type Renderer } from "./renderer";
import { _id, subscribeToScopeSet } from "./signals";

export function _to_text(value: unknown) {
  if (MARKO_DEBUG) {
    assertValidTextValue(value);
  }
  // Numeric 0 is special-cased so it still renders; bigint `0n` deliberately is
  // not (not worth the DOM-runtime size).
  return value || value === 0 ? value + "" : "";
}

// === Observable sinks ===
//
// The `export let` write helpers below are the update-path observable
// sinks. Every sink takes the scope and the target's accessor first and
// resolves its node internally, so the queue can key held writes on
// (scope, accessor) and re-resolve the target when a write finally
// applies. They apply directly until `_enable_queued_writes` (called by
// `_enable_transition`) swaps them for queue-through wrappers; a rollup
// lineage bundler drops the swap assignment (and with it the applier) for
// any sink the app never imports. Runtime-internal callers use the raw
// `apply*` declarations so an applied sink never re-queues its own parts.

export let _attr = applyAttr;
export function applyAttr(
  scope: Scope,
  nodeAccessor: Accessor,
  name: string,
  value: unknown,
) {
  if (MARKO_DEBUG) {
    assertValidAttrValue(name, value);
  }
  setAttribute(scope[nodeAccessor] as Element, name, normalizeAttrValue(value));
}

function setAttribute(
  element: Element,
  name: string,
  value: string | undefined,
) {
  // TODO: benchmark if it is actually faster to check first
  if (element.getAttribute(name) != value) {
    if (value === undefined) {
      element.removeAttribute(name);
    } else {
      element.setAttribute(name, value);
    }
  }
}

export let _attr_class = applyAttrClass;
function applyAttrClass(scope: Scope, nodeAccessor: Accessor, value: unknown) {
  setAttribute(
    scope[nodeAccessor] as Element,
    "class",
    toDelimitedString(value, " ", stringifyClassObject) || undefined,
  );
}

export let _attr_class_items = applyAttrClassItems;
function applyAttrClassItems(
  scope: Scope,
  nodeAccessor: Accessor,
  items: Record<string, unknown>,
) {
  for (const key in items) {
    applyAttrClassItem(scope, nodeAccessor, key, items[key]);
  }
}

export let _attr_class_item = applyAttrClassItem;
function applyAttrClassItem(
  scope: Scope,
  nodeAccessor: Accessor,
  name: string,
  value: unknown,
) {
  (scope[nodeAccessor] as Element).classList.toggle(name, !!value);
}

export let _attr_style = applyAttrStyle;
function applyAttrStyle(scope: Scope, nodeAccessor: Accessor, value: unknown) {
  setAttribute(
    scope[nodeAccessor] as Element,
    "style",
    toDelimitedString(value, ";", stringifyStyleObject) || undefined,
  );
}

export let _attr_style_items = applyAttrStyleItems;
function applyAttrStyleItems(
  scope: Scope,
  nodeAccessor: Accessor,
  items: Record<string, unknown>,
) {
  for (const key in items) {
    applyAttrStyleItem(scope, nodeAccessor, key, items[key]);
  }
}

export let _attr_style_item = applyAttrStyleItem;
function applyAttrStyleItem(
  scope: Scope,
  nodeAccessor: Accessor,
  name: string,
  value: unknown,
) {
  (scope[nodeAccessor] as HTMLElement).style.setProperty(name, _to_text(value));
}

export function _style_shell(scope: Scope, nodeAccessor: Accessor) {
  const element = scope[nodeAccessor] as HTMLStyleElement;
  const id = _id(scope);
  applyAttrNonce(scope, nodeAccessor);
  element.className = id;
  applyTextContent(scope, nodeAccessor, "." + id + "~*{}");
}

export let _style_rule_item = applyStyleRuleItem;
function applyStyleRuleItem(
  scope: Scope,
  nodeAccessor: Accessor,
  name: string,
  value: unknown,
) {
  const text = (scope[nodeAccessor] as HTMLStyleElement).textContent!;
  const decl = name + ":" + escapeStyleValue(_to_text(value)) + ";";
  let start = text.indexOf("{" + name + ":");
  if (!~start) start = text.indexOf(";" + name + ":");
  applyTextContent(
    scope,
    nodeAccessor,
    ~start
      ? // `escapeStyleValue` never emits a raw `;`, so the next one ends the declaration.
        text.slice(0, ++start) + decl + text.slice(text.indexOf(";", start) + 1)
      : text.slice(0, -1) + decl + "}",
  );
}

export let _attr_nonce = applyAttrNonce;
function applyAttrNonce(scope: Scope, nodeAccessor: Accessor) {
  applyAttr(scope, nodeAccessor, "nonce", scope[AccessorProp.Global].cspNonce);
}

export let _text = applyText;
function applyText(scope: Scope, nodeAccessor: Accessor, value: unknown) {
  const node = scope[nodeAccessor] as Text | Comment;
  const normalizedValue = _to_text(value);
  // TODO: benchmark if it is actually faster to check data first
  if (node.data !== normalizedValue) {
    node.data = normalizedValue;
  }
}

export let _text_content = applyTextContent;
function applyTextContent(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
) {
  const node = scope[nodeAccessor] as ParentNode;
  const normalizedValue = _to_text(value);
  // TODO: benchmark if it is actually faster to check data first
  if (node.textContent !== normalizedValue) {
    node.textContent = normalizedValue;
  }
}

export let _attrs = applyAttrs;
function applyAttrs(
  scope: Scope,
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
) {
  const el = scope[nodeAccessor] as Element;
  for (let i = el.attributes.length; i--;) {
    const { name } = el.attributes.item(i)!;
    if (!(
      nextAttrs &&
      (name in nextAttrs || hasAttrAlias(el, name, nextAttrs))
    )) {
      el.removeAttribute(name);
    }
  }

  if (MARKO_DEBUG) {
    assertExclusiveAttrs(nextAttrs);
  }

  attrsInternal(scope, nodeAccessor, nextAttrs);
}

export let _attrs_content = applyAttrsContent;
function applyAttrsContent(
  scope: Scope,
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
) {
  applyAttrs(scope, nodeAccessor, nextAttrs);
  applyAttrContent(scope, nodeAccessor, nextAttrs?.content);
}

function hasAttrAlias(
  element: Element,
  attr: string,
  nextAttrs: Record<string, unknown>,
) {
  return (
    attr === "checked" &&
    element.tagName === "INPUT" &&
    "checkedValue" in nextAttrs
  );
}

export let _attrs_partial = applyAttrsPartial;
function applyAttrsPartial(
  scope: Scope,
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
  skip: Record<string, 1>,
) {
  const el = scope[nodeAccessor] as Element;
  const partial: Partial<typeof nextAttrs> = {};

  for (let i = el.attributes.length; i--;) {
    const { name } = el.attributes.item(i)!;
    if (!skip[name] && !(nextAttrs && name in nextAttrs)) {
      el.removeAttribute(name);
    }
  }

  for (const name in nextAttrs) {
    const key = isEventHandler(name) ? `on-${getEventHandlerName(name)}` : name;
    if (!skip[key]) partial[key] = nextAttrs[name];
  }

  if (MARKO_DEBUG) {
    assertExclusiveAttrs({ ...nextAttrs, ...skip });
  }

  attrsInternal(scope, nodeAccessor, partial);
}

export let _attrs_partial_content = applyAttrsPartialContent;
function applyAttrsPartialContent(
  scope: Scope,
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
  skip: Record<string, 1>,
) {
  applyAttrsPartial(scope, nodeAccessor, nextAttrs, skip);
  applyAttrContent(scope, nodeAccessor, nextAttrs?.content);
}

function attrsInternal(
  scope: Scope,
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
) {
  const el = scope[nodeAccessor] as Element;
  let events = scope[AccessorPrefix.EventAttributes + nodeAccessor] as
    undefined | Record<string, unknown>;
  let skip: RegExp | undefined;
  for (const name in events) events[name] = 0;
  scope[AccessorPrefix.ControlledType + nodeAccessor] = ControlledType.None;
  scope[AccessorPrefix.ControlledHandler + nodeAccessor] = 0;
  // A lone `null`/`undefined`/`false` spread reaches here unwrapped; skip the
  // controllable switch (the attr loop below is a no-op on a nullish value).
  switch (nextAttrs && el.tagName) {
    case "INPUT":
      if ("checked" in nextAttrs || "checkedChange" in nextAttrs) {
        _attr_input_checked(
          scope,
          nodeAccessor,
          nextAttrs.checked,
          nextAttrs.checkedChange,
        );
        skip = /^checked(?:Value)?(?:Change)?$/;
      } else if (
        "checkedValue" in nextAttrs ||
        "checkedValueChange" in nextAttrs
      ) {
        _attr_input_checkedValue(
          scope,
          nodeAccessor,
          nextAttrs.checkedValue,
          nextAttrs.checkedValueChange,
          nextAttrs.value,
        );
        skip = /^(?:value|checked(?:Value)?)(?:Change)?$/;
      } else if ("value" in nextAttrs || "valueChange" in nextAttrs) {
        _attr_input_value(
          scope,
          nodeAccessor,
          nextAttrs.value,
          nextAttrs.valueChange,
          _attr_input_value_dynamic_default,
        );
        skip = /^value(?:Change)?$/;
      }
      break;
    case "SELECT":
      if ("value" in nextAttrs || "valueChange" in nextAttrs) {
        _attr_select_value(
          scope,
          nodeAccessor,
          nextAttrs.value,
          nextAttrs.valueChange,
        );
        skip = /^value(?:Change)?$/;
      }
      break;
    case "TEXTAREA":
      if ("value" in nextAttrs || "valueChange" in nextAttrs) {
        _attr_input_value(
          scope,
          nodeAccessor,
          nextAttrs.value,
          nextAttrs.valueChange,
        );
        skip = /^value(?:Change)?$/;
      }
      break;
    case "DETAILS":
    case "DIALOG":
      if ("open" in nextAttrs || "openChange" in nextAttrs) {
        _attr_details_or_dialog_open(
          scope,
          nodeAccessor,
          nextAttrs.open,
          nextAttrs.openChange,
        );
        skip = /^open(?:Change)?$/;
      }
      break;
  }

  // https://jsperf.com/object-keys-vs-for-in-with-closure/194
  for (const name in nextAttrs) {
    const value = nextAttrs[name];
    switch (name) {
      case "class":
        applyAttrClass(scope, nodeAccessor, value);
        break;
      case "style":
        applyAttrStyle(scope, nodeAccessor, value);
        break;
      default: {
        if (MARKO_DEBUG) {
          assertValidAttrName(name);
        }

        if (isEventHandler(name)) {
          (events ||= scope[AccessorPrefix.EventAttributes + nodeAccessor] =
            {})[getEventHandlerName(name)] = value;
        } else if (!(
          skip?.test(name) ||
          (name === "content" && el.tagName !== "META")
        )) {
          applyAttr(scope, nodeAccessor, name, value);
        }
        break;
      }
    }
  }
}

export let _attr_content = applyAttrContent;
function applyAttrContent(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
) {
  const content = normalizeClientRender(value);
  if (
    scope[AccessorPrefix.ConditionalRenderer + nodeAccessor] !==
    (scope[AccessorPrefix.ConditionalRenderer + nodeAccessor] =
      content?.[RendererProp.Id])
  ) {
    setConditionalRenderer(scope, nodeAccessor, content, createAndSetupBranch);
    if (content?.[RendererProp.Accessor]) {
      subscribeToScopeSet(
        content[RendererProp.Owner]!,
        content[RendererProp.Accessor],
        scope[AccessorPrefix.BranchScopes + nodeAccessor],
      );
    }
  }

  for (const accessor in content?.[RendererProp.LocalClosures]) {
    content![RendererProp.LocalClosures]![accessor](
      scope[AccessorPrefix.BranchScopes + nodeAccessor],
      content![RendererProp.LocalClosureValues]![accessor],
    );
  }
}

export function _attrs_script(scope: Scope, nodeAccessor: Accessor) {
  const el = scope[nodeAccessor] as Element;
  const events = scope[AccessorPrefix.EventAttributes + nodeAccessor] as Record<
    string,
    any
  >;

  switch (scope[AccessorPrefix.ControlledType + nodeAccessor]) {
    case ControlledType.InputChecked:
      _attr_input_checked_script(scope, nodeAccessor);
      break;
    case ControlledType.InputCheckedValue:
      _attr_input_checkedValue_script(scope, nodeAccessor);
      break;
    case ControlledType.InputValue:
      _attr_input_value_script(scope, nodeAccessor);
      break;
    case ControlledType.SelectValue:
      _attr_select_value_script(scope, nodeAccessor);
      break;
    case ControlledType.DetailsOrDialogOpen:
      _attr_details_or_dialog_open_script(scope, nodeAccessor);
      break;
  }

  for (const name in events) {
    _on(el, name as any, events[name] as any);
  }
}

export let _html = applyHtml;
function applyHtml(scope: Scope, accessor: Accessor, value: unknown) {
  const firstChild = scope[accessor] as ChildNode;
  const parentNode = firstChild.parentNode!;
  const lastChild = (scope[AccessorPrefix.DynamicHTMLLastChild + accessor] ||
    firstChild) as ChildNode;
  const newContent = parseHTML(
    _to_text(value),
    (parentNode as Element).namespaceURI!,
  );

  insertChildNodes(
    parentNode,
    firstChild,
    (scope[accessor] =
      newContent.firstChild || newContent.appendChild(new Text())),
    (scope[AccessorPrefix.DynamicHTMLLastChild + accessor] =
      newContent.lastChild!),
  );
  removeChildNodes(firstChild, lastChild);
}

// Swaps every observable sink for a queue-through wrapper. Only
// `_enable_transition` calls this, so none of it is retained in apps
// without transitions.
export function _enable_queued_writes() {
  const queued = <T extends (a?: any, b?: any, c?: any, d?: any) => void>(
    named: 0 | 1,
    fn: T,
  ) =>
    ((a?: unknown, b?: unknown, c?: unknown, d?: unknown) =>
      queueWrite(named, fn, a as Scope, b, c, d)) as T;
  _text = queued(0, applyText);
  _text_content = queued(0, applyTextContent);
  _attr = queued(1, applyAttr);
  _attr_class = queued(0, applyAttrClass);
  _attr_class_items = queued(0, applyAttrClassItems);
  _attr_class_item = queued(1, applyAttrClassItem);
  _attr_style = queued(0, applyAttrStyle);
  _attr_style_items = queued(0, applyAttrStyleItems);
  _attr_style_item = queued(1, applyAttrStyleItem);
  _style_rule_item = queued(1, applyStyleRuleItem);
  _attr_nonce = queued(0, applyAttrNonce);
  _attrs = queued(0, applyAttrs);
  _attrs_content = queued(0, applyAttrsContent);
  _attrs_partial = queued(0, applyAttrsPartial);
  _attrs_partial_content = queued(0, applyAttrsPartialContent);
  _attr_content = queued(0, applyAttrContent);
  _html = queued(0, applyHtml);
}

function normalizeClientRender(value: any) {
  const renderer = normalizeDynamicRenderer<Renderer>(value);
  if (renderer) {
    if ((renderer as Renderer)[RendererProp.Id]) {
      return renderer as Renderer;
    } else if (MARKO_DEBUG) {
      throw new Error(
        `Invalid \`content\` attribute. Received ${typeof value}`,
      );
    }
  }
}

export function normalizeAttrValue(value: unknown) {
  if (isNotVoid(value)) {
    return value === true ? "" : value + "";
  }
}

export function _lifecycle(
  scope: Scope,
  thisObj: Record<string, unknown> & {
    onMount?: (this: unknown) => Record<string, unknown> | void;
    onUpdate?: (this: unknown) => void;
    onDestroy?: (this: unknown) => void;
  },
  index: number = 0,
) {
  const accessor = AccessorPrefix.Lifecycle + index;
  const instance = scope[accessor] as typeof thisObj;
  if (instance) {
    Object.assign(instance, thisObj);
    instance.onUpdate?.();
  } else {
    scope[accessor] = thisObj;
    if (MARKO_DEBUG) {
      const snapshot = { ...thisObj };
      Object.assign(thisObj, thisObj.onMount?.());
      for (const prop in snapshot) {
        if (!Object.is(snapshot[prop], thisObj[prop])) {
          throw new Error(
            `Tried to overwrite existing property "${prop}" in <lifecycle> onMount.`,
          );
        }
      }
    } else {
      Object.assign(thisObj, thisObj.onMount?.());
    }
    $signal(scope, accessor).onabort = () => thisObj.onDestroy?.();
  }
}

export function removeChildNodes(startNode: ChildNode, endNode: ChildNode) {
  const stop = endNode.nextSibling;
  while (startNode !== stop) {
    const next = startNode.nextSibling;
    startNode.remove();
    startNode = next!;
  }
}

export function insertChildNodes(
  parentNode: ParentNode,
  referenceNode: Node | null,
  startNode: Node,
  endNode: Node,
) {
  parentNode.insertBefore(toInsertNode(startNode, endNode), referenceNode);
}

export function toInsertNode(startNode: Node, endNode: Node) {
  if (startNode === endNode) return startNode;
  const parent = new DocumentFragment();
  const stop = endNode.nextSibling;
  while (startNode !== stop) {
    const next = startNode.nextSibling;
    parent.appendChild(startNode);
    startNode = next!;
  }

  return parent;
}
