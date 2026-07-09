// template.marko
const $show2 = /*@__PURE__*/ _show_branch(0, 0, 0, _script("a0", ($scope) => _lifecycle($scope, {
	onMount: function() {
		document.getElementById("ref").textContent = "Mount";
	},
	onDestroy: function() {
		document.getElementById("ref").textContent = "Destroy";
	}
})));
const $show = /*@__PURE__*/ _let(2, ($scope) => $show2($scope, $scope.c));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
