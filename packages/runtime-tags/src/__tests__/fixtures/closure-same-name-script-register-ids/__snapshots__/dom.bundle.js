// template.marko
const $wrap_content2__x = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.d), 0, "a0");
const $wrap_content__x__script = _script("a3", ($scope) => console.log("outer", $scope._.d));
const $wrap_content__x = /*@__PURE__*/ _closure_get(4, $wrap_content__x__script, 0, "a5");
const $wrap_content__x2__closure = /*@__PURE__*/ _closure($wrap_content2__x);
const $wrap_content__x2__script = _script("a2", ($scope) => console.log("inner", $scope.d));
const $wrap_content__x2 = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$wrap_content__x2__closure($scope);
	$wrap_content__x2__script($scope);
});
const $wrap_content__setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$wrap_content__x2($scope, +$scope.d + 1);
}));
const $x__closure = /*@__PURE__*/ _closure($wrap_content__x);
const $x = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$x__closure($scope);
});
const $setup__script = _script("a7", ($scope) => _on($scope.a, "click", function() {
	$x($scope, +$scope.d + 1);
}));
