// template.marko
const $if_content__input_html = /*@__PURE__*/ _if_closure_patch("a0", 1, 0, ($scope) => _html($scope, $scope._.f, "a"));
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__input_html);
const $count = _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.g + 1);
}));
