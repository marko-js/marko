import { queue as _queue, write as _write, on as _on, data as _data, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrateWith_x_y(_scope, x = _scope[3], y = _scope[4]) {
  _on(_scope, 0, "click", _scope[5]);
}

function _applyWith_x_y(_scope, x = _scope[3], y = _scope[4]) {
  _write(_scope, 5, _queue(_scope, _apply_x, 0, y = x + y));

  _queueHydrate(_scope, _hydrateWith_x_y);
}

function _apply_y(_scope, y) {
  if (_write(_scope, 4, y)) {
    _data(_scope, 2, y);

    _queue(_scope, _applyWith_x_y, 2);
  }
}

function _apply_x(_scope, x) {
  if (_write(_scope, 3, x)) {
    _data(_scope, 1, x);

    _queue(_scope, _applyWith_x_y, 2);
  }
}

function _apply(_scope) {
  _apply_x(_scope, 1);

  _apply_y(_scope, 1);
}

export const template = "<div><!></div><!>";
export const walks =
/* get, next(1), replace, out(1), replace, over(1) */
" D%l%b";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);