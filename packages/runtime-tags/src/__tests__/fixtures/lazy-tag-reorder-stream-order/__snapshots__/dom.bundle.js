// template.marko
const $placeholder_content = /*@__PURE__*/ _content("b0", "loading");
pendingEnabled && (_resumed.b0 = $placeholder_content);

// child.marko
const $count = /*@__PURE__*/ _let(8, ($scope) => _text($scope.c, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + $scope.h[$scope.g]);
}));
