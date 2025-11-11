export const $template = "<!><!><div id=ref></div><button id=increment>Increment</button><button id=toggle>Toggle</button>";
export const $walks = /* over(1), replace, over(2), get, over(1), get, over(1) */"b%c b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__x__script = _._script("__tests__/template.marko_1_x", $scope => _._lifecycle($scope, "$lifecycle", {
  onMount: function () {
    document.getElementById("ref").textContent = "Mount " + $scope._.x;
  },
  onUpdate: function () {
    document.getElementById("ref").textContent = "Update " + $scope._.x;
  },
  onDestroy: function () {
    document.getElementById("ref").textContent = "Destroy";
  }
}));
const $if_content__x = /* @__PURE__ */_._if_closure("#text/0", 0, $if_content__x__script);
const $if_content__setup = $if_content__x;
const $x__script = _._script("__tests__/template.marko_0_x", $scope => _._on($scope["#button/1"], "click", function () {
  $x($scope, $scope.x + 1);
}));
const $x = /* @__PURE__ */_._let("x/3", $scope => {
  $if_content__x($scope);
  $x__script($scope);
});
const $if = /* @__PURE__ */_._if("#text/0", 0, 0, $if_content__setup);
const $show__script = _._script("__tests__/template.marko_0_show", $scope => _._on($scope["#button/2"], "click", function () {
  $show($scope, !$scope.show);
}));
const $show = /* @__PURE__ */_._let("show/4", $scope => {
  $if($scope, $scope.show ? 0 : 1);
  $show__script($scope);
});
export function $setup($scope) {
  $x($scope, 0);
  $show($scope, true);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);