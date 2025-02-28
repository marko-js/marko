export const _template_ = "<style></style>";
export const _walks_ = /* get, over(1) */" b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _htmlStyle_content = _$.registerContent("__tests__/template.marko_1_renderer");
const _count_effect = _$.effect("__tests__/template.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#style/0"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count/1", (_scope, count) => {
  _$.textContent(_scope["#style/0"], `
  .test {
    content: ${count}
  }
`);
  _count_effect(_scope);
});
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);