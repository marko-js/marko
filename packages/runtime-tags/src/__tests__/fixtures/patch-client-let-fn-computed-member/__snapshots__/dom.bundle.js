// tags/outer.marko
const $input_label__OR__obj__OR__k = /*@__PURE__*/ _or_resume("b2", 7, ($scope) => _text($scope.a, $scope.f[$scope.g]($scope.e)), 2);
const $obj = fill("b1", /*@__PURE__*/ _let(5, $input_label__OR__obj__OR__k));
const $input_label = fill("b0", /*@__PURE__*/ _const(4, $input_label__OR__obj__OR__k));

// template.marko
function $fn(v) {
	return "f-" + v;
}
_resumed.a0 = $fn;
