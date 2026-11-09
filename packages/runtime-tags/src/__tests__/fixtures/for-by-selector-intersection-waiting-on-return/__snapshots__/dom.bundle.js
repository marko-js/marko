// tags/child.marko
const $input_v = /*@__PURE__*/ _const(2, ($scope) => _return($scope, $scope.c));

// template.marko
const $for_content__selected = /*@__PURE__*/ _for_selector(2, 5, ($scope) => _attr_class_item($scope.a, "on", $scope.M === $scope._.f));
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	_text($scope.b, $scope.M);
};
const $for = /*@__PURE__*/ _for_of(2, "<span> </span>", " D ", $for_content__setup);
const $items__OR__r = /*@__PURE__*/ _or(8, ($scope) => $for($scope, [$scope.h ? $scope.e.slice(0, 1) : $scope.e, "id"]), 1, 1);
const $selected = /*@__PURE__*/ _let(5, $for_content__selected);
const $short = /*@__PURE__*/ _let(6, ($scope) => $input_v($scope.a, $scope.g));
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$short($scope, true);
	$selected($scope, 3);
}));
const $r = _var_resume("a0", /*@__PURE__*/ _const(7, $items__OR__r));
