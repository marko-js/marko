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
const _define_content = _$.registerContent("__tests__/template.marko_1_renderer", "<div><!>|<!>|<!></div>", /* next(1), replace, over(2), replace, over(2), replace */"D%c%c%", 0, () => _params_2$define_content);
const _expr_x_MyTag = /* @__PURE__ */_$.intersection(5, _scope => {
  const {
    x,
    MyTag
  } = _scope;
  _dynamicTag(_scope, MyTag, () => [1, "Hello", x]);
});
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", 0, 0, 1);
const _MyTag = /* @__PURE__ */_$.value("MyTag", (_scope, MyTag) => _expr_x_MyTag(_scope));
const _x_effect = _$.effect("__tests__/template.marko_0_x", (_scope, {
  x
}) => _$.on(_scope["#button/1"], "click", function () {
  _x(_scope, x + 1), x;
}));
const _x = /* @__PURE__ */_$.state("x/3", (_scope, x) => {
  _$.data(_scope["#text/2"], x);
  _expr_x_MyTag(_scope);
  _x_effect(_scope);
});
export function _setup_(_scope) {
  _x(_scope, 1);
  _MyTag(_scope, {
    content: _define_content(_scope)
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);