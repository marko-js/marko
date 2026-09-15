// template.marko
const $if_content__if = /*@__PURE__*/ _if(0, "<p>on</p>", 0, 0, "<span>off</span>");
const $if_content__input_on = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__if($scope, $scope._.e ? 0 : 1)));
const $if_content__setup = $if_content__input_on;
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
