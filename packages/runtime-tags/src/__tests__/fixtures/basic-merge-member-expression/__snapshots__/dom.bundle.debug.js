// template.marko
const $template = "<div></div><div></div><button>Click</button>";
const $walks = " b b b";
const $foo = /* @__PURE__ */ _let("foo/3", ($scope) => {
	_attr_class($scope["#div/0"], ($scope.foo, $scope.foo.class));
	_attr_class($scope["#div/1"], ($scope.foo, $scope.foo.class));
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$foo($scope, { class: "baz" });
}));
function $setup($scope) {
	$foo($scope, {});
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
