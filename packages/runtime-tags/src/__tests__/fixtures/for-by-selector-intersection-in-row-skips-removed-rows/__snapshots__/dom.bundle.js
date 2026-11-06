// template.marko
const $for_content2__selected = /*@__PURE__*/ _for_selector(0, 5, ($scope) => _attr_class_item($scope.a, "on", $scope.M === $scope._.f));
const $for_content2__setup = ($scope) => {
	$for_content2__selected._($scope);
	_text($scope.b, $scope.M);
};
const $for_content__selected = /*@__PURE__*/ _let(5, $for_content2__selected);
const $for_content__for = /*@__PURE__*/ _for_of(0, "<span> </span>", " D ", $for_content2__setup);
const $for_content__g_items__OR__short = /*@__PURE__*/ _or(7, ($scope) => $for_content__for($scope, [$scope.g ? $scope.e.slice(0, 1) : $scope.e, "id"]));
const $for_content__short = /*@__PURE__*/ _let(6, $for_content__g_items__OR__short);
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$for_content__short($scope, true);
	$for_content__selected($scope, 3);
}));
