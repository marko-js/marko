// template.marko
const $show_content__if = /*@__PURE__*/ _if(0, 0, 0, _script("a0", ($scope) => _lifecycle($scope, {
	onMount: function() {
		document.getElementById("ref").textContent = "mount";
	},
	onDestroy: function() {
		document.getElementById("ref").textContent = "destroy";
	}
})));
const $show_content__setup__script = _script("a1", ($scope) => {});
const $show_content__setup = ($scope) => {
	$show_content__if($scope, 0);
	$show_content__setup__script($scope);
};
const $show2 = /*@__PURE__*/ _show_branch(0, "<!><!><!>", "b%c", $show_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $show2($scope, $scope.c));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
