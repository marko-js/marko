// template.marko
const $x__render = /*@__PURE__*/ _render(($scope) => _text($scope.a, $scope.d));
const $x__script = _script("a1", ($scope) => _lifecycle($scope, {
	onMount: function() {
		this.cur = $scope.d;
	},
	onUpdate: function() {
		$prev($scope, this.cur);
		this.cur = $scope.d;
	}
}));
const $x = /*@__PURE__*/ _let(3, ($scope) => {
	$x__render($scope);
	$x__script($scope);
});
const $prev = /*@__PURE__*/ _let(4, /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.e)));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$x($scope, $scope.d + 1);
}));
