import { data as _data, on as _on, queueSource as _queueSource, createRenderer as _createRenderer, value as _value, register as _register, loopOf as _loopOf, queueEffect as _queueEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _text$forBody = /* @__PURE__ */_value("text", (_scope, text) => _data(_scope["#text/0"], text));
const _pattern_$forBody = /* @__PURE__ */_value("_pattern_", (_scope, _pattern_) => _text$forBody(_scope, _pattern_.text));
const _params_2$forBody = /* @__PURE__ */_value("_params_2", (_scope, _params_2) => _pattern_$forBody(_scope, _params_2[0]));
const _forBody = _register("packages/translator-tags/src/__tests__/fixtures/for-by-string/template.marko_1_renderer", /* @__PURE__ */_createRenderer(" ", /* get */" ", void 0, void 0, void 0, _params_2$forBody));
const _for = /* @__PURE__ */_loopOf("#text/0", _forBody);
const _onClick = _scope => {
  const {
    items
  } = _scope;
  return function () {
    _queueSource(_scope, _items, [...items.slice(1), items[0]]);
  };
};
const _items_effect = _register("packages/translator-tags/src/__tests__/fixtures/for-by-string/template.marko_0_items", _scope => _on(_scope["#button/1"], "click", _onClick(_scope)));
const _items = /* @__PURE__ */_value("items", (_scope, items) => {
  _queueEffect(_scope, _items_effect);
  _for(_scope, [items, "id"]);
});
const _setup = _scope => {
  _items(_scope, [{
    id: 0,
    text: "first"
  }, {
    id: 1,
    text: "second"
  }, {
    id: 2,
    text: "third"
  }]);
};
export const _template_ = "<div><!><button>Rotate</button></div>";
export const _walks_ = /* next(1), replace, over(1), get, out(1) */"D%b l";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/for-by-string/template.marko");