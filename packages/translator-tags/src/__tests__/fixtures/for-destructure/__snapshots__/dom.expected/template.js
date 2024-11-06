export const _template_ = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
export const _walks_ = /* next(1), replace, over(1), get, over(1), get, out(1) */"D%b b l";
import { data as _data, on as _on, createRenderer as _createRenderer, value as _value, register as _register, loopOf as _loopOf, queueEffect as _queueEffect, state as _state, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _description$forBody = /* @__PURE__ */_value("description", (_scope, description) => _data(_scope["#text/1"], description));
const _name$forBody = /* @__PURE__ */_value("name", (_scope, name) => _data(_scope["#text/0"], name));
const _pattern_$forBody = /* @__PURE__ */_value("_pattern_", (_scope, _pattern_) => {
  _name$forBody(_scope, _pattern_.name);
  _description$forBody(_scope, _pattern_.description);
});
const _params_2$forBody = /* @__PURE__ */_value("_params_2", (_scope, _params_2) => _pattern_$forBody(_scope, _params_2[0]));
const _forBody = _register("packages/translator-tags/src/__tests__/fixtures/for-destructure/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<div><!>: <!></div>", /* next(1), replace, over(2), replace */"D%c%", void 0, void 0, void 0, () => _params_2$forBody));
const _for = /* @__PURE__ */_loopOf("#text/0", _forBody);
const _onClick = _scope => {
  const {
    items
  } = _scope;
  return function () {
    _items(_scope, [...items, {
      name: "JavaScript",
      description: "Java, but scriptier"
    }]);
  };
};
const _onClick2 = _scope => {
  const {
    items
  } = _scope;
  return function () {
    _items(_scope, items.slice(0, -1));
  };
};
const _items_effect = _register("packages/translator-tags/src/__tests__/fixtures/for-destructure/template.marko_0_items", _scope => {
  _on(_scope["#button/1"], "click", _onClick(_scope));
  _on(_scope["#button/2"], "click", _onClick2(_scope));
});
const _items = /* @__PURE__ */_state("items", (_scope, items) => {
  _queueEffect(_scope, _items_effect);
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
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/for-destructure/template.marko");