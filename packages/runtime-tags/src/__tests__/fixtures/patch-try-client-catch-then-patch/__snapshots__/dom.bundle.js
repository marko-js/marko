// template.marko
function boom() {
	throw new Error("boom");
}
const $try_content__count = /*@__PURE__*/ _closure_get_patch("a2", 8, ($scope) => _text($scope.b, $scope._.g === 1 ? boom() : ""));
const $catch_content__input_message = /*@__PURE__*/ _closure_get_patch("a0", 7, ($scope) => _text($scope.b, $scope._.f), 0, "a6", 0);
const $catch_content__setup = $catch_content__input_message;
const $catch_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]?.message);
const $catch_content = _content$1("a3", "<b><!> <!></b>", "D%c%", $catch_content__setup, $catch_content__$params);
const $count__closure = /*@__PURE__*/ _closure($try_content__count);
const $count = _let(6, ($scope) => {
	_text($scope.c, $scope.g);
	$count__closure($scope);
});
const $setup__script = _script("a5", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
