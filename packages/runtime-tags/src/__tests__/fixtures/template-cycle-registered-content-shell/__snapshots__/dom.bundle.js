// tags/tree-b.marko
const $wrap_content__input_depth = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.f), 0, "c0");
const $wrap_content = _content("c1", "<span> </span>", "D ", $wrap_content__input_depth);

// tags/tree-a.marko
const $count = /*@__PURE__*/ _let(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
