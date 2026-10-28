// tags/card.marko
const $input_x = /*@__PURE__*/ _const(3, ($scope) => {
	_return($scope, $scope.d + "!");
	_text($scope.a, $scope.d);
});

// tags/wrap.marko
const $if_content__input_label = /*@__PURE__*/ _init_resume("c2", /*@__PURE__*/ _fill_join("c4", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_x($scope.a, $scope._.e))));
const $if_content__setup__script = _script("c1", ($scope) => _on($scope.d, "click", function() {
	console.log($scope.e);
}));
const $if_content__v = _var_resume("c0", /*@__PURE__*/ _const(4, ($scope) => _text($scope.c, $scope.e)));
const $input_label = /*@__PURE__*/ _fill_const("c4", 4, $if_content__input_label);

// template.marko
const $label = _let(6, ($scope) => $input_label($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$label($scope, $scope.g + "?");
}));
