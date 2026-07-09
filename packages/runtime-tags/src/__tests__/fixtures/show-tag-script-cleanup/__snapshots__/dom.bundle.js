// template.marko
const $show_content__id__script = _script("a1", ($scope) => {
	{
		const el = document.getElementById("ref");
		el.textContent = `open ${$scope.b}`;
		$signal($scope, 0).onabort = () => {
			el.textContent = `close ${$scope.b}`;
		};
	}
});
const $show_content__id = /*@__PURE__*/ _let(1, ($scope) => {
	$signalReset($scope, 0);
	$show_content__id__script($scope);
});
const $show_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show_content__id($scope, $scope.b + 1);
}));
const $show_content__setup = ($scope) => {
	$show_content__id($scope, 0);
	$show_content__setup__script($scope);
};
const $show2 = /*@__PURE__*/ _show_branch(0, "<button id=next>next</button>", " b", $show_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $show2($scope, $scope.c));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
