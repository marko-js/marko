// tags/grandchild.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $n = /*@__PURE__*/ _let(1, ($scope) => {
	_return($scope, {
		n: $scope.b,
		set: $_return($scope)
	});
	_text($scope.a, $scope.b);
});
function $setup$1($scope) {
	$n($scope, 0);
}
const $_return = ($scope) => function(value) {
	$n($scope, value);
};
_resumed.c0 = $_return;
var grandchild_default = /*@__PURE__*/ _template("c", $template$1, "D l", $setup$1);

// tags/child.marko
const $template = "<!><!><!>";
const $walks = "b1c";
_dynamic_tag_var_resume(0);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(0, 0, () => $g);
const $Inner = /*@__PURE__*/ _let(2, ($scope) => $dynamicTag$1($scope, $scope.c));
function $setup($scope) {
	$Inner($scope, grandchild_default);
}
const $g = _var_resume("b0", /*@__PURE__*/ _const(3, ($scope) => _return($scope, $scope.d)));
var child_default = /*@__PURE__*/ _template("b", $template, "b1c", $setup);

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
