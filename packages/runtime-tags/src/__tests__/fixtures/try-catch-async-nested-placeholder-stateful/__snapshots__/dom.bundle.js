// template.marko
const $await_content2__n = /*@__PURE__*/ _let(5, ($scope) => _text($scope.c, $scope.f));
const $await_content2__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$await_content2__n($scope, +$scope.f + 1);
}));
const $placeholder_content = _content_resume("a1", "loading");
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("a3", "caught <!>", "b%", 0, $catch_content__$params);
