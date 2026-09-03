// tags/boom/index.marko
const $if_content__x = ($scope, x) => _text($scope.a, x);
const $if_content__setup = ($scope) => $if_content__x($scope, (() => {
	throw new Error("bang");
})());
const $if = /*@__PURE__*/ _if(0, " ", " ", $if_content__setup);
const $n = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$if($scope, $scope.d ? 0 : 1);
});
const $setup__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.d + 1);
}));

// template.marko
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("a0", "caught <!>", "b%", 0, $catch_content__$params);
