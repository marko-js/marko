import {
  isNotNullishOrFalse,
  normalizeDynamicRenderer,
  stringifyClassEntry,
  stringifyStyleEntry,
  toDelimitedString,
} from "../../common/helpers";
import { type Accessor, PatchKey } from "../../common/types";
import {
  _attr,
  _attr_details_or_dialog_open,
  _attr_input_checked,
  _attr_input_checkedValue,
  _attr_input_value,
  _attr_option_value,
  _attr_select_value,
  _attr_textarea_value,
  _attrs,
  _attrs_partial,
  stringAttr,
} from "../attrs";
import type { ServerRenderer } from "../template";
import {
  type GroupMask,
  _attr_content as _base_attr_content,
  _html,
  _peek_scope_id,
  getState,
} from "../writer";
import { writeDynamicTagEntry, pairsContent } from "./dynamic-tag";
import {
  _patch_bind,
  entryKey,
  normalizePatchValue,
  PatchUpdateState,
  ensureFills,
  walkMarkers,
  withKeptBranchId,
  writeFill,
  withUnpatched,
} from "./writer";

// Patch writers double as the output writers so the compiled template
// evaluates each patch-written expression once.
export function _patch_attr(
  scopeId: number,
  key: string,
  name: string,
  value: unknown,
  owned?: GroupMask,
  group?: number,
) {
  const fills = ensureFills(scopeId, owned, group!);
  return fills === undefined
    ? _attr(name, value)
    : writeFill(fills, key, normalizeAttrValue(value));
}

// Class/style normalize on the server into the same string the dom helper
// writes, so the client applies them as plain attr fills.
export function _patch_attr_class(
  scopeId: number,
  key: string,
  value: unknown,
  owned?: GroupMask,
  group?: number,
) {
  return patchStringAttr(
    scopeId,
    key,
    "class",
    toDelimitedString(value, " ", stringifyClassEntry),
    owned,
    group,
  );
}

export function _patch_attr_style(
  scopeId: number,
  key: string,
  value: unknown,
  owned?: GroupMask,
  group?: number,
) {
  return patchStringAttr(
    scopeId,
    key,
    "style",
    toDelimitedString(value, ";", stringifyStyleEntry),
    owned,
    group,
  );
}

// An option's `value` renders through the select-aware writer (it may add
// `selected`); the patch entry is the plain attribute the client re-syncs.
export function _patch_attr_option_value(
  scopeId: number,
  key: string,
  value: unknown,
  owned?: GroupMask,
  group?: number,
) {
  const fills = ensureFills(scopeId, owned, group!);
  return fills === undefined
    ? _attr_option_value(value)
    : writeFill(fills, key, normalizeAttrValue(value));
}

function patchStringAttr(
  scopeId: number,
  key: string,
  name: string,
  value: string,
  owned?: GroupMask,
  group?: number,
) {
  const fills = ensureFills(scopeId, owned, group!);
  return fills === undefined
    ? stringAttr(name, value)
    : writeFill(fills, key, value || undefined);
}

// An attribute's value as the client's `_attr` sets it: `""` for `true`, none
// for nullish or `false`, else its string.
function normalizeAttrValue(value: unknown) {
  if (isNotNullishOrFalse(value)) return value === true ? "" : value + "";
}

// A spread's attribute set: the entry carries the merged object and the
// client's `_attrs` re-applies it (removing what the new set lacks).
export function _patch_attrs(
  data: Record<string, unknown>,
  accessor: Accessor,
  scopeId: number,
  tagName: string,
  flag?: 1 | 2,
  owned?: GroupMask,
  group?: number,
) {
  const fills = ensureFills(scopeId, owned, group!);
  return fills === undefined
    ? _attrs(data, accessor, scopeId, tagName)
    : writeAttrsFill(
        fills,
        accessor,
        data,
        flag === 2 && keepsPageNonce(data) ? { nonce: 1 } : 0,
        flag,
      );
}

// The patch form: static attrs after the spread render separately, so
// the entry names them (`skip`) for the client to leave alone.
export function _patch_attrs_partial(
  data: Record<string, unknown>,
  skip: Record<string, 1>,
  accessor: Accessor,
  scopeId: number,
  tagName: string,
  flag?: 1 | 2,
  owned?: GroupMask,
  group?: number,
) {
  const fills = ensureFills(scopeId, owned, group!);
  return fills === undefined
    ? _attrs_partial(data, skip, accessor, scopeId, tagName)
    : writeAttrsFill(
        fills,
        accessor,
        data,
        flag === 2 && keepsPageNonce(data) ? { ...skip, nonce: 1 } : skip,
        flag,
      );
}

// A spread whose nonce a patch render left empty keeps the live element's.
function keepsPageNonce(data: Record<string, unknown>) {
  return data.nonce == null && getState().$global.cspNonce;
}

