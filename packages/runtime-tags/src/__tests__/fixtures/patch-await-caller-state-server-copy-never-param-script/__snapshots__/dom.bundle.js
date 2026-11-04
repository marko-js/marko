// tags/show-await.marko
const $await_content__input_label__OR__x__script = _script_patch("b0 >e c", ($scope) => document.title = $scope.c + ":" + $scope._.e);
const $await_content__input_label__OR__x = /*@__PURE__*/ _or_patch("b2", 3, $await_content__input_label__OR__x__script);
const $await_content__x = /*@__PURE__*/ _const(2, ($scope) => {
	_text($scope.a, $scope.c);
	$await_content__input_label__OR__x($scope);
});
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $if_content__p = /*@__PURE__*/ _if_closure_patch("a4", 1, 0, ($scope) => $input_promise($scope.a, $scope._.h));
const $p = _let(7, $if_content__p);
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
