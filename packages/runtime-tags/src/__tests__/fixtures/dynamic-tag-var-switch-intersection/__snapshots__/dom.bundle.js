// tags/one.marko
const $template$1 = "";
const $walks$1 = "";
const $n$1 = /*@__PURE__*/ _let(0, ($scope) => _return($scope, { n: $scope.a }));
function $setup$1($scope) {
	$n$1($scope, 1);
}
var one_default = /*@__PURE__*/ _template("b", "", "", $setup$1);

// tags/two.marko
const $template = "";
const $walks = "";
const $n = /*@__PURE__*/ _let(0, ($scope) => _return($scope, { n: $scope.a }));
function $setup($scope) {
	$n($scope, 2);
}
var two_default = /*@__PURE__*/ _template("c", "", "", $setup);

// template.marko
_dynamic_tag_var_resume(0);
const $a__OR__v_n = /*@__PURE__*/ _or(10, ($scope) => _text($scope.d, $scope.g + ":" + $scope.j), 1, 1);
const $a = /*@__PURE__*/ _let(6, $a__OR__v_n);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, 0, () => $v);
const $Tag = /*@__PURE__*/ _let(7, ($scope) => $dynamicTag($scope, $scope.h));
const $setup__script = _script("a1", ($scope) => {
	_on($scope.c, "click", function() {
		$a($scope, +$scope.g + 1);
		$Tag($scope, $scope.h === one_default ? two_default : one_default);
	});
	_on($scope.e, "click", function() {
		$Tag($scope, null);
	});
	_on($scope.f, "click", function() {
		$a($scope, +$scope.g + 1);
		$Tag($scope, one_default);
	});
});
const $v = _var_resume("a0", ($scope, v) => $v_n($scope, v?.n));
const $v_n = /*@__PURE__*/ _const(9, $a__OR__v_n);
