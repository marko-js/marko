// template.marko
const $open__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.c);
}));
const $open = /*@__PURE__*/ _let(2, ($scope) => {
	_attr_style_item($scope.b, "display", $scope.c ? void 0 : "none");
	$open__script($scope);
});
