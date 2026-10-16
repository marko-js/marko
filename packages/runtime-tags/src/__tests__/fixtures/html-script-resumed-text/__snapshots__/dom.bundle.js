// template.marko
const $code = /*@__PURE__*/ _let(3, ($scope) => {
	_start_late($scope.b, $scope.d && `document.querySelector("main").dataset.a = "${$scope.d}"`);
	_start_late($scope.c, `document.querySelector("main").dataset.b = ${_to_text(JSON.stringify($scope.d))}`);
});
const $type = /*@__PURE__*/ _let(4, ($scope) => _attr($scope.c, "type", $scope.e));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$code($scope, "ran");
	$type($scope, void 0);
}));
