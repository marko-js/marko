// tags/counter-box/index.marko
const $input_onA__OR__input_onB__OR__mode = /*@__PURE__*/ _or(7, ($scope) => _return_change($scope, $scope.g === "a" ? $scope.e : $scope.f), 2);
const $mode = /*@__PURE__*/ _fill_let("b1", 6, ($scope) => {
	_text($scope.a, $scope.g);
	_return($scope, $scope.g);
	$input_onA__OR__input_onB__OR__mode($scope);
});
const $setup__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$mode($scope, "b");
}));

// template.marko
const $if_content__count = _var_resume("a3", ($scope, count) => {});
const $if_content__setup__script = _script("a4", ($scope) => _on($scope.c, "click", function() {
	_var_change($scope.a, 5);
}));
const $last = /*@__PURE__*/ _fill_let("a5", 5, ($scope) => _text($scope.b, $scope.f));
const $onB = ($scope) => function(v) {
	$last($scope._, "b" + v);
};
const $onA = ($scope) => function(v) {
	$last($scope._, "a" + v);
};
_resumed.a1 = $onB;
_resumed.a0 = $onA;
