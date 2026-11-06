// tags/grand.marko
const $input_v$1 = /*@__PURE__*/ _const(2, ($scope) => _return($scope, $scope.c));

// tags/child.marko
const $g = _var_resume("b0", /*@__PURE__*/ _const(5, ($scope) => _return($scope, $scope.f)));
const $input_v = ($scope, input_v) => $input_v$1($scope.a, input_v);

// template.marko
const $for_content2__l = /*@__PURE__*/ _for_closure(2, ($scope) => _text($scope.a, $scope._.e[$scope.M].name), 9, 1);
const $for_content2__setup = $for_content2__l;
const $for_content__l = /*@__PURE__*/ _let(4, ($scope) => {
	$for_content__l_length($scope, $scope.e?.length);
	$for_content2__l($scope);
});
const $for_content__for = /*@__PURE__*/ _for_to_unkeyed(2, "<span> </span>", "D ", $for_content2__setup);
const $for_content__l_length__OR__r = /*@__PURE__*/ _or(8, ($scope) => $for_content__for($scope, [$scope.h ? 0 : $scope.f - 1]), 1, 1);
const $for_content__l_length = /*@__PURE__*/ _const(5, $for_content__l_length__OR__r);
const $for_content__short = /*@__PURE__*/ _let(6, ($scope) => $input_v($scope.a, $scope.g));
const $for_content__setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$for_content__short($scope, true);
	$for_content__l($scope, [{ name: "z" }]);
}));
const $for_content__r = _var_resume("a0", /*@__PURE__*/ _const(7, $for_content__l_length__OR__r));
