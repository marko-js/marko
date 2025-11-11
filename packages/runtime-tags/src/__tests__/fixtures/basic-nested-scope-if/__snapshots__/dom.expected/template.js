export const $template = "<div><!></div>";
export const $walks = /* next(1), replace, out(1) */"D%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $else_content__clickCount = /* @__PURE__ */_._if_closure("#text/0", 1, $scope => _._text($scope["#text/0"], $scope._.clickCount));
const $else_content__setup = $else_content__clickCount;
const $if_content__clickCount__script = _._script("__tests__/template.marko_1_clickCount", $scope => _._on($scope["#button/0"], "click", function () {
  $clickCount($scope._, $scope._.clickCount + 1);
}));
const $if_content__clickCount = /* @__PURE__ */_._if_closure("#text/0", 0, $scope => {
  _._text($scope["#text/1"], $scope._.clickCount);
  $if_content__clickCount__script($scope);
});
const $if_content__setup = $if_content__clickCount;
const $if = /* @__PURE__ */_._if("#text/0", "<button> </button>", /* get, next(1), get, out(1) */" D l", $if_content__setup, "<span>The button was clicked <!> times.</span>", /* next(1), over(1), replace, out(1) */"Db%l", $else_content__setup);
const $clickCount = /* @__PURE__ */_._let("clickCount/1", $scope => {
  $if($scope, $scope.clickCount < 3 ? 0 : 1);
  $if_content__clickCount($scope);
  $else_content__clickCount($scope);
});
export function $setup($scope) {
  $clickCount($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);