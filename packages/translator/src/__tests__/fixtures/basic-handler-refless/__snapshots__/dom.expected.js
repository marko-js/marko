import { queue as _queue, write as _write, on as _on, data as _data, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate(_scope) {
  _on(_scope, 0, "click", _scope[3]);
}

function _apply_data(_scope, data) {
  if (_write(_scope, 2, data)) _data(_scope, 1, data);
}

const _temp = function (_scope) {
  _queue(_scope, _apply_data, 0, 1);
};

function _apply(_scope) {
  _apply_data(_scope, 0);

  _write(_scope, 3, _bind(_scope, _temp));

  _hydrate(_scope);
}

export const template = "<button><!></button>";
export const walks = " D%l";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);