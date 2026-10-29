// tags/show-await.marko
const $await_content2__y = ($scope, y) => _text($scope.a, y);
const $await_content2__$params = ($scope, $params3) => $await_content2__y($scope, $params3[0]);
const $await_content__x = ($scope, x) => _text($scope.a, x);
const $await_content__n = /*@__PURE__*/ _fill_let("b5", 6, ($scope) => _text($scope.c, $scope.g));
const $await_content__await_promise = /*@__PURE__*/ _await_promise(3, $await_content2__$params);
const $await_content__q = /*@__PURE__*/ _fill_let("b6", 7, ($scope) => $await_content__await_promise($scope, $scope.h));
const $await_content__setup__script = _script("b4", ($scope) => _on($scope.b, "click", function() {
	$await_content__n($scope, +$scope.g + 1);
	$await_content__q($scope, Promise.resolve("m"));
}));
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $p = /*@__PURE__*/ _let(5, ($scope) => $input_promise($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
