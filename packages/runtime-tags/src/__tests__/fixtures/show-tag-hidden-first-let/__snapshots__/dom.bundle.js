// template.marko
const $show_content__count__script = _script("a1", ($scope) => {
	document.getElementById("ref").textContent = `count ${$scope.c}`;
	$signal($scope, 0).onabort = () => {
		document.getElementById("ref").textContent = "closed";
	};
});
const $show_content__count = /*@__PURE__*/ _let(2, ($scope) => {
	$signalReset($scope, 0);
	_text($scope.b, $scope.c);
	$show_content__count__script($scope);
});
const $show_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show_content__count($scope, $scope.c + 1);
}));
const $show_content__setup = ($scope) => {
	$show_content__count($scope, 0);
	$show_content__setup__script($scope);
};
const $show2 = /*@__PURE__*/ _show_branch(0, "<button id=inc>count <!></button>", " Db%l", $show_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $show2($scope, $scope.c));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
