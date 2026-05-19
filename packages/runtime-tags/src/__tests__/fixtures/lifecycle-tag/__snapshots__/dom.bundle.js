// total: 2795 (min) 1406 (brotli)
// template.marko: 245 (min) 121 (brotli)
const $x = /* @__PURE__ */ _let(1, _script("a0", ($scope) => {
	_lifecycle($scope, {
		onMount: function() {
			document.getElementById("ref").textContent = "Mount " + $scope.b;
		},
		onUpdate: function() {
			document.getElementById("ref").textContent = "Update " + $scope.b;
		}
	});
	_on($scope.a, "click", function() {
		$x($scope, $scope.b + 1);
	});
}));
