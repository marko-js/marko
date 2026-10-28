import {
  isNotNullishOrFalse,
  normalizeDynamicRenderer,
  stringifyClassEntry,
  stringifyStyleEntry,
  toDelimitedString,
} from "../../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  ControlledType,
  IdHop,
  PatchKey,
  PatchPairing,
} from "../../common/types";
import {
  _attr as _base_attr,
  _attr_details_or_dialog_open as _base_attr_details_or_dialog_open,
  _attr_input_checked as _base_attr_input_checked,
  _attr_input_checkedValue as _base_attr_input_checkedValue,
  _attr_input_value as _base_attr_input_value,
  _attr_option_value as _base_attr_option_value,
  _attr_select_value as _base_attr_select_value,
  _attr_textarea_value as _base_attr_textarea_value,
  _attrs as _base_attrs,
  _attrs_partial as _base_attrs_partial,
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
  normalizePatchValue,
  PatchRenderState,
  ensureFills,
  popIdHop,
  pushIdHop,
  walkMarkers,
  withKeptBranchId,
  withUnpatched,
} from "./writer";

// A patched attribute (`scopeId` and its element's `accessor` given) renders on
// a page and writes its entry in a patch render, so its value evaluates once.
export function _attr(
  name: string,
  value: unknown,
  scopeId?: number,
  accessor?: Accessor,
  mask?: GroupMask,
  group?: number,
) {
  const fills =
    scopeId === undefined ? undefined : ensureFills(scopeId, mask, group!);
  return fills === undefined
    ? _base_attr(name, value)
    : writeAttrFill(fills, accessor!, name, normalizeAttrValue(value));
}

// Class/style normalize on the server into the same string the dom helper
// writes, so the client applies them as plain attr fills.
export function _attr_class(
  value: unknown,
  scopeId?: number,
  accessor?: Accessor,
  mask?: GroupMask,
  group?: number,
) {
  return patchStringAttr(
    "class",
    toDelimitedString(value, " ", stringifyClassEntry),
    scopeId,
    accessor,
    mask,
    group,
  );
}

export function _attr_style(
  value: unknown,
  scopeId?: number,
  accessor?: Accessor,
  mask?: GroupMask,
  group?: number,
) {
  return patchStringAttr(
    "style",
    toDelimitedString(value, ";", stringifyStyleEntry),
    scopeId,
    accessor,
    mask,
    group,
  );
}

// An option's `value` renders through the select-aware writer (it may add
// `selected`); the patch entry is the plain attribute the client re-syncs.
export function _attr_option_value(
  value: unknown,
  scopeId?: number,
  accessor?: Accessor,
  mask?: GroupMask,
  group?: number,
) {
  const fills =
    scopeId === undefined ? undefined : ensureFills(scopeId, mask, group!);
  return fills === undefined
    ? _base_attr_option_value(value)
    : writeAttrFill(fills, accessor!, "value", normalizeAttrValue(value));
}

function patchStringAttr(
  name: string,
  value: string,
  scopeId: number | undefined,
  accessor: Accessor | undefined,
  mask: GroupMask | undefined,
  group: number | undefined,
) {
  const fills =
    scopeId === undefined ? undefined : ensureFills(scopeId, mask, group!);
  return fills === undefined
    ? stringAttr(name, value)
    : writeAttrFill(fills, accessor!, name, value || undefined);
}

function writeAttrFill(
  fills: Record<string, unknown> | 0,
  accessor: Accessor,
  name: string,
  value: string | undefined,
) {
  if (fills)
    fills[PatchKey.Attr + accessor + (MARKO_DEBUG ? " " : "$") + name] = value;
  return "";
}

// An attribute's value as the client's `_attr` sets it: `""` for `true`, none
// for nullish or `false`, else its string.
function normalizeAttrValue(value: unknown) {
  if (isNotNullishOrFalse(value)) return value === true ? "" : value + "";
}

// A spread a patch writes passes its group: the entry carries the merged object
// and the client's `_attrs` re-applies it (removing what the new set lacks).
export function _attrs(
  data: Record<string, unknown>,
  accessor: Accessor,
  scopeId: number,
  tagName: string,
  flag?: 1 | 2,
  mask?: GroupMask,
  group?: number,
) {
  const fills =
    group === undefined ? undefined : ensureFills(scopeId, mask, group);
  return fills === undefined
    ? _base_attrs(data, accessor, scopeId, tagName)
    : writeAttrsFill(
        fills,
        accessor,
        data,
        flag === 2 && keepsPageNonce(data) ? { nonce: 1 } : 0,
        flag,
      );
}

