// template.marko
const $template = "<div></div>";
const $walks = " b";
const $baz2__script = _script("__tests__/template.marko_0_baz", ($scope) => _el_read($scope["#div/0"]).textContent = $scope.baz.bar());
const $baz2 = /* @__PURE__ */ _const("baz", $baz2__script);
const $foo = /* @__PURE__ */ _let("foo/1", ($scope) => $baz2($scope, {
	foo: $scope.foo,
	bar: $baz($scope)
}));
function $setup($scope) {
	$foo($scope, { bar: "bar" });
}
function $baz($scope) {
	return () => $scope.foo?.bar;
}
_resume("__tests__/template.marko_0/baz", $baz);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup);
