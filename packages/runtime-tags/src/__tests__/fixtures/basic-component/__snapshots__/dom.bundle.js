// tags/counter.marko
const $clickCount__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$clickCount($scope, $scope.c + 1);
}));
const $clickCount = /*@__PURE__*/ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	$clickCount__script($scope);
});