// Static attrs after the spread render separately, so the entry names them
// (`skip`) for the client to leave alone.
export function _attrs_partial(
  data: Record<string, unknown>,
  skip: Record<string, 1>,
  accessor: Accessor,
  scopeId: number,
  tagName: string,
  flag?: 1 | 2,
  mask?: GroupMask,
  group?: number,
) {
  const fills =
    group === undefined ? undefined : ensureFills(scopeId, mask, group);
  return fills === undefined
    ? _base_attrs_partial(data, skip, accessor, scopeId, tagName)
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
    fills[PatchKey.Attrs + accessor] =
      flag === 1 ? [set ?? 0, skip, 1] : skip ? [set ?? 0, skip] : (set ?? 0);
  }
  return "";
}

// A native tag's `content=` a patch writes passes its group and ships as a
// dynamic tag entry; other content renders as an unpaired dynamic tag's does.
export function _attr_content(
  accessor: Accessor,
  scopeId: number,
  content: unknown,
  site: number,
  markerGuard?: 1 | 0,
  mask?: GroupMask,
  group?: number,
) {
  renderPatchedContent(
    accessor,
    scopeId,
    content,
    markerGuard,
    getContentPairing(scopeId, accessor, content, mask, group),
    site,
  );
}

// A spread that may carry `content`: the set patches as attributes and
// the content as a dynamic tag entry, the way a static `content=` does.
export function _attrs_content(
  data: Record<string, unknown>,
  accessor: Accessor,
  scopeId: number,
  tagName: string,
  site: number,
  markerGuard?: 1 | 0,
  controllable?: 1,
  mask?: GroupMask,
  group?: number,
) {
  const content = data?.content;
  const pairing = getContentPairing(scopeId, accessor, content, mask, group);
  const fills =
    group === undefined ? undefined : ensureFills(scopeId, mask, group);
  if (fills === undefined) {
    _html(`${_base_attrs(data, accessor, scopeId, tagName)}>`);
  } else {
    writeAttrsFill(fills, accessor, withoutContent(data), 0, controllable);
  }
  renderPatchedContent(accessor, scopeId, content, markerGuard, pairing, site);
}

export function _attrs_partial_content(
  data: Record<string, unknown>,
  skip: Record<string, 1>,
  accessor: Accessor,
  scopeId: number,
  tagName: string,
  site: number,
  markerGuard?: 1 | 0,
  controllable?: 1,
  mask?: GroupMask,
  group?: number,
) {
  const content = data?.content;
  const pairing = getContentPairing(scopeId, accessor, content, mask, group);
  const fills =
    group === undefined ? undefined : ensureFills(scopeId, mask, group);
  if (fills === undefined) {
    _html(`${_base_attrs_partial(data, skip, accessor, scopeId, tagName)}>`);
  } else {
    writeAttrsFill(fills, accessor, withoutContent(data), skip, controllable);
  }
  renderPatchedContent(accessor, scopeId, content, markerGuard, pairing, site);
}

// Content no patch entry names (no group passed) is the resumed page's.
function getContentPairing(
  scopeId: number,
  accessor: Accessor,
  content: unknown,
  mask: GroupMask | undefined,
  group: number | undefined,
) {
  return group === undefined
    ? PatchPairing.Skip
    : writeDynamicTagEntry(scopeId, accessor, content, 0, 0, 0, mask, group);
}

// Content pairs as a dynamic tag's does: a kept body seeds no creation, and one
// updating from the client is the resumed page's (unpatched, or skipped).
function renderPatchedContent(
  accessor: Accessor,
  scopeId: number,
  content: unknown,
  markerGuard: 1 | 0 | undefined,
  pairing: PatchPairing,
  site: number,
) {
  const state = getState();
  const renderer = normalizeDynamicRenderer<ServerRenderer>(content);
  const pairs = pairsContent(state, scopeId, accessor, renderer, 0, pairing);
  pushIdHop(IdHop.Site, MARKO_DEBUG ? [accessor, site] : site);
  if (pairing === PatchPairing.Render || pairing === PatchPairing.Setup) {
    _base_attr_content(accessor, scopeId, content, markerGuard);
  } else if (pairs) {
    withKeptBranchId(_peek_scope_id(), () =>
      _base_attr_content(accessor, scopeId, content, markerGuard),
    );
  } else if (!(state instanceof PatchRenderState)) {
    withUnpatched(() =>
      _base_attr_content(accessor, scopeId, content, markerGuard),
    );
  }
  popIdHop();
}

// The content renderer never rides the set: its own entry carries it, and a
// shared record would serialize it again (about 40 B), so this one copies.
function withoutContent(data: Record<string, unknown>) {
  if (!data?.content) return data;
  const { content: _, ...set } = data;
  return set;
}

