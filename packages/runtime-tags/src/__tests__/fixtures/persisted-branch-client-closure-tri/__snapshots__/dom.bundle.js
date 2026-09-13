// template.marko
const $if_content3__input_title = /*@__PURE__*/ _fill_join_closure("a0", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, "z:" + $scope._._._.e), ($scope) => $scope._._._), 1);
const $if_content3__setup = $if_content3__input_title;
const $if_content2__input_title = /*@__PURE__*/ _fill_join_closure("a0", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, "y:" + $scope._._.e), ($scope) => $scope._._), 0);
const $if_content2__setup = ($scope) => {
	$if_content2__input_title($scope);
	$if_content2__open($scope);
};
const $if_content2__if = /*@__PURE__*/ _if(1, "<u> </u>", "D ", $if_content3__setup);
const $if_content2__open = /*@__PURE__*/ _closure_get(7, ($scope) => $if_content2__if($scope, $scope._._.f ? 0 : 1), ($scope) => $scope._._);
const $if_content__input_title = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, "x:" + $scope._.e)));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__open._($scope);
};
const $if_content__if = /*@__PURE__*/ _if(1, "<i> </i><!><!>", "D l%", $if_content2__setup);
const $if_content__open = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__if($scope, $scope._.f ? 0 : 1));
const $if = /*@__PURE__*/ _if(0, "<b> </b><!><!>", "D l%", $if_content__setup);
const $open__closure = /*@__PURE__*/ _closure($if_content2__open);
const $open = /*@__PURE__*/ _let(5, ($scope) => {
	$if($scope, $scope.f ? 0 : 1);
	$if_content__open($scope);
	$open__closure($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
