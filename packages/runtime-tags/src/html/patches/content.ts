import { type Accessor, PatchKey } from "../../common/types";
import { _escape_style_value, _to_text, _unescaped } from "../content";
import { type GroupMask, _html_resume, _text_resume } from "../writer";
import {
  normalizePatchValue,
  ensureFills,
  getUpdatesFrom,
  writeFill,
} from "./writer";

export function _patch_text(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
  markerGuard?: number,
  mask?: GroupMask,
  group?: number,
  rewritten?: 1,
) {
  const fills = ensureFills(scopeId, mask, group!);
  // The patch write doubles as the output writer, so the text rides the
  // same resume marking a plain placeholder gets, but for a constant group's.
  return fills === undefined
    ? _text_resume(
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
export function _patch_html(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
  markerGuard?: number,
  mask?: GroupMask,
  group?: number,
  rewritten?: 1,
) {
  const fills = ensureFills(scopeId, mask, group!);
  return fills === undefined
    ? _html_resume(
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

// A `<style>` interpolation's write doubles as the escaped output; its entry
// also writes a created scope's style shell, so it seeds even a client value.
export function _patch_style(
  scopeId: number,
  key: string,
  value: unknown,
  mask?: GroupMask,
  group?: number,
) {
  const fills = ensureFills(scopeId, mask, group!, 1);
  return fills === undefined
    ? _escape_style_value(value)
    : writeFill(fills, key, normalizePatchValue(value));
}

// A text-only body carries plain text (html output escapes per namespace).
export function _patch_text_content(
  scopeId: number,
  key: string,
  value: string,
  escape: (value: unknown) => string,
  mask?: GroupMask,
  group?: number,
) {
  const fills = ensureFills(scopeId, mask, group!);
  return fills === undefined ? escape(value) : writeFill(fills, key, value);
}
