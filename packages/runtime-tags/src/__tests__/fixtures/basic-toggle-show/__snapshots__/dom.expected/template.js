export const $template = "<div><!><button>Toggle</button></div>";
export const $walks = /* next(1), replace, over(1), get, out(1) */"D%b l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content = /* @__PURE__ */_._content_branch("Hello!", /* over(1) */"b");
const $if = /* @__PURE__ */_._if("#text/0", $if_content);
const $show__script = _._script("__tests__/template.marko_0_show", ($scope, {
  show
}) => _._on($scope["#button/1"], "click", function () {
  $show($scope, show = !show);
}));
const $show = /* @__PURE__ */_._let("show/2", ($scope, show) => {
  $if($scope, show ? 0 : 1);
  $show__script($scope);
});
export function $setup($scope) {
  $show($scope, true);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);