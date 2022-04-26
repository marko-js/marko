import { on as _on, data as _data, register as _register, queueHydrate as _queueHydrate, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate_onclick(_scope, onclick = _scope[2]) {
  _on(_scope[0], "click", onclick);
}

_register("packages/translator/src/__tests__/fixtures/basic-component-attrs/components/my-button.marko_0_onclick", _hydrate_onclick);

function _apply_text(_scope, text) {
  if (_write(_scope, 3, text)) {
    _data(_scope[1], text);
  }
}

function _apply_onclick(_scope, onclick) {
  if (_write(_scope, 2, onclick)) {
    _queueHydrate(_scope, _hydrate_onclick);
  }
}

export const applyAttrs = function (_scope, {
  onclick,
  text
}) {
  _apply_onclick(_scope, onclick);

  _apply_text(_scope, text);
};
export { _apply_onclick, _apply_text };
export const template = "<button> </button>";
export const walks =
/* get, next(1), get, out(1) */
" D l";
export const apply = function () {};
export default _createRenderFn(template, walks, apply, applyAttrs);