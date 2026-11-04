// tags/show-await.marko
const $await_promise = /*@__PURE__*/ _await_promise(0);
const $input_promise = $await_promise;

// template.marko
const $p = /*@__PURE__*/ _let(6, ($scope) => $input_promise($scope.c, $scope.g));
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
