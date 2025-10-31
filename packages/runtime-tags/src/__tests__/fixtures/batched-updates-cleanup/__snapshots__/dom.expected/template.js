export const $template = "<button></button><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__message = /* @__PURE__ */_._if_closure("#text/1", 0, $scope => _._text($scope["#text/0"], $scope._.message));
const $if_content__setup = $if_content__message;
const $if_content = /* @__PURE__ */_._content_branch("<span> </span>", /* next(1), get, out(1) */"D l", $if_content__setup);
const $if = /* @__PURE__ */_._if("#text/1", $if_content);
const $show__script = _._script("__tests__/template.marko_0_show", $scope => _._on($scope["#button/0"], "click", function () {
  $message($scope, "bye");
  $show($scope, !$scope.show);
}));
const $show = /* @__PURE__ */_._let("show/2", $scope => {
  $if($scope, $scope.show ? 0 : 1);
  $show__script($scope);
});
const $message = /* @__PURE__ */_._let("message/3", $if_content__message);
export function $setup($scope) {
  $show($scope, true);
  $message($scope, "hi");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);