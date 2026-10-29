// tags/gm-badge/index.marko
const $input_value__$global_flag = /*@__PURE__*/ _fill_global_join("b0", ($scope) => _text($scope.a, $scope.d + $scope.$.flag), "flag");
const $input_value = /*@__PURE__*/ _const(3, $input_value__$global_flag);

// template.marko
const $if_content__count = /*@__PURE__*/ _init_resume("a3", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_value($scope.a, $scope._.f)));
const $count = _let(5, $if_content__count);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
