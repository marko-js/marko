// template.marko
function boom() {
	throw new Error("boom");
}
const $catch_content__$params = ($scope, $params3) => _text($scope.a, $params3[0]?.message);
const $catch_content = _content$1("a3", "<b> </b>", "D ", 0, $catch_content__$params);
const $try_content__n = /*@__PURE__*/ _fill_let("a2", 4, ($scope) => _text($scope.c, $scope.e ? boom() : ""));
const $try_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$try_content__n($scope, +$scope.e + 1);
}));
