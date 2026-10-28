// tags/child.marko
const $n = ($scope, n) => _text($scope.a, n);
const $input_count = ($scope, input_count) => $n($scope, input_count + 10);

// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $input_count($scope.a, $scope._.g));
const $count = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__count($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
