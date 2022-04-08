import { userEffect as _userEffect, register as _register, bind as _bind, queueHydrate as _queueHydrate, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _temp = function (_scope) {
  const x = _scope[0];
  document.getElementById("ref").textContent = x;
};

function _hydrate_x(_scope, x = _scope[0]) {
  _userEffect(_scope, 1, _bind(_scope, _temp));
}

_register("packages/translator/src/__tests__/fixtures/effect-tag/template.marko_0_x", _hydrate_x);

function _apply_x(_scope, x) {
  if (_write(_scope, 0, x)) _queueHydrate(_scope, _hydrate_x);
}

function _apply(_scope) {
  _apply_x(_scope, 1);
}

export const template = "<div id=ref>0</div>";
export const walks =
/* over(1) */
"b";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);