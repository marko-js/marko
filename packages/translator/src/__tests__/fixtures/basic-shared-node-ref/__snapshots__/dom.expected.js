import { setSource as _setSource, queueSource as _queueSource, attr as _attr, data as _data, on as _on, source as _source, createRenderer as _createRenderer, loop as _loop, register as _register, queueHydrate as _queueHydrate, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _x$forBody = _source(1, [], (_scope, x) => _data(_scope[0], x));

const _forBody = _createRenderer("<li> </li>",
/* next(1), get */
"D ");

const _temp3 = function (_scope, x) {
  return x;
};

const _ul_for = _loop(0, 1, _forBody, [_x$forBody], (_scope, [x]) => _setSource(_scope, _x$forBody, x), (_scope, list = _scope[10]) => [list, _bind(_scope, _temp3)]);

const _onclick = function (_scope) {
  const list = _scope[10];

  _queueSource(_scope, _list, [].concat(list).reverse());
};

const _hydrate_list = _register("packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_list", _scope => {
  const list = _scope[10];

  _on(_scope[8], "click", _bind(_scope, _onclick));
});

const _list = _source(10, [_ul_for], (_scope, list) => _queueHydrate(_scope, _hydrate_list));

const _onclick2 = function (_scope) {
  const open = _scope[9];

  _queueSource(_scope, _open, !open);
};

const _hydrate_open = _register("packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_open", _scope => {
  const open = _scope[9];

  _on(_scope[7], "click", _bind(_scope, _onclick2));
});

const _open = _source(9, [], (_scope, open) => {
  _attr(_scope[0], "hidden", !open);

  _queueHydrate(_scope, _hydrate_open);
});

const _setup = _scope => {
  _setSource(_scope, _open, true);

  _setSource(_scope, _list, [1, 2, 3]);
};

export const template = "<ul></ul><button id=toggle>Toggle</button><button id=reverse>Reverse</button>";
export const walks =
/* get, skip(6), over(1), get, over(1), get, over(1) */
" .b b b";
export const setup = _setup;
export default _createRenderFn(template, walks, setup);