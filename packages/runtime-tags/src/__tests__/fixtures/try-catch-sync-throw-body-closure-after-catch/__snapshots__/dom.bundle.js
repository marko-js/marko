// template.marko
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("a1", "<p> </p>", "D ", 0, $catch_content__$params);
const $if_content__show = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "a0");
const $show__closure = /*@__PURE__*/ _closure($if_content__show);
const $show = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$show__closure($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.d);
}));
