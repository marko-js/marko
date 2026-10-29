// tags/show-await.marko
const $await_content__x = ($scope, x) => _text($scope.c, x);
const $await_content__$params = ($scope, $params3) => $await_content__x($scope, $params3[0]);
const $for_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $for_content__input_promise = /*@__PURE__*/ _init_resume("b7", /*@__PURE__*/ _fill_join("b8", 4, /*@__PURE__*/ _for_closure(0, ($scope) => $for_content__await_promise($scope, $scope._.e))));
const $input_promise = /*@__PURE__*/ _fill_const("b8", 4, $for_content__input_promise);

// template.marko
const $p = _let(7, ($scope) => $input_promise($scope.c, $scope.h));
const $resolve = _let(8, ($scope) => _attr($scope.b, "disabled", !$scope.i));
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
