export const _template_ = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
export const _walks_ = /* next(1), replace, over(1), get, over(1), get, out(1) */"D%b b l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _description$for_content = /* @__PURE__ */_$.value("description", (_scope, description) => _$.data(_scope["#text/1"], description));
const _name$for_content = /* @__PURE__ */_$.value("name", (_scope, name) => _$.data(_scope["#text/0"], name));
const _pattern_$for_content = /* @__PURE__ */_$.value("_pattern_", (_scope, _pattern_) => {
  _name$for_content(_scope, _pattern_.name);
  _description$for_content(_scope, _pattern_.description);
});
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _pattern_$for_content(_scope, _params_2?.[0]));
const _for_content = /* @__PURE__ */_$.createRenderer("<div><!>: <!></div>", /* next(1), replace, over(2), replace */"D%c%", void 0, () => _params_2$for_content);
const _for = /* @__PURE__ */_$.loopOf("#text/0", _for_content);
const _items_effect = _$.effect("__tests__/template.marko_0_items", (_scope, {
  items
}) => {
  _$.on(_scope["#button/1"], "click", function () {
    _items(_scope, [...items, {
      name: "JavaScript",
      description: "Java, but scriptier"
    }]);
  });
  _$.on(_scope["#button/2"], "click", function () {
    _items(_scope, items.slice(0, -1));
  });
});
const _items = /* @__PURE__ */_$.state("items", (_scope, items) => {
  _items_effect(_scope);
  _for(_scope, [items]);
});
const _id = (_scope, id) => {};
export function _setup_(_scope) {
  _id(_scope, 0);
  _items(_scope, [{
    name: "Marko",
    description: "HTML Reimagined"
  }]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);