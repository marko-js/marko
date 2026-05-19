// template.marko
const $template = "<div></div><div></div><div></div>";
const $walks = " b b b";
const $a2__script = _script("__tests__/template.marko_0_a", ($scope) => _el_read($scope["#div/0"]).textContent = $scope.a.bar() || "missing a");
const $a2 = /* @__PURE__ */ _const("a", $a2__script);
const $b2__script = _script("__tests__/template.marko_0_b", ($scope) => _el_read($scope["#div/1"]).textContent = $scope.b.baz() || "missing b");
const $b2 = /* @__PURE__ */ _const("b", $b2__script);
const $foo = /* @__PURE__ */ _let("foo/3", ($scope) => {
	$foo_bar($scope, $scope.foo?.bar);
	$a2($scope, {
		foo: $scope.foo,
		bar: $a($scope)
	});
	$b2($scope, {
		foo: $scope.foo,
		baz: $b($scope)
	});
});
const $c2__script = _script("__tests__/template.marko_0_c", ($scope) => _el_read($scope["#div/2"]).textContent = $scope.c.baz() || "missing c");
const $c2 = /* @__PURE__ */ _const("c", $c2__script);
const $foo_bar = /* @__PURE__ */ _const("foo_bar", ($scope) => $c2($scope, {
	foo: $scope.foo_bar,
	baz: $c($scope)
}));
function $setup($scope) {
	$foo($scope, undefined);
}
function $a($scope) {
	return () => $scope.foo?.bar;
}
function $b($scope) {
	return () => $scope.foo?.bar.baz;
}
function $c($scope) {
	return () => $scope.foo_bar?.baz;
}
_resume("__tests__/template.marko_0/a", $a);
_resume("__tests__/template.marko_0/b", $b);
_resume("__tests__/template.marko_0/c", $c);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
