import { queue as _queue, write as _write, read as _read, on as _on, data as _data, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate() {
  _on(0, "click", _read(3));
}

function _apply_data(data) {
  if (_write(2, data)) _data(1, data);
}

const _temp = function () {
  _queue(_apply_data, 0, 1);
};

function _apply() {
  _apply_data(0);

  _write(3, _bind(_temp));

  _hydrate();
}

export const template = "<button><!></button>";
export const walks = " D%";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);