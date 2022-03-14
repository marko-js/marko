import { queue as _queue, write as _write, on as _on, data as _data, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate_clickCount(_scope, clickCount = _scope[2]) {
  _on(_scope, 0, "click", _scope[3]);
}

const _onclick = function (_scope) {
  const clickCount = _scope[2];

  _queue(_scope, _apply_clickCount, 0, clickCount + 1);
};

function _apply_clickCount(_scope, clickCount) {
  if (_write(_scope, 2, clickCount)) {
    _write(_scope, 3, _bind(_scope, _onclick));

    _data(_scope, 1, clickCount);

    _hydrate_clickCount(_scope);
  }
}

function _apply(_scope) {
  _apply_clickCount(_scope, 0);
}

export const template = "<div><button><!></button></div>";
export const walks = "D D%m";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);