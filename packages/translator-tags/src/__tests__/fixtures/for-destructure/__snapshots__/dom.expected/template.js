import { data as _data, on as _on, queueSource as _queueSource, value as _value, createRenderer as _createRenderer, loopOf as _loopOf, register as _register, queueEffect as _queueEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _description$forBody = /* @__PURE__ */_value("description", (_scope, description) => _data(_scope["#text/1"], description));
const _name$forBody = /* @__PURE__ */_value("name", (_scope, name) => _data(_scope["#text/0"], name));
const _forBody = /* @__PURE__ */_createRenderer("<div><!>: <!></div>", /* next(1), replace, over(2), replace */"D%c%", void 0, void 0, void 0, (_scope, _destructure, _clean) => {
  let name, description;
  if (!_clean) [{
    name,
    description
  }] = _destructure;
  _name$forBody(_scope, name, _clean);
  _description$forBody(_scope, description, _clean);
});
const _for = /* @__PURE__ */_loopOf("#text/0", _forBody);
const _items_effect = _register("packages/translator-tags/src/__tests__/fixtures/for-destructure/template.marko_0_items", _scope => {
  _on(_scope["#button/1"], "click", function () {
    const {
      items
    } = _scope;
    _queueSource(_scope, _items, [...items, {
      name: "JavaScript",
      description: "Java, but scriptier"
    }]);
  });
  _on(_scope["#button/2"], "click", function () {
    const {
      items
    } = _scope;
    _queueSource(_scope, _items, items.slice(0, -1));
  });
});
const _items = /* @__PURE__ */_value("items", (_scope, items) => {
  _queueEffect(_scope, _items_effect);
  _for(_scope, [items]);
});
const _id = (_scope, id) => {};
const _setup = _scope => {
  _id(_scope, 0);
  _items(_scope, [{
    name: "Marko",
    description: "HTML Reimagined"
  }]);
};
export const template = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
export const walks = /* next(1), replace, over(1), get, over(1), get, out(1) */"D%b b l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/for-destructure/template.marko");