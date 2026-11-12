// template.marko
const $x = /*@__PURE__*/ _const(8, /* @__PURE__ */ _fill_global("a0", ($scope) => _text($scope.a, $scope.i + $scope.$.suffix), "suffix"));
const $input_a__OR__count = /*@__PURE__*/ _or_patch("a2", 7, ($scope) => $x($scope, $scope.f + $scope.g));
const $count = _let(6, ($scope) => {
	_text($scope.c, $scope.g);
	$input_a__OR__count($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
