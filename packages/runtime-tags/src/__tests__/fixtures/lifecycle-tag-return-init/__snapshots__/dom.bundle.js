// template.marko
const $x__script = _script("a1", ($scope) => _lifecycle($scope, {
	x: $scope.b,
	onMount: function() {
		this.w = 1;
		return {
			y: this.x,
			u: 5
		};
	},
	onUpdate: function() {
		document.getElementById("ref").textContent = JSON.stringify(this);
	}
}));
const $x = /*@__PURE__*/ _let(1, $x__script);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$x($scope, +$scope.b + 1);
}));
