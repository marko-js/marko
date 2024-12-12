export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _y$defineBody_effect = _$.effect("__tests__/template.marko_1_y", (_scope, {
  y
}) => _$.on(_scope["#button/2"], "click", function () {
  _y$defineBody(_scope, y + 1), y;
}));
const _y$defineBody = /* @__PURE__ */_$.state("y", (_scope, y) => {
  _$.data(_scope["#text/1"], y);
  _$.data(_scope["#text/3"], y);
  _y$defineBody_effect(_scope);
});
const _name$defineBody = /* @__PURE__ */_$.value("name", (_scope, name) => _$.data(_scope["#text/0"], name));
const _pattern_$defineBody = /* @__PURE__ */_$.value("_pattern_", (_scope, _pattern_) => _name$defineBody(_scope, _pattern_.name));
const _params_2$defineBody = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _pattern_$defineBody(_scope, _params_2?.[0]));
const _setup$defineBody = _scope => {
  _y$defineBody(_scope, 1);
};
const _defineBody = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<div>Hello <!> <!></div><button> </button>", /* next(1), over(1), replace, over(2), replace, out(1), get, next(1), get */"Db%c%l D ", _setup$defineBody, void 0, () => _params_2$defineBody));
const _MyTag_input = _$.dynamicTagAttrs("#text/0");
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => _MyTag_input(_scope, () => ({
  name: "Ryan"
})), () => _MyTag_input);
const _MyTag = /* @__PURE__ */_$.value("MyTag", (_scope, MyTag) => _dynamicTagName(_scope, MyTag), () => _dynamicTagName);
export function _setup_(_scope) {
  _MyTag(_scope, {
    renderBody: _defineBody(_scope)
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);