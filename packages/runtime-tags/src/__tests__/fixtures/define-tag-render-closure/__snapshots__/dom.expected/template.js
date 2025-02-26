export const _template_ = "<!><!><button> </button>";
export const _walks_ = /* replace, over(1), get, next(1), get, out(1) */"D%b D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x$define_content = _$.registerDynamicClosure("__tests__/template.marko_1_x/subscriber", "x", (_scope, x) => _$.data(_scope["#text/0"], x));
const _setup$define_content = _scope => {
  _x$define_content._(_scope);
};
const _define_content = _$.registerContent("__tests__/template.marko_1_renderer", "<div> </div>", /* next(1), get */"D ", _setup$define_content);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
const _MyTag = /* @__PURE__ */_$.value("MyTag", (_scope, MyTag) => _dynamicTag(_scope, MyTag), () => _dynamicTag);
const _x_effect = _$.effect("__tests__/template.marko_0_x", (_scope, {
  x
}) => _$.on(_scope["#button/1"], "click", function () {
  _x(_scope, x + 1), x;
}));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => {
  _$.data(_scope["#text/2"], x);
  _x_effect(_scope);
  _x$define_content(_scope);
});
export function _setup_(_scope) {
  _x(_scope, 1);
  _MyTag(_scope, {
    content: _define_content(_scope)
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);