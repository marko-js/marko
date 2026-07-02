// template.marko
const $x = /* @__PURE__ */ _let(4, ($scope) => _text($scope.d, $scope.e));
const $direction = /* @__PURE__ */ _let(5);
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$direction($scope, "up");
	});
	_on($scope.b, "click", function() {
		$direction($scope, "down");
	});
	_on($scope.c, "click", function() {
		if ($scope.f === "up") $x($scope, $scope.e + 1);
		else if ($scope.f === "down") $x($scope, $scope.e - 1);
	});
});
