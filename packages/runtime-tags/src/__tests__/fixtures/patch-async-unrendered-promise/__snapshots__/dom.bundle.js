// template.marko
const $await_content3__user_name = ($scope, user_name) => _text($scope.a, user_name);
const $await_content3__$params = ($scope, $params5) => $await_content3__user_name($scope, $params5[0]?.name);
const $catch_content = _content$1("a2", "<b>failed</b>");
const $await_content3 = /*@__PURE__*/ _await_content(0, "<p> </p>", "D ");
const $inputtag_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content3__$params);
const $inputtag_content__input_boxed = /*@__PURE__*/ _init_resume("a14", _closure_resume("a24", /*@__PURE__*/ _fill_join_closure("a18", 11, /*@__PURE__*/ _closure_get(15, ($scope) => $inputtag_content__await_promise($scope, $scope._.l)), 0)));
const $inputtag_content__setup = ($scope) => {
	$inputtag_content__input_boxed($scope);
	$await_content3($scope);
};
const $inputtag_content = _content$1("a5", "<!><!><!>", "b%", $inputtag_content__setup);
_content_resume($inputtag_content);
const $n = /*@__PURE__*/ _let(12, ($scope) => _text($scope.b, $scope.m));
const $setup__script = _script("a15", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.m + 1);
}));
