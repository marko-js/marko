// template.marko
const $loaded = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $handlers_load = /*@__PURE__*/ _const(4, _script("a1", ($scope) => _on($scope.a, "click", $scope.e)));
function $handlers($scope) {
	return async function() {
		$loaded($scope, await Promise.resolve("yes"));
	};
}
_resume("a0", $handlers);
