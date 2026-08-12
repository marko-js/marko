// tags/counter/index.marko
const $if_content__count = /*@__PURE__*/ _fill_let_change("b0", 2, ($scope) => _text($scope.a, $scope.c));
const $if_content__setup__script = _script("b1", ($scope) => _on($scope.b, "click", function() {
	$if_content__count($scope, +$scope.c + 1);
}));

// template.marko
const $for_content__hits = /*@__PURE__*/ _fill_let("a0", 5, ($scope) => _text($scope.b, $scope.f));
const $onCount = ($scope) => function(next) {
	$for_content__hits($scope, next);
};
_resume("a0", $onCount);
