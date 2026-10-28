// tags/card.marko
const $items = _let(5, ($scope) => {
	_text($scope.a, $scope.f.join(","));
	$items_length($scope, $scope.f?.length);
});
const $items_length = /*@__PURE__*/ _const(6, ($scope) => _text($scope.b, $scope.g));
