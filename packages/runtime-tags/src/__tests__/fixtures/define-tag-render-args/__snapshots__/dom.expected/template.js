export const _template_ = "<!><!><button> </button>";
export const _walks_ = /* replace, over(1), get, next(1), get, out(1) */"D%b D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _c$define_content = /* @__PURE__ */_$.value("c", (_scope, c) => _$.data(_scope["#text/2"], c));
const _b$define_content = /* @__PURE__ */_$.value("b", (_scope, b) => _$.data(_scope["#text/1"], b));
const _a$define_content = /* @__PURE__ */_$.value("a", (_scope, a) => _$.data(_scope["#text/0"], a));
const _params_2$define_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => {
  _a$define_content(_scope, _params_2[0]);
  _b$define_content(_scope, _params_2[1]);
  _c$define_content(_scope, _params_2[2]);
});
const _define_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<div><!>|<!>|<!></div>", /* next(1), replace, over(2), replace, over(2), replace */"D%c%c%", void 0, () => _params_2$define_content));
const _MyTag_input = _$.dynamicTagAttrs("#text/0", void 0, 1);
const _expr_Text_x = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    x
  } = _scope;
  _MyTag_input(_scope, () => [1, "Hello", x]);
}, () => _MyTag_input);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", 0, () => _expr_Text_x);
const _MyTag = /* @__PURE__ */_$.value("MyTag", (_scope, MyTag) => _dynamicTagName(_scope, MyTag), () => _dynamicTagName);
const _x_effect = _$.effect("__tests__/template.marko_0_x", (_scope, {
  x
}) => _$.on(_scope["#button/1"], "click", function () {
  _x(_scope, x + 1), x;
}));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => {
  _$.data(_scope["#text/2"], x);
  _x_effect(_scope);
}, () => _expr_Text_x);
export function _setup_(_scope) {
  _x(_scope, 1);
  _MyTag(_scope, {
    content: _define_content(_scope)
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);