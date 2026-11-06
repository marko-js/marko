// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $input_v$1 = /*@__PURE__*/ _const(2, ($scope) => _return($scope, $scope.c));
const $input$1 = ($scope, input) => $input_v$1($scope, input.v);
var child_default = /*@__PURE__*/ _template("b", "", "", 0, $input$1);

// tags/other.marko
const $template = "";
const $walks = "";
const $input_v = /*@__PURE__*/ _const(2, ($scope) => _return($scope, !$scope.c));
const $input = ($scope, input) => $input_v($scope, input.v);
var other_default = /*@__PURE__*/ _template("c", "", "", 0, $input);

// template.marko
const $for_content2__l = /*@__PURE__*/ _for_closure(2, ($scope) => _text($scope.a, $scope._.e[$scope.M].name), 10, 1);
const $for_content2__setup = $for_content2__l;
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0, 0, ($_) => $for_content__r);
const $for_content__useChild__OR__short = /*@__PURE__*/ _or(7, ($scope) => $for_content__dynamicTag($scope, $scope._.b ? child_default : other_default, ($_) => ({ v: $scope.g })));
const $for_content__l = /*@__PURE__*/ _let(4, ($scope) => {
	$for_content__l_length($scope, $scope.e?.length);
	$for_content2__l($scope);
});
const $for_content__short = /*@__PURE__*/ _let(6, $for_content__useChild__OR__short);
const $for_content__setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$for_content__short($scope, true);
	$for_content__l($scope, [{ name: "z" }]);
}));
const $for_content__for = /*@__PURE__*/ _for_to_unkeyed(2, "<span> </span>", "D ", $for_content2__setup);
const $for_content__l_length__OR__r = /*@__PURE__*/ _or(9, ($scope) => $for_content__for($scope, [$scope.i ? 0 : $scope.f - 1]), 1, 1);
const $for_content__l_length = /*@__PURE__*/ _const(5, $for_content__l_length__OR__r);
const $for_content__r = _var_resume("a0", /*@__PURE__*/ _const(8, $for_content__l_length__OR__r));
