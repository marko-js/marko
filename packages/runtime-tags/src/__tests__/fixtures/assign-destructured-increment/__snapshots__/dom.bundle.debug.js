// template.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $pattern2 = ($scope, $pattern) => {
	$foo2($scope, $pattern.foo);
	$fooChange2($scope, $pattern.fooChange);
};
const $foo__OR__$fooChange__script = _script("__tests__/template.marko_0_foo_$fooChange", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.$fooChange($scope.foo + 1);
}));
const $foo__OR__$fooChange = $foo__OR__$fooChange__script;
const $bar = /* @__PURE__ */ _let("bar/3", ($scope) => {
	_text($scope["#text/2"], $scope.bar);
	$pattern2($scope, {
		foo: $scope.bar,
		fooChange: $foo($scope)
	});
	$foo__OR__$fooChange($scope);
});
function $setup($scope) {
	$bar($scope, 0);
}
const $foo2 = /* @__PURE__ */ _const("foo", ($scope) => _text($scope["#text/1"], $scope.foo));
const $fooChange2 = /* @__PURE__ */ _const("$fooChange");
function $foo($scope) {
	return function(v) {
		$bar($scope, v);
	};
}
_resume("__tests__/template.marko_0/foo", $foo);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
