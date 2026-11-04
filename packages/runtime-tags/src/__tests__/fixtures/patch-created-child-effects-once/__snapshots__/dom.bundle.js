// tags/child.marko
const $setup__script$1 = _script("b2", ($scope) => console.log("setup"));
const $input_label__script = _script_patch("b1 e", ($scope) => console.log("label", $scope.e));
const $input_count__script = _script_patch("b0 f", ($scope) => console.log("count", $scope.f));
const $input_count = /*@__PURE__*/ _const(5, ($scope) => {
	_text($scope.b, $scope.f);
	$input_count__script($scope);
});

// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure_patch("a4", 2, 0, ($scope) => $input_count($scope.a, $scope._.h));
const $count = _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$if_content__count($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
