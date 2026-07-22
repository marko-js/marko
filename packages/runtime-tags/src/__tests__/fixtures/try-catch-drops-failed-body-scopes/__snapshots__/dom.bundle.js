// tags/child.marko
const $n = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.c + 1);
}));

// template.marko
_enable_catch();
const $catch_content__e_message = ($scope, e_message) => _text($scope.a, e_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__e_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("a0", "caught <!>", "b%b", 0, $catch_content__$params);
const $count = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
