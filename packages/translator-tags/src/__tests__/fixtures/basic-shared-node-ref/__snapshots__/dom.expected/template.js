import { attr as _attr, register as _register, data as _data, on as _on, queueSource as _queueSource, createRenderer as _createRenderer, value as _value, loopOf as _loopOf, queueEffect as _queueEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _by = _register("packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0/by", _scope => function (x) {
  return x;
});
const _x$forBody = /* @__PURE__ */_value("x", (_scope, x) => _data(_scope["#text/0"], x));
const _params_2$forBody = /* @__PURE__ */_value("_params_2", (_scope, _params_2) => _x$forBody(_scope, _params_2[0]));
const _forBody = _register("packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<li> </li>", /* next(1), get */"D ", void 0, void 0, void 0, _params_2$forBody));
const _for = /* @__PURE__ */_loopOf("#ul/0", _forBody);
const _onClick = _scope => {
  const {
    list
  } = _scope;
  return function () {
    _queueSource(_scope, _list, [].concat(list).reverse());
  };
};
const _list_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_list", _scope => _on(_scope["#button/2"], "click", _onClick(_scope)));
const _list = /* @__PURE__ */_value("list", (_scope, list) => {
  _queueEffect(_scope, _list_effect);
  _for(_scope, [list, _by(_scope)]);
});
const _onClick2 = _scope => {
  const {
    open
  } = _scope;
  return function () {
    _queueSource(_scope, _open, !open);
  };
};
const _open_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_open", _scope => _on(_scope["#button/1"], "click", _onClick2(_scope)));
const _open = /* @__PURE__ */_value("open", (_scope, open) => {
  _attr(_scope["#ul/0"], "hidden", !open);
  _queueEffect(_scope, _open_effect);
});
const _setup = _scope => {
  _open(_scope, true);
  _list(_scope, [1, 2, 3]);
};
export const _template_ = "<ul></ul><button id=toggle>Toggle</button><button id=reverse>Reverse</button>";
export const _walks_ = /* get, over(1), get, over(1), get, over(1) */" b b b";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko");