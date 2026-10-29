// tags/outer.marko
const $input_label__OR__f__OR__g = /*@__PURE__*/ _or(7, ($scope) => _text($scope.a, $scope.f($scope.e) + $scope.g($scope.e)), 2);
const $f = fill("b1", /*@__PURE__*/ _let(5, $input_label__OR__f__OR__g));
const $g = fill("b2", /*@__PURE__*/ _let(6, $input_label__OR__f__OR__g));
const $input_label = fill("b0", /*@__PURE__*/ _const(4, $input_label__OR__f__OR__g));

// template.marko
function $fn(v) {
	return "f-" + v;
}
_resumed.a0 = $fn;
