// tags/x-pair/index.marko
const $input_count = ($scope, input_count) => _text($scope.b, input_count);

// template.marko
const $for_content2__count = /*@__PURE__*/ _for_closure(2, ($scope) => $input_count($scope.a, $scope._.g));
const $for_content__count = /*@__PURE__*/ _for_closure(1, ($scope) => _text($scope.b, $scope._.g));
const $count = /*@__PURE__*/ _let(6, ($scope) => {
	$for_content__count($scope);
	$for_content2__count($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
