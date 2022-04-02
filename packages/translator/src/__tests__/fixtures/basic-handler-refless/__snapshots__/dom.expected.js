import { queue as _queue, on as _on, data as _data, register as _register, bind as _bind, queueHydrate as _queueHydrate, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _temp = function (_scope) {
  _queue(_scope, _apply_data, 0, 1);
};

function _hydrate(_scope) {
  _on(_scope, 0, "click", _bind(_scope, _temp));
}

_register("packages/translator/src/__tests__/fixtures/basic-handler-refless/template.marko_0_0", _hydrate);

function _apply_data(_scope, data) {
  if (_write(_scope, 2, data)) _data(_scope, 1, data);
}

function _apply(_scope) {
  _apply_data(_scope, 0);

  _queueHydrate(_scope, _hydrate);
}

export const template = "<button><!></button>";
export const walks =
/* get, next(1), replace, out(1) */
" D%l";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);