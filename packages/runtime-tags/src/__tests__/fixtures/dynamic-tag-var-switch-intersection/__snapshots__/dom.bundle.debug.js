// tags/one.marko
const $template$2 = "";
const $walks$2 = "";
const $n$1 = /*@__PURE__*/ _let("n/0", ($scope) => _return($scope, { n: $scope.n }));
function $setup$2($scope) {
	$n$1($scope, 1);
}
var one_default = /*@__PURE__*/ _template("__tests__/tags/one.marko", "", "", $setup$2);

// tags/two.marko
const $template$1 = "";
const $walks$1 = "";
const $n = /*@__PURE__*/ _let("n/0", ($scope) => _return($scope, { n: $scope.n }));
function $setup$1($scope) {
	$n($scope, 2);
}
var two_default = /*@__PURE__*/ _template("__tests__/tags/two.marko", "", "", $setup$1);

// template.marko
const $template = "<!><!><button class=swap> </button><button class=clear></button><button class=mount></button>";
const $walks = "b1b D l b b";
_dynamic_tag_var_resume("#text/0");
const $a__OR__v_n = /*@__PURE__*/ _or(10, ($scope) => _text($scope["#text/3"], $scope.a + ":" + $scope.v_n), 1, "#scopeOffset/1");
const $a = /*@__PURE__*/ _let("a/6", $a__OR__v_n);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $v);
const $Tag = /*@__PURE__*/ _let("Tag/7", ($scope) => $dynamicTag($scope, $scope.Tag));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$a($scope, +$scope.a + 1);
		$Tag($scope, $scope.Tag === one_default ? two_default : one_default);
	});
	_on($scope["#button/4"], "click", function() {
		$Tag($scope, null);
	});
	_on($scope["#button/5"], "click", function() {
		$a($scope, +$scope.a + 1);
		$Tag($scope, one_default);
	});
});
function $setup($scope) {
	$a($scope, 0);
	$Tag($scope, one_default);
	$setup__script($scope);
}
const $v = _var_resume("__tests__/template.marko_0_v#8/var", ($scope, v) => $v_n($scope, v?.n));
const $v_n = /*@__PURE__*/ _const("v_n", $a__OR__v_n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
