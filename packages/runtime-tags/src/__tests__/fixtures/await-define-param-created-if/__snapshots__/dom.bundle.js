// template.marko
const $await_content__x = ($scope, x) => _text($scope.b, x);
const $await_content__$params = ($scope, $params3) => $await_content__x($scope, $params3[0]);
const $Show_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $Show_content__p = $Show_content__await_promise;
const $if_content__n = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $Show_content__p($scope.a, Promise.resolve($scope._.g)));
const $n = /*@__PURE__*/ _let(6, $if_content__n);
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
