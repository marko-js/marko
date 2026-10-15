import { type Accessor, PatchKey } from "../../common/types";
import { _escape_style_value, _to_text, _unescaped } from "../content";
import { type GroupMask, _html_resume, _text_resume } from "../writer";
import {
  entryKey,
  normalizePatchValue,
  ensureFills,
  groupSources,
  writeFill,
} from "./writer";

export function _patch_text(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
  markerGuard?: number,
  owned?: GroupMask,
  group?: number,
) {
  const fills = ensureFills(scopeId, owned, group!);
  // The patch write doubles as the output writer, so the text rides the
  // same resume marking a plain placeholder gets, but for a constant group's.
  return fills === undefined
    ? _text_resume(
        scopeId,
        accessor,
        value,
        keepsMarker(markerGuard, owned, group),
      )
    : writeFill(fills, entryKey(PatchKey.Text, accessor), _to_text(value));
}

// An unescaped hole: the entry carries the markup string the client parses
// into the hole's range; the output writer marks that range for resume.
export function _patch_html(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
  markerGuard?: number,
  owned?: GroupMask,
  group?: number,
) {
  const fills = ensureFills(scopeId, owned, group!);
  return fills === undefined
    ? _html_resume(
        scopeId,
        accessor,
        value,
        keepsMarker(markerGuard, owned, group),
      )
    : writeFill(fills, entryKey(PatchKey.Html, accessor), _unescaped(value));
}

// A hole of a constant group needs no marker: no patch fills it on a live
// scope, no client code changes it, and a created one finds it by its walk.
function keepsMarker(
  markerGuard: number | undefined,
  owned?: GroupMask,
  group?: number,
) {
  return groupSources(owned, group!) ? markerGuard : 0;
}

// A `<style>` interpolation's write doubles as the escaped output; its entry
// also writes a created scope's style shell, so it seeds even a client value.
export function _patch_style(
  scopeId: number,
  key: string,
  value: unknown,
  owned?: GroupMask,
  group?: number,
) {
  const fills = ensureFills(scopeId, owned, group!, 1);
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
  owned?: GroupMask,
  group?: number,
) {
  const fills = ensureFills(scopeId, owned, group!);
  return fills === undefined ? escape(value) : writeFill(fills, key, value);
}
