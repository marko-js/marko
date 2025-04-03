export const $template = "<style></style>";
export const $walks = /* get, over(1) */" b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $count_effect = _$.effect("__tests__/template.marko_0_count", ($scope, {
  count
}) => _$.on($scope["#style/0"], "click", function () {
  $count($scope, count + 1), count;
}));
const $count = /* @__PURE__ */_$.state("count/1", ($scope, count) => {
  _$.textContent($scope["#style/0"], `
  .test {
    content: ${count}
  }
`);
  $count_effect($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);