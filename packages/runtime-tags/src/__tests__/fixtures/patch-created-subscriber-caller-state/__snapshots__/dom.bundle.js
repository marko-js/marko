// tags/panel.marko
const $if_content2__input_n = /*@__PURE__*/ _closure_get_patch("b0", 6, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "b4", 0);
const $input_n__closure = /*@__PURE__*/ _closure($if_content2__input_n);
const $input_n = /*@__PURE__*/ _const(4, $input_n__closure);

// template.marko
const $count = _let(5, ($scope) => $input_n($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
