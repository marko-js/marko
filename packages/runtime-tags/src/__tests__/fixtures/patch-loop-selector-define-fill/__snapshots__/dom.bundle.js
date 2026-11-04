// template.marko
const $for_content__selected__OR__flag__script = _script("a0", ($scope) => $scope.a.className = $scope._.f && $scope._.e === $scope.M ? "sel" : "");
const $for_content__selected__OR__flag = /*@__PURE__*/ _or_patch("a1", 2, $for_content__selected__OR__flag__script);
const $for_content__selected = /*@__PURE__*/ _for_selector_patch("a4", 0, 4, $for_content__selected__OR__flag, 7);
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	$for_content__flag._($scope);
	_text($scope.b, $scope.M);
};
const $for_content__flag = /*@__PURE__*/ _for_closure_patch("a5", 0, $for_content__selected__OR__flag, 8);
const $List_content__for = /*@__PURE__*/ _for_of(0, "<li> </li>", " D ", $for_content__setup);
const $List_content__rows = /*@__PURE__*/ _fill_let("a6", 6, ($scope) => $List_content__for($scope, [$scope.g, "id"]));
const $List_content__setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$List_content__rows($scope, [...$scope.g, { id: $scope.g.length + 1 }]);
}));
const $List_content__tag_input_flag = /*@__PURE__*/ _const(5, $for_content__flag);
const $on = _let(5, ($scope) => $List_content__tag_input_flag($scope.a, $scope.f));
const $setup__script = _script("a7", ($scope) => _on($scope.b, "click", function() {
	$on($scope, !$scope.f);
}));
