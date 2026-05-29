// total: 3026 (min) 1477 (brotli)
// template.marko: 246 (min) 124 (brotli)
const $count = /* @__PURE__ */ _let(1, _script("a0", ($scope) => {
	_lifecycle($scope, {
		onMount: function() {
			document.getElementById("log").textContent += "mount,";
		},
		onUpdate: function() {
			document.getElementById("log").textContent += "update" + $scope.b + ",";
		}
	});
	_on($scope.a, "click", function() {
		$count($scope, $scope.b + 1);
	});
}));
