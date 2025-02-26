export const _template_ = "<!><!><button> </button>";
export const _walks_ = /* replace, over(1), get, next(1), get, out(1) */"D%b D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _number$define_content = /* @__PURE__ */_$.value("number", (_scope, number) => _$.data(_scope["#text/0"], number));
const _pattern_$define_content = /* @__PURE__ */_$.value("_pattern_", (_scope, _pattern_) => _number$define_content(_scope, _pattern_.number));
const _params_2$define_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _pattern_$define_content(_scope, _params_2?.[0]));
const _define_content = _$.registerContent("__tests__/template.marko_1_renderer", "<div> </div>", /* next(1), get */"D ", 0, () => _params_2$define_content);
const _expr_x_MyTag = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    x,
    MyTag
  } = _scope;
  _dynamicTag(_scope, MyTag, () => ({
    number: x
  }));
}, () => _dynamicTag);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
const _MyTag = /* @__PURE__ */_$.value("MyTag", 0, () => _expr_x_MyTag);
const _x_effect = _$.effect("__tests__/template.marko_0_x", (_scope, {
  x
}) => _$.on(_scope["#button/1"], "click", function () {
  _x(_scope, x + 1), x;
}));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => {
  _$.data(_scope["#text/2"], x);
  _x_effect(_scope);
}, () => _expr_x_MyTag);
export function _setup_(_scope) {
  _x(_scope, 1);
  _MyTag(_scope, {
    content: _define_content(_scope)
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);