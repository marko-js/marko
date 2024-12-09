export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import Child from "./components/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count$falseChildBody_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko_1_count", (_scope, {
  _: {
    count
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope._, count + 1), count;
}));
const _count$falseChildBody = _$.registerSubscriber("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko_1_count/subscriber", /* @__PURE__ */_$.dynamicClosure("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count$falseChildBody_effect(_scope);
}));
const _falseChildBody = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<button> </button>", /* get, next(1), get */" D ", void 0, () => [_count$falseChildBody]));
const _falseChild_input = _$.dynamicTagAttrs("#text/0", _falseChildBody);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => _falseChild_input(_scope, () => ({})), () => _falseChild_input);
const _count = /* @__PURE__ */_$.state("count", 0, () => _$.dynamicSubscribers("count"));
export function _setup_(_scope) {
  _count(_scope, 0);
  _dynamicTagName(_scope, false || Child || _falseChildBody(_scope));
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko", _template_, _walks_, _setup_);