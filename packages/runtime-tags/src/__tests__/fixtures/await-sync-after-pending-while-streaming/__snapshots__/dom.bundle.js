// template.marko
const $await_content__result = ($scope, result) => _text($scope.a, result);
const $await_content__$params = ($scope, $params2) => $await_content__result($scope, $params2[0]);
const $placeholder_content = _content("a0", "loading");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__query = /*@__PURE__*/ _closure_get(4, ($scope) => $try_content__await_promise($scope, $scope._.d ? resolveAfter(`found ${$scope._.d}`, 1) : "no query"), 0, "a2");
const $query__closure = /*@__PURE__*/ _closure($try_content__query);
const $query = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$query__closure($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$query($scope, $scope.d === "a" ? "b" : "");
}));
