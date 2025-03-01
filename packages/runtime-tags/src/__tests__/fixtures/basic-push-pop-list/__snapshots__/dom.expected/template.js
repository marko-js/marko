export const _template_ = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
export const _walks_ = /* next(1), replace, over(1), get, over(1), get, out(1) */"D%b b l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _item$for_content = /* @__PURE__ */_$.value("item", (_scope, item) => _$.data(_scope["#text/0"], item));
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _item$for_content(_scope, _params_2[0]));
const _for_content = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, () => _params_2$for_content);
const _expr_id_items_effect = _$.effect("__tests__/template.marko_0_id_items", (_scope, {
  id,
  items
}) => _$.on(_scope["#button/1"], "click", function () {
  // TODO: nested writes ([...items, id++]) don't work
  const nextId = id + 1;
  _id(_scope, nextId);
  _items(_scope, [...items, nextId]);
}));
const _expr_id_items = /* @__PURE__ */_$.intersection(5, _scope => {
  const {
    id,
    items
  } = _scope;
  _expr_id_items_effect(_scope);
});
const _for = /* @__PURE__ */_$.loopOf("#text/0", _for_content);
const _items_effect = _$.effect("__tests__/template.marko_0_items", (_scope, {
  items
}) => _$.on(_scope["#button/2"], "click", function () {
  _items(_scope, items.slice(0, -1));
}));
const _items = /* @__PURE__ */_$.state("items/4", (_scope, items) => {
  _for(_scope, [items]);
  _expr_id_items(_scope);
  _items_effect(_scope);
});
const _id = /* @__PURE__ */_$.state("id/3", (_scope, id) => _expr_id_items(_scope));
export function _setup_(_scope) {
  _id(_scope, 0);
  _items(_scope, []);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);