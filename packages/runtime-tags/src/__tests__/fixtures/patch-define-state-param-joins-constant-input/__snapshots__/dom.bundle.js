// tags/child.marko
const $Label_content__input_suffix__OR__n = /*@__PURE__*/ _or_patch("b2", 4, ($scope) => _text($scope.a, $scope.d + $scope._.e));
const $Label_content__n = /*@__PURE__*/ _const(3, $Label_content__input_suffix__OR__n);
const $count = /*@__PURE__*/ _fill_let("b4", 5, ($scope) => $Label_content__n($scope.b, $scope.f));
const $setup__script = _script("b3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.f + 1);
}));
