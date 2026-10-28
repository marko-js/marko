// tags/show-await.marko
const $await_content__x = ($scope, x) => _text($scope.b, x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $if_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $if_content__input_promise = /*@__PURE__*/ _init_resume("b5", /*@__PURE__*/ _fill_join("b6", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__await_promise($scope, $scope._.e))));
const $input_promise = /*@__PURE__*/ _fill_const("b6", 4, $if_content__input_promise);

// template.marko
const $p = /*@__PURE__*/ _fill_let("a1", 7, ($scope) => $input_promise($scope.c, $scope.h));
const $resolve = /*@__PURE__*/ _let(8, ($scope) => _attr($scope.b, "disabled", !$scope.i));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$p($scope, new Promise((r) => {
			$resolve($scope, r);
		}));
	});
	_on($scope.b, "click", function() {
		$scope.i(42);
	});
});
