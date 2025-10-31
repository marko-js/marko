export const $template = "<div> </div><button>Update</button>";
export const $walks = /* next(1), get, out(1), get, over(1) */"D l b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $user = /* @__PURE__ */_._let("user/3", $scope => $user_id($scope, $scope.user?.id));
const $index__script = _._script("__tests__/template.marko_0_index", $scope => _._on($scope["#button/1"], "click", function () {
  $index($scope, $scope.index + 1);
}));
const $index = /* @__PURE__ */_._let("index/2", $scope => {
  $user($scope, $scope.index !== -1 && {
    id: $scope.index
  });
  $index__script($scope);
});
export function $setup($scope) {
  $index($scope, -1);
}
const $user_id = /* @__PURE__ */_._const("user_id", $scope => _._text($scope["#text/0"], $scope.user_id));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);