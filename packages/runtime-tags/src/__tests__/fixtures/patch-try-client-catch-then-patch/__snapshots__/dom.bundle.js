// template.marko
function boom() {
	throw new Error("boom");
}
const $try_content__count = /*@__PURE__*/ _init_resume("a10", /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.b, $scope._.g === 1 ? boom() : ""), 0, "a4"));
const $catch_content__input_message = /*@__PURE__*/ _init_resume("a0", /*@__PURE__*/ _fill_join_closure("a8", 5, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.b, $scope._.f), 0, "a1"), 0));
const $catch_content__setup = $catch_content__input_message;
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a5", "<b><!> <!></b>", "D%c%", $catch_content__setup, $catch_content__$params);
const $count__closure = /*@__PURE__*/ _closure($try_content__count);
const $count = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.c, $scope.g);
	$count__closure($scope);
});
const $setup__script = _script("a7", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
