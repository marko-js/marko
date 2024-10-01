export const _template_ = "<!><!><button> </button>";
export const _walks_ = /* replace, over(1), get, next(1), get, out(1) */"D%b D l";
import { data as _data, bindRenderer as _bindRenderer, on as _on, queueSource as _queueSource, createRenderer as _createRenderer, value as _value, register as _register, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, queueEffect as _queueEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _number$defineBody = /* @__PURE__ */_value("number", (_scope, number) => _data(_scope["#text/0"], number));
const _pattern_$defineBody = /* @__PURE__ */_value("_pattern_", (_scope, _pattern_) => _number$defineBody(_scope, _pattern_.number));
const _params_2$defineBody = /* @__PURE__ */_value("_params_2", (_scope, _params_2) => _pattern_$defineBody(_scope, _params_2[0]));
const _defineBody = _register("packages/translator-tags/src/__tests__/fixtures/define-tag-render-attr-signal/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<div> </div>", /* next(1), get */"D ", void 0, void 0, void 0, _params_2$defineBody));
const _myTag_input = _dynamicTagAttrs("#text/0");
const _expr_Text_x = /* @__PURE__ */_intersection(2, _scope => {
  const {
    x
  } = _scope;
  _myTag_input(_scope, () => ({
    number: x
  }));
}, _myTag_input);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", null, _expr_Text_x);
const _onClick = _scope => {
  const {
    x
  } = _scope;
  return function () {
    _queueSource(_scope, _x, x + 1);
  };
};
const _x_effect = _register("packages/translator-tags/src/__tests__/fixtures/define-tag-render-attr-signal/template.marko_0_x", _scope => _on(_scope["#button/1"], "click", _onClick(_scope)));
const _x = /* @__PURE__ */_value("x", (_scope, x) => {
  _data(_scope["#text/2"], x);
  _queueEffect(_scope, _x_effect);
}, _expr_Text_x);
const _myTag = /* @__PURE__ */_value("myTag", (_scope, myTag) => _dynamicTagName(_scope, myTag), _dynamicTagName);
export function _setup_(_scope) {
  _x(_scope, 1);
  _myTag(_scope, {
    renderBody: /* @__PURE__ */_bindRenderer(_scope, _defineBody)
  });
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/define-tag-render-attr-signal/template.marko");