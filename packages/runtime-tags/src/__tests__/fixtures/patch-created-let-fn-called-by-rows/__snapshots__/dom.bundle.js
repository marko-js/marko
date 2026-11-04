// template.marko
const $for_content__isSel__OR__size = /*@__PURE__*/ _or_patch("a5", 4, ($scope) => _attr_class_item($scope.a, "on", $scope._.d($scope.d)));
const $for_content__isSel = /*@__PURE__*/ _for_closure(0, $for_content__isSel__OR__size, 8);
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$if_content__sel($scope._, $scope.d);
}));
const $if_content__sel = /*@__PURE__*/ _fill_let("a3", 1, ($scope) => $if_content__sel_id($scope, $scope.b?.id));
const $if_content__isSel = /*@__PURE__*/ _const(3, $for_content__isSel);
const $if_content__sel_id = /*@__PURE__*/ _const(2, ($scope) => $if_content__isSel($scope, (s) => s.id === $scope.c));
