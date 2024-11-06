export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import { data as _data, on as _on, createRendererWithOwner as _createRendererWithOwner, effect as _effect, state as _state, value as _value, register as _register, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    y
  } = _scope;
  return function () {
    _y$defineBody(_scope, y + 1);
  };
};
const _y$defineBody_effect = _effect("packages/translator-tags/src/__tests__/fixtures/define-tag-render/template.marko_1_y", _scope => _on(_scope["#button/2"], "click", _onClick(_scope)));
const _y$defineBody = /* @__PURE__ */_state("y", (_scope, y) => {
  _data(_scope["#text/1"], y);
  _data(_scope["#text/3"], y);
  _y$defineBody_effect(_scope);
});
const _name$defineBody = /* @__PURE__ */_value("name", (_scope, name) => _data(_scope["#text/0"], name));
const _pattern_$defineBody = /* @__PURE__ */_value("_pattern_", (_scope, _pattern_) => _name$defineBody(_scope, _pattern_.name));
const _params_2$defineBody = /* @__PURE__ */_value("_params_2", (_scope, _params_2) => _pattern_$defineBody(_scope, _params_2[0]));
const _setup$defineBody = _scope => {
  _y$defineBody(_scope, 1);
};
const _defineBody = _register("packages/translator-tags/src/__tests__/fixtures/define-tag-render/template.marko_1_renderer", /* @__PURE__ */_createRendererWithOwner("<div>Hello <!> <!></div><button> </button>", /* next(1), over(1), replace, over(2), replace, out(1), get, next(1), get */"Db%c%l D ", _setup$defineBody, void 0, void 0, () => _params_2$defineBody));
const _MyTag_input = _dynamicTagAttrs("#text/0");
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", _scope => _MyTag_input(_scope, () => ({
  name: "Ryan"
})), () => _MyTag_input);
const _MyTag = /* @__PURE__ */_value("MyTag", (_scope, MyTag) => _dynamicTagName(_scope, MyTag), () => _dynamicTagName);
export function _setup_(_scope) {
  _MyTag(_scope, {
    renderBody: _defineBody(_scope)
  });
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/define-tag-render/template.marko");