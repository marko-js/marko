export const $template = "<!><!><button class=once> </button><!><button class=twice> </button>";
export const $walks = /* over(1), dynamicTagWithVar, over(1), get, next(1), get, out(1), dynamicTagWithVar, over(1), get, next(1), get, out(1) */"b1b D l1b D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_value_call$define$content2 = /* @__PURE__ */_$.intersection(4, $scope => {
  const {
    value,
    call
  } = $scope;
  _$.tagVarSignal($scope, $_return2($scope));
});
const $call$define$content2 = /* @__PURE__ */_$.state("call/3", $expr_value_call$define$content2);
const $setup$define$content2 = $scope => {
  $call$define$content2($scope, 2);
};
const $value$define$content2 = /* @__PURE__ */_$.value("value", $expr_value_call$define$content2);
const $params3$define$content = /* @__PURE__ */_$.value("$params3", ($scope, $params3) => $temp2$define$content($scope, $params3?.[0]));
const $temp2$define$content = /* @__PURE__ */_$.value("$temp2", ($scope, $temp2) => $value$define$content2($scope, $temp2.value));
const $define_content2 = _$.registerContent("__tests__/template.marko_2_renderer", 0, 0, $setup$define$content2, $params3$define$content);
const $expr_value_call$define$content = /* @__PURE__ */_$.intersection(4, $scope => {
  const {
    value,
    call
  } = $scope;
  _$.tagVarSignal($scope, $_return($scope));
});
const $call$define$content = /* @__PURE__ */_$.state("call/3", $expr_value_call$define$content);
const $setup$define$content = $scope => {
  $call$define$content($scope, 1);
};
const $value$define$content = /* @__PURE__ */_$.value("value", $expr_value_call$define$content);
const $params2$define$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $temp$define$content($scope, $params2?.[0]));
const $temp$define$content = /* @__PURE__ */_$.value("$temp", ($scope, $temp) => $value$define$content($scope, $temp.value));
const $define_content = _$.registerContent("__tests__/template.marko_1_renderer", 0, 0, $setup$define$content, $params2$define$content);
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", 0, () => $onClickOnce2);
const $expr_Once_clickOnceCount = /* @__PURE__ */_$.intersection(10, $scope => {
  const {
    Once,
    clickOnceCount
  } = $scope;
  $dynamicTag($scope, Once, () => ({
    value: $onClickOnce($scope)
  }));
});
const $Once = /* @__PURE__ */_$.value("Once", $expr_Once_clickOnceCount);
const $clickOnceCount = /* @__PURE__ */_$.state("clickOnceCount/9", ($scope, clickOnceCount) => {
  _$.data($scope["#text/3"], clickOnceCount);
  $expr_Once_clickOnceCount($scope);
});
const $dynamicTag2 = /* @__PURE__ */_$.dynamicTag("#text/4", 0, () => $onClickTwice2);
const $expr_Twice_clickTwiceCount = /* @__PURE__ */_$.intersection(14, $scope => {
  const {
    Twice,
    clickTwiceCount
  } = $scope;
  $dynamicTag2($scope, Twice, () => ({
    value: $onClickTwice($scope)
  }));
});
const $Twice = /* @__PURE__ */_$.value("Twice", $expr_Twice_clickTwiceCount);
const $clickTwiceCount = /* @__PURE__ */_$.state("clickTwiceCount/13", ($scope, clickTwiceCount) => {
  _$.data($scope["#text/7"], clickTwiceCount);
  $expr_Twice_clickTwiceCount($scope);
});
export function $setup($scope) {
  $Once($scope, {
    content: $define_content($scope)
  });
  $clickOnceCount($scope, 0);
  $Twice($scope, {
    content: $define_content2($scope)
  });
  $clickTwiceCount($scope, 0);
}
const $onClickOnce2_effect = _$.effect("__tests__/template.marko_0_onClickOnce", ($scope, {
  onClickOnce
}) => _$.on($scope["#button/2"], "click", onClickOnce));
const $onClickOnce2 = _$.registerBoundSignal("__tests__/template.marko_0_onClickOnce/var", /* @__PURE__ */_$.value("onClickOnce", $onClickOnce2_effect));
const $onClickTwice2_effect = _$.effect("__tests__/template.marko_0_onClickTwice", ($scope, {
  onClickTwice
}) => _$.on($scope["#button/6"], "click", onClickTwice));
const $onClickTwice2 = _$.registerBoundSignal("__tests__/template.marko_0_onClickTwice/var", /* @__PURE__ */_$.value("onClickTwice", $onClickTwice2_effect));
function $_return2($scope, {
  value,
  call
} = $scope) {
  return function () {
    if (call) {
      $call$define$content2($scope, --call)
      value();
    }
  };
}
function $_return($scope, {
  value,
  call
} = $scope) {
  return function () {
    if (call) {
      $call$define$content($scope, --call)
      value();
    }
  };
}
function $onClickOnce($scope, {
  clickOnceCount
} = $scope) {
  return function () {
    $clickOnceCount($scope, ++clickOnceCount)
  };
}
function $onClickTwice($scope, {
  clickTwiceCount
} = $scope) {
  return function () {
    $clickTwiceCount($scope, ++clickTwiceCount)
  };
}
_$.register("__tests__/template.marko_2/_return2", $_return2);
_$.register("__tests__/template.marko_1/_return", $_return);
_$.register("__tests__/template.marko_0/onClickOnce", $onClickOnce);
_$.register("__tests__/template.marko_0/onClickTwice", $onClickTwice);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);