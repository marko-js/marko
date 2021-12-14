import { write as _write, read as _read, data as _data, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply() {
  _apply_clickCount(0);
}

function _apply_clickCount(clickCount) {
  if (_write(2, clickCount)) {
    _write(4, function () {
      clickCount++;
    });

    _hydrate_clickCount();

    _data(1, clickCount);
  }
}

function _hydrate_clickCount(clickCount = _read(2)) {
  _read(4);
}

export const template = "<div><button><!></button></div>";
export const walks = "D D%";
export const apply = _apply;
export default _createRenderFn(template, walks, [], apply);