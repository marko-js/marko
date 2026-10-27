// template.marko
function boom() {
	throw new Error("boom");
}
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params3) => $catch_content__err_message($scope, $params3[0]?.message);
const $catch_content = _content("a2", "<b> </b>", "D ", 0, $catch_content__$params);
const $try_content__n = /*@__PURE__*/ _let(4, ($scope) => _text($scope.c, $scope.e ? boom() : ""));
const $try_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$try_content__n($scope, +$scope.e + 1);
}));
