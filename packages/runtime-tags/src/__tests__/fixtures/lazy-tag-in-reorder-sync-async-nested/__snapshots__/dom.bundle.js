// template.marko
const $placeholder_content = _content("c0", "loading");

// async-child.marko
const $count = /*@__PURE__*/ _let(9, ($scope) => _text($scope.c, $scope.j));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.j + $scope.i);
}));

// child.marko
const $count = /*@__PURE__*/ _let(8, ($scope) => _text($scope.c, $scope.i));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + $scope.h);
}));
