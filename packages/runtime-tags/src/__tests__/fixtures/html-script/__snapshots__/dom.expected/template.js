export const $template = "<script type=importmap></script><div> </div>";
export const $walks = /* get, over(1), next(1), get, out(1) */" bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $count_effect = _$.effect("__tests__/template.marko_0_count", ($scope, {
  count
}) => _$.on($scope["#script/0"], "click", function () {
  $count($scope, count + 1), count;
}));
const $count = /* @__PURE__ */_$.state("count/2", ($scope, count) => {
  _$.textContent($scope["#script/0"], `
  {
    "imports": {
      "${count}": "https://markojs.com",
    }
  }
`);
  _$.data($scope["#text/1"], count);
  $count_effect($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);