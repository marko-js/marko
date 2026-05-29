// total: 3053 (min) 1490 (brotli)
// template.marko: 152 (min) 105 (brotli)
const $foo = /* @__PURE__ */ _let(3, ($scope) => {
	_attr_class($scope.a, ($scope.d, $scope.d.class));
	_attr_class($scope.b, ($scope.d, $scope.d.class));
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$foo($scope, { class: "baz" });
}));
