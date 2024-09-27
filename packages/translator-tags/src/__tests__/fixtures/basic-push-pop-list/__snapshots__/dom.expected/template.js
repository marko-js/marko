export const _template_ = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
export const _walks_ = /* next(1), replace, over(1), get, over(1), get, out(1) */"D%b b l";
import { data as _data, on as _on, queueSource as _queueSource, createRenderer as _createRenderer, value as _value, register as _register, queueEffect as _queueEffect, intersection as _intersection, loopOf as _loopOf, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _item$forBody = /* @__PURE__ */_value("item", (_scope, item) => _data(_scope["#text/0"], item));
const _params_2$forBody = /* @__PURE__ */_value("_params_2", (_scope, _params_2) => _item$forBody(_scope, _params_2[0]));
const _forBody = _register("packages/translator-tags/src/__tests__/fixtures/basic-push-pop-list/template.marko_1_renderer", /* @__PURE__ */_createRenderer(" ", /* get */" ", void 0, void 0, void 0, _params_2$forBody));
const _onClick = _scope => {
  const {
    id,
    items
  } = _scope;
  return function () {
    // TODO: nested writes ([...items, id++]) don't work
    const nextId = id + 1;
    _queueSource(_scope, _id, nextId);
    _queueSource(_scope, _items, [...items, nextId]);
  };
};
const _expr_id_items_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_id_items", _scope => _on(_scope["#button/1"], "click", _onClick(_scope)));
const _expr_id_items = /* @__PURE__ */_intersection(2, _scope => {
  const {
    id,
    items
  } = _scope;
  _queueEffect(_scope, _expr_id_items_effect);
});
const _for = /* @__PURE__ */_loopOf("#text/0", _forBody);
const _onClick2 = _scope => {
  const {
    items
  } = _scope;
  return function () {
    _queueSource(_scope, _items, items.slice(0, -1));
  };
};
const _items_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_items", _scope => _on(_scope["#button/2"], "click", _onClick2(_scope)));
const _items = /* @__PURE__ */_value("items", (_scope, items) => {
  _queueEffect(_scope, _items_effect);
  _for(_scope, [items]);
}, _expr_id_items);
const _id = /* @__PURE__ */_value("id", null, _expr_id_items);
export function _setup_(_scope) {
  _id(_scope, 0);
  _items(_scope, []);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-push-pop-list/template.marko");