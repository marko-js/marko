// tags/outer.marko
const $input_label__OR__obj = /*@__PURE__*/ _or(6, ($scope) => _text($scope.a, $scope.f.f($scope.e)));
const $obj = fill("b1", /*@__PURE__*/ _let(5, $input_label__OR__obj));
const $input_label = fill("b0", /*@__PURE__*/ _const(4, $input_label__OR__obj));

// template.marko
function $fn(v) {
	return this.n + v;
}
_resumed.a0 = $fn;
