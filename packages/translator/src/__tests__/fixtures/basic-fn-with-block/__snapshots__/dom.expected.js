import { queue as _queue, write as _write, on as _on, data as _data, queueHydrate as _queueHydrate, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate_count(_scope, count = _scope[2]) {
  _on(_scope, 0, "click", _scope[3]);
}

const _onclick = function (_scope) {
  const count = _scope[2];
  {
    _queue(_scope, _apply_count, 0, count + 1);
  }
};

function _apply_count(_scope, count) {
  if (_write(_scope, 2, count)) {
    _write(_scope, 3, _bind(_scope, _onclick));

    _data(_scope, 1, count);

    _queueHydrate(_scope, _hydrate_count);
  }
}

function _apply(_scope) {
  _apply_count(_scope, 0);
}

export const template = "<button><!></button>";
export const walks = " D%l";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);