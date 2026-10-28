// tags/show-await.marko
const $catch_content = _content("b2", "<span>caught</span>");
const $await_content2__x = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "b0");
const $await_content__x__closure = /*@__PURE__*/ _closure($await_content2__x);
const $await_content__x = /*@__PURE__*/ _const(3, ($scope) => {
	_text($scope.a, $scope.d);
	$await_content__x__closure($scope);
});
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $p = /*@__PURE__*/ _let(6, ($scope) => $input_promise($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
