import { setSource as _setSource, data as _data, on as _on, queueSource as _queueSource, source as _source, createRenderer as _createRenderer, subscriber as _subscriber, register as _register, queueHydrate as _queueHydrate, loop as _loop, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _item$forBody = /* @__PURE__ */_source("item", [], (_scope, item) => _data(_scope["#text/0"], item));
const _forBody = /* @__PURE__ */_createRenderer(" ", /* get */" ");
const _hydrate_expr_id_items = _register("packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_id_items", _scope => _on(_scope["#button/1"], "click", function () {
  const id = _scope["id"],
    items = _scope["items"];
  // TODO: nested writes ([...items, id++]) don't work
  const nextId = id + 1;
  _queueSource(_scope, _id, nextId);
  _queueSource(_scope, _items, [...items, nextId]);
}));
const _expr_id_items = /* @__PURE__ */_subscriber([], 2, (_scope, id = _scope["id"], items = _scope["items"]) => _queueHydrate(_scope, _hydrate_expr_id_items));
const _for = /* @__PURE__ */_loop("#text/0", 1, _forBody, [_item$forBody], (_scope, [item]) => _setSource(_scope, _item$forBody, item), (_scope, items = _scope["items"]) => [items, null]);
const _hydrate_items = _register("packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_items", _scope => _on(_scope["#button/2"], "click", function () {
  const items = _scope["items"];
  _queueSource(_scope, _items, items.slice(0, -1));
}));
const _items = /* @__PURE__ */_source("items", [_for, _expr_id_items], (_scope, items) => _queueHydrate(_scope, _hydrate_items));
const _id = /* @__PURE__ */_source("id", [_expr_id_items]);
const _setup = _scope => {
  _setSource(_scope, _id, 0);
  _setSource(_scope, _items, []);
};
export const template = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
export const walks = /* next(1), replace, over(1), get, over(1), get, out(1) */"D%b b l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko");