import { data as _data, bindRenderer as _bindRenderer, on as _on, queueSource as _queueSource, value as _value, createRenderer as _createRenderer, register as _register, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, queueEffect as _queueEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _c$defineBody = /* @__PURE__ */_value("c", (_scope, c) => _data(_scope["#text/2"], c));
const _b$defineBody = /* @__PURE__ */_value("b", (_scope, b) => _data(_scope["#text/1"], b));
const _a$defineBody = /* @__PURE__ */_value("a", (_scope, a) => _data(_scope["#text/0"], a));
const _defineBody = _register("packages/translator-tags/src/__tests__/fixtures/define-tag-render-args/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<div><!>|<!>|<!></div>", /* next(1), replace, over(2), replace, over(2), replace */"D%c%c%", void 0, void 0, void 0, (_scope, _destructure, _clean) => {
  let a, b, c;
  if (!_clean) [a, b, c] = _destructure;
  _a$defineBody(_scope, a, _clean);
  _b$defineBody(_scope, b, _clean);
  _c$defineBody(_scope, c, _clean);
}));
const _myTag_input = _dynamicTagAttrs("#text/0", void 0, true);
const _expr__dynamicTagName_x = /* @__PURE__ */_intersection(2, _scope => {
  const {
    "#text/0": _dynamicTagName,
    x
  } = _scope;
  _myTag_input(_scope, () => [1, "Hello", x]);
});
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", null, _expr__dynamicTagName_x);
const _myTag = /* @__PURE__ */_value("myTag", (_scope, myTag) => _dynamicTagName(_scope, myTag.renderBody), void 0, _dynamicTagName);
const _x_effect = _register("packages/translator-tags/src/__tests__/fixtures/define-tag-render-args/template.marko_0_x", _scope => _on(_scope["#button/1"], "click", function () {
  const {
    x
  } = _scope;
  _queueSource(_scope, _x, x + 1);
}));
const _x = /* @__PURE__ */_value("x", (_scope, x) => {
  _data(_scope["#text/2"], x);
  _queueEffect(_scope, _x_effect);
}, _expr__dynamicTagName_x);
const _setup = _scope => {
  _x(_scope, 1);
  _myTag(_scope, {
    renderBody: /* @__PURE__ */_bindRenderer(_scope, _defineBody)
  });
};
export const template = "<!><!><button> </button>";
export const walks = /* replace, over(1), get, next(1), get, out(1) */"D%b D l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/define-tag-render-args/template.marko");