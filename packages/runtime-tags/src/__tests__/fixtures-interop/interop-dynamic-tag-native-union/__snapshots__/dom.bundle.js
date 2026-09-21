// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2, _content_resume("a0", "state driven: registered"));
const $count = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$dynamicTag($scope, $scope.d % 2 ? "h2" : "h1");
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.d + 1);
}));
