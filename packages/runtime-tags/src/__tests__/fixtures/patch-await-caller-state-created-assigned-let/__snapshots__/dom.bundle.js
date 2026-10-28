// tags/show-await.marko
const $await_content__f = /*@__PURE__*/ _fill_let("b6", 9, ($scope) => _text($scope.b, $scope.j));
const $await_content__a__OR__l = /*@__PURE__*/ _or(7, ($scope) => $await_content__f($scope, $scope.f + ":" + $scope.g));
const $await_content__l = fill("b4", /*@__PURE__*/ _let(6, $await_content__a__OR__l));
const $await_content__setup__script = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$await_content__e($scope, $scope.i + "?");
	$await_content__f($scope, $scope.j + "?");
}));
const $await_content__e = /*@__PURE__*/ _fill_let("b5", 8, ($scope) => _text($scope.a, $scope.i));
const $await_content__x = fill("b3", /*@__PURE__*/ _let(5, ($scope) => {
	$await_content__e($scope, $scope.f);
	$await_content__a__OR__l($scope);
}));
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $if_content__p = /*@__PURE__*/ _init_resume("a5", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_promise($scope.a, $scope._.h)));
const $p = /*@__PURE__*/ _let(7, $if_content__p);
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
