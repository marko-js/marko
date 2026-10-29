// tags/outer.marko
const $input_label__OR__g = /*@__PURE__*/ _or_resume("b2", 7, ($scope) => _text($scope.a, $scope.g($scope.e)));
const $g2 = /*@__PURE__*/ _const(6, $input_label__OR__g);
const $obj = fill("b3", /*@__PURE__*/ _let(5, ($scope) => $g2($scope, $g($scope))));
const $input_label = fill("b1", /*@__PURE__*/ _const(4, $input_label__OR__g));
const $g = ($scope) => (v) => $scope.f.f(v);
_resumed.b0 = $g;

// template.marko
function $fn(v) {
	return "f-" + v;
}
_resumed.a0 = $fn;
