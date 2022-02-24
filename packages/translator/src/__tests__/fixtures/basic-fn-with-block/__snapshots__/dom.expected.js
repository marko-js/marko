import { queue as _queue, write as _write, read as _read, on as _on, data as _data, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate_count(count = _read(2)) {
  _on(0, "click", _read(3));
}

const _onclick = function () {
  const count = _read(2);

  {
    _queue(_apply_count, 0, count + 1);
  }
};

function _apply_count(count) {
  if (_write(2, count)) {
    _write(3, _bind(_onclick));

    _data(1, count);

    _hydrate_count();
  }
}

function _apply() {
  _apply_count(0);
}

export const template = "<button><!></button>";
export const walks = " D%";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);