// total: 3084 (min) 1527 (brotli)
// template.marko: 227 (min) 145 (brotli)
const $x__script = _script("a0", ($scope) => {
	_lifecycle($scope, {
		onMount: function() {
			this.cur = $scope.d;
		},
		onUpdate: function() {
			$prev($scope, this.cur);
			this.cur = $scope.d;
		}
	});
	_on($scope.c, "click", function() {
		$x($scope, $scope.d + 1);
	});
});
const $x = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.a, $scope.d);
	$x__script($scope);
});
const $prev = /* @__PURE__ */ _let(4, ($scope) => _text($scope.b, $scope.e));
