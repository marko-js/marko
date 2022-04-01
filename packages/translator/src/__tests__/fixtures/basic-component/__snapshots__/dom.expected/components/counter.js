import { queue as _queue, write as _write, on as _on, data as _data, register as _register, queueHydrate as _queueHydrate, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate_clickCount(_scope, clickCount = _scope[2]) {
  _on(_scope, 0, "click", _scope[3]);
}

_register("packages/translator/src/__tests__/fixtures/basic-component/components/counter.marko_0_0", _hydrate_clickCount);

const _onclick = function (_scope) {
  const clickCount = _scope[2];

  _queue(_scope, _apply_clickCount, 0, clickCount + 1);
};

function _apply_clickCount(_scope, clickCount) {
  if (_write(_scope, 2, clickCount)) {
    _write(_scope, 3, _bind(_scope, _onclick));

    _data(_scope, 1, clickCount);

    _queueHydrate(_scope, _hydrate_clickCount);
  }
}

function _apply(_scope) {
  _apply_clickCount(_scope, 0);
}

export const template = "<button><!></button>";
export const walks =
/* get, next(1), replace, out(1) */
" D%l";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);