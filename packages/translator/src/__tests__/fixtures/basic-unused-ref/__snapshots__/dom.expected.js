import { queue as _queue, write as _write, on as _on, data as _data, queueHydrate as _queueHydrate, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate_clickCount(_scope, clickCount = _scope[4]) {
  _on(_scope, 0, "click", _scope[5]);
}

const _onclick = function (_scope) {
  const clickCount = _scope[4];

  _queue(_scope, _apply_clickCount, 2, clickCount + 1);
};

function _apply_clickCount(_scope, clickCount) {
  if (_write(_scope, 4, clickCount)) {
    _write(_scope, 5, _bind(_scope, _onclick));

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
export const walks = "D D%m";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);