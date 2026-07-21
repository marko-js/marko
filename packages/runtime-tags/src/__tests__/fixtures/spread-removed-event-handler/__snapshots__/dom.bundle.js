// template.marko
const $attrs4__render = /*@__PURE__*/ _render(($scope) => _attrs($scope, "a", $scope.g));
const $attrs4__script = _script("a3", ($scope) => _attrs_script($scope, "a"));
const $attrs4 = /*@__PURE__*/ _const(6, ($scope) => {
	$attrs4__render($scope);
	$attrs4__script($scope);
});
const $phase__OR__log = /*@__PURE__*/ _or(5, ($scope) => $attrs4($scope, $scope.d === 0 ? {
	onClick: $attrs($scope),
	onMouseOver: $attrs2($scope)
} : { onClick: $attrs3($scope) }));
const $phase__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.d));
const $phase = /*@__PURE__*/ _let(3, ($scope) => {
	$phase__render($scope);
	$phase__OR__log($scope);
});
const $log__render = /*@__PURE__*/ _render(($scope) => _text($scope.c, $scope.e));
const $log = /*@__PURE__*/ _let(4, ($scope) => {
	$log__render($scope);
	$phase__OR__log($scope);
});
function $attrs3($scope) {
	return function() {
		$phase($scope, 0);
	};
}
function $attrs2($scope) {
	return function() {
		$log($scope, `${$scope.e}M`);
	};
}
function $attrs($scope) {
	return function() {
		$phase($scope, 1);
	};
}
_resume("a2", $attrs3);
_resume("a1", $attrs2);
_resume("a0", $attrs);
