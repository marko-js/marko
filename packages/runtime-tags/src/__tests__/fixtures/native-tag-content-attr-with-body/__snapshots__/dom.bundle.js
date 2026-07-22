// template.marko
const $message = /*@__PURE__*/ _let(1);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$message($scope, $scope.b + "!");
}));
