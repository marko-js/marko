// tags/counter/index.marko
const $if_content__count = /*@__PURE__*/ _fill_let_change("b0", 2, ($scope) => _text($scope.a, $scope.c));
const $if_content__setup__script = _script("b1", ($scope) => _on($scope.b, "click", function() {
	$if_content__count($scope, $scope.c + 1);
}));

// template.marko
const $last = /*@__PURE__*/ _let(7, ($scope) => _text($scope.b, $scope.h));
function $onCount($scope) {
	return function(next) {
		$last($scope, next);
	};
}
_resume("a0", $onCount);
