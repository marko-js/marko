// total: 2733 (min) 1399 (brotli)
// template.marko: 232 (min) 142 (brotli)
const $x = /* @__PURE__ */ _let(1, _script("a0", ($scope) => {
	_lifecycle($scope, {
		onMount: function() {
			this.onUpdate();
		},
		onUpdate: function() {
			document.getElementById("ref").textContent = `x=${$scope.b}, was=${this.cur}`;
			this.cur = $scope.b;
		}
	});
	_on($scope.a, "click", function() {
		$x($scope, $scope.b + 1);
	});
}));
