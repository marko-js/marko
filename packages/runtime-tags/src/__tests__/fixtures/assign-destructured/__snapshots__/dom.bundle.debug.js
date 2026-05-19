// template.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $bar__OR__$fooChange__script = _script("__tests__/template.marko_0_bar_$fooChange", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.$fooChange($scope.bar + 1);
}));
const $bar__OR__$fooChange = /* @__PURE__ */ _or(7, $bar__OR__$fooChange__script);
const $bar = /* @__PURE__ */ _let("bar/3", ($scope) => {
	_text($scope["#text/2"], $scope.bar);
	$bar__OR__$fooChange($scope);
});
const $pattern2 = ($scope, $pattern) => {
	$foo2($scope, $pattern.foo);
	$fooChange2($scope, $pattern.fooChange);
};
function $setup($scope) {
	$bar($scope, 0);
	$pattern2($scope, {
		foo: 1,
		fooChange: $foo($scope)
	});
}
const $foo2 = ($scope, foo) => _text($scope["#text/1"], foo);
const $fooChange2 = /* @__PURE__ */ _const("$fooChange", $bar__OR__$fooChange);
function $foo($scope) {
	return function(v) {
		$bar($scope, v);
	};
}
_resume("__tests__/template.marko_0/foo", $foo);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
