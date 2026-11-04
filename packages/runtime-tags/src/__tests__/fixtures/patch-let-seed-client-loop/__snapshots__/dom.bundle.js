// template.marko
const $for_content__x = _let(4, ($scope) => _text($scope.b, $scope.e));
const $for_content__input_v = /*@__PURE__*/ _for_closure_patch("a0", 1, ($scope) => $for_content__x($scope, $scope._.e), 7);
const $for_content__setup = ($scope) => {
	$for_content__input_v._($scope);
	$for_content__input_w._($scope);
	_text($scope.a, $scope.M);
};
const $for_content__input_w = /*@__PURE__*/ _for_closure_patch("a1", 1, ($scope) => _text($scope.c, $scope._.f), 8);
const $for = /*@__PURE__*/ _for_until_unkeyed(1, "<p><!>:<!> <!></p>", "D%c%c%", $for_content__setup);
const $n = _let(6, ($scope) => $for($scope, [$scope.g]));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
