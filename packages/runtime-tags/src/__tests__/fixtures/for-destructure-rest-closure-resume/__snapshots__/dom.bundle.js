// template.marko
const $if_content2__first = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.d));
const $if_content2__setup = ($scope) => {
	$if_content2__first._($scope);
	$if_content2__$temp2_._($scope);
};
const $if_content2__$temp2_ = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.b, $scope._.e));
const $if_content__id = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.d));
const $if_content__setup = ($scope) => {
	$if_content__id._($scope);
	$if_content__$temp_extra._($scope);
};
const $if_content__$temp_extra = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.b, $scope._.e));
const $for_content2__if = /*@__PURE__*/ _if(0, "<b><!><!></b>", "D%b%", $if_content2__setup);
const $for_content2__show = /*@__PURE__*/ _for_closure(2, ($scope) => $for_content2__if($scope, $scope._.h ? 0 : 1));
const $for_content__if = /*@__PURE__*/ _if(0, "<span><!>:<!></span>", "D%c%", $if_content__setup);
const $for_content__show = /*@__PURE__*/ _for_closure(1, ($scope) => $for_content__if($scope, $scope._.h ? 0 : 1));
const $show = /*@__PURE__*/ _let(7, ($scope) => {
	$for_content__show($scope);
	$for_content2__show($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.h);
}));
