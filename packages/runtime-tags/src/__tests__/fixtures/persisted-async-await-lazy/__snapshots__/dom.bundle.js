// template.marko
const $placeholder_content = _content_resume("a2", "loading");
const $await_content = _resume("a4", /*@__PURE__*/ _await_content(0, "<em> </em>", "D "));
const $count = /*@__PURE__*/ _let(12, ($scope) => _text($scope.e, $scope.m));
const $setup__script = _script("a6", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.m + 1);
}));
const $await_content2 = _resume("a5", /*@__PURE__*/ _await_content(2, "<span> </span>", "D "));
