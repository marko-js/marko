// template.marko
const $fallback3 = ($scope, fallback) => _text($scope.b, fallback);
const $x__OR__$fallback = /*@__PURE__*/ _or(12, ($scope) => $fallback3($scope, void 0 !== $scope.i ? $scope.i : $scope.g * 10));
const $other3 = ($scope, other) => _text($scope.c, other);
const $x__OR__$other = /*@__PURE__*/ _or(13, ($scope) => $other3($scope, void 0 !== $scope.k ? $scope.k : $scope.g + 100));
const $x = /*@__PURE__*/ _let(6, ($scope) => {
	$x__OR__$fallback($scope);
	$x__OR__$other($scope);
});
const $source = /*@__PURE__*/ _let(7, ($scope) => {
	$item($scope, $scope.h.item);
	$other2($scope, $scope.h.other);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.e, "click", function() {
		$source($scope, {});
	});
	_on($scope.f, "click", function() {
		$x($scope, $scope.g + 1);
	});
});
const $item = /*@__PURE__*/ _const(8, ($scope) => {
	_text($scope.a, String($scope.i));
	$x__OR__$fallback($scope);
});
const $other2 = /*@__PURE__*/ _const(10, ($scope) => {
	$raw($scope, $scope.k);
	$x__OR__$other($scope);
});
const $raw = ($scope) => {
	_text($scope.d, String($scope.k));
};
