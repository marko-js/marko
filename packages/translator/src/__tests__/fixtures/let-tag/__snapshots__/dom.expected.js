import { queue as _queue, write as _write, read as _read, on as _on, data as _data, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrateWith_x_y(x = _read(3), y = _read(4)) {
  _on(0, "click", _read(5));
}

function _applyWith_x_y(x = _read(3), y = _read(4)) {
  _write(5, _queue(_apply_x, 3, y = x + y));

  _hydrateWith_x_y();
}

function _apply_y(y) {
  if (_write(4, y)) {
    _data(2, y);

    _queue(_applyWith_x_y, 4);
  }
}

function _apply_x(x) {
  if (_write(3, x)) {
    _data(1, x);

    _queue(_applyWith_x_y, 3);
  }
}

function _apply() {
  _apply_x(1);

  _apply_y(1);
}

export const template = "<div><!></div><!>";
export const walks = " D%l%";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);