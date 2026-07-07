// Spread (`...attrs`) and dynamic-content attr machinery. Lives apart from
// the plain write helpers in `./dom` so hydration bundles that only write
// text/attrs don't drag the controllable/branch machinery this file needs
// -- a module is hosted in one chunk, so mixing eagerly- and lazily-used
// exports would pull all of it into the eager chunk.
import { assertExclusiveAttrs, assertValidAttrName } from "../common/errors";
import {
  getEventHandlerName,
  isEventHandler,
  normalizeDynamicRenderer,
} from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  ControlledType,
  RendererProp,
  type Scope,
} from "../common/types";
import {
  _attr_input_checked,
  _attr_input_checked_script,
  _attr_input_checkedValue,
  _attr_input_checkedValue_script,
} from "./controllable-input-checked";
import {
  _attr_input_value,
  _attr_input_value_script,
} from "./controllable-input-value";
import {
  _attr_details_or_dialog_open,
  _attr_details_or_dialog_open_script,
} from "./controllable-open";
import {
  _attr_select_value,
  _attr_select_value_script,
} from "./controllable-select";
import { _attr, _attr_class, _attr_style } from "./dom";
import { _on } from "./event";
import { createAndSetupBranch, type Renderer } from "./renderer";
import { setConditionalRenderer } from "./scope";
import { subscribeToScopeSet } from "./signals";

export function _attrs(
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

export function _attrs_content(
  scope: Scope,
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
) {
  _attrs(scope, nodeAccessor, nextAttrs);
  _attr_content(scope, nodeAccessor, nextAttrs?.content);
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

export function _attrs_partial(
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

export function _attrs_partial_content(
  scope: Scope,
  nodeAccessor: Accessor,
  nextAttrs: Record<string, unknown>,
  skip: Record<string, 1>,
) {
  _attrs_partial(scope, nodeAccessor, nextAttrs, skip);
  _attr_content(scope, nodeAccessor, nextAttrs?.content);
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
  switch (el.tagName) {
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
        );
        skip = /^value(?:Change)?$/;
      } else {
        break;
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
        _attr_class(el, value);
        break;
      case "style":
        _attr_style(el, value);
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
          _attr(el, name, value);
        }
        break;
      }
    }
  }
}

export function _attr_content(
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
