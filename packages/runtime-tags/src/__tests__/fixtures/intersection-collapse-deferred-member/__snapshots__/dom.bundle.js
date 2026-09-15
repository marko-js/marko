// template.marko
const $volume__OR__audioOff = /*@__PURE__*/ _or(6, ($scope) => _text($scope.a, $scope.f ? "off" : $scope.c < .5 ? "low" : "high"));
const $audioOff = /*@__PURE__*/ _const(5, $volume__OR__audioOff);
const $volume__OR__muted = /*@__PURE__*/ _or(4, ($scope) => $audioOff($scope, $scope.d || $scope.c === 0));
const $volume = /*@__PURE__*/ _let(2, ($scope) => {
	$volume__OR__muted($scope);
	$volume__OR__audioOff($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$volume($scope, 0);
}));
