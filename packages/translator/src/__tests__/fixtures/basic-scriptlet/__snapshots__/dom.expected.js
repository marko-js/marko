import { queue as _queue, on as _on, data as _data, register as _register, bind as _bind, queueHydrate as _queueHydrate, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _onclick = function (_scope) {
  const clickCount = _scope[2];

  _queue(_scope, _apply_clickCount, 0, clickCount + 1);
};

function _hydrate_clickCount(_scope, clickCount = _scope[2]) {
  _on(_scope[0], "click", _bind(_scope, _onclick));
}

_register("packages/translator/src/__tests__/fixtures/basic-scriptlet/template.marko_0_clickCount", _hydrate_clickCount);

function _apply_clickCount(_scope, clickCount) {
  if (_write(_scope, 2, clickCount)) {
    const doubleCount = clickCount * 2;

    _queueHydrate(_scope, _hydrate_clickCount);
  }
}

function _apply(_scope) {
  _apply_clickCount(_scope, 0);

  _data(_scope[1], doubleCount);
}

export const template = "<div><button> </button></div>";
export const walks =
/* next(1), get, next(1), get, out(2) */
"D D m";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);