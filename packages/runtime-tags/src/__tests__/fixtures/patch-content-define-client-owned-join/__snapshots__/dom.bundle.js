// template.marko
const $Label_content__input_suffix__OR__n = /*@__PURE__*/ _fill_join("a1", 3, /*@__PURE__*/ _fill_join_subscribers("a5", 4, /*@__PURE__*/ _shell_or("a2", 4, ($scope) => _text($scope.a, $scope.d + $scope._.e)), 6, 0));
const $Label_content__n = /*@__PURE__*/ _const(3, $Label_content__input_suffix__OR__n);
const $count = /*@__PURE__*/ _fill_let("a6", 5, ($scope) => $Label_content__n($scope.a, $scope.f));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
