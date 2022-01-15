const _if = _createRenderer("Hello!", "b", null);

import { queue as _queue, createRenderer as _createRenderer, setConditionalRenderer as _setConditionalRenderer, write as _write, read as _read, on as _on, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply() {
  _apply_show(true);
}

const _onclick = function () {
  const show = _read(2);

  _queue(_apply_show, 2, !show);
};

function _apply_show(show) {
  if (_write(2, show)) {
    _setConditionalRenderer(0, 6, show ? _if : null);

    _write(7, _bind(_onclick));

    _hydrate_show();
  }
}

function _hydrate_show(show = _read(2)) {
  _on(1, "click", _read(7));
}

export const template = "<div><!><button>Toggle</button></div>";
export const walks = "D% ";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);