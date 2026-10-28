// tags/show-await.marko
const $await_content__x = ($scope, x) => _text($scope.b, x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $if_content__p = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $input_promise($scope.a, $scope._.h));
const $p = /*@__PURE__*/ _let(7, $if_content__p);
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
