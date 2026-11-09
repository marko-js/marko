// template.marko
const $for_content2__l = /*@__PURE__*/ _for_closure(0, ($scope) => _text($scope.a, $scope._.e[$scope.M].name), 8);
const $for_content2__setup = $for_content2__l;
const $for_content__l = /*@__PURE__*/ _let(4, ($scope) => {
	$for_content__l_length($scope, $scope.e?.length);
	$for_content2__l($scope);
});
const $for_content__for = /*@__PURE__*/ _for_to_unkeyed(0, "<span> </span>", "D ", $for_content2__setup);
const $for_content__outer__OR__l_length__OR__short = /*@__PURE__*/ _or(7, ($scope) => $for_content__for($scope, [$scope.g ? $scope.d : $scope.f - 1]), 2);
const $for_content__l_length = /*@__PURE__*/ _const(5, $for_content__outer__OR__l_length__OR__short);
const $for_content__short = /*@__PURE__*/ _let(6, $for_content__outer__OR__l_length__OR__short);
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$for_content__short($scope, true);
	$for_content__l($scope, [{ name: "z" }]);
}));
