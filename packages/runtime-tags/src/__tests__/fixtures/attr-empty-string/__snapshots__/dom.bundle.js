// template.marko
const $value__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$value($scope, $scope.c ? "" : "set");
}));
const $value = /* @__PURE__ */ _let(2, ($scope) => {
	_attr($scope.a, "title", $scope.c);
	$value__script($scope);
});
