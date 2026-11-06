// tags/child.marko
const $input_v = /*@__PURE__*/ _const(2, ($scope) => _return($scope, $scope.c));

// template.marko
const $for_content__list = /*@__PURE__*/ _for_closure(2, ($scope) => _text($scope.a, $scope._.e[$scope.M].name), 9, 1);
const $for_content__setup = $for_content__list;
const $list = /*@__PURE__*/ _let(4, ($scope) => {
	$list_length($scope, $scope.e?.length);
	$for_content__list($scope);
});
const $for = /*@__PURE__*/ _for_to_unkeyed(2, "<span> </span>", "D ", $for_content__setup);
const $list_length__OR__r = /*@__PURE__*/ _or(8, ($scope) => $for($scope, [$scope.h ? 0 : $scope.f - 1]), 1, 1);
const $list_length = /*@__PURE__*/ _const(5, $list_length__OR__r);
const $short = /*@__PURE__*/ _let(6, ($scope) => $input_v($scope.a, $scope.g));
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$short($scope, true);
	$list($scope, [{ name: "z" }]);
}));
const $r = _var_resume("a0", /*@__PURE__*/ _const(7, $list_length__OR__r));
