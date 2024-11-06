export const _template_ = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
export const _walks_ = /* next(1), replace, over(1), get, over(1), get, out(1) */"D%b b l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _item$forBody = /* @__PURE__ */_$.value("item", (_scope, item) => _$.data(_scope["#text/0"], item));
const _params_2$forBody = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _item$forBody(_scope, _params_2[0]));
const _forBody = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-push-pop-list/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer(" ", /* get */" ", void 0, void 0, void 0, () => _params_2$forBody));
const _onClick = _scope => {
  const {
    id,
    items
  } = _scope;
  return function () {
    // TODO: nested writes ([...items, id++]) don't work
    const nextId = id + 1;
    _id(_scope, nextId);
    _items(_scope, [...items, nextId]);
  };
};
const _expr_id_items_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_id_items", _scope => _$.on(_scope["#button/1"], "click", _onClick(_scope)));
const _expr_id_items = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    id,
    items
  } = _scope;
  _expr_id_items_effect(_scope);
});
const _for = /* @__PURE__ */_$.loopOf("#text/0", _forBody);
const _onClick2 = _scope => {
  const {
    items
  } = _scope;
  return function () {
    _items(_scope, items.slice(0, -1));
  };
};
const _items_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-push-pop-list/template.marko_0_items", _scope => _$.on(_scope["#button/2"], "click", _onClick2(_scope)));
const _items = /* @__PURE__ */_$.state("items", (_scope, items) => {
  _items_effect(_scope);
  _for(_scope, [items]);
}, () => _expr_id_items);
const _id = /* @__PURE__ */_$.state("id", null, () => _expr_id_items);
export function _setup_(_scope) {
  _id(_scope, 0);
  _items(_scope, []);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-push-pop-list/template.marko");