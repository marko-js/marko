// template.marko
const $for_content__m__OR__active = /*@__PURE__*/ _or(6, ($scope) => _text($scope.b, $scope.e + ":" + $scope.f));
const $for_content__active = /*@__PURE__*/ _const(5, $for_content__m__OR__active);
const $for_content__selected = /*@__PURE__*/ _for_selector(1, 3, "M", ($scope) => $for_content__active($scope, $scope._.d === $scope.M));
const $for_content__m = /*@__PURE__*/ _let(4, $for_content__m__OR__active);
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$for_content__m($scope, +$scope.e + 1);
	$selected($scope._, $scope.M);
}));
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	_attr_class($scope.a, "row" + $scope.M);
	$for_content__m($scope, 0);
	$for_content__setup__script($scope);
};
const $for = /*@__PURE__*/ _for_of(1, "<button> </button>", " D ", $for_content__setup);
const $items = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c, (x) => x]));
const $selected = /*@__PURE__*/ _let(3, $for_content__selected);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [0, ...$scope.c]);
}));
