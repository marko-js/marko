// template.marko
const $if_content2__label = /*@__PURE__*/ _fill_join_closure("a0", 6, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._._.g), ($scope) => $scope._._), 0);
const $if_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content2__label);
const $if_content__show = /*@__PURE__*/ _fill_join("a1", 7, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__if($scope, $scope._.h ? 0 : 1)));
const $if_content__setup = $if_content__show;
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
