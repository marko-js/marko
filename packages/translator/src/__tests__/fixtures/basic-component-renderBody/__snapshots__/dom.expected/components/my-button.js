import { on as _on, dynamicTag as _dynamicTag, register as _register, queueHydrate as _queueHydrate, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate_onclick(_scope, onclick = _scope[1]) {
  _on(_scope[0], "click", onclick);
}

_register("packages/translator/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onclick", _hydrate_onclick);

function _apply_renderBody(_scope, renderBody) {
  if (_write(_scope, 2, renderBody)) {}
}

function _apply_onclick(_scope, onclick) {
  if (_write(_scope, 1, onclick)) {
    _queueHydrate(_scope, _hydrate_onclick);
  }
}

export const applyAttrs = function (_scope, {
  onclick,
  renderBody
}) {
  _apply_onclick(_scope, onclick);

  _apply_renderBody(_scope, renderBody);
};
export { _apply_onclick, _apply_renderBody };
export const template = "<button></button>";
export const walks =
/* get, over(1) */
" b";
export const apply = function () {};
export default _createRenderFn(template, walks, apply, applyAttrs);