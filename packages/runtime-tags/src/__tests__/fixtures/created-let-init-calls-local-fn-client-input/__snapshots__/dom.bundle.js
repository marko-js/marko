// tags/child.marko
const $if_content__input_w__OR__y = /*@__PURE__*/ _or(5, ($scope) => _text($scope.a, $scope.e + $scope._.f));
const $if_content__y = /*@__PURE__*/ _let(4, $if_content__input_w__OR__y);
const $if_content__x__OR__f = /*@__PURE__*/ _or(3, ($scope) => $if_content__y($scope, $scope.c($scope.b)));
const $if_content__x = /*@__PURE__*/ _let(1, $if_content__x__OR__f);
const $if_content__input_v = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__x($scope, $scope._.e));
const $input_v = /*@__PURE__*/ _const(4, $if_content__input_v);
function $f(v) {
	return v;
}
_resumed.b0 = $f;

// template.marko
const $v = /*@__PURE__*/ _let(7, ($scope) => $input_v($scope.b, $scope.h));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$v($scope, $scope.h + "!");
}));
