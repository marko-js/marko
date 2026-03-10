export const $template = "<button id=toggle>Toggle</button><button id=cleanup>Cleanup</button><!><!>";
export const $walks = /* get, over(1), get, over(1), replace, over(2) */" b b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if = /* @__PURE__ */_._if("#text/2", "<div>Hello</div>", /* over(1) */"b");
const $hide__script = _._script("__tests__/template.marko_0_hide", $scope => _._on($scope["#button/0"], "click", function () {
  $hide($scope, !$scope.hide);
}));
const $hide = /* @__PURE__ */_._let("hide/3", $scope => {
  $if($scope, !$scope.hide ? 0 : 1);
  $hide__script($scope);
});
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  _.$signal($scope, 0).onabort = () => {
    console.log("cleaned up");
  };
  _._on($scope["#button/1"], "click", function () {
    document.body.innerHTML = "";
  });
});
export function $setup($scope) {
  _.$signalReset($scope, 0);
  $hide($scope, undefined);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);