// tags/text-area.marko
const $input_value__OR__input_valueChange = /*@__PURE__*/ _fill("b2", 4, /*@__PURE__*/ _fill("b1", 3, /*@__PURE__*/ _or_resume("b3", 5, ($scope) => _attr_input_value($scope, "a", $scope.d, $scope.e))));
const $input_value = /*@__PURE__*/ _const(3, $input_value__OR__input_valueChange);
const $setup__script = _script("b0", ($scope) => {
	_attr_input_value_script($scope, "a");
	$scope.a;
});

// template.marko
const $if_content__text = /*@__PURE__*/ _init_resume("a3", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_value($scope.a, $scope._.f)));
const $text = _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$if_content__text($scope);
});
const $valueChange = ($scope) => (_new_text) => {
	$text($scope._, _new_text);
};
_resumed.a0 = $valueChange;
