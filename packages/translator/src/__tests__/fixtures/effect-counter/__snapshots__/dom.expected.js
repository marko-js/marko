import { queue as _queue, userEffect as _userEffect, write as _write, read as _read, on as _on, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate_clickCount(clickCount = _read(1)) {
  _userEffect(2, function () {
    document.getElementById("button").textContent = clickCount;
  });

  _on(0, "click", _read(3));
}

const _onclick = function () {
  const clickCount = _read(1);

  _queue(_apply_clickCount, 0, clickCount + 1);
};

function _apply_clickCount(clickCount) {
  if (_write(1, clickCount)) {
    _write(3, _bind(_onclick));

    _hydrate_clickCount();
  }
}

function _apply() {
  _apply_clickCount(0);
}

export const template = "<div><button id=button>0</button></div>";
export const walks = "D l";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);