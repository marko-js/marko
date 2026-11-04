// template.marko
const $if_content2__b = /*@__PURE__*/ _closure_get_patch("a0", 8, ($scope) => _text($scope.a, JSON.stringify($scope._._.g)), ($scope) => $scope._._, "a2", 0);
const $if_content__if = /*@__PURE__*/ _if(0, "<i> </i>", "D ", $if_content2__b);
const $if_content__open = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__if($scope, $scope._.f ? 0 : 1));
const $if = /*@__PURE__*/ _if(0, "<div></div>", " ", $if_content__open);
const $open = _let(5, ($scope) => {
	$if($scope, $scope.f ? 0 : 1);
	$if_content__open($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
