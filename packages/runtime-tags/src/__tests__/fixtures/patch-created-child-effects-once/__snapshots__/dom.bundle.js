// tags/child.marko
const $setup__script$1 = _script("b2", ($scope) => console.log("setup"));
const $input_label__script = _script("b1", ($scope) => console.log("label", $scope.e));
const $input_count__script = _script("b0", ($scope) => console.log("count", $scope.f));
const $input_count = /*@__PURE__*/ _const(5, ($scope) => {
	$input_count__script($scope);
	_text($scope.b, $scope.f);
});

// template.marko
const $if_content__count = _resumed.a5 = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $input_count($scope.a, $scope._.h));
const $count = /*@__PURE__*/ _fill_let("a3", 7, ($scope) => {
	_text($scope.b, $scope.h);
	$if_content__count($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
