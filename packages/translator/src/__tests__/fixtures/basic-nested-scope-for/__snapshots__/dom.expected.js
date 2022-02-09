const _for = _createRenderer("<button><!></button>", " D%", null);

import { queueInOwner as _queueInOwner, write as _write, read as _read, on as _on, attr as _attr, data as _data, createRenderer as _createRenderer, setLoopOf as _setLoopOf, readInOwner as _readInOwner, queue as _queue, bind as _bind, queueForEach as _queueForEach, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate_num(num = _read(2)) {
  _on(0, "click", _read(3));
}

function _applyWith_selected_num(selected = _readInOwner(4), num = _read(2)) {
  _attr(0, "data-selected", selected === num);

  _attr(0, "data-multiple", num % selected === 0);
}

const _onclick = function () {
  const num = _read(2);

  _queueInOwner(_apply_selected, 4, num);
};

function _apply_num(num) {
  if (_write(2, num)) {
    _write(3, _bind(_onclick));

    _data(1, num);

    _hydrate_num();

    _queue(_applyWith_selected_num, 2);
  }
}

function _apply_selected2(selected = _readInOwner(4)) {
  _queue(_applyWith_selected_num, 4);
}

function _apply_selected(selected) {
  if (_write(4, selected)) _queueForEach(0, _apply_selected2, 4);
}

function _apply() {
  _apply_selected(0);

  _setLoopOf(0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], _for, null, _apply_num);
}

export const template = "<!>";
export const walks = "%+";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);