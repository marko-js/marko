// template.marko
const $if_content__count = /*@__PURE__*/ _fill_let_change("a0", 3, ($scope) => _text($scope.a, $scope.d));
const $if_content__setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$if_content__count($scope, $scope.d + 1);
}));
const $last = /*@__PURE__*/ _let(7, ($scope) => _text($scope.b, $scope.h));
function $handler($scope) {
	return (next) => {
		$last($scope._, next);
	};
}
_resume("a0", $handler);
