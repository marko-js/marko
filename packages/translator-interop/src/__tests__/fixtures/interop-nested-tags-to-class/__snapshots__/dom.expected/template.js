export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import _classLayout from "./components/class-layout.marko";
import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
_$.register("packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/components/class-layout.marko", _classLayout);
const _onClick = _scope => {
  const {
    _: {
      count
    }
  } = _scope;
  return function () {
    _count(_scope._, count + 1);
  };
};
const _count$classLayoutBody_effect = _$.effect("packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _count$classLayoutBody = _$.registerSubscriber("packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_count/subscriber", /* @__PURE__ */_$.dynamicClosure("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count$classLayoutBody_effect(_scope);
}));
const _classLayoutBody = _$.register("packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<button id=tags> </button>", /* get, next(1), get */" D ", void 0, () => [_count$classLayoutBody]));
const _classLayout_input = _$.dynamicTagAttrs("#text/0", _classLayoutBody);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => _classLayout_input(_scope, () => ({})), () => _classLayout_input);
const _count = /* @__PURE__ */_$.state("count", 0, () => _$.dynamicSubscribers("count"));
export function _setup_(_scope) {
  _count(_scope, 0);
  _dynamicTagName(_scope, _classLayout || _classLayoutBody(_scope));
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-interop/src/__tests__/fixtures/interop-nested-tags-to-class/template.marko");