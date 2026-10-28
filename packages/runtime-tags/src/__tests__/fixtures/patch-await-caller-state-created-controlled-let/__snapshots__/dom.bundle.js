// tags/show-await.marko
const $await_content__g = /*@__PURE__*/ _fill_let_change("b3", 6, ($scope) => _text($scope.a, $scope.g));
const $await_content__input_label__OR__a = /*@__PURE__*/ _fill_signal("4 b7", /*@__PURE__*/ _or_resume("b9", 5, ($scope) => $await_content__g($scope, $scope.e + ":" + $scope._.e, $valueChange($scope))), _closure_subscribers, 5, 0);
const $await_content__input_label = _closure_resume("b4", /*@__PURE__*/ _closure_get(5, $await_content__input_label__OR__a));
const $await_content__setup__script = _script("b1", ($scope) => _on($scope.b, "click", function() {
	$await_content__g($scope, "q");
}));
const $await_content__a = /*@__PURE__*/ _fill_let("b2", 4, $await_content__input_label__OR__a);
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("b7", 4, $input_label__closure);
const $valueChange = ($scope) => function(v) {
	$await_content__a($scope, v);
};
_resumed.b0 = $valueChange;

// template.marko
const $if_content__l = /*@__PURE__*/ _init_resume("a5", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_label($scope.a, $scope._.h)));
const $l = /*@__PURE__*/ _let(7, $if_content__l);
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$l($scope, "z");
}));
