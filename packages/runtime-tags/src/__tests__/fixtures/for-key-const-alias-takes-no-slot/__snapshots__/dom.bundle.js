// template.marko
const $if_content__setup = ($scope) => _text($scope.a, $scope._.M);
const $for_content__if = /*@__PURE__*/ _if(2, " ", " ", $if_content__setup);
const $for_content__show = /*@__PURE__*/ _for_closure(0, ($scope) => $for_content__if($scope, $scope._.c ? 0 : 1), 3);
const $for_content__count = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, $scope.d));
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$for_content__count($scope, +$scope.d + 1);
}));
const $show = /*@__PURE__*/ _let(2, $for_content__show);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
