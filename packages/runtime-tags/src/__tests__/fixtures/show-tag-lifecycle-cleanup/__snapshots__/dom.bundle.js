// template.marko
const $show_content__mounts__OR__count = /*@__PURE__*/ _or(3, _script("a1", ($scope) => _lifecycle($scope, {
	onMount: function() {
		$mounts($scope._, $scope._.d + 1);
		document.getElementById("ref").textContent = `Mount ${$scope._.d} (count ${$scope.c})`;
	},
	onDestroy: function() {
		document.getElementById("ref").textContent = `Destroy (count ${$scope.c})`;
	}
})));
const $show_content__mounts = /*@__PURE__*/ _show_closure(0, $show_content__mounts__OR__count);
const $show_content__count = /*@__PURE__*/ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	$show_content__mounts__OR__count($scope);
});
const $show_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show_content__count($scope, $scope.c + 1);
}));
const $show_content__setup = ($scope) => {
	$show_content__mounts._($scope);
	$show_content__count($scope, 0);
	$show_content__setup__script($scope);
};
const $show2 = /*@__PURE__*/ _show_branch(0, "<button id=inc>count <!></button>", " Db%l", $show_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $show2($scope, $scope.c));
const $mounts = /*@__PURE__*/ _let(3, $show_content__mounts);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
