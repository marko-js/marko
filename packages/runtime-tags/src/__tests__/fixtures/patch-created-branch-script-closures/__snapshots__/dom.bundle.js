// tags/level-watch.marko
const $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown__script = _script("b0", ($scope) => document.body.dataset.watch = $scope._.g + ":" + $scope._.h + ":" + ($scope._.i ?? "anon") + ":" + $scope._.j);
const $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown = /*@__PURE__*/ _or_resume("b5", 0, $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown__script, 3);
const $if_content__shown = /*@__PURE__*/ _if_closure(2, 0, $if_content__input_projection_skill__OR__input_baseXp__OR__input_playerId__OR__shown);
const $shown = /*@__PURE__*/ _fill_let("b3", 9, ($scope) => {
	_text($scope.b, $scope.j);
	$if_content__shown($scope);
}, ($scope) => _text($scope.b, $scope.j));
const $setup__script = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$shown($scope, +$scope.j + 1);
}));
