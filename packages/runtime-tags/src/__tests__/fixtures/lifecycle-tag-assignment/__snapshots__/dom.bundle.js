// template.marko
const $x__script = _script("a1", ($scope) => _lifecycle($scope, {
	onMount: function() {
		this.cur = "d" in $scope ? $scope.d : 0;
	},
	onUpdate: function() {
		$prev($scope, this.cur);
		this.cur = "d" in $scope ? $scope.d : 0;
	}
}));
const $x = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.a, $scope.d);
	$x__script($scope);
});
const $prev = /*@__PURE__*/ _let(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$x($scope, ("d" in $scope ? $scope.d : 0) + 1);
}));
