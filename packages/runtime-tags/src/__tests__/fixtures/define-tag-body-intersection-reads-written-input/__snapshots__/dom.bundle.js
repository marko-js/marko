// template.marko
const $D_content__if = /*@__PURE__*/ _if(0, "same", 0, 0, "different");
const $D_content__input_p1__OR__q = /*@__PURE__*/ _or(4, ($scope) => $D_content__if($scope, $scope._.d === $scope.d ? 0 : 1));
const $D_content__q = /*@__PURE__*/ _const(3, $D_content__input_p1__OR__q);
const $v = /*@__PURE__*/ _let(4, ($scope) => $D_content__q($scope.a, $scope.e));
const $input_p__script = _script("a2", ($scope) => {
	console.log($scope.d);
	$v($scope, 9);
});
