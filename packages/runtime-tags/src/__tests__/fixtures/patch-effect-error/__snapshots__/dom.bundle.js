// template.marko
const $count = /*@__PURE__*/ _fill_let("a2", 6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
const $input_label__script = _script("a1", ($scope) => {
	if ($scope.f === "b") throw new Error("effect failed");
});
