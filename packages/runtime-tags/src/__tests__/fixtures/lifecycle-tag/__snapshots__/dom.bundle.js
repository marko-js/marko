// template.marko
const $x = /* @__PURE__ */ _let(1, _script("a1", ($scope) => _lifecycle($scope, {
	onMount: function() {
		document.getElementById("ref").textContent = "Mount " + $scope.b;
	},
	onUpdate: function() {
		document.getElementById("ref").textContent = "Update " + $scope.b;
	}
})));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.b + 1);
}));
