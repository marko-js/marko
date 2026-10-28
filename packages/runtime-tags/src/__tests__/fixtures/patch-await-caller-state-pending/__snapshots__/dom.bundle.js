// tags/show-await.marko
const $placeholder_content = _content$1("b2", "<p>waiting</p>");
const $await_content__x = ($scope, x) => _text($scope.b, x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _init_resume("b6", /*@__PURE__*/ _closure_get(5, ($scope) => $try_content__await_promise($scope, $scope._.d), 0, "b7"));
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const(3, $input_promise__closure);

// template.marko
const $p = /*@__PURE__*/ _fill_let("a1", 6, ($scope) => $input_promise($scope.c, $scope.g));
const $resolve = /*@__PURE__*/ _let(7, ($scope) => _attr($scope.b, "disabled", !$scope.h));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$p($scope, new Promise((r) => {
			$resolve($scope, r);
		}));
	});
	_on($scope.b, "click", function() {
		$scope.h(42);
	});
});
