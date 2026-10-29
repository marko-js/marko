// tags/outer.marko
const $input_label__OR__obj = /*@__PURE__*/ _or(7, ($scope) => _text($scope.a, $scope.g.g($scope.e)));
const $obj = /*@__PURE__*/ _const(6, $input_label__OR__obj);
const $f = fill("b1", /*@__PURE__*/ _let(5, ($scope) => $obj($scope, { g: $scope.f })));
const $input_label = fill("b0", /*@__PURE__*/ _const(4, $input_label__OR__obj));

// template.marko
function $fn(v) {
	return "f-" + v;
}
_resumed.a0 = $fn;
