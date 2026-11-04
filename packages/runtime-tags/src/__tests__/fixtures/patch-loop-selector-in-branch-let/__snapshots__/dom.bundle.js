// template.marko
const $for_content__selected = /*@__PURE__*/ _for_selector(0, 8, ($scope) => _attr_class_item($scope.a, "sel", $scope._._.i === $scope.M), ($scope) => $scope._);
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$selected($scope._._, $scope.M);
}));
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	_text($scope.b, $scope.M);
	$for_content__setup__script($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of(0, "<li> </li>", " D ", $for_content__setup);
const $if_content__rows = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__for($scope, [$scope._.g, "id"]));
const $if_content__setup = ($scope) => {
	$if_content__rows._($scope);
	$if_content__selected._($scope);
};
const $if_content__selected = /*@__PURE__*/ _if_closure(0, 0, $for_content__selected);
const $rows = _let(6, ($scope) => {
	$rows_length($scope, $scope.g?.length);
	$if_content__rows($scope);
});
const $if = /*@__PURE__*/ _if(0, "<ul></ul>", " ", $if_content__setup);
const $rows_length = /*@__PURE__*/ _const(7, ($scope) => $if($scope, $scope.h ? 0 : 1));
const $selected = /*@__PURE__*/ _fill_let_change("a2", 8, $if_content__selected);
