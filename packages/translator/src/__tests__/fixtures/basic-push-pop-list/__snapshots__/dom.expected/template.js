import { data as _data, on as _on, queueSource as _queueSource, value as _value, createRenderer as _createRenderer, register as _register, queueHydrate as _queueHydrate, intersection as _intersection, loop as _loop, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _item$forBody = /* @__PURE__ */_value("item", (_scope, item) => _data(_scope["#text/0"], item));
const _forBody = /* @__PURE__ */_createRenderer(" ", /* get */" ");
const _hydrate_expr_id_items = _register("packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_id_items", _scope => _on(_scope["#button/1"], "click", function () {
  const id = _scope["id"],
    items = _scope["items"];
  // TODO: nested writes ([...items, id++]) don't work
  const nextId = id + 1;
  _queueSource(_scope, _id, nextId);
  _queueSource(_scope, _items, [...items, nextId]);
}));
const _expr_id_items = /* @__PURE__ */_intersection(2, _scope => {
  const id = _scope["id"],
    items = _scope["items"];
  _queueHydrate(_scope, _hydrate_expr_id_items);
});
const _for = /* @__PURE__ */_loop("#text/0", _forBody, (_scope, _destructure, _dirty = true) => {
  let item;
  if (_dirty) [item] = _destructure;
  _item$forBody(_scope, item, _dirty);
});
const _hydrate_items = _register("packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_items", _scope => _on(_scope["#button/2"], "click", function () {
  const items = _scope["items"];
  _queueSource(_scope, _items, items.slice(0, -1));
}));
const _items = /* @__PURE__ */_value("items", (_scope, items, _dirty) => {
  if (_dirty) {
    _queueHydrate(_scope, _hydrate_items);
    _for(_scope, [items, null]);
  }
  _expr_id_items(_scope, _dirty);
});
const _id = /* @__PURE__ */_value("id", (_scope, id, _dirty) => _expr_id_items(_scope, _dirty));
const _setup = _scope => {
  _id(_scope, 0);
  _items(_scope, []);
};
export const template = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
export const walks = /* next(1), replace, over(1), get, over(1), get, out(1) */"D%b b l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/basic-push-pop-list/template.marko");