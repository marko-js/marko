import { attr as _attr, data as _data, on as _on, queueSource as _queueSource, value as _value, createRenderer as _createRenderer, loop as _loop, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _x$forBody = /* @__PURE__ */_value("x", (_scope, x) => _data(_scope["#text/0"], x));
const _forBody = /* @__PURE__ */_createRenderer("<li> </li>", /* next(1), get */"D ");
const _ul_for = /* @__PURE__ */_loop("#ul/0", _forBody, (_scope, _destructure, _dirty = true) => {
  let x;
  if (_dirty) [x] = _destructure;
  _x$forBody(_scope, x, _dirty);
});
const _hydrate_list = _register("packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_list", _scope => _on(_scope["#button/2"], "click", function () {
  const list = _scope["list"];
  _queueSource(_scope, _list, [].concat(list).reverse());
}));
const _list = /* @__PURE__ */_value("list", (_scope, list) => {
  _queueHydrate(_scope, _hydrate_list);
  _ul_for(_scope, [list, function (x) {
    return x;
  }]);
});
const _hydrate_open = _register("packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_open", _scope => _on(_scope["#button/1"], "click", function () {
  const open = _scope["open"];
  _queueSource(_scope, _open, !open);
}));
const _open = /* @__PURE__ */_value("open", (_scope, open) => {
  _attr(_scope["#ul/0"], "hidden", !open);
  _queueHydrate(_scope, _hydrate_open);
});
const _setup = _scope => {
  _open(_scope, true);
  _list(_scope, [1, 2, 3]);
};
export const template = "<ul></ul><button id=toggle>Toggle</button><button id=reverse>Reverse</button>";
export const walks = /* get, over(1), get, over(1), get, over(1) */" b b b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko");