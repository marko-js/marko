// template.marko
const $catch_content__$params = ($scope, err) => _text($scope.a, err?.message);
const $catch_content = _content("c1", " ", " ", 0, $catch_content__$params);
const $placeholder_content = _content("c0", "loading");

// child.marko
const $count = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));

// other.marko
const $count = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
