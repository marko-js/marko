// template.marko
const $if_content__input_html = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _html($scope, $scope._.e, "a"));
const $if = /*@__PURE__*/ _if(0, " ", " ", $if_content__input_html);
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.f);
}));
