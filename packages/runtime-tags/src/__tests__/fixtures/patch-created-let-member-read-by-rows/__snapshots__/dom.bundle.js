// template.marko
const $for_content__sel_id__OR__item = /*@__PURE__*/ _or_patch("a5", 5, ($scope) => _text($scope.b, $scope.e === $scope._.c ? "*" : ""));
const $for_content__sel_id = /*@__PURE__*/ _for_closure(0, $for_content__sel_id__OR__item, 6);
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$if_content__sel($scope._, { id: $scope.e });
}));
const $if_content__sel = _let(1, ($scope) => $if_content__sel_id($scope, $scope.b?.id));
const $if_content__sel_id = /*@__PURE__*/ _const(2, $for_content__sel_id);
