// template.marko
const $placeholder_content2 = _content("a0", "inner loading");
const $catch_content__err = ($scope, err) => _text($scope.a, err?.message);
const $catch_content = _content("a3", "caught <!>", "b%", 0, $catch_content__err);
const $placeholder_content = _content("a4", "loading");
const $try_content2__show__script = _script("a1", ($scope) => document.getElementById("log").textContent += "[" + $scope._._._.d + "]");
const $try_content2__show = /*@__PURE__*/ _closure_get(4, $try_content2__show__script, ($scope) => $scope._._._, "a2");
const $show__closure = /*@__PURE__*/ _closure($try_content2__show);
const $show = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$show__closure($scope);
});
const $setup__script = _script("a5", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.d);
}));
