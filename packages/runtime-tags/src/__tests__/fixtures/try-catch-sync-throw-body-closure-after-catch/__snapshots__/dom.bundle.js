// template.marko
const $catch_content__err = ($scope, err) => _text($scope.a, err?.message);
const $catch_content = _content("a1", "<p> </p>", "D ", 0, $catch_content__err);
const $if_content__show = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "a0");
const $show__closure = /*@__PURE__*/ _closure($if_content__show);
const $show = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$show__closure($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.d);
}));
