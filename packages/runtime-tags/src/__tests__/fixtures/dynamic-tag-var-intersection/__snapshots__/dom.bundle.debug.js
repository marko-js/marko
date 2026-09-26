// tags/child.marko
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
_resumed["__tests__/tags/child.marko_0/_return"] = $_return;
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", $setup$1);

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
