import { queue as _queue, userEffect as _userEffect, write as _write, on as _on, bind as _bind, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _temp = function (_scope) {
  const clickCount = _scope[1];
  document.getElementById("button").textContent = clickCount;
};

function _hydrate_clickCount(_scope, clickCount = _scope[1]) {
  _userEffect(_scope, 2, _bind(_scope, _temp));

  _on(_scope, 0, "click", _scope[3]);
}

const _onclick = function (_scope) {
  const clickCount = _scope[1];

  _queue(_scope, _apply_clickCount, 0, clickCount + 1);
};

function _apply_clickCount(_scope, clickCount) {
  if (_write(_scope, 1, clickCount)) {
    _write(_scope, 3, _bind(_scope, _onclick));

    _queueHydrate(_scope, _hydrate_clickCount);
  }
}

function _apply(_scope) {
  _apply_clickCount(_scope, 0);
}

export const template = "<div><button id=button>0</button></div>";
export const walks = "D l";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);