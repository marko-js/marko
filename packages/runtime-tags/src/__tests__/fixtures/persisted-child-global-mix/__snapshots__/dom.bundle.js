// tags/gm-badge/index.marko
const $input_value__OR__$global_flag = ($scope) => {
	_text($scope.a, $scope.d + $scope.$.flag);
};
const $input_value = /*@__PURE__*/ _const(3, $input_value__OR__$global_flag);

// template.marko
const $count = /*@__PURE__*/ _let(2, ($scope) => $input_value($scope.a, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
