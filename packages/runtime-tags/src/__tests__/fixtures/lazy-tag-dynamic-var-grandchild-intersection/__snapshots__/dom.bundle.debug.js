// tags/grand.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $n = /*@__PURE__*/ _let("n/1", ($scope) => {
	_return($scope, {
		n: $scope.n,
		set: $_return($scope)
	});
	_text($scope["#text/0"], $scope.n);
});
function $setup$1($scope) {
	$n($scope, 0);
}
const $_return = ($scope) => function(value) {
	$n($scope, value);
};
_resumed["__tests__/tags/grand.marko_0/_return"] = $_return;
var grand_default = /*@__PURE__*/ _template("__tests__/tags/grand.marko", $template$1, "D l", $setup$1);

// child.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&`)("D l");
const $g = _var_resume("__tests__/child.marko_0_g#2/var", /*@__PURE__*/ _const("g", ($scope) => _return($scope, $scope.g)));
function $setup($scope) {
	_var($scope, "#childScope/0", $g);
	$setup$1($scope["#childScope/0"]);
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup);

// template.marko
const $template = "<button class=mount>mount</button><!><button class=inc> </button>";
const $walks = " b1b D l";
const Child = /*@__PURE__*/ _load_template("__tests__/child.marko", () => import("./child.mjs").then((mod) => mod.default));
const $a__OR__v_n = /*@__PURE__*/ _or(9, ($scope) => _text($scope["#text/4"], $scope.a + ":" + $scope.v_n), 1, "#scopeOffset/2");
const $a = /*@__PURE__*/ _let("a/5", $a__OR__v_n);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1", 0, () => $v);
const $mounted = /*@__PURE__*/ _let("mounted/6", ($scope) => $dynamicTag($scope, $scope.mounted ? Child : null));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$mounted($scope, true);
	});
	_on($scope["#button/3"], "click", function() {
		$a($scope, +$scope.a + 1);
		$scope.v.set($scope.a);
	});
});
function $setup($scope) {
	$a($scope, 0);
	$mounted($scope, false);
	$setup__script($scope);
}
const $v = _var_resume("__tests__/template.marko_0_v#7/var", /*@__PURE__*/ _const("v", ($scope) => $v_n($scope, $scope.v?.n)));
const $v_n = /*@__PURE__*/ _const("v_n", $a__OR__v_n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
