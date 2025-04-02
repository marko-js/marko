import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const _template = "<!><!><!>";
export const _walks = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import _classLayout from "./components/class-layout.marko";
_$.register("__tests__/components/class-layout.marko", _classLayout);
const _expr_multiplier_baseCount$classlayout_content = /* @__PURE__ */_$.intersection(7, _scope => {
  const {
    _: {
      multiplier
    },
    baseCount
  } = _scope;
  _$.data(_scope["#text/4"], multiplier * baseCount);
});
const _message$classlayout_content = /* @__PURE__ */_$.value("message", (_scope, message) => _$.data(_scope["#text/0"], message));
const _baseCount$classlayout_content = /* @__PURE__ */_$.value("baseCount", (_scope, baseCount) => {
  _$.data(_scope["#text/3"], baseCount);
  _expr_multiplier_baseCount$classlayout_content(_scope);
});
const _params2$classlayout_content = /* @__PURE__ */_$.value("_params2", (_scope, _params2) => {
  _baseCount$classlayout_content(_scope, _params2[0]);
  _message$classlayout_content(_scope, _params2[1]);
});
const _multiplier$classlayout_content_effect = _$.effect("__tests__/template.marko_1_multiplier", (_scope, {
  _: {
    multiplier
  }
}) => _$.on(_scope["#button/1"], "click", function () {
  _multiplier(_scope._, multiplier + 1), multiplier;
}));
const _multiplier$classlayout_content = /* @__PURE__ */_$.dynamicClosureRead("multiplier", (_scope, multiplier) => {
  _$.data(_scope["#text/2"], multiplier);
  _expr_multiplier_baseCount$classlayout_content(_scope);
  _multiplier$classlayout_content_effect(_scope);
});
const _classlayout_content = _$.registerContent("__tests__/template.marko_1_renderer", "<h1> </h1><button id=tags><!> * <!> = <!></button>", /* next(1), get, out(1), get, next(1), replace, over(2), replace, over(2), replace */"D l D%c%c%", 0, _params2$classlayout_content, _scope => _multiplier$classlayout_content(_scope));
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", _classlayout_content);
const _multiplier_closure = /* @__PURE__ */_$.dynamicClosure(_multiplier$classlayout_content);
const _multiplier = /* @__PURE__ */_$.state("multiplier/1", _multiplier_closure);
export function _setup(_scope) {
  _multiplier(_scope, 1);
  _dynamicTag(_scope, _classLayout);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);