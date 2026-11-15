// template.marko
const $if_content2__setup = ($scope) => _text($scope.a, $scope._._.M);
const $if_content__if = /*@__PURE__*/ _if(0, " ", " ", $if_content2__setup);
const $for_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", /* @__PURE__ */ _if_closure(0, 0, ($scope) => $if_content__if($scope, $scope._.c ? 0 : 1)));
const $for_content__show = /*@__PURE__*/ _for_closure(0, ($scope) => $for_content__if($scope, $scope._.c ? 0 : 1), 3);
const $show = /*@__PURE__*/ _let(2, $for_content__show);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