// Flag `1` marks a spread owning the element's controllable; the array form
// carries `skip` and that mark without key bytes.
function writeAttrsFill(
  fills: Record<string, unknown> | 0,
  accessor: Accessor,
  set: Record<string, unknown>,
  skip: Record<string, 1> | 0,
  flag: 1 | 2 | undefined,
) {
  if (fills) {
    fills[entryKey(PatchKey.Attrs, accessor)] =
      flag === 1 ? [set ?? 0, skip, 1] : skip ? [set ?? 0, skip] : (set ?? 0);
  }
  return "";
}

// Content no patch entry names renders as an unpaired dynamic tag's does.
export function _attr_content(
  nodeAccessor: Accessor,
  scopeId: number,
  content: unknown,
  markerGuard?: 1 | 0,
) {
  renderPatchedContent(nodeAccessor, scopeId, content, markerGuard, 2);
}

// Main's spread content helpers call main's `_attr_content`, not this one.
export function _attrs_content(
  data: Record<string, unknown>,
  nodeAccessor: Accessor,
  scopeId: number,
  tagName: string,
  markerGuard?: 1 | 0,
) {
  _html(`${_attrs(data, nodeAccessor, scopeId, tagName)}>`);
  _attr_content(nodeAccessor, scopeId, data?.content, markerGuard);
}

export function _attrs_partial_content(
  data: Record<string, unknown>,
  skip: Record<string, 1>,
  nodeAccessor: Accessor,
  scopeId: number,
  tagName: string,
  markerGuard?: 1 | 0,
) {
  _html(`${_attrs_partial(data, skip, nodeAccessor, scopeId, tagName)}>`);
  _attr_content(nodeAccessor, scopeId, data?.content, markerGuard);
}

// A spread that may carry `content`: the set patches as attributes and
// the content as a dynamic tag entry, the way a static `content=` does.
export function _patch_attrs_content(
  data: Record<string, unknown>,
  accessor: Accessor,
  scopeId: number,
  tagName: string,
  serializeReason?: 1 | 0,
  controllable?: 1,
  owned?: GroupMask,
  group?: number,
) {
  const content = data?.content;
  const pairing = writeDynamicTagEntry(
    scopeId,
    accessor,
    content,
    0,
    0,
    0,
    owned,
    group,
  );
  const fills = ensureFills(scopeId, owned, group!);
  if (fills === undefined) {
    _html(`${_attrs(data, accessor, scopeId, tagName)}>`);
  } else {
    writeAttrsFill(fills, accessor, withoutContent(data), 0, controllable);
  }
  renderPatchedContent(accessor, scopeId, content, serializeReason, pairing);
}

export function _patch_attrs_partial_content(
  data: Record<string, unknown>,
  skip: Record<string, 1>,
  accessor: Accessor,
  scopeId: number,
  tagName: string,
  serializeReason?: 1 | 0,
  controllable?: 1,
  owned?: GroupMask,
  group?: number,
) {
  const content = data?.content;
  const pairing = writeDynamicTagEntry(
    scopeId,
    accessor,
    content,
    0,
    0,
    0,
    owned,
    group,
  );
  const fills = ensureFills(scopeId, owned, group!);
  if (fills === undefined) {
    _html(`${_attrs_partial(data, skip, accessor, scopeId, tagName)}>`);
  } else {
    writeAttrsFill(fills, accessor, withoutContent(data), skip, controllable);
  }
  renderPatchedContent(accessor, scopeId, content, serializeReason, pairing);
}

// A native tag's `content=` ships as a dynamic tag entry and renders as spread
// content does.
export function _patch_attr_content(
  accessor: Accessor,
  scopeId: number,
  content: unknown,
  markerGuard?: 1 | 0,
  owned?: GroupMask,
  group?: number,
) {
  renderPatchedContent(
    accessor,
    scopeId,
    content,
    markerGuard,
    writeDynamicTagEntry(scopeId, accessor, content, 0, 0, 0, owned, group),
  );
}

// Content pairs as a dynamic tag's does: a kept body seeds no creation, and a
// client-owned one is the resumed page's (rendered unpatched, or skipped).
function renderPatchedContent(
  accessor: Accessor,
  scopeId: number,
  content: unknown,
  markerGuard: 1 | 0 | undefined,
  pairing: 1 | 2 | 3,
) {
  const state = getState();
  const renderer = normalizeDynamicRenderer<ServerRenderer>(content);
  const pairs = pairsContent(state, scopeId, accessor, renderer, 0, pairing);
  if (pairing === 1) {
    _base_attr_content(accessor, scopeId, content, markerGuard);
  } else if (pairs) {
    withKeptBranchId(_peek_scope_id(), () =>
      _base_attr_content(accessor, scopeId, content, markerGuard),
    );
  } else if (!(state instanceof PatchUpdateState)) {
    withUnpatched(() =>
      _base_attr_content(accessor, scopeId, content, markerGuard),
    );
  }
}

