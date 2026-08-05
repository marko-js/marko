// tags/counter/index.marko
const $if_content__count = /*@__PURE__*/ _fill_let_change("b0", 2, ($scope) => _text($scope.a, $scope.c));
const $if_content__setup__script = _script("b1", ($scope) => _on($scope.b, "click", function() {
	$if_content__count($scope, $scope.c + 1);
}));

// template.marko
const $last = /*@__PURE__*/ _let(8, ($scope) => _text($scope.b, $scope.i));
function $plain($scope) {
	return (next) => {
		$last($scope, next);
	};
}
function $tenfold($scope) {
	return (next) => {
		$last($scope, next * 10);
	};
}
_resume("a0", $plain);
_resume("a1", $tenfold);
