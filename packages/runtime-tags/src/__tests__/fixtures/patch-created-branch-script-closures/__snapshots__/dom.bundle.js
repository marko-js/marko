// tags/level-watch.marko
const $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown__script = _script("b1", ($scope) => document.body.dataset.watch = $scope._.g + ":" + $scope._.h + ":" + ($scope._.i ?? "anon") + ":" + $scope._.j);
const $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown = /*@__PURE__*/ _or(0, $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown__script, 3);
const $if_content__input_projection_skill = _resumed.b5 = /*@__PURE__*/ _if_closure(2, 0, $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown);
const $if_content__input_baseXp = _resumed.b6 = /*@__PURE__*/ _if_closure(2, 0, $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown);
const $if_content__input_playerId = _resumed.b7 = /*@__PURE__*/ _if_closure(2, 0, $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown);
const $if_content__shown = _resumed.b8 = /*@__PURE__*/ _if_closure(2, 0, $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown);
const $shown = /*@__PURE__*/ _fill_let("b3", 9, ($scope) => {
	_text($scope.b, $scope.j);
	$if_content__shown($scope);
});
const $setup__script = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$shown($scope, +$scope.j + 1);
}));
