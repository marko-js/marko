// template.marko
const $n = /*@__PURE__*/ _let(4, ($scope) => _text($scope.d, $scope.e));
const $stop2 = /*@__PURE__*/ _const(5, _script("a2", ($scope) => _on($scope.a, "click", $scope.f ||= $stop)));
const $mark2 = /*@__PURE__*/ _const(6, _script("a1", ($scope) => _on($scope.b, "click", $scope.g ||= $mark)));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.e + 1);
}));
function $stop(e) {
	e.preventDefault();
}
function $mark() {
	document.querySelector("#t").textContent = "marked";
}
