// total: 2795 (min) 1406 (brotli)
// template.marko: 249 (min) 126 (brotli)
const $x__script = _script("a0", ($scope) => {
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
});
const $x = /* @__PURE__ */ _let(1, $x__script);
