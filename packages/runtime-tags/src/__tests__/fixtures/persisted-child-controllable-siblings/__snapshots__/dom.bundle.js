// tags/counter/index.marko
const $if_content__count = /*@__PURE__*/ _fill_let_change("b0", 2, ($scope) => _text($scope.a, $scope.c));
const $if_content__setup__script = _script("b1", ($scope) => _on($scope.b, "click", function() {
	$if_content__count($scope, $scope.c + 1);
}));

// template.marko
const $first = /*@__PURE__*/ _let(9, ($scope) => _text($scope.b, $scope.j));
const $second = /*@__PURE__*/ _let(10, ($scope) => _text($scope.c, $scope.k));
function $onCount2($scope) {
	return function(next) {
		$second($scope, next * 2);
	};
}
function $onCount($scope) {
	return function(next) {
		$first($scope, next);
	};
}
_resume("a1", $onCount2);
_resume("a0", $onCount);
