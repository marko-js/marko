// tags/show-await.marko
const $await_content__m = /*@__PURE__*/ _let_change(5, ($scope) => _text($scope.b, $scope.f));
const $await_content__n = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.a, $scope.e);
	$await_content__m($scope, $scope.e, $valueChange($scope));
});
const $await_content__x = $await_content__n;
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;
const $valueChange = ($scope) => (_new_n) => {
	$await_content__n($scope, _new_n);
};
_resumed.b0 = $valueChange;

// template.marko
const $if_content__p = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_promise($scope.a, $scope._.g));
const $p = /*@__PURE__*/ _let(6, $if_content__p);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
