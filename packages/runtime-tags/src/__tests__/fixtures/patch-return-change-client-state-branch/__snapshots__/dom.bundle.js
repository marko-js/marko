// tags/counter-box/index.marko
const $input_onA__OR__input_onB__OR__mode__script = _script("b0", ($scope) => _on($scope.c, "click", $scope.h === "a" ? $scope.f : $scope.g));
const $input_onA__OR__input_onB__OR__mode = /*@__PURE__*/ _shell_or("b2", 8, ($scope) => {
	_return_change($scope, $scope.h === "a" ? $scope.f : $scope.g);
	$input_onA__OR__input_onB__OR__mode__script($scope);
}, 2);
const $mode = /*@__PURE__*/ _fill_let("b3", 7, ($scope) => {
	_text($scope.a, $scope.h);
	_return($scope, $scope.h);
	$input_onA__OR__input_onB__OR__mode($scope);
});
const $setup__script = _script("b1", ($scope) => _on($scope.b, "click", function() {
	$mode($scope, "b");
}));
const $input_onA = /*@__PURE__*/ _const(5, $input_onA__OR__input_onB__OR__mode);
const $input_onB = /*@__PURE__*/ _const(6, $input_onA__OR__input_onB__OR__mode);

// template.marko
const $if_content__input_p = /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$input_onA($scope.a, $onA($scope));
	$input_onB($scope.a, $onB($scope));
});
const $if_content__setup__script = _script("a4", ($scope) => _on($scope.c, "click", function() {
	_var_change($scope.a, 5);
}));
const $if_content__count = _var_resume("a3", ($scope, count) => {});
const $last = /*@__PURE__*/ _fill_let("a6", 6, ($scope) => _text($scope.b, $scope.g));
const $input_p = fill("a5", /*@__PURE__*/ _const(5, $if_content__input_p));
const $onB = ($scope) => function(v) {
	$last($scope._, $scope._.f + "b" + v);
};
const $onA = ($scope) => function(v) {
	$last($scope._, $scope._.f + "a" + v);
};
_resumed.a1 = $onB;
_resumed.a0 = $onA;
