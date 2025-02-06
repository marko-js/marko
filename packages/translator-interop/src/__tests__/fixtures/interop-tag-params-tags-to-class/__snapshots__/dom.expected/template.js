import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import _classLayout from "./components/class-layout.marko";
_$.register("__tests__/components/class-layout.marko", _classLayout);
const _expr_multiplier_baseCount$classLayout_content = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    _: {
      multiplier
    },
    baseCount
  } = _scope;
  _$.data(_scope["#text/4"], multiplier * baseCount);
});
const _message$classLayout_content = /* @__PURE__ */_$.value("message", (_scope, message) => _$.data(_scope["#text/0"], message));
const _baseCount$classLayout_content = /* @__PURE__ */_$.value("baseCount", (_scope, baseCount) => _$.data(_scope["#text/3"], baseCount), () => _expr_multiplier_baseCount$classLayout_content);
const _params_2$classLayout_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => {
  _baseCount$classLayout_content(_scope, _params_2[0]);
  _message$classLayout_content(_scope, _params_2[1]);
}, () => _baseCount$classLayout_content);
const _multiplier$classLayout_content_effect = _$.effect("__tests__/template.marko_1_multiplier", (_scope, {
  _: {
    multiplier
  }
}) => _$.on(_scope["#button/1"], "click", function () {
  _multiplier(_scope._, multiplier + 1), multiplier;
}));
const _multiplier$classLayout_content = _$.registerSubscriber("__tests__/template.marko_1_multiplier/subscriber", /* @__PURE__ */_$.dynamicClosure((_scope, multiplier) => {
  _$.data(_scope["#text/2"], multiplier);
  _multiplier$classLayout_content_effect(_scope);
}, void 0, () => _expr_multiplier_baseCount$classLayout_content));
const _setup$classLayout_content = _scope => {
  _multiplier$classLayout_content._(_scope, _scope._["multiplier"]);
};
const _classLayout_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<h1> </h1><button id=tags><!> * <!> = <!></button>", /* next(1), get, out(1), get, next(1), replace, over(2), replace, over(2), replace */"D l D%c%c%", _setup$classLayout_content, () => _params_2$classLayout_content));
const _classLayout_input = /* @__PURE__ */_$.dynamicTagAttrs("#text/0", _classLayout_content);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => _classLayout_input(_scope, () => ({})), () => _classLayout_input);
const _multiplier = /* @__PURE__ */_$.state("multiplier", (_scope, multiplier) => _multiplier$classLayout_content(_scope, multiplier));
export function _setup_(_scope) {
  _multiplier(_scope, 1);
  _dynamicTagName(_scope, _classLayout || _classLayout_content(_scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);