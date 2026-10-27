// tags/panel.marko
const $Info_content__input_n = /*@__PURE__*/ _init_resume("b1", /*@__PURE__*/ _fill_join_closure("b4", 3, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.b, $scope._.d), 0, "b2"), 0));
const $input_n__closure = /*@__PURE__*/ _closure($Info_content__input_n);
const $input_n = /*@__PURE__*/ _fill_const("b4", 3, $input_n__closure);

// template.marko
const $count = /*@__PURE__*/ _let(5, ($scope) => $input_n($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
