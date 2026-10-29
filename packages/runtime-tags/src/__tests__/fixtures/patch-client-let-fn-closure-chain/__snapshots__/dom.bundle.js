// tags/outer.marko
const $input_label__OR__h = /*@__PURE__*/ _or_resume("b3", 8, ($scope) => _text($scope.a, $scope.h($scope.e)));
const $h2 = /*@__PURE__*/ _const(7, $input_label__OR__h);
const $g2 = /*@__PURE__*/ _const(6, ($scope) => $h2($scope, $h($scope)));
const $f = fill("b4", /*@__PURE__*/ _let(5, ($scope) => $g2($scope, $g($scope))));
const $input_label = fill("b2", /*@__PURE__*/ _const(4, $input_label__OR__h));
const $h = ($scope) => (v) => $scope.g(v);
const $g = ($scope) => (v) => $scope.f(v);
_resumed.b1 = $h;
_resumed.b0 = $g;

// template.marko
function $fn(v) {
	return "f-" + v;
}
_resumed.a0 = $fn;
