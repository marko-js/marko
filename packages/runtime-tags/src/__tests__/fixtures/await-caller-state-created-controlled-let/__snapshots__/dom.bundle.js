// tags/show-await.marko
const $await_content__g = /*@__PURE__*/ _let_change(6, ($scope) => _text($scope.a, $scope.g));
const $await_content__input_label__OR__a = /*@__PURE__*/ _or(5, ($scope) => $await_content__g($scope, $scope.e + ":" + $scope._.e, $valueChange($scope)));
const $await_content__input_label = /*@__PURE__*/ _closure_get(5, $await_content__input_label__OR__a, 0, "b2");
const $await_content__setup__script = _script("b1", ($scope) => _on($scope.b, "click", function() {
	$await_content__g($scope, "q");
}));
const $await_content__a = /*@__PURE__*/ _let(4, $await_content__input_label__OR__a);
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label = /*@__PURE__*/ _const(4, $input_label__closure);
const $valueChange = ($scope) => function(v) {
	$await_content__a($scope, v);
};
_resumed.b0 = $valueChange;

// template.marko
const $if_content__l = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_label($scope.a, $scope._.h));
const $l = /*@__PURE__*/ _let(7, $if_content__l);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$l($scope, "z");
}));
