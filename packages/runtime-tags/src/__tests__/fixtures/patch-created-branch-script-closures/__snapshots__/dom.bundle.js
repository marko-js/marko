// tags/level-watch.marko
const $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown__script = _script_patch("b0 >g >h >i", ($scope) => document.body.dataset.watch = $scope._.g + ":" + $scope._.h + ":" + ($scope._.i ?? "anon") + ":" + $scope._.j);
const $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown = /*@__PURE__*/ _or_patch("b1", 0, $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown__script, 3);
const $if_content__shown = /*@__PURE__*/ _if_closure_patch("b9", 2, 0, $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown);
const $shown = /*@__PURE__*/ _fill_let("b7", 9, ($scope) => {
	_text($scope.b, $scope.j);
	$if_content__shown($scope);
});
const $setup__script = _script("b3", ($scope) => _on($scope.a, "click", function() {
	$shown($scope, +$scope.j + 1);
}));
