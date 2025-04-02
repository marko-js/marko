export const _template = "<!><!><!>";
export const _walks = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _y$define_content_effect = _$.effect("__tests__/template.marko_1_y", (_scope, {
  y
}) => _$.on(_scope["#button/2"], "click", function () {
  _y$define_content(_scope, y + 1), y;
}));
const _y$define_content = /* @__PURE__ */_$.state("y/7", (_scope, y) => {
  _$.data(_scope["#text/1"], y);
  _$.data(_scope["#text/3"], y);
  _y$define_content_effect(_scope);
});
const _name$define_content = /* @__PURE__ */_$.value("name", (_scope, name) => _$.data(_scope["#text/0"], name));
const _temp$define_content = /* @__PURE__ */_$.value("_temp", (_scope, _temp) => _name$define_content(_scope, _temp.name));
const _params2$define_content = /* @__PURE__ */_$.value("_params2", (_scope, _params2) => _temp$define_content(_scope, _params2?.[0]));
const _setup$define_content = _scope => {
  _y$define_content(_scope, 1);
};
const _define_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", "<div>Hello <!> <!></div><button> </button>", /* next(1), over(1), replace, over(2), replace, out(1), get, next(1), get */"Db%c%l D ", _setup$define_content, _params2$define_content);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
const _MyTag = /* @__PURE__ */_$.value("MyTag", (_scope, MyTag) => _dynamicTag(_scope, MyTag, () => ({
  name: "Ryan"
})));
export function _setup(_scope) {
  _MyTag(_scope, {
    content: _define_content(_scope)
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);