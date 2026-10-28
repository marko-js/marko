// template.marko
const $if_content__input_w__OR__y = /*@__PURE__*/ _or_resume("a9", 7, ($scope) => _text($scope.a, $scope.f + $scope._.f));
const $if_content__y = fill("a4", /*@__PURE__*/ _let(5, $if_content__input_w__OR__y));
const $if_content__input_w__OR__g = /*@__PURE__*/ _or_resume("a3", 6, ($scope) => _text($scope.b, $scope.d($scope._.f)));
const $if_content__input_w = /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$if_content__input_w__OR__y($scope);
	$if_content__input_w__OR__g($scope);
});
const $input_w = fill("a7", /*@__PURE__*/ _const(5, $if_content__input_w));
function $f(v) {
	return v;
}
_resumed.a0 = $f;