// The content renderer never rides the set: its own entry carries it, and a
// shared record would serialize it again (about 40 B), so this one copies.
function withoutContent(data: Record<string, unknown>) {
  if (!data?.content) return data;
  const { content: _, ...set } = data;
  return set;
}

// A patched control writes its entries from the values it renders, so each
// evaluates once; a patch update ships the entries alone.
export function _patch_input_value(
  scopeId: number,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
  controlKey?: string,
  owned?: GroupMask,
  group?: number,
  bindKey?: string,
  bindOwned?: GroupMask,
  bindGroup?: number,
) {
  const isPatchUpdate = patchControl(
    scopeId,
    value,
    valueChange,
    controlKey,
    owned,
    group,
    bindKey,
    bindOwned,
    bindGroup,
  );
  return isPatchUpdate
    ? ""
    : _attr_input_value(scopeId, nodeAccessor, value, valueChange);
}

export function _patch_input_checked(
  scopeId: number,
  nodeAccessor: Accessor,
  checked: unknown,
  checkedChange: unknown,
  controlKey?: string,
  owned?: GroupMask,
  group?: number,
  bindKey?: string,
  bindOwned?: GroupMask,
  bindGroup?: number,
) {
  const isPatchUpdate = patchControl(
    scopeId,
    checked,
    checkedChange,
    controlKey,
    owned,
    group,
    bindKey,
    bindOwned,
    bindGroup,
  );
  return isPatchUpdate
    ? ""
    : _attr_input_checked(scopeId, nodeAccessor, checked, checkedChange);
}

// The control entry pairs the group's value with this input's own.
export function _patch_input_checkedValue(
  scopeId: number,
  nodeAccessor: Accessor,
  checkedValue: unknown,
  checkedValueChange: unknown,
  value: unknown,
  controlKey?: string,
  owned?: GroupMask,
  group?: number,
  bindKey?: string,
  bindOwned?: GroupMask,
  bindGroup?: number,
) {
  const isPatchUpdate = patchControl(
    scopeId,
    controlKey && [checkedValue, value],
    checkedValueChange,
    controlKey,
    owned,
    group,
    bindKey,
    bindOwned,
    bindGroup,
  );
  return isPatchUpdate
    ? ""
    : _attr_input_checkedValue(
        scopeId,
        nodeAccessor,
        checkedValue,
        checkedValueChange,
        value,
      );
}

export function _patch_details_or_dialog_open(
  scopeId: number,
  nodeAccessor: Accessor,
  open: unknown,
  openChange: unknown,
  controlKey?: string,
  owned?: GroupMask,
  group?: number,
  bindKey?: string,
  bindOwned?: GroupMask,
  bindGroup?: number,
) {
  const isPatchUpdate = patchControl(
    scopeId,
    open,
    openChange,
    controlKey,
    owned,
    group,
    bindKey,
    bindOwned,
    bindGroup,
  );
  return isPatchUpdate
    ? ""
    : _attr_details_or_dialog_open(scopeId, nodeAccessor, open, openChange);
}

// The entries precede the content, whose options write their own.
export function _patch_select_value(
  scopeId: number,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
  content: () => void,
  controlKey?: string,
  owned?: GroupMask,
  group?: number,
  bindKey?: string,
  bindOwned?: GroupMask,
  bindGroup?: number,
) {
  const isPatchUpdate = patchControl(
    scopeId,
    value,
    valueChange,
    controlKey,
    owned,
    group,
    bindKey,
    bindOwned,
    bindGroup,
  );
  if (isPatchUpdate) content();
  else _attr_select_value(scopeId, nodeAccessor, value, valueChange, content);
}

export function _patch_textarea_value(
  scopeId: number,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
  controlKey?: string,
  owned?: GroupMask,
  group?: number,
  bindKey?: string,
  bindOwned?: GroupMask,
  bindGroup?: number,
) {
  const isPatchUpdate = patchControl(
    scopeId,
    value,
    valueChange,
    controlKey,
    owned,
    group,
    bindKey,
    bindOwned,
    bindGroup,
  );
  return isPatchUpdate
    ? ""
    : _attr_textarea_value(scopeId, nodeAccessor, value, valueChange);
}

// The handler's bind entry applies first, then the value's control entry (its
// kind digit rides the key ahead of the accessor); true on a patch update.
function patchControl(
  scopeId: number,
  value: unknown,
  handler: unknown,
  controlKey: string | undefined,
  owned: GroupMask | undefined,
  group: number | undefined,
  bindKey: string | undefined,
  bindOwned: GroupMask | undefined,
  bindGroup: number | undefined,
) {
  const state = getState();
  if (!(state instanceof PatchUpdateState)) {
    // A page render only walks the markers a control entry pairs through.
    if (controlKey) walkMarkers(state);
    return false;
  }
  if (bindKey) _patch_bind(scopeId, bindKey, handler, bindOwned, bindGroup);
  if (controlKey) {
    const fills = ensureFills(scopeId, owned, group!);
    if (fills) fills[controlKey] = normalizePatchValue(value);
  }
  return true;
}
