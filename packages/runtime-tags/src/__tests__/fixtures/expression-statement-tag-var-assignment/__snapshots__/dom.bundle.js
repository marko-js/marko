// template.marko
const $x__OR__direction = /* @__PURE__ */ _or(6, _script("a0", ($scope) => _on($scope.c, "click", function() {
	if ($scope.f === "up") $x($scope, $scope.e + 1);
	else if ($scope.f === "down") $x($scope, $scope.e - 1);
})));
const $x = /* @__PURE__ */ _let(4, ($scope) => {
	_text($scope.d, $scope.e);
	$x__OR__direction($scope);
});
const $direction = /* @__PURE__ */ _let(5, $x__OR__direction);
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$direction($scope, "up");
	});
	_on($scope.b, "click", function() {
		$direction($scope, "down");
	});
});
