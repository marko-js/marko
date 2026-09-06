// template.marko
const $if_content__input = /*@__PURE__*/ _fill_join("a0", 3, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _attr($scope.a, "data-all", JSON.stringify($scope._.d))));
const $if_content__setup = $if_content__input;
const $if = /*@__PURE__*/ _if(0, "<p>x</p>", " ", $if_content__setup);
const $show = /*@__PURE__*/ _let(4, ($scope) => $if($scope, $scope.e ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.e);
}));
