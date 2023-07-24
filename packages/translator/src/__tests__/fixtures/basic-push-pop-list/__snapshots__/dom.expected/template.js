import { data as _data, on as _on, queueSource as _queueSource, value as _value, createRenderer as _createRenderer, register as _register, queueEffect as _queueEffect, intersection as _intersection, loopOf as _loopOf, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _item$forBody = /* @__PURE__ */_value("item", (_scope, item) => _data(_scope["#text/0"], item));
const _forBody = /* @__PURE__ */_createRenderer(" ", /* get */" ", void 0, void 0, void 0, void 0, void 0, void 0, (_scope, _destructure, _clean) => {
  let item;
  if (!_clean) ({
    value: [item]
  } = _destructure);
  _item$forBody(_scope, item, _clean);
});
const _expr_id_items_effect = _register("packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_id_items", _scope => _on(_scope["#button/1"], "click", function () {
  const {
    id,
    items
  } = _scope;
  // TODO: nested writes ([...items, id++]) don't work
  const nextId = id + 1;
  _queueSource(_scope, _id, nextId);
  _queueSource(_scope, _items, [...items, nextId]);
}));
const _expr_id_items = /* @__PURE__ */_intersection(2, _scope => {
  const {
    id,
    items
  } = _scope;
  _queueEffect(_scope, _expr_id_items_effect);
});
const _for = /* @__PURE__ */_loopOf("#text/0", _forBody);
const _items_effect = _register("packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_items", _scope => _on(_scope["#button/2"], "click", function () {
  const {
    items
  } = _scope;
  _queueSource(_scope, _items, items.slice(0, -1));
}));
const _items = /* @__PURE__ */_value("items", (_scope, items) => {
  _queueEffect(_scope, _items_effect);
  _for(_scope, [items]);
}, _expr_id_items);
const _id = /* @__PURE__ */_value("id", null, _expr_id_items);
const _setup = _scope => {
  _id(_scope, 0);
  _items(_scope, []);
};
export const template = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
export const walks = /* next(1), replace, over(1), get, over(1), get, out(1) */"D%b b l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, void 0, void 0, "packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko");