// template.marko
const $for_content__v__OR__i = /*@__PURE__*/ _or(3, ($scope) => $D_content__q($scope.a, $scope._.e + $scope.c));
const $for_content__v = /*@__PURE__*/ _for_closure(0, $for_content__v__OR__i, 6);
const $D_content__input_p1__OR__q = /*@__PURE__*/ _or(4, ($scope) => _text($scope.a, $scope._.d + $scope.d));
const $D_content__q = /*@__PURE__*/ _const(3, $D_content__input_p1__OR__q);
const $v = /*@__PURE__*/ _let(4, $for_content__v);
const $input_p__script = _script("a2", ($scope) => {
	console.log($scope.d);
	$v($scope, 9);
});
