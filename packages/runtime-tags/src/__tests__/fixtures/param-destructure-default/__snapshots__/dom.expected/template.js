const $ChildA_content__walks = /* next(1), replace, over(2), replace, out(1) */"D%c%l",
  $ChildA_content__template = "<div class=a><!> <!></div>",
  $ChildB_content__walks = /* next(1), replace, over(2), replace, out(1) */"D%c%l",
  $ChildB_content__template = "<div class=b><!> <!></div>";
export const $template = `<!>${$ChildA_content__template}${$ChildA_content__template}${$ChildA_content__template}${$ChildB_content__template}${$ChildB_content__template}${$ChildB_content__template}<!>`;
export const $walks = /* over(1), <ChildA>, <ChildA>, <ChildA>, <ChildB>, <ChildB>, <ChildB>, over(1) */`b/${$ChildA_content__walks}&/${$ChildA_content__walks}&/${$ChildA_content__walks}&/${$ChildB_content__walks}&/${$ChildB_content__walks}&/${$ChildB_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $ChildB_content__$pattern = /* @__PURE__ */_._const("$pattern2", $scope => $ChildB_content__$bar($scope, $scope.$pattern2.bar));
const $ChildB_content__bar = /* @__PURE__ */_._const("bar", $scope => _._text($scope["#text/0"], $scope.bar));
const $ChildB_content__$bar = /* @__PURE__ */_._const("$bar2", $scope => $ChildB_content__bar($scope, void 0 !== $scope.$bar2 ? $scope.$bar2 : 1));
const $ChildB_content__$foo = $scope => {
  $ChildB_content__$pattern($scope, void 0 !== $scope.foo ? $scope.foo : {
    bar: 2
  });
};
const $ChildB_content__foo = /* @__PURE__ */_._const("foo", $scope => {
  _._text($scope["#text/1"], typeof $scope.foo);
  $ChildB_content__$foo($scope, $scope.foo);
});
const $ChildB_content__$params = /* @__PURE__ */_._const("$params3", $scope => $ChildB_content__input($scope, $scope.$params3[0]));
const $ChildB_content__input = /* @__PURE__ */_._const("input", $scope => $ChildB_content__foo($scope, $scope.input.foo));
const $ChildA_content__$pattern = /* @__PURE__ */_._const("$pattern", $scope => $ChildA_content__$bar($scope, $scope.$pattern.bar));
const $ChildA_content__bar = /* @__PURE__ */_._const("bar", $scope => _._text($scope["#text/0"], $scope.bar));
const $ChildA_content__$bar = /* @__PURE__ */_._const("$bar", $scope => $ChildA_content__bar($scope, void 0 !== $scope.$bar ? $scope.$bar : 1));
const $ChildA_content__$foo = $scope => {
  $ChildA_content__$pattern($scope, void 0 !== $scope.foo ? $scope.foo : {
    bar: 2
  });
};
const $ChildA_content__foo = /* @__PURE__ */_._const("foo", $scope => {
  _._text($scope["#text/1"], typeof $scope.foo);
  $ChildA_content__$foo($scope, $scope.foo);
});
const $ChildA_content__$params = /* @__PURE__ */_._const("$params2", $scope => $ChildA_content__$temp($scope, $scope.$params2?.[0]));
const $ChildA_content__$temp = /* @__PURE__ */_._const("$temp", $scope => $ChildA_content__foo($scope, $scope.$temp.foo));
export function $setup($scope) {
  $ChildA_content__foo($scope["#childScope/0"], {
    bar: 0
  });
  $ChildA_content__foo($scope["#childScope/1"], {});
  $ChildA_content__foo($scope["#childScope/2"]);
  $ChildB_content__foo($scope["#childScope/3"], {
    bar: 0
  });
  $ChildB_content__foo($scope["#childScope/4"], {});
  $ChildB_content__foo($scope["#childScope/5"]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);