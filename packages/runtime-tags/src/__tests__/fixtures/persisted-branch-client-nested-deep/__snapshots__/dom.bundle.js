// template.marko
const $if_content2__if = /*@__PURE__*/ _if(0, "<p>both</p>");
const $if_content2__input_b = /*@__PURE__*/ _fill_join_closure("a1", 5, /*@__PURE__*/ _closure_get(8, ($scope) => $if_content2__if($scope, $scope._._.f ? 0 : 1), ($scope) => $scope._._), 0);
const $if_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content2__input_b);
const $if_content__input_a = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__if($scope, $scope._.e ? 0 : 1)));
const $if_content__setup = $if_content__input_a;
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.g);
}));
