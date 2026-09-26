// template.marko
const $for_content__m__OR__label = /*@__PURE__*/ _or(5, ($scope) => _text($scope.b, $scope.d + ":" + $scope.e));
const $for_content__label = /*@__PURE__*/ _const(4, $for_content__m__OR__label);
const $for_content__n = /*@__PURE__*/ _for_closure(1, ($scope) => $for_content__label($scope, "n" + $scope._.d));
const $for_content__m = /*@__PURE__*/ _let(3, $for_content__m__OR__label);
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$for_content__m($scope, +$scope.d + 1);
	$n($scope._, +$scope._.d + 1);
}));
const $for_content__setup = ($scope) => {
	$for_content__n._($scope);
	_attr_class($scope.a, "row" + $scope.M);
	$for_content__m($scope, 0);
	$for_content__setup__script($scope);
};
const $for = /*@__PURE__*/ _for_of(1, "<button> </button>", " D ", $for_content__setup);
const $items = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c, (x) => x]));
const $n = /*@__PURE__*/ _let(3, $for_content__n);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [0, ...$scope.c]);
}));
