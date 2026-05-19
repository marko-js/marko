// total: 2782 (min) 1423 (brotli)
// template.marko: 236 (min) 162 (brotli)
const $x__script = _script("a0", ($scope) => {
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
});
const $x = /* @__PURE__ */ _let(1, $x__script);
