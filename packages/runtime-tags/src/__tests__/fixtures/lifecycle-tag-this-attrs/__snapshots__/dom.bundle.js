// total: 2462 (min) 1300 (brotli)
// template.marko: 134 (min) 108 (brotli)
const $x = /* @__PURE__ */ _let(1, ($scope) => _text($scope.a, $scope.b));
const $setup__script = _script("a0", ($scope) => _lifecycle($scope, {
	x: 1,
	setX: function(value) {
		$x($scope, value);
	},
	onMount: function() {
		this.setX(this.x);
	}
}));
