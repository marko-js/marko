// template.marko
const $for_content__if = /*@__PURE__*/ _if(0, "<strong>*</strong>", "b");
const $for_content__selected = /*@__PURE__*/ _for_selector(0, 1, 5, ($scope) => $for_content__if($scope, $scope._.b === $scope.f ? 0 : 1));
const $for_content__row_id = /*@__PURE__*/ _const(5, _script("a0", ($scope) => _on($scope.b, "click", function() {
	$selected($scope._, $scope.f);
})));
const $selected = /*@__PURE__*/ _let(1, $for_content__selected);
