import { userEffect as _userEffect, read as _read, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate_x(x = _read(0)) {
  _userEffect(1, function () {
    document.getElementById("ref").textContent = x;
  });
}

function _apply_x(x) {
  if (_write(0, x)) _hydrate_x();
}

function _apply() {
  _apply_x(1);
}

export const template = "<div id=ref>0</div>";
export const walks = "b";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);