// template.marko
const Child = /*@__PURE__*/ _load_template("a", () => import("./child.mjs").then((mod) => mod.default));
const $a__OR__v_n = /*@__PURE__*/ _or(9, ($scope) => _text($scope.e, $scope.f + ":" + $scope.i), 1, 2);
const $a = /*@__PURE__*/ _let(5, $a__OR__v_n);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1, 0, () => $v);
const $mounted = /*@__PURE__*/ _let(6, ($scope) => $dynamicTag($scope, $scope.g ? Child : null));
const $setup__script = _script("b1", ($scope) => {
	_on($scope.a, "click", function() {
		$mounted($scope, true);
	});
	_on($scope.d, "click", function() {
		$a($scope, +$scope.f + 1);
		$scope.h.set($scope.f);
	});
});
const $v = _var_resume("b0", /*@__PURE__*/ _const(7, ($scope) => $v_n($scope, $scope.h?.n)));
const $v_n = /*@__PURE__*/ _const(8, $a__OR__v_n);

// tags/grand.marko
const $template$1 = "<span> </span>";
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

// child.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&`)("D l");
const $g = _var_resume("a0", /*@__PURE__*/ _const(2, ($scope) => _return($scope, $scope.c)));
function $setup($scope) {
	_var($scope, 0, $g);
	$setup$1($scope.a);
}
var child_default = /*@__PURE__*/ _template("a", $template, $walks, $setup);
