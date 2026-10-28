// template.marko
const $for_content__x = /*@__PURE__*/ _let(4, ($scope) => _text($scope.b, $scope.e));
const $for_content__input_v = /*@__PURE__*/ _fill_join("a1", 4, /*@__PURE__*/ _for_closure(1, ($scope) => $for_content__x($scope, $scope._.e)));
const $for_content__setup = ($scope) => {
	$for_content__input_v._($scope);
	$for_content__input_w._($scope);
	_text($scope.a, $scope.M);
};
const $for_content__input_w = /*@__PURE__*/ _fill_join("a2", 5, /*@__PURE__*/ _for_closure(1, ($scope) => _text($scope.c, $scope._.f)));
const $for = /*@__PURE__*/ _for_until_unkeyed(1, "<p><!>:<!> <!></p>", "D%c%c%", $for_content__setup);
const $n = /*@__PURE__*/ _let(6, ($scope) => $for($scope, [
	$scope.g,
	0,
	1
]));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
