export const _template_ = "<!><script type=importmap></script><!>";
export const _walks_ = /* get, over(1) */"D bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count$htmlScriptBody = _$.registerSubscriber("packages/translator-tags/src/__tests__/fixtures/html-script/template.marko_1_count/subscriber", /* @__PURE__ */_$.dynamicClosure("count", 0));
const _htmlScriptBody = _$.register("packages/translator-tags/src/__tests__/fixtures/html-script/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("", "", void 0, () => [_count$htmlScriptBody]));
const _count_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/html-script/template.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#script/0"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => {
  _$.textContent(_scope["#script/0"], `
  {
    "imports": {
      "${count}": "https://markojs.com",
    }
  }
`);
  _count_effect(_scope);
}, () => _$.dynamicSubscribers("count"));
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/html-script/template.marko", _template_, _walks_, _setup_);