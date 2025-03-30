export const _template_ = "<div> </div><div> </div><button>Update</button>";
export const _walks_ = /* next(1), get, out(1), next(1), get, out(1), get, over(1) */"D lD l b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_items_index_effect = _$.effect("__tests__/template.marko_0_items_index", (_scope, {
  items,
  index
}) => _$.on(_scope["#button/2"], "click", function () {
  const newItems = items.slice(1);
  _items(_scope, newItems);
  _index(_scope, (index + 1) % newItems.length);
}));
const _expr_items_index = /* @__PURE__ */_$.intersection(6, _scope => {
  const {
    items,
    index
  } = _scope;
  _$.data(_scope["#text/1"], items[index]);
  _expr_items_index_effect(_scope);
});
const _index = /* @__PURE__ */_$.state("index/5", _scope => _expr_items_index(_scope));
const _items_ = /* @__PURE__ */_$.value("items_0", (_scope, items_0) => _$.data(_scope["#text/0"], items_0));
const _items = /* @__PURE__ */_$.state("items/3", (_scope, items) => {
  _items_(_scope, items?.[0]);
  _expr_items_index(_scope);
});
export function _setup_(_scope) {
  _items(_scope, ["a", "b", "c"]);
  _index(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);