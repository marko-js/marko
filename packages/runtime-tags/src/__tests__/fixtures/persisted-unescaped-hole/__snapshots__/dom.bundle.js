// template.marko
const $if_content__input_html = /*@__PURE__*/ _fill_join("a0", 5, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _html($scope, $scope._.f, "a")));
const $if_content__setup = $if_content__input_html;
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__setup);
const $count = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.g + 1);
}));
