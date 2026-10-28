// tags/child.marko
const $if_content__input_a = /*@__PURE__*/ _init_resume("b0", /*@__PURE__*/ _fill_signal("5 b2", /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.f))));
const $if = /*@__PURE__*/ _if(1, "<em> </em>", "D ", $if_content__input_a);
const $input_v = ($scope, input_v) => {
	_text($scope.a, input_v);
	$if($scope, input_v ? 0 : 1);
};

// template.marko
const $if_content__input_a__OR__x = /*@__PURE__*/ _fill_signal("4 a4", /*@__PURE__*/ _or_resume("a6", 4, ($scope) => _text($scope.c, $scope.d + $scope._.e)), _if_closure, 0, 0);
const $if_content__y = /*@__PURE__*/ _let(5, ($scope) => $input_v($scope.a, $scope.f));
const $if_content__x = /*@__PURE__*/ _fill_let("a2", 3, ($scope) => {
	$if_content__y($scope, $scope.d);
	$if_content__input_a__OR__x($scope);
});
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$if_content__x($scope, 2);
}));
