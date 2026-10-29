// tags/child.marko
const $value__OR__n = /*@__PURE__*/ _or_resume("b1", 7, ($scope) => _text($scope.b, $scope.f + $scope.g));
const $value = /*@__PURE__*/ _let(5, $value__OR__n);
const $input_data = $value;
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, "z");
}));

// template.marko
const $if_content__count = /*@__PURE__*/ _init_resume("a3", /*@__PURE__*/ _if_closure(2, 0, ($scope) => $input_data($scope.a, $scope._.g)));
const $count = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__count($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
