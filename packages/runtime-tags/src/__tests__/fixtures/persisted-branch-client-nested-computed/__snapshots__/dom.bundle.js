// template.marko
const $if_content__if = /*@__PURE__*/ _if(0, "<p>promo</p>");
const $if_content__input = /*@__PURE__*/ _fill_join("a0", 3, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__if($scope, $scope._.d[$scope._.d.key] ? 0 : 1)));
const $if_content__setup = $if_content__input;
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _let(4, ($scope) => $if($scope, $scope.e ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.e);
}));
