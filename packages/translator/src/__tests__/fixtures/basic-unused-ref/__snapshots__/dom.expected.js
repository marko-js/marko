import { queue as _queue, on as _on, data as _data, register as _register, bind as _bind, queueHydrate as _queueHydrate, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _onclick = function (_scope) {
  const clickCount = _scope[4];

  _queue(_scope, _apply_clickCount, 2, clickCount + 1);
};

function _hydrate_clickCount(_scope, clickCount = _scope[4]) {
  _on(_scope, 0, "click", _bind(_scope, _onclick));
}

_register("packages/translator/src/__tests__/fixtures/basic-unused-ref/template.marko_0_0", _hydrate_clickCount);

function _apply_clickCount(_scope, clickCount) {
  if (_write(_scope, 4, clickCount)) {
    _data(_scope, 1, clickCount);

    _queueHydrate(_scope, _hydrate_clickCount);
  }
}

function _apply_unused_2(_scope, unused_2) {
  if (_write(_scope, 3, unused_2)) {}
}

function _apply_unused_(_scope, unused_1) {
  if (_write(_scope, 2, unused_1)) {}
}

function _apply(_scope) {
  _apply_unused_(_scope, 123);

  _apply_unused_2(456);

  _apply_clickCount(_scope, 0);
}

export const template = "<div><button><!></button></div>";
export const walks =
/* next(1), get, next(1), replace, out(2) */
"D D%m";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);