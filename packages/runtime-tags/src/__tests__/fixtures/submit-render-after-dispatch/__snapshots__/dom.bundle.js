// template.marko
const $busy = /*@__PURE__*/ _let(2, ($scope) => _attr($scope.b, "disabled", $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "submit", function(ev) {
	ev.preventDefault();
	$busy($scope, true);
}));
