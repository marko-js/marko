import { type Accessor, PatchKey } from "../../common/types";
import {
  _escape as _base_escape,
  _escape_comment as _base_escape_comment,
  _escape_script as _base_escape_script,
  _escape_style as _base_escape_style,
  _escape_style_value as _base_escape_style_value,
  _to_text,
  _unescaped,
} from "../content";
import {
  type GroupMask,
  _html_resume as _base_html_resume,
  _text_resume as _base_text_resume,
} from "../writer";
import {
  _client_guard,
  normalizePatchValue,
  ensureFills,
  getUpdatesFrom,
  writeFill,
} from "./writer";

// A hole a patch writes passes its group: a patch render writes its fill, a page
// renders it with main's resume marking (none for a constant group's).
export function _text_resume(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
  markerGuard?: number,
  mask?: GroupMask,
  group?: number,
  rewritten?: 1,
  firstValue?: Accessor,
) {
  const fills =
    group === undefined
      ? undefined
      : ensureFills(scopeId, mask, group, undefined, firstValue);
  return fills === undefined
    ? _base_text_resume(
        scopeId,
        accessor,
        value,
        keepsMarker(markerGuard, mask, group, rewritten),
      )
    : writeFill(
        fills,
        PatchKey.Text + accessor,
        // The client's `_text` stringifies as `_to_text` does: a number ships bare.
        typeof value === "number" ? value : _to_text(value),
      );
}

// An unescaped hole: the entry carries the markup string the client parses
// into the hole's range; the output writer marks that range for resume.
export function _html_resume(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
  markerGuard?: number,
  mask?: GroupMask,
  group?: number,
  rewritten?: 1,
  firstValue?: Accessor,
) {
  const fills =
    group === undefined
      ? undefined
      : ensureFills(scopeId, mask, group, undefined, firstValue);
  return fills === undefined
    ? _base_html_resume(
        scopeId,
        accessor,
        value,
        keepsMarker(markerGuard, mask, group, rewritten),
      )
    : writeFill(fills, PatchKey.Html + accessor, _unescaped(value));
}

// A constant group's node keeps no marker, unless client state rewrites it: no
// patch fills it on a live scope, and a created one finds it by its walk.
function keepsMarker(
  markerGuard: number | undefined,
  mask?: GroupMask,
  group?: number,
  rewritten?: 1,
) {
  return rewritten || getUpdatesFrom(mask, group!) ? markerGuard : 0;
}

// A `<style>` value a patch writes passes its scope, key and group; its entry
// also writes a created scope's style shell, alone for a client value.
export function _escape_style_value(
  value: unknown,
  scopeId?: number,
  key?: string,
  mask?: GroupMask,
  group?: number,
  firstValue?: Accessor,
) {
  const fills =
    group === undefined
      ? undefined
      : ensureFills(scopeId!, mask, group, 1, firstValue);
  return fills === undefined
    ? _base_escape_style_value(value)
    : _client_guard(mask!, group!)
      ? writeFill(
          fills,
          key!.slice(0, key!.indexOf(MARKO_DEBUG ? " " : "$")),
          0,
        )
      : writeFill(fills, key!, normalizePatchValue(value));
}

// A text-only body a patch writes passes its scope, key and group: its entry
// carries the plain text, which a page escapes per namespace.
export const _escape = /*@__PURE__*/ withTextFill(_base_escape);
export const _escape_comment = /*@__PURE__*/ withTextFill(_base_escape_comment);
export const _escape_script = /*@__PURE__*/ withTextFill(_base_escape_script);
export const _escape_style = /*@__PURE__*/ withTextFill(_base_escape_style);

function withTextFill(escape: (value: unknown) => string) {
  return (
    value: unknown,
    scopeId?: number,
    key?: string,
    mask?: GroupMask,
    group?: number,
    firstValue?: Accessor,
  ) => {
    const fills =
      group === undefined
        ? undefined
        : ensureFills(scopeId!, mask, group, undefined, firstValue);
    return fills === undefined ? escape(value) : writeFill(fills, key!, value);
  };
}
