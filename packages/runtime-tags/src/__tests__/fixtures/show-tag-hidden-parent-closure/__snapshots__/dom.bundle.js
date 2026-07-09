// template.marko
const $show_content__label = /*@__PURE__*/ _show_closure(0, _script("a0", ($scope) => _lifecycle($scope, {
	onMount: function() {
		document.getElementById("ref").textContent = `Mount ${$scope._.e}`;
	},
	onUpdate: function() {
		document.getElementById("ref").textContent = `Update ${$scope._.e}`;
	},
	onDestroy: function() {
		document.getElementById("ref").textContent = `Destroy ${$scope._.e}`;
	}
})));
const $show2 = /*@__PURE__*/ _show_branch(0, 0, 0, $show_content__label);
const $show = /*@__PURE__*/ _let(3, ($scope) => $show2($scope, $scope.d));
const $label = /*@__PURE__*/ _let(4, $show_content__label);
const $setup__script = _script("a1", ($scope) => {
	_on($scope.b, "click", function() {
		$label($scope, $scope.e + 1);
	});
	_on($scope.c, "click", function() {
		$show($scope, !$scope.d);
	});
});
