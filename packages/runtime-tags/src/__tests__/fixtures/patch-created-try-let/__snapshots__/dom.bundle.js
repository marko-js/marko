// template.marko
const $catch_content = _content$1("a4", "caught");
const $try_content__open = /*@__PURE__*/ _fill_let("a3", 2, ($scope) => _text($scope.b, $scope.c ? "close" : "open"));
const $try_content__setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$try_content__open($scope, !$scope.c);
}));
