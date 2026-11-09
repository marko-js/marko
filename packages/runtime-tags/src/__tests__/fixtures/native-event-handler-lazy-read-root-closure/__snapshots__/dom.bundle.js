// template.marko
const $for_content__setup = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$log($scope._, `${$scope._.k}[${$scope._.g?.id}:${$scope._.i}:${$scope._.j}:${$scope._.j}]`);
}));
const $todo = /*@__PURE__*/ _let(6);
const $user = /*@__PURE__*/ _let(7, ($scope) => {
	$nick($scope, $scope.h.nick);
	$name($scope, $scope.h.name);
});
const $log = /*@__PURE__*/ _let(10, ($scope) => _text($scope.f, $scope.k));
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$log($scope, `${$scope.k}${JSON.stringify($scope.g)}`);
	});
	_on($scope.b, "click", function() {
		$todo($scope, null);
	});
	_on($scope.c, "click", function() {
		$user($scope, { ...$scope.h });
	});
	_on($scope.d, "click", function() {
		$log($scope, `${$scope.k}(${$scope.j})`);
	});
});
const $nick__OR__shown__script = _script("a2", ($scope) => console.log(`${$scope.i} ${$scope.j}`));
const $nick__OR__shown = /*@__PURE__*/ _or(11, $nick__OR__shown__script);
const $nick = /*@__PURE__*/ _const(8, $nick__OR__shown);
const $name = /*@__PURE__*/ _const(9, $nick__OR__shown);
