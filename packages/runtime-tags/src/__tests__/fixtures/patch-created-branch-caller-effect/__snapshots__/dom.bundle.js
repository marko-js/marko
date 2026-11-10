// tags/child.marko
const $if_content__input_count__script = _script_patch("b0 >e", ($scope) => console.log("count", $scope._.e));
const $if_content__input_count = /*@__PURE__*/ _if_closure_patch("b1", 0, 0, $if_content__input_count__script);
const $input_count = /*@__PURE__*/ _const(4, $if_content__input_count);

// template.marko
const $count = _let(8, ($scope) => {
	_text($scope.b, $scope.i);
	$input_count($scope.c, $scope.i);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.i + 1);
}));
