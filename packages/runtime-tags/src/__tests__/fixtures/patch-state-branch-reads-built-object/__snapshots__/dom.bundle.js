// template.marko
const $if_content__b = /*@__PURE__*/ _if_closure_patch("a0", 0, 0, ($scope) => _text($scope.a, JSON.stringify($scope._.g)));
const $if = /*@__PURE__*/ _if(0, "<i> </i>", "D ", $if_content__b);
const $open = _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
