import { data as _data, on as _on, queueSource as _queueSource, value as _value, createRenderer as _createRenderer, loop as _loop, register as _register, queueEffect as _queueEffect, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _description$forBody = /* @__PURE__ */_value("description", (_scope, description) => _data(_scope["#text/1"], description));
const _name$forBody = /* @__PURE__ */_value("name", (_scope, name) => _data(_scope["#text/0"], name));
const _forBody = /* @__PURE__ */_createRenderer("<div><!>: <!></div>", /* next(1), replace, over(2), replace */"D%c%");
const _for = /* @__PURE__ */_loop("#text/0", _forBody, (_scope, _destructure, _dirty = true) => {
  let name, description;
  if (_dirty) [{
    name,
    description
  }] = _destructure;
  _name$forBody(_scope, name, _dirty);
  _description$forBody(_scope, description, _dirty);
});
const _items_effect = _register("packages/translator/src/__tests__/fixtures/for-destructure/template.marko_0_items", _scope => {
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
  _for(_scope, [items, null]);
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
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/for-destructure/template.marko");