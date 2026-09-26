// template.marko
const $html = ($scope, html) => _html($scope, html, "a");
const $n = /*@__PURE__*/ _let(4, ($scope) => {
	_html($scope, $scope.e > 0 ? "<i>big</i>" : "<b>small</b>", "b");
	_text($scope.d, $scope.e);
	$html($scope, $scope.e > 0 ? "<i>big</i>" : "<b>small</b>");
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.e + 1);
}));
