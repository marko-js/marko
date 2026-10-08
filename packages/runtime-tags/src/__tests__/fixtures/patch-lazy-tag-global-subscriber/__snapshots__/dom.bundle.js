// child.marko
const $count = /*@__PURE__*/ _fill_let("a2", 2, /* @__PURE__ */ _fill_global_join("brand", "a0", ($scope) => {
	_text($scope.b, $scope.$.brand + ":" + $scope.c);
}));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
