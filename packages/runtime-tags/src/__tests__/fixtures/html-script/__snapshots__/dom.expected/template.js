export const $template = "<script type=importmap></script><div> </div>";
export const $walks = /* get, over(1), next(1), get, out(1) */" bD l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $count__script = _._script("__tests__/template.marko_0_count", ($scope, {
  count
}) => _._on($scope["#script/0"], "click", function () {
  $count($scope, ++count)
}));
const $count = /* @__PURE__ */_._let("count/2", ($scope, count) => {
  _._text_content($scope["#script/0"], `
  {
    "imports": {
      "${count}": "https://markojs.com",
    }
  }
`);
  _._text($scope["#text/1"], count);
  $count__script($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);