// template.marko
const $await_content2__clicks = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._._._.d), ($scope) => $scope._._._, "a1");
const $placeholder_content__clicks = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "a0");
const $placeholder_content = _content("a2", "<i>loading <!></i>", "Db%", $placeholder_content__clicks);
const $clicks__closure = /*@__PURE__*/ _closure($placeholder_content__clicks, $await_content2__clicks);
const $clicks = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$clicks__closure($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, +$scope.d + 1);
}));
