// template.marko
const $for_content__selected__OR__flag__script = _script("a0", ($scope) => $scope.a.className = $scope._.f && $scope._.e === $scope.M ? "sel" : "");
const $for_content__selected__OR__flag = /*@__PURE__*/ _or(2, $for_content__selected__OR__flag__script);
const $for_content__selected = /*@__PURE__*/ _for_closure(0, $for_content__selected__OR__flag);
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	$for_content__flag._($scope);
	_text($scope.b, $scope.M);
};
const $for_content__flag = /*@__PURE__*/ _for_closure(0, $for_content__selected__OR__flag);
const $List_content__for = /*@__PURE__*/ _for_of(0, "<li> </li>", " D ", $for_content__setup);
const $List_content__rows = /*@__PURE__*/ _fill_let("a5", 6, ($scope) => $List_content__for($scope, [$scope.g, "id"]));
const $List_content__setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$List_content__rows($scope, [...$scope.g, { id: $scope.g.length + 1 }]);
}));
const $List_content__tag_input_selected = fill("a3", /*@__PURE__*/ _const(4, $for_content__selected));
const $List_content__tag_input_flag = fill("a4", /*@__PURE__*/ _const(5, $for_content__flag));
const $on = /*@__PURE__*/ _let(5, ($scope) => $List_content__tag_input_flag($scope.a, $scope.f));
const $setup__script = _script("a6", ($scope) => _on($scope.b, "click", function() {
	$on($scope, !$scope.f);
}));
