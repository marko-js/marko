// tags/show-await.marko
const $await_content__setup__script = _script("b1", ($scope) => _on($scope.c, "click", function() {
	console.log($scope.i);
}));
const $await_content__a = _let(6, ($scope) => {
	$await_content__a_v($scope, $scope.g?.v);
	$await_content__b__OR__a($scope);
});
const $await_content__b__OR__a = /*@__PURE__*/ _or(7, ($scope) => $await_content__a($scope, {
	v: $scope.f,
	self: $a($scope)
}));
const $await_content__b = _fill_let("b3", 5, ($scope) => {
	_text($scope.a, $scope.f);
	$await_content__b__OR__a($scope);
});
const $await_content__a_v = /*@__PURE__*/ _const(8);
const $await_content__$params = ($scope, $params2) => $await_content__b($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;
const $a = ($scope) => () => $scope.g;
_resumed.b0 = $a;

// template.marko
const $if_content__p = /*@__PURE__*/ _if_closure_patch("a4", 1, 0, ($scope) => $input_promise($scope.a, $scope._.h));
const $p = _let(7, $if_content__p);
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
