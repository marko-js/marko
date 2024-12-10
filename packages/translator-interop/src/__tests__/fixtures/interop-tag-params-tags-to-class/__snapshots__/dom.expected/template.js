export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import _classLayout from "./components/class-layout.marko";
import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
_$.register("packages/translator-interop/src/__tests__/fixtures/interop-tag-params-tags-to-class/components/class-layout.marko", _classLayout);
const _expr_multiplier_baseCount$classLayoutBody = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    _: {
      multiplier
    },
    baseCount
  } = _scope;
  _$.data(_scope["#text/4"], multiplier * baseCount);
});
const _message$classLayoutBody = /* @__PURE__ */_$.value("message", (_scope, message) => _$.data(_scope["#text/0"], message));
const _baseCount$classLayoutBody = /* @__PURE__ */_$.value("baseCount", (_scope, baseCount) => _$.data(_scope["#text/3"], baseCount), () => _expr_multiplier_baseCount$classLayoutBody);
const _params_2$classLayoutBody = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => {
  _baseCount$classLayoutBody(_scope, _params_2[0]);
  _message$classLayoutBody(_scope, _params_2[1]);
}, () => _baseCount$classLayoutBody);
const _multiplier$classLayoutBody_effect = _$.effect("packages/translator-interop/src/__tests__/fixtures/interop-tag-params-tags-to-class/template.marko_1_multiplier", (_scope, {
  _: {
    multiplier
  }
}) => _$.on(_scope["#button/1"], "click", function () {
  _multiplier(_scope._, multiplier + 1), multiplier;
}));
const _multiplier$classLayoutBody = _$.registerSubscriber("packages/translator-interop/src/__tests__/fixtures/interop-tag-params-tags-to-class/template.marko_1_multiplier/subscriber", /* @__PURE__ */_$.dynamicClosure("multiplier", (_scope, multiplier) => {
  _$.data(_scope["#text/2"], multiplier);
  _multiplier$classLayoutBody_effect(_scope);
}, void 0, () => _expr_multiplier_baseCount$classLayoutBody));
const _classLayoutBody = _$.register("packages/translator-interop/src/__tests__/fixtures/interop-tag-params-tags-to-class/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<h1> </h1><button id=tags><!> * <!> = <!></button>", /* next(1), get, out(1), get, next(1), replace, over(2), replace, over(2), replace */"D l D%c%c%", void 0, () => [_multiplier$classLayoutBody], () => _params_2$classLayoutBody));
const _classLayout_input = _$.dynamicTagAttrs("#text/0", _classLayoutBody);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => _classLayout_input(_scope, () => ({})), () => _classLayout_input);
const _multiplier = /* @__PURE__ */_$.state("multiplier", 0, () => _$.dynamicSubscribers("multiplier"));
export function _setup_(_scope) {
  _multiplier(_scope, 1);
  _dynamicTagName(_scope, _classLayout || _classLayoutBody(_scope));
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-interop/src/__tests__/fixtures/interop-tag-params-tags-to-class/template.marko", _template_, _walks_, _setup_);