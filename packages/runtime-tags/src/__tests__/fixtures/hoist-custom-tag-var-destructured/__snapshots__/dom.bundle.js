// tags/child.marko
const $_return = ($scope) => () => $scope.a;
_resumed.b0 = $_return;

// template.marko
const $get_getter = /*@__PURE__*/ _hoist(4, "Aa");
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$log($scope._, $scope._.d + typeof $scope.d);
}));
const $log = /*@__PURE__*/ _let(3, ($scope) => _text($scope.c, $scope.d));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$log($scope, $scope.d + `[${$get_getter($scope)()}]`);
}));
