import { setSource as _setSource, queueSource as _queueSource, data as _data, on as _on, source as _source, createRenderer as _createRenderer, subscriber as _subscriber, register as _register, queueHydrate as _queueHydrate, loop as _loop, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _item$forBody = /* @__PURE__ */_source(1, [], (_scope, item) => _data(_scope[0], item));
const _forBody = /* @__PURE__ */_createRenderer(" ", /* get */" ");
const _onclick = function (_scope) {
  const id = _scope[9],
    items = _scope[10];
  // TODO: nested writes ([...items, id++]) don't work
  const nextId = id + 1;
  _queueSource(_scope, _id, nextId);
  _queueSource(_scope, _items, [...items, nextId]);
};
const _hydrate_expr_id_items = _register("packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_id_items", _scope => {
  const id = _scope[9],
    items = _scope[10];
  _on(_scope[7], "click", /* @__PURE__ */_bind(_scope, _onclick));
});
const _expr_id_items = /* @__PURE__ */_subscriber([], 2, (_scope, id = _scope[9], items = _scope[10]) => _queueHydrate(_scope, _hydrate_expr_id_items));
const _for = /* @__PURE__ */_loop(0, 1, _forBody, [_item$forBody], (_scope, [item]) => _setSource(_scope, _item$forBody, item), (_scope, items = _scope[10]) => [items, null]);
const _onclick2 = function (_scope) {
  const items = _scope[10];
  _queueSource(_scope, _items, items.slice(0, -1));
};
const _hydrate_items = _register("packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_items", _scope => {
  const items = _scope[10];
  _on(_scope[8], "click", /* @__PURE__ */_bind(_scope, _onclick2));
});
const _items = /* @__PURE__ */_source(10, [_for, _expr_id_items], (_scope, items) => _queueHydrate(_scope, _hydrate_items));
const _id = /* @__PURE__ */_source(9, [_expr_id_items]);
const _setup = _scope => {
  _setSource(_scope, _id, 0);
  _setSource(_scope, _items, []);
};
export const template = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
export const walks = /* next(1), replace, skip(6), over(1), get, over(1), get, out(1) */"D%.b b l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);