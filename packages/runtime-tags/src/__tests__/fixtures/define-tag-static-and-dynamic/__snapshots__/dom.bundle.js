// template.marko
const $Box_content__walks = " D%c%l", $Box_content__template = "<button class=box><!> <!></button>";
const $useBoxBoxdiv_content = /*@__PURE__*/ _content("a3", "dynamic");
const $Box_content__count = /*@__PURE__*/ _let(6, ($scope) => _text($scope.b, $scope.g));
const $Box_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$Box_content__count($scope, +$scope.g + 1);
}));
const $Box_content__setup = /*@__PURE__*/ _child_setup(($scope) => {
	$Box_content__count($scope, 0);
	$Box_content__setup__script($scope);
});
const $Box_content__input_content = /* @__PURE__ */ _dynamic_tag(2);
const $Box_content__$params = ($scope, $params2) => $Box_content__input($scope, $params2[0]);
const $Box_content__input = ($scope, input) => $Box_content__input_content($scope, input?.content);
const $Box_content = _content_resume("a0", $Box_content__template, $Box_content__walks, $Box_content__setup, $Box_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2, $useBoxBoxdiv_content);
const $useBox__OR__Box = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.d ? $scope.e : "div"));
const $useBox = /*@__PURE__*/ _let(3, $useBox__OR__Box);
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$useBox($scope, !$scope.d);
}));
