// tags/panel.marko
const $for_content__input_n = /*@__PURE__*/ _for_closure_patch("b0", 0, ($scope) => _text($scope.b, $scope._.e), 5);
const $input_n = /*@__PURE__*/ _const(4, $for_content__input_n);

// template.marko
const $count = _let(5, ($scope) => $input_n($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
