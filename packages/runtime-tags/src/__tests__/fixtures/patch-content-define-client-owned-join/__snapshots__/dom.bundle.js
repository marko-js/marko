// template.marko
const $Label_content__input_suffix__OR__n = /*@__PURE__*/ _fill_join_value("a4", 4, /*@__PURE__*/ _patch_or("a1", 4, ($scope) => _text($scope.a, $scope.d + $scope._.e)));
const $Label_content__n = /*@__PURE__*/ _const(3, $Label_content__input_suffix__OR__n);
const $count = /*@__PURE__*/ _fill_let("a5", 5, ($scope) => $Label_content__n($scope.a, $scope.f));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
