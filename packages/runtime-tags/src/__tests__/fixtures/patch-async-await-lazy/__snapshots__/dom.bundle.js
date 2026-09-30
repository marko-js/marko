// template.marko
const $placeholder_content = _content$1("a9", "loading");
const $count = /*@__PURE__*/ _let(12, ($scope) => _text($scope.e, $scope.m));
const $setup__script = _script("a10", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.m + 1);
}));
