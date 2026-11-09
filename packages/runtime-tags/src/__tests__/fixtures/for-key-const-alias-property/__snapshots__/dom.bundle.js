// template.marko
const $if_content__setup = ($scope) => _text($scope.a, $scope._.M.length);
const $for_content__if = /*@__PURE__*/ _if(0, "<span> </span>", "D ", $if_content__setup);
const $for_content__show = /*@__PURE__*/ _for_closure(0, ($scope) => $for_content__if($scope, $scope._.d ? 0 : 1), 4);
const $show = /*@__PURE__*/ _let(3, $for_content__show);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.d);
}));
