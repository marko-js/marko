export const $template = "<button>Inc</button><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
let $lazy_Child_tag_input_label = /* @__PURE__ */_._lazy_signal(() => import("./child.marko").then(mod => mod.$input_label));
let $lazy_Child_tag_input_value = /* @__PURE__ */_._lazy_signal(() => import("./child.marko").then(mod => mod.$input_value));
let $lazy_Child_setup = /* @__PURE__ */_._lazy_setup("#text/0", "#childScope/1", () => import("./child.marko").then(mod => [mod.$template, mod.$walks, mod.$setup]));
const $if_content__count = /* @__PURE__ */_._if_closure("#text/1", 0, $scope => $lazy_Child_tag_input_value($scope["#childScope/1"], $scope._.count));
const $if_content__setup = $scope => {
  $if_content__count._($scope);
  $lazy_Child_setup($scope);
  $lazy_Child_tag_input_label($scope["#childScope/1"], "x");
};
const $if = /* @__PURE__ */_._if("#text/1", "<!><!><!><!>", /* over(1), replace, <Child>, over(1) */"b%/&b", $if_content__setup);
const $count__script = _._script("__tests__/template.marko_0_count", $scope => _._on($scope["#button/0"], "click", function () {
  $count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */_._let("count/2", $scope => {
  $if($scope, $scope.count % 2 === 0 ? 0 : 1);
  $if_content__count($scope);
  $count__script($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);