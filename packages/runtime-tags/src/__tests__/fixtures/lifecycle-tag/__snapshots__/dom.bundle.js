// template.marko
const $x = /*@__PURE__*/ _let(1, _script("a1", ($scope) => _lifecycle($scope, {
	onMount: function() {
		document.getElementById("ref").textContent = "Mount " + ("b" in $scope ? $scope.b : 0);
	},
	onUpdate: function() {
		document.getElementById("ref").textContent = "Update " + ("b" in $scope ? $scope.b : 0);
	}
})));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$x($scope, ("b" in $scope ? $scope.b : 0) + 1);
}));
