import { queue as _queue, write as _write, on as _on, attr as _attr, data as _data, setLoopOf as _setLoopOf, bind as _bind, queueForEach as _queueForEach, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate_num(_scope, num = _scope[2]) {
  _on(_scope, 0, "click", _scope[3]);
}

function _applyWith_selected_num(_scope, selected = _scope._[4], num = _scope[2]) {
  _attr(_scope, 0, "data-selected", selected === num);

  _attr(_scope, 0, "data-multiple", num % selected === 0);
}

const _onclick = function (_scope) {
  const num = _scope[2];

  _queue(_scope._, _apply_selected, 0, num);
};

function _apply_num(_scope, num) {
  if (_write(_scope, 2, num)) {
    _write(_scope, 3, _bind(_scope, _onclick));

    _data(_scope, 1, num);

    _hydrate_num(_scope);

    _queue(_scope, _applyWith_selected_num, 2);
  }
}

function _apply_selected2(_scope, selected = _scope._[4]) {
  _queue(_scope, _applyWith_selected_num, 2);
}

function _apply2(_scope) {
  _queue(_scope, _apply_selected2, 0);
}

function _apply_selected(_scope, selected) {
  if (_write(_scope, 4, selected)) _queueForEach(_scope, 0, _apply_selected2, 0, 3);
}

function _apply(_scope) {
  _apply_selected(_scope, 0);

  _setLoopOf(_scope, 0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], _for, null, _apply_num);
}

const _for = _createRenderer("<button><!></button>", " D%", _apply2);

export const template = "<!>";
export const walks = "%+b";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);