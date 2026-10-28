// tags/show-await.marko
const $placeholder_content = _content$1("b2", "<p>waiting</p>");
const $await_content__x = ($scope, x) => _text($scope.b, x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _init_resume("b6", /*@__PURE__*/ _closure_get(5, ($scope) => $try_content__await_promise($scope, $scope._.d), 0, "b7"));
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const(3, $input_promise__closure);

// template.marko
const $if_content__p = /*@__PURE__*/ _init_resume("a6", /*@__PURE__*/ _if_closure(2, 0, ($scope) => $input_promise($scope.a, $scope._.h)));
const $p = /*@__PURE__*/ _fill_let("a4", 7, $if_content__p);
const $resolve = /*@__PURE__*/ _let(8, ($scope) => _attr($scope.b, "disabled", !$scope.i));
const $setup__script = _script("a2", ($scope) => {
	_on($scope.a, "click", function() {
		$p($scope, new Promise((r) => {
			$resolve($scope, r);
		}));
	});
	_on($scope.b, "click", function() {
		$scope.i(42);
	});
});
