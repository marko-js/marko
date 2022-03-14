import { data as _data, html as _html, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_missing(_scope, missing) {
  if (_write(_scope, 4, missing)) _html(_scope, 2, missing);
}

function _apply_name(_scope, name) {
  if (_write(_scope, 3, name)) {
    _data(_scope, 0, name);

    _html(_scope, 1, name);
  }
}

export const template = "Hello <!>! Hello <!>! Hello <!>!";
export const walks = "b%c%c%c";
export const apply = null;
export default _createRenderFn(template, walks, apply);