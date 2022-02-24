import { queue as _queue, write as _write, read as _read, on as _on, data as _data, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate_clickCount(clickCount = _read(4)) {
  _on(0, "click", _read(5));
}

const _onclick = function () {
  const clickCount = _read(4);

  _queue(_apply_clickCount, 2, clickCount + 1);
};

function _apply_clickCount(clickCount) {
  if (_write(4, clickCount)) {
    _write(5, _bind(_onclick));

    _data(1, clickCount);

    _hydrate_clickCount();
  }
}

function _apply_unused_2(unused_2) {
  if (_write(3, unused_2)) {}
}

function _apply_unused_(unused_1) {
  if (_write(2, unused_1)) {}
}

function _apply() {
  _apply_unused_(123);

  _apply_unused_2(456);

  _apply_clickCount(0);
}

export const template = "<div><button><!></button></div>";
export const walks = "D D%";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);