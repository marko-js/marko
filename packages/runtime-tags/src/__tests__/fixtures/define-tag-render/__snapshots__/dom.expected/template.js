export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _y$define_content_effect = _$.effect("__tests__/template.marko_1_y", (_scope, {
  "y/7": y
}) => _$.on(_scope["#button/2"], "click", function () {
  _y$define_content(_scope, y + 1), y;
}));
const _y$define_content = /* @__PURE__ */_$.state("y/7", (_scope, y) => {
  _$.data(_scope["#text/1"], y);
  _$.data(_scope["#text/3"], y);
  _y$define_content_effect(_scope);
});
const _name$define_content = /* @__PURE__ */_$.value("name/6", (_scope, name) => _$.data(_scope["#text/0"], name));
const _pattern_$define_content = /* @__PURE__ */_$.value("_pattern_/5", (_scope, _pattern_) => _name$define_content(_scope, _pattern_.name));
const _params_2$define_content = /* @__PURE__ */_$.value("_params_2/4", (_scope, _params_2) => _pattern_$define_content(_scope, _params_2?.[0]));
const _setup$define_content = _scope => {
  _y$define_content(_scope, 1);
};
const _define_content = _$.registerContent("__tests__/template.marko_1_renderer", "<div>Hello <!> <!></div><button> </button>", /* next(1), over(1), replace, over(2), replace, out(1), get, next(1), get */"Db%c%l D ", _setup$define_content, () => _params_2$define_content);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
const _MyTag = /* @__PURE__ */_$.value("MyTag/1", (_scope, MyTag) => _dynamicTag(_scope, MyTag, () => ({
  name: "Ryan"
})));
export function _setup_(_scope) {
  _MyTag(_scope, {
    content: _define_content(_scope)
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);