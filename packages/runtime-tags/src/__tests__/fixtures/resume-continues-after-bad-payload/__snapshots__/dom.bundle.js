// template.marko
const $await_content2__b__script = _script("a3", ($scope) => console.log(`effect b=${$scope.c}`));
const $placeholder_content2 = _content_resume("a4", "loading...");
const $await_content__a__script = _script("a0", ($scope) => console.log(`effect a=${$scope.d}`));
const $placeholder_content = _content_resume("a1", "loading...");
const $n = /*@__PURE__*/ _let(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.e + 1);
}));
