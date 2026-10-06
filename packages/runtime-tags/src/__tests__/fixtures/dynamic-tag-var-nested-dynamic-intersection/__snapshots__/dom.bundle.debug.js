// tags/grandchild.marko
const $template$2 = "<span> </span>";
const $walks$2 = "D l";
const $n = /*@__PURE__*/ _let("n/1", ($scope) => {
	_return($scope, {
		n: $scope.n,
		set: $_return($scope)
	});
	_text($scope["#text/0"], $scope.n);
});
function $setup$2($scope) {
	$n($scope, 0);
}
const $_return = ($scope) => function(value) {
	$n($scope, value);
};
_resumed["__tests__/tags/grandchild.marko_0/_return"] = $_return;
var grandchild_default = /*@__PURE__*/ _template("__tests__/tags/grandchild.marko", $template$2, "D l", /*@__PURE__*/ _return_setup($setup$2));

// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b1c";
_dynamic_tag_var_resume("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $g);
const $Inner = /*@__PURE__*/ _let("Inner/2", ($scope) => $dynamicTag$1($scope, $scope.Inner));
function $setup$1($scope) {
	$Inner($scope, grandchild_default);
}
const $g = _var_resume("__tests__/tags/child.marko_0_g#3/var", /*@__PURE__*/ _const("g", ($scope) => _return($scope, $scope.g)));
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b1c", /*@__PURE__*/ _return_setup($setup$1));

// template.marko
const $template = "<!><!><button class=inc> </button><button class=toggle></button>";
const $walks = "b1b D l b";
_dynamic_tag_var_resume("#text/0");
const $a__OR__v_n = /*@__PURE__*/ _or(9, ($scope) => _text($scope["#text/3"], $scope.a + ":" + $scope.v_n), 1, "#scopeOffset/1");
const $a = /*@__PURE__*/ _let("a/5", $a__OR__v_n);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $v);
const $Tag = /*@__PURE__*/ _let("Tag/6", ($scope) => $dynamicTag($scope, $scope.Tag));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$a($scope, +$scope.a + 1);
		$scope.v.set($scope.a);
	});
	_on($scope["#button/4"], "click", function() {
		$Tag($scope, $scope.Tag ? null : child_default);
	});
});
function $setup($scope) {
	$a($scope, 0);
	$Tag($scope, child_default);
	$setup__script($scope);
}
const $v = _var_resume("__tests__/template.marko_0_v#7/var", /*@__PURE__*/ _const("v", ($scope) => $v_n($scope, $scope.v?.n)));
const $v_n = /*@__PURE__*/ _const("v_n", $a__OR__v_n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
