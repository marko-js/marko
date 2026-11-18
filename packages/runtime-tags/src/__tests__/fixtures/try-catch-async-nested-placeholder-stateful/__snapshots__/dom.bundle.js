// template.marko
const $await_content2__n = /*@__PURE__*/ _let(4, ($scope) => _text($scope.c, $scope.e));
const $await_content2__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$await_content2__n($scope, +$scope.e + 1);
}));
const $placeholder_content = _content("a1", "loading");
const $catch_content__err = ($scope, err) => _text($scope.a, err?.message);
const $catch_content = _content("a2", "caught <!>", "b%", 0, $catch_content__err);
