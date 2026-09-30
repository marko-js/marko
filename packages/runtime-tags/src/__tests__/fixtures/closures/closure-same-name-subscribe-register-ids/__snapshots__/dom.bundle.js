// template.marko
const $placeholder_content = _content("a2", "loading");
const $wrap_content2__x = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.d), 0, "a3");
const $await_content__x = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._._._.d), ($scope) => $scope._._._, "a0");
const $await_content__x2 = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.b, $scope._._.d), ($scope) => $scope._._, "a1");
const $wrap_content__x = /*@__PURE__*/ _let(3, /* @__PURE__ */ _closure($await_content__x2, $wrap_content2__x));
const $wrap_content__setup__script = _script("a5", ($scope) => _on($scope.a, "click", function() {
	$wrap_content__x($scope, +$scope.d + 1);
}));
const $x__closure = /*@__PURE__*/ _closure($await_content__x);
const $x = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$x__closure($scope);
});
const $setup__script = _script("a7", ($scope) => _on($scope.a, "click", function() {
	$x($scope, +$scope.d + 1);
}));
