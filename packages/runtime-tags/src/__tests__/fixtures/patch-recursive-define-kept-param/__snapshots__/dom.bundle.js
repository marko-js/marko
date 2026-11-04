// tags/keeper.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure_patch("b0", 1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $Level_content2__n = /*@__PURE__*/ _closure_get_patch("a0", 7, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a6", 0);
const $Level_content2__setup = ($scope) => {
	$Level_content2__n($scope);
	$Level_content2__label($scope);
};
const $Level_content2__label = /*@__PURE__*/ _closure_get_patch("a1", 8, ($scope) => _text($scope.b, $scope._._.f), ($scope) => $scope._._, "a8", 0);
const $Level_content2 = _content$1("a2", "<em><!>:<!></em>", "D%c%", $Level_content2__setup);
