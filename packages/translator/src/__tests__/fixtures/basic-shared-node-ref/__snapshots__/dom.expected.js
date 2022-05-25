import { queue as _queue, attr as _attr, data as _data, setLoopOf as _setLoopOf, on as _on, write as _write, register as _register, bind as _bind, queueHydrate as _queueHydrate, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply$forBody_x(_scope, x) {
  if (_write(_scope, 1, x)) {
    _data(_scope[0], x);
  }
}

const _onclick = function (_scope) {
  const list = _scope[7];

  _queue(_scope, _apply_list, 1, [].concat(list).reverse());
};

function _hydrate_list(_scope, list = _scope[7]) {
  _on(_scope[5], "click", _bind(_scope, _onclick));
}

_register("packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_list", _hydrate_list);

const _onclick2 = function (_scope) {
  const open = _scope[6];

  _queue(_scope, _apply_open, 0, !open);
};

function _hydrate_open(_scope, open = _scope[6]) {
  _on(_scope[4], "click", _bind(_scope, _onclick2));
}

_register("packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_open", _hydrate_open);

const _temp = function (_scope, x) {
  return x;
};

function _apply_list(_scope, list) {
  if (_write(_scope, 7, list)) {
    _setLoopOf(_scope, 0, list, _forBody, _bind(_scope, _temp), _apply$forBody_x);

    _queueHydrate(_scope, _hydrate_list);
  }
}

function _apply_open(_scope, open) {
  if (_write(_scope, 6, open)) {
    _attr(_scope[0], "hidden", !open);

    _queueHydrate(_scope, _hydrate_open);
  }
}

function _apply(_scope) {
  _apply_open(_scope, true);

  _apply_list(_scope, [1, 2, 3]);
}

export const template = "<ul></ul><button id=toggle>Toggle</button><button id=reverse>Reverse</button>";
export const walks =
/* get, skip(3), over(1), get, over(1), get, over(1) */
" +b b b";
export const apply = _apply;

const _forBody = _createRenderer("<li> </li>",
/* next(1), get */
"D ", null);

export default _createRenderFn(template, walks, apply);