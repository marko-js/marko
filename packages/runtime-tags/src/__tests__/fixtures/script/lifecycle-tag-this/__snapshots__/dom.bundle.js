// template.marko
const $x__script = _script("a1", ($scope) => _lifecycle($scope, {
	onMount: function() {
		this.onUpdate();
	},
	onUpdate: function() {
		document.getElementById("ref").textContent = `x=${$scope.b}, was=${this.cur}`;
		this.cur = $scope.b;
	}
}));
const $x = /*@__PURE__*/ _let(1, $x__script);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$x($scope, +$scope.b + 1);
}));
