// template.marko
const $if_content__label = /*@__PURE__*/ _if_closure_patch("a0", 0, 0, ($scope) => _text($scope.a, $scope._.g));
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__label);
const $count__OR__label = /*@__PURE__*/ _or_patch("a2", 7, ($scope) => $if($scope, $scope.f > 0 && $scope.g ? 0 : 1));
const $count = _let(5, $count__OR__label);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
