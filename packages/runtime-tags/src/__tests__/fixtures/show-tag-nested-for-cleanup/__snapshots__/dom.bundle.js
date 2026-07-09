// template.marko
const $for_content__item = /*@__PURE__*/ _const(1, _script("a0", ($scope) => _lifecycle($scope, {
	onMount: function() {
		document.getElementById(`ref${$scope.b}`).textContent = `${$scope.b} mount`;
	},
	onDestroy: function() {
		document.getElementById(`ref${$scope.b}`).textContent = `${$scope.b} destroy`;
	}
})));
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $show_content__for = /*@__PURE__*/ _for_of(0, 0, 0, 0, $for_content__$params);
const $show_content__items = /*@__PURE__*/ _show_closure(0, ($scope) => $show_content__for($scope, [$scope._.d]));
const $show_content__setup__script = _script("a1", ($scope) => {});
const $show_content__setup = ($scope) => {
	$show_content__items._($scope);
	$show_content__setup__script($scope);
};
const $show2 = /*@__PURE__*/ _show_branch(0, "<!><!><!>", "b%c", $show_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $show2($scope, $scope.c));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
