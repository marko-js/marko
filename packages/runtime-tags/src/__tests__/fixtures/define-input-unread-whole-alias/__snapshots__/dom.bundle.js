// template.marko
const $Card_content__title = ($scope, title) => _text($scope.a, title);
const $t = /*@__PURE__*/ _let(2, ($scope) => $Card_content__title($scope.a, $scope.c));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$t($scope, $scope.c + "b");
}));
