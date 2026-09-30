// template.marko
function boom() {
	throw new Error("boom");
}
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a4", "<b> </b>", "D ", 0, $catch_content__$params);
const $try_content__count = _init_closure_get("a7", 8, ($scope) => _text($scope.b, $scope._.g === 1 ? boom() : ""), 0, "a3");
const $count__closure = /*@__PURE__*/ _closure($try_content__count);
const $count = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.c, $scope.g);
	$count__closure($scope);
});
const $setup__script = _script("a5", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
