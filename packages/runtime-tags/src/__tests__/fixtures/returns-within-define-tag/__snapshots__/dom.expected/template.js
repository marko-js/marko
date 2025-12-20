export const $template = "<!><button class=once> </button><button class=twice> </button>";
export const $walks = /* over(1), <Once/var>, get, next(1), get, out(1), <Twice/var>, get, next(1), get, out(1) */"b0& D l0& D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $Twice_content__value__OR__call = /* @__PURE__ */_._or(4, $scope => _._return($scope, $_return2($scope)));
const $Twice_content__call = /* @__PURE__ */_._let("call/3", $Twice_content__value__OR__call);
const $Twice_content__setup = /* @__PURE__ */_._child_setup($scope => $Twice_content__call($scope, 2));
const $Twice_content__value = /* @__PURE__ */_._const("value", $Twice_content__value__OR__call);
const $Twice_content__$params = ($scope, $params3) => $Twice_content__$temp($scope, $params3?.[0]);
const $Twice_content__$temp = ($scope, $temp2) => $Twice_content__value($scope, $temp2.value);
const $Once_content__value__OR__call = /* @__PURE__ */_._or(4, $scope => _._return($scope, $_return($scope)));
const $Once_content__call = /* @__PURE__ */_._let("call/3", $Once_content__value__OR__call);
const $Once_content__setup = /* @__PURE__ */_._child_setup($scope => $Once_content__call($scope, 1));
const $Once_content__value = /* @__PURE__ */_._const("value", $Once_content__value__OR__call);
const $Once_content__$params = ($scope, $params2) => $Once_content__$temp($scope, $params2?.[0]);
const $Once_content__$temp = ($scope, $temp) => $Once_content__value($scope, $temp.value);
const $clickOnceCount = /* @__PURE__ */_._let("clickOnceCount/8", $scope => {
  $Once_content__value($scope["#childScope/0"], $onClickOnce($scope));
  _._text($scope["#text/3"], $scope.clickOnceCount);
});
const $clickTwiceCount = /* @__PURE__ */_._let("clickTwiceCount/10", $scope => {
  $Twice_content__value($scope["#childScope/4"], $onClickTwice($scope));
  _._text($scope["#text/7"], $scope.clickTwiceCount);
});
export function $setup($scope) {
  _._var($scope, "#childScope/0", $onClickOnce2);
  $Once_content__setup._($scope["#childScope/0"], $scope);
  _._var($scope, "#childScope/4", $onClickTwice2);
  $Twice_content__setup._($scope["#childScope/4"], $scope);
  $clickOnceCount($scope, 0);
  $clickTwiceCount($scope, 0);
}
const $onClickOnce2__script = _._script("__tests__/template.marko_0_onClickOnce", $scope => _._on($scope["#button/2"], "click", $scope.onClickOnce));
const $onClickOnce2 = _._var_resume("__tests__/template.marko_0_onClickOnce/var", /* @__PURE__ */_._const("onClickOnce", $onClickOnce2__script));
const $onClickTwice2__script = _._script("__tests__/template.marko_0_onClickTwice", $scope => _._on($scope["#button/6"], "click", $scope.onClickTwice));
const $onClickTwice2 = _._var_resume("__tests__/template.marko_0_onClickTwice/var", /* @__PURE__ */_._const("onClickTwice", $onClickTwice2__script));
function $_return2($scope) {
  return function () {
    if ($scope.call) {
      $Twice_content__call($scope, $scope.call - 1);
      $scope.value();
    }
  };
}
function $_return($scope) {
  return function () {
    if ($scope.call) {
      $Once_content__call($scope, $scope.call - 1);
      $scope.value();
    }
  };
}
function $onClickOnce($scope) {
  return function () {
    $clickOnceCount($scope, $scope.clickOnceCount + 1);
  };
}
function $onClickTwice($scope) {
  return function () {
    $clickTwiceCount($scope, $scope.clickTwiceCount + 1);
  };
}
_._resume("__tests__/template.marko_2/_return2", $_return2);
_._resume("__tests__/template.marko_1/_return", $_return);
_._resume("__tests__/template.marko_0/onClickOnce", $onClickOnce);
_._resume("__tests__/template.marko_0/onClickTwice", $onClickTwice);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);