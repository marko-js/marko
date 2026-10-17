// tags/panel.marko
const $for_content__input_n = /*@__PURE__*/ _shell_init("b1", /*@__PURE__*/ _fill_join("b2", 4, /*@__PURE__*/ _for_closure(0, ($scope) => _text($scope.b, $scope._.e))));
const $input_n = /*@__PURE__*/ _fill_const("b2", 4, $for_content__input_n);

// template.marko
const $count = /*@__PURE__*/ _fill_let("a1", 5, ($scope) => $input_n($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
