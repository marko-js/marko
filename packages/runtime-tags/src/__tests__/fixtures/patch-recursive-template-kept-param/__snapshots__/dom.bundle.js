// tags/keeper.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure_patch("b0", 1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// tags/level.marko
const $level_content__input_n = /*@__PURE__*/ _closure_get_patch("c0", 7, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "c6", 0);
const $level_content__setup = ($scope) => {
	$level_content__input_n($scope);
	$level_content__input_label($scope);
};
const $level_content__input_label = /*@__PURE__*/ _closure_get_patch("c1", 8, ($scope) => _text($scope.b, $scope._._.f), ($scope) => $scope._._, "c7", 0);
const $level_content = _content$1("c2", "<em><!>:<!></em>", "D%c%", $level_content__setup);
