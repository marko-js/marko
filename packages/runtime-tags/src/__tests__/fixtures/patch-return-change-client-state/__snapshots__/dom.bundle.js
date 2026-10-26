// tags/counter-box/index.marko
const $input_onA__OR__input_onB__OR__mode = /*@__PURE__*/ _or_resume("b2", 7, ($scope) => _return_change($scope, $scope.g === "a" ? $scope.e : $scope.f), 2);
const $mode = /*@__PURE__*/ _fill_let("b1", 6, ($scope) => {
	_text($scope.a, $scope.g);
	_return($scope, $scope.g);
	$input_onA__OR__input_onB__OR__mode($scope);
});
const $setup__script$1 = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$mode($scope, "b");
}));

// template.marko
const $last = /*@__PURE__*/ _let(4, ($scope) => _text($scope.c, $scope.e));
const $setup__script = _script("a3", ($scope) => _on($scope.d, "click", function() {
	_var_change($scope.a, 5);
}));
const $count = _var_resume("a2", ($scope, count) => {});
const $onB = ($scope) => function(v) {
	$last($scope, "b" + v);
};
const $onA = ($scope) => function(v) {
	$last($scope, "a" + v);
};
_resumed.a1 = $onB;
_resumed.a0 = $onA;
