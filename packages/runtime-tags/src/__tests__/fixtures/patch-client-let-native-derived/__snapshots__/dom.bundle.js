// tags/outer.marko
const $obj = ($scope, obj) => $obj_T($scope, obj.T);
const $T = fill("b1", /*@__PURE__*/ _let(6, ($scope) => $obj($scope, { T: $scope.g })));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_label__OR__obj_T = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.i, ($_) => ({ title: $scope.f })));
const $obj_T = /*@__PURE__*/ _const(8, ($scope) => {
	_text($scope.b, $scope.i);
	$input_label__OR__obj_T($scope);
});
const $input_label = fill("b0", /*@__PURE__*/ _const(5, $input_label__OR__obj_T));
