export const _template_ = "<!><!><button> </button>";
export const _walks_ = /* replace, over(1), get, next(1), get, out(1) */"D%b D l";
import { data as _data, on as _on, createRendererWithOwner as _createRendererWithOwner, value as _value, register as _register, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, effect as _effect, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _number$defineBody = /* @__PURE__ */_value("number", (_scope, number) => _data(_scope["#text/0"], number));
const _pattern_$defineBody = /* @__PURE__ */_value("_pattern_", (_scope, _pattern_) => _number$defineBody(_scope, _pattern_.number));
const _params_2$defineBody = /* @__PURE__ */_value("_params_2", (_scope, _params_2) => _pattern_$defineBody(_scope, _params_2[0]));
const _defineBody = _register("packages/translator-tags/src/__tests__/fixtures/define-tag-render-attr-signal/template.marko_1_renderer", /* @__PURE__ */_createRendererWithOwner("<div> </div>", /* next(1), get */"D ", void 0, void 0, void 0, () => _params_2$defineBody));
const _MyTag_input = _dynamicTagAttrs("#text/0");
const _expr_Text_x = /* @__PURE__ */_intersection(2, _scope => {
  const {
    x
  } = _scope;
  _MyTag_input(_scope, () => ({
    number: x
  }));
}, () => _MyTag_input);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", null, () => _expr_Text_x);
const _onClick = _scope => {
  const {
    x
  } = _scope;
  return function () {
    _x(_scope, x + 1);
  };
};
const _x_effect = _effect("packages/translator-tags/src/__tests__/fixtures/define-tag-render-attr-signal/template.marko_0_x", _scope => _on(_scope["#button/1"], "click", _onClick(_scope)));
const _x = /* @__PURE__ */_state("x", (_scope, x) => {
  _data(_scope["#text/2"], x);
  _x_effect(_scope);
}, () => _expr_Text_x);
const _MyTag = /* @__PURE__ */_value("MyTag", (_scope, MyTag) => _dynamicTagName(_scope, MyTag), () => _dynamicTagName);
export function _setup_(_scope) {
  _x(_scope, 1);
  _MyTag(_scope, {
    renderBody: _defineBody(_scope)
  });
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/define-tag-render-attr-signal/template.marko");