// tags/toggle.marko
const $input_user_bio__OR__input_user_name__OR__open = /*@__PURE__*/ _fill_join("d2", 6, /*@__PURE__*/ _fill_join("d1", 5, /*@__PURE__*/ _or(8, ($scope) => _text($scope.b, $scope.h ? $scope.f : $scope.g), 2)));
const $open = /*@__PURE__*/ _fill_let("d3", 7, $input_user_bio__OR__input_user_name__OR__open);
const $setup__script$1 = _script("d0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.h);
}));

// template.marko
const $n = /*@__PURE__*/ _fill_let("a8", 12, ($scope) => _text($scope.b, $scope.m));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.m + 1);
}));
