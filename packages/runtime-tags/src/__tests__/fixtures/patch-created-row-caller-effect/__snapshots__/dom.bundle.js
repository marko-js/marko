// tags/child.marko
const $for_content__input_count__OR__item__script = _script("b0", ($scope) => console.log("row count", $scope.c, $scope._.e));
const $for_content__input_count__OR__item = /*@__PURE__*/ _or_resume("b1", 3, $for_content__input_count__OR__item__script);
const $for_content__input_count = /*@__PURE__*/ _for_closure(0, $for_content__input_count__OR__item);
const $input_count = /*@__PURE__*/ _const(4, $for_content__input_count);

// template.marko
const $count = _let(8, ($scope) => {
	_text($scope.b, $scope.i);
	$input_count($scope.c, $scope.i);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.i + 1);
}));
