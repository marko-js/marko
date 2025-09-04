export const $template = "<!><!><button class=once> </button><!><button class=twice> </button>";
export const $walks = /* over(1), dynamicTagWithVar, over(1), get, next(1), get, out(1), dynamicTagWithVar, over(1), get, next(1), get, out(1) */"b1b D l1b D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $define_content2__value__OR__call = /* @__PURE__ */_._or(4, $scope => {
  let {
    value,
    call
  } = $scope;
  _._return($scope, $_return2($scope));
});
const $define_content2__call = /* @__PURE__ */_._let("call/3", $define_content2__value__OR__call);
const $define_content2__setup = $scope => {
  $define_content2__call($scope, 2);
};
const $define_content2__value = /* @__PURE__ */_._const("value", $define_content2__value__OR__call);
const $define_content2__$params = /* @__PURE__ */_._const("$params3", ($scope, $params3) => $define_content2__$temp($scope, $params3?.[0]));
const $define_content2__$temp = /* @__PURE__ */_._const("$temp2", ($scope, $temp2) => $define_content2__value($scope, $temp2.value));
const $define_content2 = _._content_resume("__tests__/template.marko_2_content", 0, 0, $define_content2__setup, $define_content2__$params);
const $define_content__value__OR__call = /* @__PURE__ */_._or(4, $scope => {
  let {
    value,
    call
  } = $scope;
  _._return($scope, $_return($scope));
});
const $define_content__call = /* @__PURE__ */_._let("call/3", $define_content__value__OR__call);
const $define_content__setup = $scope => {
  $define_content__call($scope, 1);
};
const $define_content__value = /* @__PURE__ */_._const("value", $define_content__value__OR__call);
const $define_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $define_content__$temp($scope, $params2?.[0]));
const $define_content__$temp = /* @__PURE__ */_._const("$temp", ($scope, $temp) => $define_content__value($scope, $temp.value));
const $define_content = _._content_resume("__tests__/template.marko_1_content", 0, 0, $define_content__setup, $define_content__$params);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", 0, () => $onClickOnce2);
const $Once__OR__clickOnceCount = /* @__PURE__ */_._or(10, $scope => {
  let {
    Once,
    clickOnceCount
  } = $scope;
  $dynamicTag($scope, Once, () => ({
    value: $onClickOnce($scope)
  }));
});
const $Once = /* @__PURE__ */_._const("Once", $Once__OR__clickOnceCount);
const $clickOnceCount = /* @__PURE__ */_._let("clickOnceCount/9", ($scope, clickOnceCount) => {
  _._text($scope["#text/3"], clickOnceCount);
  $Once__OR__clickOnceCount($scope);
});
const $dynamicTag2 = /* @__PURE__ */_._dynamic_tag("#text/4", 0, () => $onClickTwice2);
const $Twice__OR__clickTwiceCount = /* @__PURE__ */_._or(14, $scope => {
  let {
    Twice,
    clickTwiceCount
  } = $scope;
  $dynamicTag2($scope, Twice, () => ({
    value: $onClickTwice($scope)
  }));
});
const $Twice = /* @__PURE__ */_._const("Twice", $Twice__OR__clickTwiceCount);
const $clickTwiceCount = /* @__PURE__ */_._let("clickTwiceCount/13", ($scope, clickTwiceCount) => {
  _._text($scope["#text/7"], clickTwiceCount);
  $Twice__OR__clickTwiceCount($scope);
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
const $onClickOnce2__script = _._script("__tests__/template.marko_0_onClickOnce", ($scope, {
  onClickOnce
}) => _._on($scope["#button/2"], "click", onClickOnce));
const $onClickOnce2 = _._var_resume("__tests__/template.marko_0_onClickOnce/var", /* @__PURE__ */_._const("onClickOnce", $onClickOnce2__script));
const $onClickTwice2__script = _._script("__tests__/template.marko_0_onClickTwice", ($scope, {
  onClickTwice
}) => _._on($scope["#button/6"], "click", onClickTwice));
const $onClickTwice2 = _._var_resume("__tests__/template.marko_0_onClickTwice/var", /* @__PURE__ */_._const("onClickTwice", $onClickTwice2__script));
function $_return2($scope, {
  value,
  call
} = $scope) {
  return function () {
    if (call) {
      $define_content2__call($scope, --call)
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
      $define_content__call($scope, --call)
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
_._resume("__tests__/template.marko_2/_return2", $_return2);
_._resume("__tests__/template.marko_1/_return", $_return);
_._resume("__tests__/template.marko_0/onClickOnce", $onClickOnce);
_._resume("__tests__/template.marko_0/onClickTwice", $onClickTwice);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);