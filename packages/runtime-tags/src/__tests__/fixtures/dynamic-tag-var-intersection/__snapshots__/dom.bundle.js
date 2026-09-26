// tags/child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $n = /*@__PURE__*/ _let(1, ($scope) => {
	_return($scope, {
		n: $scope.b,
		set: $_return($scope)
	});
	_text($scope.a, $scope.b);
});
function $setup($scope) {
	$n($scope, 0);
}
const $_return = ($scope) => function(value) {
	$n($scope, value);
};
_resumed.b0 = $_return;
var child_default = /*@__PURE__*/ _template("b", $template, "D l", $setup);

// template.marko
_dynamic_tag_var_resume(0);
const $a__OR__v_n = /*@__PURE__*/ _or(9, ($scope) => _text($scope.d, $scope.f + ":" + $scope.i), 1, 1);
const $a = /*@__PURE__*/ _let(5, $a__OR__v_n);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, 0, () => $v);
const $Tag = /*@__PURE__*/ _let(6, ($scope) => $dynamicTag($scope, $scope.g));
const $setup__script = _script("a1", ($scope) => {
	_on($scope.c, "click", function() {
		$a($scope, +$scope.f + 1);
		$scope.h.set($scope.f);
	});
	_on($scope.e, "click", function() {
		$Tag($scope, $scope.g ? null : child_default);
	});
});
const $v = _var_resume("a0", /*@__PURE__*/ _const(7, ($scope) => $v_n($scope, $scope.h?.n)));
const $v_n = /*@__PURE__*/ _const(8, $a__OR__v_n);
