export const _template_ = "<style></style>";
export const _walks_ = /* get, over(1) */" b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count$htmlStyleBody = _$.registerSubscriber("packages/translator-tags/src/__tests__/fixtures/html-style/template.marko_1_count/subscriber", /* @__PURE__ */_$.dynamicClosure("count", 0));
const _htmlStyleBody = _$.register("packages/translator-tags/src/__tests__/fixtures/html-style/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("", "", void 0, () => [_count$htmlStyleBody]));
const _count_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/html-style/template.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#style/0"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => {
  _$.textContent(_scope["#style/0"], `
  .test {
    content: ${count}
  }
`);
  _count_effect(_scope);
}, () => _$.dynamicSubscribers("count"));
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/html-style/template.marko", _template_, _walks_, _setup_);