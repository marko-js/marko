// total: 2752 (min) 1413 (brotli)
// template.marko: 258 (min) 163 (brotli)
const $x__OR__direction__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	if ($scope.f === "up") $x($scope, $scope.e + 1);
	else if ($scope.f === "down") $x($scope, $scope.e - 1);
}));
const $x__OR__direction = /* @__PURE__ */ _or(6, $x__OR__direction__script);
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
