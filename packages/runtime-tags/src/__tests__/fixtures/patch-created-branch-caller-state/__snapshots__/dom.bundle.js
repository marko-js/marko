// tags/panel.marko
const $if_content__input_n = /*@__PURE__*/ _init_resume("b0", /*@__PURE__*/ _fill_join("b2", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e))));
const $input_n = /*@__PURE__*/ _fill_const("b2", 4, $if_content__input_n);

// template.marko
const $count = _let(5, ($scope) => $input_n($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
