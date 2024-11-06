export const _template_ = "<!><button>Count: <!></button><!><div>Parent: <!></div>";
export const _walks_ = /* get, next(1), over(1), replace, out(1), replace, over(1), next(1), over(1), replace, out(1) */"D Db%l%bDb%l";
import customTag from './components/custom-tag.marko';
const tags = [customTag];
import { on as _on, data as _data, setTagVar as _setTagVar, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, value as _value, registerBoundSignal as _registerBoundSignal, register as _register, queueEffect as _queueEffect, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _tags0_input = _dynamicTagAttrs("#text/2");
const _expr_Text_x = /* @__PURE__ */_intersection(2, _scope => {
  const {
    x
  } = _scope;
  _tags0_input(_scope, () => x);
}, () => _tags0_input);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/2", _scope => _setTagVar(_scope, "#text/2!", _y), () => _expr_Text_x);
const _y = _registerBoundSignal("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-args-tag-var/template.marko_0_y", /* @__PURE__ */_value("y", (_scope, y) => _data(_scope["#text/3"], y)));
const _onClick = _scope => {
  const {
    x
  } = _scope;
  return function () {
    _x(_scope, x + 1);
  };
};
const _x_effect = _register("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-args-tag-var/template.marko_0_x", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _x = /* @__PURE__ */_state("x", (_scope, x) => {
  _data(_scope["#text/1"], x);
  _queueEffect(_scope, _x_effect);
}, () => _expr_Text_x);
export function _setup_(_scope) {
  _x(_scope, 1);
  _dynamicTagName(_scope, tags[0]);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-args-tag-var/template.marko");