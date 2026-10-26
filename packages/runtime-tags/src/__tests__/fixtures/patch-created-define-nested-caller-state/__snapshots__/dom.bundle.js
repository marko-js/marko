// template.marko
const $if_content__v = /*@__PURE__*/ _init_resume("a0", /*@__PURE__*/ _fill_join("a3", 3, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.d))));
const $Outer_content__v = ($scope, v) => $Inner_content__tag_input_v($scope.a, v);
const $Inner_content__tag_input_v = /*@__PURE__*/ _fill_const("a3", 3, $if_content__v);
const $count = /*@__PURE__*/ _let(5, ($scope) => $Outer_content__v($scope.a, $scope.f));
const $setup__script = _script("a5", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
