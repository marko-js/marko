// template.marko
const $count = /*@__PURE__*/ _let(2, /* @__PURE__ */ _global_join("brand", "a0", ($scope) => {
	_text($scope.a, $scope.$.brand + " #" + $scope.c);
}));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
