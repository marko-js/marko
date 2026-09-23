// template.marko
const $if_content2__$temp = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.c.join("+")));
const $if_content2__setup = $if_content2__$temp;
const $if_content__$temp = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, JSON.stringify($scope._.c)));
const $if_content__setup = $if_content__$temp;
const $for_content2__if = /*@__PURE__*/ _if(0, "<u> </u>", "D ", $if_content2__setup);
const $for_content2__show = /*@__PURE__*/ _for_closure(2, ($scope) => $for_content2__if($scope, $scope._.h ? 0 : 1));
const $for_content__if = /*@__PURE__*/ _if(0, "<i> </i>", "D ", $if_content__setup);
const $for_content__show = /*@__PURE__*/ _for_closure(1, ($scope) => $for_content__if($scope, $scope._.h ? 0 : 1));
const $show = /*@__PURE__*/ _let(7, ($scope) => {
	$for_content__show($scope);
	$for_content2__show($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.h);
}));
