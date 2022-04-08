import { userEffect as _userEffect, register as _register, bind as _bind, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _temp = function (_scope) {
  document.body.className = "no-deps";
};

function _hydrate(_scope) {
  _userEffect(_scope, 0, _bind(_scope, _temp));
}

_register("packages/translator/src/__tests__/fixtures/basic-effect-no-deps/template.marko_0", _hydrate);

function _apply(_scope) {
  _queueHydrate(_scope, _hydrate);
}

export const template = "";
export const walks = "";
export const apply = function () {};
export default _createRenderFn(template, walks, apply);