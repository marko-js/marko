// tags/outer.marko
const $if_content__g = /*@__PURE__*/ _init_resume("b6", /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.i("constant"))));
const $input_label__OR__g = /*@__PURE__*/ _or_resume("b3", 9, ($scope) => _text($scope.a, $scope.i($scope.f)));
const $g2 = /*@__PURE__*/ _const(8, ($scope) => {
	$input_label__OR__g($scope);
	$if_content__g($scope);
});
const $f = fill("b4", /*@__PURE__*/ _let(7, ($scope) => $g2($scope, $g($scope))));
const $input_label = fill("b2", /*@__PURE__*/ _const(5, $input_label__OR__g));
const $g = ($scope) => (v) => $scope.h(v);
_resumed.b0 = $g;

// template.marko
function $fn(v) {
	return "f-" + v;
}
_resumed.a0 = $fn;
