// template.marko
const $await_content = _resume("a2", /*@__PURE__*/ _await_content(0, "<em> </em>", "D "));
const $catch_content__input_title = /*@__PURE__*/ _fill_join_closure("a0", 5, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.f)), 0);
const $catch_content__setup = $catch_content__input_title;
const $catch_content__err_message = ($scope, err_message) => _text($scope.b, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("a3", "<p><!> <!></p>", "D%c%", $catch_content__setup, $catch_content__$params);
const $n = /*@__PURE__*/ _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.h + 1);
}));
