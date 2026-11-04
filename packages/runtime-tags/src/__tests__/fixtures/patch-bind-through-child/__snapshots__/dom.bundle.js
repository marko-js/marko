// tags/store.marko
const $last = /*@__PURE__*/ _fill_let("c1", 0, ($scope) => _return($scope, {
	last: $scope.a,
	set: $_return($scope)
}));
const $_return = ($scope) => function(next) {
	$last($scope, next);
};
_resumed.c0 = $_return;

// tags/child.marko
const $if_content__count = /*@__PURE__*/ _fill_let_change("b2", 2, ($scope) => _text($scope.a, $scope.c));
const $if_content__input_on = /*@__PURE__*/ _if_closure_patch("b1", 0, 0, ($scope) => $if_content__count($scope, 0, $scope._.e));
const $if_content__setup__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$if_content__count($scope, +$scope.c + 1);
}));
const $input_on = /*@__PURE__*/ _const(4, $if_content__input_on);

// template.marko
const $store = _var_resume("a0", ($scope, store) => {
	_text($scope.c, store?.last);
	$input_on($scope.d, store?.set);
});
