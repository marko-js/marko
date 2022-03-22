import { queue as _queue, write as _write, on as _on, data as _data, queueHydrate as _queueHydrate, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrateWith_a_b(_scope, a = _scope[2], b = _scope[3]) {
  _on(_scope, 0, "click", _scope[4]);
}

const _onclick = (_scope, a) => {
  const b = _scope[3];
  return b;
};

const _onclick2 = function (_scope) {
  const a = _scope[2];

  _queue(_scope, _apply_a, 0, a.map(_bind(_scope, _onclick)));
};

function _applyWith_a_b(_scope, a = _scope[2], b = _scope[3]) {
  _write(_scope, 4, _bind(_scope, _onclick2));

  _queueHydrate(_scope, _hydrateWith_a_b);
}

function _apply_b(_scope, b) {
  if (_write(_scope, 3, b)) _queue(_scope, _applyWith_a_b, 2);
}

function _apply_a(_scope, a) {
  if (_write(_scope, 2, a)) {
    _data(_scope, 1, a.join(""));

    _queue(_scope, _applyWith_a_b, 2);
  }
}

function _apply(_scope) {
  _apply_a(_scope, [0]);

  _apply_b(_scope, 1);
}

export const template = "<button><!></button>";
export const walks =
/* get, next(1), replace, out(1) */
" D%l";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);