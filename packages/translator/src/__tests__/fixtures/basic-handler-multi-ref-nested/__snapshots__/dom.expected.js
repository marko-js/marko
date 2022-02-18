import { queue as _queue, write as _write, read as _read, on as _on, data as _data, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrateWith_a_b(a = _read(2), b = _read(3)) {
  _on(0, "click", _read(4));
}

const _onclick = a => {
  const b = _read(3);

  return b;
};

const _onclick2 = function () {
  const a = _read(2);

  _queue(_apply_a, 0, a.map(_bind(_onclick)));
};

function _applyWith_a_b(a = _read(2), b = _read(3)) {
  _write(4, _bind(_onclick2));

  _hydrateWith_a_b();
}

function _apply_b(b) {
  if (_write(3, b)) _queue(_applyWith_a_b, 2);
}

function _apply_a(a) {
  if (_write(2, a)) {
    _data(1, a.join(""));

    _queue(_applyWith_a_b, 2);
  }
}

function _apply() {
  _apply_a([0]);

  _apply_b(1);
}

export const template = "<button><!></button>";
export const walks = " D%";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);