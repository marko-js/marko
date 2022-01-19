import { queue as _queue, write as _write, read as _read, on as _on, data as _data, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply() {
  _apply_clickCount(0);
}

const _onclick = function () {
  const clickCount = _read(2);

  _queue(_apply_clickCount, 2, clickCount + 1);
};

function _apply_clickCount(clickCount) {
  if (_write(2, clickCount)) {
    _write(3, _bind(_onclick));

    _hydrate_clickCount();

    _data(1, clickCount);
  }
}

function _hydrate_clickCount(clickCount = _read(2)) {
  _on(0, "click", _read(3));
}

export const template = "<div><button><!></button></div>";
export const walks = "D D%";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);