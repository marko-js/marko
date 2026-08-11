// tags/provider.marko
const $body_content__count = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.e));
const $body_content = _content_resume("b0", "<div>value <!></div>", "Db%", $body_content__count);
const $count = /*@__PURE__*/ _let(4, /* @__PURE__ */ _closure($body_content__count));
const $setup__script$1 = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.e + 1);
}));

// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(5);
const $a__OR__b__OR__sel = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.i ? $scope.h : $scope.g), 2);
const $sel = /*@__PURE__*/ _let(8, $a__OR__b__OR__sel);
const $setup__script = _script("a0", ($scope) => _on($scope.e, "click", function() {
	$sel($scope, 1 - $scope.i);
}));
