import { queue as _queue, on as _on, data as _data, register as _register, bind as _bind, queueHydrate as _queueHydrate, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _onclick = function (_scope) {
  const clickCount = _scope[2];

  _queue(_scope, _apply_clickCount, 0, clickCount + 1);
};

function _hydrate_clickCount(_scope, clickCount = _scope[2]) {
  _on(_scope, 0, "click", _bind(_scope, _onclick));
}

_register("packages/translator/src/__tests__/fixtures/basic-component/components/counter.marko_0_0", _hydrate_clickCount);

function _apply_clickCount(_scope, clickCount) {
  if (_write(_scope, 2, clickCount)) {
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