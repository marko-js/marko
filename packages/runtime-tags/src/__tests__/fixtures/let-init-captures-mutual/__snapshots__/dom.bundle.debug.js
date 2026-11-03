// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $b_getter = _hoist_resume("__tests__/template.marko_0_b#3/hoist", "b");
const $b2 = /*@__PURE__*/ _let("b/3", ($scope) => _assert_hoist($scope.b));
const $a2 = /*@__PURE__*/ _let("a/2", ($scope) => {
	_text($scope["#text/1"], typeof $scope.a);
	$b2($scope, $b($scope));
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$a2($scope, $scope.b);
}));
function $setup($scope) {
	$a2($scope, $a);
	$setup__script($scope);
}
const $b = ($scope) => () => $scope.a;
function $a() {
	return $b_getter($scope);
}
_resumed["__tests__/template.marko_0/b"] = $b;
_resumed["__tests__/template.marko_0/a"] = $a;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