// A patched control writes its entries from the values it renders, so each
// evaluates once; a patch render ships the entries alone.
export function _attr_input_value(
  scopeId: number,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
  control?: 1,
  mask?: GroupMask,
  group?: number,
  bind?: 1,
  bindMask?: GroupMask,
  bindGroup?: number,
) {
  return patchControl(
    scopeId,
    nodeAccessor,
    ControlledType.InputValue,
    value,
    valueChange,
    control,
    mask,
    group,
    bind,
    bindMask,
    bindGroup,
  )
    ? ""
    : _base_attr_input_value(scopeId, nodeAccessor, value, valueChange);
}

export function _attr_input_checked(
  scopeId: number,
  nodeAccessor: Accessor,
  checked: unknown,
  checkedChange: unknown,
  control?: 1,
  mask?: GroupMask,
  group?: number,
  bind?: 1,
  bindMask?: GroupMask,
  bindGroup?: number,
) {
  return patchControl(
    scopeId,
    nodeAccessor,
    ControlledType.InputChecked,
    checked,
    checkedChange,
    control,
    mask,
    group,
    bind,
    bindMask,
    bindGroup,
  )
    ? ""
    : _base_attr_input_checked(scopeId, nodeAccessor, checked, checkedChange);
}

// The control entry pairs the group's value with this input's own.
export function _attr_input_checkedValue(
  scopeId: number,
  nodeAccessor: Accessor,
  checkedValue: unknown,
  checkedValueChange: unknown,
  value: unknown,
  control?: 1,
  mask?: GroupMask,
  group?: number,
  bind?: 1,
  bindMask?: GroupMask,
  bindGroup?: number,
) {
  return patchControl(
    scopeId,
    nodeAccessor,
    ControlledType.InputCheckedValue,
    control && [checkedValue, value],
    checkedValueChange,
    control,
    mask,
    group,
    bind,
    bindMask,
    bindGroup,
  )
    ? ""
    : _base_attr_input_checkedValue(
        scopeId,
        nodeAccessor,
        checkedValue,
        checkedValueChange,
        value,
      );
}

export function _attr_details_or_dialog_open(
  scopeId: number,
  nodeAccessor: Accessor,
  open: unknown,
  openChange: unknown,
  control?: 1,
  mask?: GroupMask,
  group?: number,
  bind?: 1,
  bindMask?: GroupMask,
  bindGroup?: number,
) {
  return patchControl(
    scopeId,
    nodeAccessor,
    ControlledType.DetailsOrDialogOpen,
    open,
    openChange,
    control,
    mask,
    group,
    bind,
    bindMask,
    bindGroup,
  )
    ? ""
    : _base_attr_details_or_dialog_open(
        scopeId,
        nodeAccessor,
        open,
        openChange,
      );
}

// The entries precede the content, whose options write their own.
export function _attr_select_value(
  scopeId: number,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
  content: () => void,
  control?: 1,
  mask?: GroupMask,
  group?: number,
  bind?: 1,
  bindMask?: GroupMask,
  bindGroup?: number,
) {
  if (
    patchControl(
      scopeId,
      nodeAccessor,
      ControlledType.SelectValue,
      value,
      valueChange,
      control,
      mask,
      group,
      bind,
      bindMask,
      bindGroup,
    )
  ) {
    content();
  } else {
    _base_attr_select_value(scopeId, nodeAccessor, value, valueChange, content);
  }
}

export function _attr_textarea_value(
  scopeId: number,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
  control?: 1,
  mask?: GroupMask,
  group?: number,
  bind?: 1,
  bindMask?: GroupMask,
  bindGroup?: number,
) {
  return patchControl(
    scopeId,
    nodeAccessor,
    ControlledType.InputValue,
    value,
    valueChange,
    control,
    mask,
    group,
    bind,
    bindMask,
    bindGroup,
  )
    ? ""
    : _base_attr_textarea_value(scopeId, nodeAccessor, value, valueChange);
}

// The handler's bind entry applies first, then the value's control entry (its
// kind digit rides the key ahead of the accessor); true on a patch render.
function patchControl(
  scopeId: number,
  nodeAccessor: Accessor,
  kind: ControlledType,
  value: unknown,
  handler: unknown,
  control: 1 | undefined,
  mask: GroupMask | undefined,
  group: number | undefined,
  bind: 1 | undefined,
  bindMask: GroupMask | undefined,
  bindGroup: number | undefined,
) {
  const state = getState();
  if (!(state instanceof PatchRenderState)) {
    // A page render only walks the markers a control entry pairs through.
    if (control) walkMarkers(state);
    return false;
  }
  if (bind) {
    _patch_bind(
      scopeId,
      PatchKey.Write + AccessorPrefix.ControlledHandler + nodeAccessor,
      handler,
      bindMask,
      bindGroup,
    );
  }
  if (control) {
    const fills = ensureFills(scopeId, mask, group!);
    if (fills) {
      fills[PatchKey.Control + kind + nodeAccessor] =
        normalizePatchValue(value);
    }
  }
  return true;
}
