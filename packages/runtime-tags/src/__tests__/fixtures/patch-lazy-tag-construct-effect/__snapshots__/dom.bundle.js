// template.marko
_load_lazy("_a", () => import("./child.mjs").then(() => {}));
const $if_content__input_attrs__script = _script("b1", ($scope) => _attrs_script($scope, "a"));

// child.marko
const $count = /*@__PURE__*/ _fill_let("a0", 6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
