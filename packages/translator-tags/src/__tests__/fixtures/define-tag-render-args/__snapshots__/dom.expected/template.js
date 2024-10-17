export const _template_ = "<!><!><button> </button>";
export const _walks_ = /* replace, over(1), get, next(1), get, out(1) */"D%b D l";
import { data as _data, bindRenderer as _bindRenderer, on as _on, queueSource as _queueSource, createRenderer as _createRenderer, value as _value, register as _register, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, queueEffect as _queueEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _c$defineBody = /* @__PURE__ */_value("c", (_scope, c) => _data(_scope["#text/2"], c));
const _b$defineBody = /* @__PURE__ */_value("b", (_scope, b) => _data(_scope["#text/1"], b));
const _a$defineBody = /* @__PURE__ */_value("a", (_scope, a) => _data(_scope["#text/0"], a));
const _params_2$defineBody = /* @__PURE__ */_value("_params_2", (_scope, _params_2) => {
  _a$defineBody(_scope, _params_2[0]);
  _b$defineBody(_scope, _params_2[1]);
  _c$defineBody(_scope, _params_2[2]);
});
const _defineBody = _register("packages/translator-tags/src/__tests__/fixtures/define-tag-render-args/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<div><!>|<!>|<!></div>", /* next(1), replace, over(2), replace, over(2), replace */"D%c%c%", void 0, void 0, void 0, () => _params_2$defineBody));
const _MyTag_input = _dynamicTagAttrs("#text/0", void 0, true);
const _expr_Text_x = /* @__PURE__ */_intersection(2, _scope => {
  const {
    x
  } = _scope;
  _MyTag_input(_scope, () => [1, "Hello", x]);
}, () => _MyTag_input);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", null, () => _expr_Text_x);
const _onClick = _scope => {
  const {
    x
  } = _scope;
  return function () {
    _queueSource(_scope, _x, x + 1);
  };
};
const _x_effect = _register("packages/translator-tags/src/__tests__/fixtures/define-tag-render-args/template.marko_0_x", _scope => _on(_scope["#button/1"], "click", _onClick(_scope)));
const _x = /* @__PURE__ */_value("x", (_scope, x) => {
  _data(_scope["#text/2"], x);
  _queueEffect(_scope, _x_effect);
}, () => _expr_Text_x);
const _MyTag = /* @__PURE__ */_value("MyTag", (_scope, MyTag) => _dynamicTagName(_scope, MyTag), () => _dynamicTagName);
export function _setup_(_scope) {
  _x(_scope, 1);
  _MyTag(_scope, {
    renderBody: /* @__PURE__ */_bindRenderer(_scope, _defineBody)
  });
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/define-tag-render-args/template.marko");