// template.marko
const $if_content__x = ($scope, x) => _text($scope.a, x);
const $if_content__setup = ($scope) => $if_content__x($scope, (() => {
	throw new Error("bang");
})());
const $await_content__if = /*@__PURE__*/ _if(0, " ", " ", $if_content__setup);
const $await_content__n = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.d, $scope.g);
	$await_content__if($scope, $scope.g ? 0 : 1);
});
const $await_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$await_content__n($scope, +$scope.g + 1);
}));
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("a1", "caught <!>", "b%", 0, $catch_content__$params);
